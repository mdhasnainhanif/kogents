"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: [
      {
        source_url: string;
      }
    ];
  };
}

const BlogListOwlCarousel: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(
      "https://kogents.ai/wordpress-blog/wp-json/wp/v2/posts?_embed&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (!loading && posts.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(posts.length / 3));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [loading, posts.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(posts.length / 3));
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(posts.length / 3) - 1 : prev - 1
    );
  };

  const totalSlides = Math.ceil(posts.length / 3);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <section>
      <div className="container pb-24">
        <span className="buttonAnimation width_fit purple d-block px-4 py-2 text-sm font-medium border rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
              Blogs
            </span>
            <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
                Recent Blogs
            </h2>
        {/* Modern Carousel Container */}
        <div className="relative mt-5" ref={carouselRef}>
          {/* Slides Container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
            ref={slideContainerRef}
          >
            {/* Group posts into slides of 3 */}
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="flex gap-4 min-w-full">
                {posts.slice(slideIndex * 3, slideIndex * 3 + 3).map((post) => {
                  const featuredImage =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
                    "/assets/img/previewimg.png";

                  return (
                    <div
                      key={post.id}
                      className="flex-1 p-6 border rounded-lg border-b-600 bg-gd-tertiary"
                    >
                      <Image
                        width={800}
                        height={600}
                        src={featuredImage}
                        alt={post.title.rendered}
                        className="w-full rounded-lg blog-img"
                      />

                      <h3
                        className="mt-6 mb-4 text-2xl font-medium text-w-500"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      ></h3>

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
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-blue-500 scale-125' 
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-img {
          transition: transform 0.3s ease;
        }
        
        .blog-img:hover {
          transform: scale(1.05);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .flex.gap-4 {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogListOwlCarousel;