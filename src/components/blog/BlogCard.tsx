"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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

interface BlogCardProps {
  posts: Blog[];
}

const POSTS_PER_PAGE = 6;
const MOBILE_BREAKPOINT = 640; // <= 640px = mobile
const MOBILE_GROUP_SIZE = 3;   // show 3 page numbers at a time on mobile

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

const BlogCard: React.FC<BlogCardProps> = ({ posts: initialPosts }) => {
  const initialHasPosts = (initialPosts?.length ?? 0) > 0;

  // state
  const [posts, setPosts] = useState<Blog[]>(initialPosts || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(() => !initialHasPosts);
  const [didFetch, setDidFetch] = useState<boolean>(() => initialHasPosts);

  // mobile / desktop detection
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // fetch posts if no initialPosts
  useEffect(() => {
    if (initialHasPosts) return;

    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        const timestamp = Date.now();

        const response = await fetch(
          `https://portal.kogents.ai/wp-json/wp/v2/posts?_embed&per_page=100&_=${timestamp}`,
          { cache: "no-store", signal: controller.signal }
        );

        if (!response.ok) {
          console.error("Error fetching posts:", response.status);
          setPosts([]);
          return;
        }

        let data = await response.json();

        // Fetch meta if missing
        if (Array.isArray(data) && data.length > 0 && !data[0]?.meta) {
          const postsWithMeta = await Promise.all(
            data.map(async (post: any) => {
              try {
                const metaRes = await fetch(
                  `https://portal.kogents.ai/wp-json/wp/v2/posts/${post.id}?_embed&_=${timestamp}`,
                  { cache: "no-store", signal: controller.signal }
                );
                if (!metaRes.ok) return post;
                return await metaRes.json();
              } catch {
                return post;
              }
            })
          );
          data = postsWithMeta;
        }

        setPosts(Array.isArray(data) ? data : []);
      } catch (err: any) {
        if (err?.name !== "AbortError") {
          console.error("Error fetching posts:", err);
        }
        setPosts([]);
      } finally {
        setLoading(false);
        setDidFetch(true);
      }
    })();

    return () => controller.abort();
  }, [initialHasPosts]);

  // pagination calculations
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // mobile group logic (3 pages at a time)
  const currentGroup = Math.floor((currentPage - 1) / MOBILE_GROUP_SIZE);
  const groupStartPage = currentGroup * MOBILE_GROUP_SIZE + 1;
  const groupEndPage = Math.min(
    groupStartPage + MOBILE_GROUP_SIZE - 1,
    totalPages
  );
  const totalGroups = Math.ceil(totalPages / MOBILE_GROUP_SIZE);
  const mobilePages: number[] = [];
  for (let p = groupStartPage; p <= groupEndPage; p++) {
    mobilePages.push(p);
  }

  const handlePrevClick = () => {
    if (isMobile) {
      // go to previous group on mobile
      if (currentGroup > 0) {
        const newStart = (currentGroup - 1) * MOBILE_GROUP_SIZE + 1;
        setCurrentPage(newStart);
      }
    } else {
      // normal page-by-page on desktop
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleNextClick = () => {
    if (isMobile) {
      // go to next group on mobile
      if (currentGroup < totalGroups - 1) {
        const newStart = (currentGroup + 1) * MOBILE_GROUP_SIZE + 1;
        setCurrentPage(newStart);
      }
    } else {
      // normal page-by-page on desktop
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }
  };

  const isPrevDisabled = isMobile
    ? currentGroup === 0
    : currentPage === 1;

  const isNextDisabled = isMobile
    ? currentGroup >= totalGroups - 1
    : currentPage === totalPages;

  return (
    <section>
      <div className="sectionPadding bg-no-repeat bg-cover bg-[url('../img/bc/explore-bg.png')]">
        <div className="container px-5 mx-auto xl:px-0">
          {/* Loader (react-loading-skeleton) */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <SkeletonBlogCard />
            </div>
          )}

          {/* Grid with real data */}
          {!loading && posts.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentPosts.map((post) => {
                  const featuredImage =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
                    "/assets/img/previewimg.png";
                  const alt =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                    stripHTML(post.title.rendered) ||
                    "Blog image";

                  const category = getCategory(post);
                  const dateStr = formatDate(post.date);
                  const excerpt = truncate(
                    stripHTML(post.excerpt?.rendered || ""),
                    80
                  );

                  const rawRT = post.meta?._kogents_reading_time;
                  const readingTime = hasText(rawRT) ? rawRT.trim() : "";

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
                        className="w-full rounded-lg blog-img mb-4"
                        alt={alt}
                      />

                      <p className="blog-category mb-4 text-w-500 capitalize">
                        {category}
                      </p>

                      <Link href={`/blogs/${post.slug}`}>
                        <h3
                          className="block mb-3 text-2xl font-medium text-w-500 hover:text-w-400 transition-colors"
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered,
                          }}
                        />
                      </Link>

                      <div className="flex items-center gap-4 mb-3 text-w-500">
                        <p className="blog-date flex items-center gap-2">
                          <FaCalendarAlt className="text-sm" />
                          {dateStr}
                        </p>

                        {readingTime ? (
                          <p className="blog-reading-time flex items-center gap-2 text-sm">
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

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12 gap-3 blog-pagination">
                  <button
                    disabled={isPrevDisabled}
                    onClick={handlePrevClick}
                    className="pagination-btn bg-gd-secondary text-w-900 disabled:opacity-50"
                  >
                    Prev
                  </button>

                  {/* Desktop: show all pages / Mobile: show 3-page group */}
                  {!isMobile &&
                    pages.map((page) => (
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

                  {isMobile &&
                    mobilePages.map((page) => (
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
                    onClick={handleNextClick}
                    className="pagination-btn bg-gd-secondary text-w-900 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
