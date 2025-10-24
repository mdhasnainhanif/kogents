"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

interface Blog {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  meta?: {
    _kogents_reading_time?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: [
      {
        source_url: string;
        alt_text?: string;
      }
    ];
    "wp:term"?: any[]; // WP groups terms: [categories[], tags[], ...]
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
  // Flatten groups and find first category
  const flat = groups.flat?.() ?? ([] as any[]);
  const cat = flat.find((t: any) => t?.taxonomy === "category");
  return cat?.name || "Uncategorized";
};

// Helper: only true for non-empty, non-whitespace strings
const hasText = (v: unknown): v is string =>
  typeof v === "string" && v.trim().length > 0;

const BlogListOwlCarousel: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselInitializedRef = useRef(false);

  useEffect(() => {
    const timestamp = Date.now();
    fetch(`https://portal.kogents.ai/wp-json/wp/v2/posts?_embed&per_page=100&_=${timestamp}`, {
      cache: 'no-store' 
    })
      .then((res) => res.json())
      .then((data) => {
        // Keep behavior the same: show up to 4 latest posts
        setPosts(data.slice(0, 4));
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
      });
  }, []);

  const isCarousel = posts.length > 3;

  useEffect(() => {
    // Only load Owl Carousel when we actually need it (>3 posts)
    if (!isCarousel || !carouselRef.current || typeof window === "undefined") return;

    const initCarousel = async () => {
      try {
        const jQuery = (await import("jquery")).default;
        (window as any).$ = jQuery;
        (window as any).jQuery = jQuery;

        // @ts-expect-error - No type declarations for owl.carousel
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
        // @ts-expect-error - jQuery plugin not typed
        if (jQuery.fn.owlCarousel && !carouselInitializedRef.current) {
          // @ts-expect-error - jQuery plugin not typed
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
              0: {
                items: 1,
                nav: false,
                dots: true,
              },
              768: {
                items: 2,
                nav: false,
                dots: false,
              },
              1024: {
                items: 3,
                nav: true,
                dots: false,
              },
            },
          });
          carouselInitializedRef.current = true;
        }
      } catch (error) {
        console.error("Error loading carousel:", error);
      }
    };

    initCarousel();

    return () => {
      // Destroy only if we initialized it
      if (
        carouselInitializedRef.current &&
        typeof window !== "undefined" &&
        (window as any).$
      ) {
        try {
          (window as any).$(carouselRef.current).trigger("destroy.owl.carousel");
        } catch (error) {
          console.error("Error destroying carousel:", error);
        } finally {
          carouselInitializedRef.current = false;
        }
      }
    };
  }, [isCarousel]);

  return (
    <section>
      <div className="container pb-24">
        <span className="buttonAnimation green width_fit purple d-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
          Blogs
        </span>
        <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
          Recent Blogs
        </h2>

        {/* Wrapper switches between Owl markup and a simple grid */}
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

            // Normalize reading time per post at render time
            const rawRT = post.meta?._kogents_reading_time;
            const readingTime = hasText(rawRT) ? rawRT.trim() : "";

            return (
              <div
                key={post.id}
                className={
                  isCarousel
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

                  {/* Only render if non-empty after trim */}
                  {readingTime ? (
                    <p className="blog-reading-time flex items-center gap-2 text-sm">
                      <FaClock className="text-sm" />
                      {readingTime}
                    </p>
                  ) : null}
                </div>

                {/* Trimmed excerpt (80 chars) */}
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
      </div>
    </section>
  );
};

export default BlogListOwlCarousel;
