"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import BlogCardLoading from "@/components/blog/BlogCardLoading"; // ✅ skeleton

// ---- jQuery + Owl type augment (local) ----
declare global {
  interface JQuery {
    owlCarousel(options?: any): JQuery;
    trigger(event: string, ...params: any[]): JQuery;
    fn: any;
  }
}

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

const BlogListOwlCarousel: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);   // ✅ loader first paint
  const [didFetch, setDidFetch] = useState<boolean>(false);
  const [carouselReady, setCarouselReady] = useState<boolean>(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInitializedRef = useRef(false);

  // Fetch latest posts (UI keeps only first 4 as before)
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
  }, []);

  const isCarousel = !loading && posts.length > 3;

  // Init / destroy Owl
  useEffect(() => {
    // Grid mode -> ensure carouselReady false (not required)
    if (!isCarousel) {
      // if we switch from carousel to grid, make sure any old instance is cleaned
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
      setCarouselReady(false);
      return;
    }

    if (loading || !carouselRef.current || typeof window === "undefined") return;

    const init = async () => {
      try {
        const jQuery = (await import("jquery")).default as any;
        (window as any).$ = jQuery;
        (window as any).jQuery = jQuery;

        // @ts-expect-error no types
        await import("owl.carousel");

        // Inject Owl CSS once
        if (!document.querySelector('link[href*="owl.carousel.min.css"]')) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
          document.head.appendChild(link);
        }

        // Initialize only once per mount
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
            onInitialized: () => {
              // a11y for dots
              const dots = document.querySelectorAll(".owl-dots .owl-dot");
              dots.forEach((dot, index) => {
                dot.setAttribute("aria-label", `Go to blog post ${index + 1}`);
                dot.setAttribute("role", "button");
                dot.setAttribute("tabindex", "0");
              });
              // ✅ mark carousel as ready so we can hide the loader
              setCarouselReady(true);
            },
          });
          carouselInitializedRef.current = true;
        } else {
          // If already initialized somehow, consider it ready
          setCarouselReady(true);
        }
      } catch (e) {
        console.error("Error loading carousel:", e);
        // fail-safe: don't block UI forever
        setCarouselReady(true);
      }
    };

    // keep loader until we finish initializing
    setCarouselReady(false);
    init();

    // Cleanup when unmount / deps change
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
          setCarouselReady(false);
        }
      }
    };
  }, [loading, isCarousel]);

  // ✅ Only render content when it's actually ready to show
  const renderReady =
    !loading && posts.length > 0 && (!isCarousel || carouselReady);

  return (
    <section>
      <div className="container pb-24">
        <span className="buttonAnimation green width_fit purple d-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
          Blogs
        </span>
        <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
          Recent Blogs
        </h2>

        {/* ✅ Skeleton: show until fetch done AND (if carousel) owl initialized */}
        {!renderReady && <div className="mt-5"><BlogCardLoading /></div>}

        {/* ✅ Empty state only AFTER fetch completes */}
        {!loading && didFetch && posts.length === 0 && (
          <div className="mt-8 flex justify-center items-center">
            <div className="text-w-500 text-lg">No blog posts found.</div>
          </div>
        )}

        {/* ✅ Content: carousel (>3) or grid (<=3) — only when ready */}
        {renderReady && (
          <div
            ref={carouselRef}
            className={
              posts.length > 3
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
                    posts.length > 3
                      ? "p-6 border rounded-lg border-b-600 bg-gd-tertiary mx-2"
                      : "p-6 border rounded-lg border-b-600 bg-gd-tertiary"
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
                  <p className="blog-category mb-4 text-light">{category}</p>
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
