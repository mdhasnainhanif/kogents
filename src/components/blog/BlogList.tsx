"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SkeletonBlogList from "./SkeletonBlogList";

// ---------------- TYPES ----------------
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

// ---------------- HELPERS ----------------
const stripHTML = (html = "") =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const truncate = (s = "", n = 30) =>
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
  const flat = groups.flat?.() ?? [];
  const cat = flat.find((t: any) => t?.taxonomy === "category");
  return cat?.name || "Uncategorized";
};

const hasText = (v: unknown): v is string =>
  typeof v === "string" && v.trim().length > 0;

// ---------------- COMPONENT ----------------
export default function BlogListSwiper({
  isShowBadge = false,
  description,
}: {
  isShowBadge?: boolean;
  description?: string;
}) {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const paginationRef = useRef<HTMLDivElement | null>(null);

  // ---------------- FETCH POSTS ----------------
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);

        const timestamp = Date.now();
        const res = await fetch(
          `https://kogents.ai/wordpress/wp-json/wp/v2/posts?_embed&per_page=6&_=${timestamp}`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          setPosts([]);
          return;
        }

        const data = (await res.json()) as Blog[];
        setPosts(Array.isArray(data) ? data : []);
      } catch {
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <section>
      <div className="container pb-24 blog-slider" id="aiTemplateSection">
        {/* Badge */}
        <span
          className={`${isShowBadge ? "d-none" : ""} buttonAnimation green width_fit purple d-block px-4 py-2 text-sm font-medium rounded-full mx-auto`}
        >
          Blogs
        </span>

        <h2 className="text-center text-3xl md:text-5xl font-semibold text-white mb-5">
          Recent Blogs
        </h2>

        {description && <p className="text-center mt-3">{description}</p>}

        {/* Skeleton */}
        {loading && <SkeletonBlogList />}

        {/* Slider */}
        {!loading && posts.length > 0 && (
          <div className="relative mt-10">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
              }}
              className="blogSwiper"
            >
              {posts.map((post) => {
                const featuredImage =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
                  "/assets/img/previewimg.png";

                const alt =
                  post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                  stripHTML(post.title.rendered);

                const category = getCategory(post);
                const dateStr = formatDate(post.date);

                const fullTitle = stripHTML(post.title.rendered);
                const shortTitle = truncate(fullTitle, 40);

                const excerpt = truncate(stripHTML(post.excerpt?.rendered), 80);

                const readingTime = hasText(post.meta?._kogents_reading_time)
                  ? post.meta!._kogents_reading_time!.trim()
                  : "";

                return (
                  <SwiperSlide key={post.id}>
                    <div className="p-6 border rounded-lg bg-gd-tertiary blogcard-div">
                      
                      {/* Image */}
                      <Image
                        width={800}
                        height={500}
                        src={featuredImage}
                        alt={alt}
                        className="w-full rounded-lg mb-4"
                        loading="lazy"
                      />

                      <p className="text-light capitalize mb-4 blog-category">
                        {category}
                      </p>

                      {/* ⭐ Title: trimmed → full on hover */}
                      <Link href={`/blogs/${post.slug}`}>
                        <h3 className="blog-title text-2xl font-medium text-w-500 mb-3 relative cursor-pointer">
                          <span className="title-short">{shortTitle}</span>
                          <span className="title-full">{fullTitle}</span>
                        </h3>
                      </Link>

                      <div className="flex items-center gap-4 mb-3 text-w-500">
                        <p className="flex items-center gap-2">
                          <FaCalendarAlt className="text-sm" />
                          {dateStr}
                        </p>

                        {readingTime && (
                          <p className="flex items-center gap-2 text-sm">
                            <FaClock className="text-sm" />
                            {readingTime}
                          </p>
                        )}
                      </div>

                      <p className="mb-6 text-w-100">{excerpt}</p>

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="text-white pink buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize border rounded-full bg-gd-secondary hover:bg-transparent"
                      >
                        Read now
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Nav buttons */}
            <div className="swiper-button-prev !left-[-40px] z-50"></div>
            <div className="swiper-button-next !right-[-40px] z-50"></div>

            {/* Pagination for mobile/tablet */}
            <div
              ref={paginationRef}
              className="blog-swiper-pagination swiper-pagination mt-6 lg:hidden"
            />
          </div>
        )}
      </div>
    </section>
  );
}
