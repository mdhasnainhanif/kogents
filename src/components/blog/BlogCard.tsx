"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import SkeletonBlogCard from "./SkeletonBlogCard";

interface Blog {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  meta?: { _kogents_reading_time?: string };
  _embedded?: {
    "wp:featuredmedia"?: [{ source_url: string; alt_text?: string }];
    "wp:term"?: any[];
  };
}

const POSTS_PER_PAGE = 6;
const PAGE_GROUP_SIZE = 3; // pagination: 1 2 3 → Next: 4 5 6...

// Base API: per_page & page dynamically add honge
const API_BASE_URL =
  "https://portal.kogents.ai/wp-json/wp/v2/posts?_embed&orderby=date&order=desc";

// Skeleton kitna time minimum dikhana hai (thoda kam kar diya)
const MIN_SKELETON_MS = 500;

// strip HTML tags from WP content
const stripHTML = (html = "") =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const truncate = (s = "", n = 50) =>
  s.length > n ? s.slice(0, n).trimEnd() + "…" : s;

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const getCategory = (post: Blog) => {
  const groups = post._embedded?.["wp:term"];
  if (!groups || !Array.isArray(groups)) return "Uncategorized";
  const flat = groups.flat?.() ?? ([] as any[]);
  const cat = flat.find((t: any) => t?.taxonomy === "category");
  return cat?.name || "Uncategorized";
};

const hasText = (v: unknown): v is string =>
  typeof v === "string" && v.trim().length > 0;

// simple fallback reading time if meta missing
const estimateReadingTime = (text: string): string => {
  const words = text.trim().split(/\s+/).length || 0;
  const minutes = Math.max(1, Math.ceil(words / 200)); // ~200 words/min
  return `${minutes} min read`;
};

const BlogCard: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(true);
  const [minDelayPassed, setMinDelayPassed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 🔄 Page-based fetch: sirf currentPage ke 6 posts aayenge
  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    setLoading(true);
    setError(null);
    setMinDelayPassed(false);

    // minimum skeleton delay
    const minDelayTimer = setTimeout(() => {
      if (mounted) setMinDelayPassed(true);
    }, MIN_SKELETON_MS);

    (async () => {
      try {
        const url = `${API_BASE_URL}&per_page=${POSTS_PER_PAGE}&page=${currentPage}`;

        const res = await fetch(url, {
          // cache: "force-cache", // optional: agar explicitly cache allow karna ho
          signal: controller.signal,
        });

        if (!res.ok) {
          // Agar user bahut aage page pe chala gaya (404)
          throw new Error(`Status ${res.status}`);
        }

        const data = await res.json();
        if (!mounted) return;

        setPosts(Array.isArray(data) ? data : []);

        // WP headers se total pages read karo
        const totalPagesHeader = res.headers.get("X-WP-TotalPages");
        if (totalPagesHeader) {
          const parsed = Number(totalPagesHeader);
          if (!Number.isNaN(parsed) && parsed > 0) {
            setTotalPages(parsed);
          }
        }
      } catch (err: any) {
        if (!mounted) return;
        console.error("Error fetching blogs:", err);
        setError("Unable to load blogs right now.");
        setPosts([]);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      mounted = false;
      controller.abort();
      clearTimeout(minDelayTimer);
    };
  }, [currentPage]);

  // Agar kisi reason se currentPage > totalPages ho gaya (headers update hone ke baad)
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const hasPosts = posts && posts.length > 0;
  const showSkeleton = loading || !minDelayPassed;

  // group-based pagination (always 3 per group)
  const totalGroups = useMemo(
    () => Math.ceil(totalPages / PAGE_GROUP_SIZE),
    [totalPages]
  );

  const currentGroup = useMemo(
    () => Math.floor((currentPage - 1) / PAGE_GROUP_SIZE),
    [currentPage]
  );

  const groupStartPage = currentGroup * PAGE_GROUP_SIZE + 1;
  const groupEndPage = Math.min(
    groupStartPage + PAGE_GROUP_SIZE - 1,
    totalPages
  );

  const visiblePages: number[] = [];
  for (let p = groupStartPage; p <= groupEndPage; p++) {
    visiblePages.push(p);
  }

  const handlePrevGroup = () => {
    if (currentGroup > 0) {
      const newStart = (currentGroup - 1) * PAGE_GROUP_SIZE + 1;
      setCurrentPage(newStart);
    }
  };

  const handleNextGroup = () => {
    if (currentGroup < totalGroups - 1) {
      const newStart = (currentGroup + 1) * PAGE_GROUP_SIZE + 1;
      setCurrentPage(newStart);
    }
  };

  const isPrevDisabled = currentGroup === 0;
  const isNextDisabled = currentGroup >= totalGroups - 1;

  return (
    <section>
      <div className="sectionPadding mobile-padding-top-0 bg-no-repeat bg-cover bg-[url('../img/bc/explore-bg.png')]">
        <div className="container px-5 mx-auto xl:px-0">
          {/* ⏳ Skeleton: current page ke liye */}
          {showSkeleton && (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <SkeletonBlogCard />
            </div>
          )}

          {/* ⚠️ Error state (after skeleton hide) */}
          {!showSkeleton && !hasPosts && error && (
            <p className="mt-8 text-center text-w-500">{error}</p>
          )}

          {/* ✅ Real data (sirf current page ke 6 posts) */}
          {!showSkeleton && hasPosts && (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => {
                  const featuredImage =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
                    "/assets/img/previewimg.png";

                  const alt =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                    stripHTML(post.title.rendered) ||
                    "Blog image";

                  const category = getCategory(post);
                  const dateStr = formatDate(post.date);
                  const cleanExcerpt = stripHTML(post.excerpt?.rendered || "");
                  const excerpt = truncate(cleanExcerpt, 80);

                  const rawRT = post.meta?._kogents_reading_time;
                  const readingTime = hasText(rawRT)
                    ? rawRT.trim()
                    : estimateReadingTime(cleanExcerpt);

                  return (
                    <div
                      key={post.id}
                      className="p-6 border rounded-lg border-b-600 bg-gd-tertiary"
                    >
                      <Image
                        loading="lazy"
                        width={800}
                        height={600}
                        src={featuredImage}
                        className="w-full mb-4 rounded-lg blog-img"
                        alt={alt}
                      />

                      <p className="mb-4 capitalize blog-category text-w-500">
                        {category}
                      </p>

                      <Link href={`/blogs/${post.slug}`}>
                        <h3
                          className="block mb-3 text-2xl font-medium transition-colors text-w-500 hover:text-w-400"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                      </Link>

                      <div className="flex items-center gap-4 mb-3 text-w-500">
                        <p className="flex items-center gap-2 blog-date">
                          <FaCalendarAlt className="text-sm" />
                          {dateStr}
                        </p>

                        {readingTime ? (
                          <p className="flex items-center gap-2 text-sm blog-reading-time">
                            <FaClock className="text-sm" />
                            {readingTime}
                          </p>
                        ) : null}
                      </div>

                      <p className="mb-6 text-w-100">{excerpt}</p>

                      <div className="flex flex-wrap gap-2">
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="pink buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary hover:bg-transparent text-w-900"
                        >
                          Read now
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination (page-wise, backend pagination ke sath) */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12 gap-3 blog-pagination">
                  <button
                    disabled={isPrevDisabled}
                    onClick={handlePrevGroup}
                    className="pagination-btn bg-gd-secondary text-w-900 disabled:opacity-50"
                  >
                    Prev
                  </button>

                  {visiblePages.map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`pagination-btn ${
                        page === currentPage
                          ? "bg-pink-500 text-white"
                          : "bg-gd-secondary text-w-900 hover:bg-pink-400"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    disabled={isNextDisabled}
                    onClick={handleNextGroup}
                    className="pagination-btn bg-gd-secondary text-w-900 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}

          {/* Optional: jab no error & no posts ho (edge case) */}
          {!showSkeleton && !hasPosts && !error && (
            <p className="mt-8 text-center text-w-500">
              No blogs found at the moment.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
