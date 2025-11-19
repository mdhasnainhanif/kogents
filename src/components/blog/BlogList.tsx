"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import SkeletonBlogList from "./SkeletonBlogList";

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

const BlogListOwlCarousel: React.FC<{ isShowBadge?: boolean; description?: string }> = ({ isShowBadge = false, description }) => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [didFetch, setDidFetch] = useState<boolean>(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInitializedRef = useRef(false);

  // fetch posts (keep UI same: show up to 4 latest)
  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setLoading(true);
        const timestamp = Date.now();
        const res = await fetch(
          `https://portal.kogents.ai/wp-json/wp/v2/posts?_embed&per_page=100&_=${timestamp}`,
          { cache: "no-store", signal: controller.signal }
        );
        if (!res.ok) {
          console.error("Error fetching posts:", res.status);
          setPosts([]);
          return;
        }
        const data = (await res.json()) as Blog[];
        setPosts(Array.isArray(data) ? data.slice(0, 4) : []);
      } catch (e: any) {
        if (e?.name !== "AbortError") console.error("Error fetching posts:", e);
        setPosts([]);
      } finally {
        setLoading(false);
        setDidFetch(true);
      }
    })();

    return () => controller.abort();
  }, []);

  const isCarousel = !loading && posts.length > 3;

  // init/destroy owl when needed
  useEffect(() => {
    if (loading || !isCarousel || !carouselRef.current || typeof window === "undefined") return;

    const init = async () => {
      try {
        const jQuery = (await import("jquery")).default as any;
        (window as any).$ = jQuery;
        (window as any).jQuery = jQuery;

        // @ts-expect-error - plugin has no types
        await import("owl.carousel");

        if (!document.querySelector('link[href*="owl.carousel.min.css"]')) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
          document.head.appendChild(link);
        }

        if (jQuery.fn?.owlCarousel && !carouselInitializedRef.current) {
          jQuery(carouselRef.current).owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navText: [
              '<span class="owl-nav-prev text-2xl cursor-pointer">&#10094;</span>',
              '<span class="owl-nav-next text-2xl cursor-pointer">&#10095;</span>',
            ],
            responsive: {
              0: { items: 1, nav: false, dots: true },
              768: { items: 2, nav: false, dots: false },
              1024: { items: 3, nav: true, dots: false },
            },
            onInitialized: function () {
              const dots = document.querySelectorAll(".owl-dots .owl-dot");
              dots.forEach((dot, index) => {
                dot.setAttribute("aria-label", `Go to blog post ${index + 1}`);
                dot.setAttribute("role", "button");
                dot.setAttribute("tabindex", "0");
              });
            },
          });
          carouselInitializedRef.current = true;
        }
      } catch (e) {
        console.error("Error loading carousel:", e);
      }
    };

    init();

    return () => {
      if (
        carouselInitializedRef.current &&
        typeof window !== "undefined" &&
        (window as any).$ &&
        carouselRef.current
      ) {
        try {
          (window as any).$(carouselRef.current).trigger("destroy.owl.carousel");
        } catch (e) {
          console.error("Error destroying carousel:", e);
        } finally {
          carouselInitializedRef.current = false;
        }
      }
    };
  }, [loading, isCarousel]);

  return (
    <section>
      <div className="container pb-24">
        <span className={`${isShowBadge ? "d-none" : ""} buttonAnimation green width_fit purple d-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto`}>
          Blogs
        </span>
        <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
          Recent Blogs
        </h2>

        {description && (
          <p className="text-center paraColor subHeading w-100 mt-3">
            {description}
          </p>
        )}

        {/* skeleton while loading */}
        {loading && <SkeletonBlogList />}

        {/* empty state after fetch */}
        {/* {!loading && didFetch && posts.length === 0 && (
          <div className="mt-8 flex justify-center items-center">
            <div className="text-w-500 text-lg">No blog posts found.</div>
          </div>
        )} */}

        {/* content: carousel (>3) or grid (<=3) */}
        {!loading && posts.length > 0 && (
          <div
            ref={carouselRef}
            className={
              isCarousel
                ? "owl-carousel owl-theme blog-list-slider mt-5"
                : "mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            }
          >
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
              const excerpt = truncate(stripHTML(post.excerpt?.rendered || ""), 80);
              const rawRT = post.meta?._kogents_reading_time;
              const readingTime = hasText(rawRT) ? rawRT.trim() : "";

              return (
                <div
                  key={post.id}
                  className={
                    isCarousel
                      ? "p-6 border rounded-lg border-b-600 bg-gd-tertiary mx-2 blogcard-div"
                      : "p-6 border rounded-lg border-b-600 bg-gd-tertiary blogcard-div"
                  }
                >
                  <Image
                    loading="lazy"
                    width={800}
                    height={600}
                    src={featuredImage}
                    className="w-full rounded-lg blog-img mb-4"
                    alt={alt}
                  />

                  <p className="blog-category mb-4 text-light capitalize">{category}</p>

                  <Link href={`/blogs/${post.slug}`}>
                    <h3 className="block mb-3 text-2xl font-medium text-w-500">
                      {truncate(stripHTML(post.title.rendered), 50)}
                    </h3>
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
        )}
      </div>
    </section>
  );
};

export default BlogListOwlCarousel;
