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
  const carouselRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!loading && carouselRef.current && typeof window !== "undefined") {
      const initCarousel = async () => {
        try {
          // Check if jQuery is already loaded
          if (typeof window !== "undefined" && (window as any).jQuery) {
            const jQuery = (window as any).jQuery;
            (window as any).$ = jQuery;
          } else {
            // Load jQuery from CDN if not available
            const script = document.createElement('script');
            script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
            script.integrity = 'sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=';
            script.crossOrigin = 'anonymous';
            
            await new Promise((resolve, reject) => {
              script.onload = resolve;
              script.onerror = reject;
              document.head.appendChild(script);
            });
            
            (window as any).$ = (window as any).jQuery;
          }
          
          // Load Owl Carousel from CDN
          if (!(window as any).jQuery.fn.owlCarousel) {
            const owlScript = document.createElement('script');
            owlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
            
            await new Promise((resolve, reject) => {
              owlScript.onload = resolve;
              owlScript.onerror = reject;
              document.head.appendChild(owlScript);
            });
          }
          
          // Add CSS link to head
          if (!document.querySelector('link[href*="owl.carousel"]')) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css";
            document.head.appendChild(link);
          }

          // Initialize carousel
          if ((window as any).jQuery.fn.owlCarousel) {
            (window as any).jQuery(carouselRef.current).owlCarousel({
              loop: true,
              margin: 30,
              nav: true,
              dots: false,
              autoplay: true,
                autoplayTimeout: 3000, // 3 seconds
                autoplayHoverPause: true, // optional: pause on hover
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
          }
        } catch (error) {
          console.error("Error loading carousel:", error);
        }
      };

      initCarousel();
    }

    return () => {
      if (carouselRef.current && typeof window !== "undefined" && (window as any).$) {
        try {
          (window as any).$(carouselRef.current).trigger("destroy.owl.carousel");
        } catch (error) {
          console.error("Error destroying carousel:", error);
        }
      }
    };
  }, [loading, posts]);

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
        <div ref={carouselRef} className="owl-carousel owl-theme blog-list-slider mt-5">
          {posts.map((post) => {
            const featuredImage =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
              "/assets/img/previewimg.png";

            return (
              <div
                key={post.id}
                className="p-6 border rounded-lg border-b-600 bg-gd-tertiary mx-2"
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
      </div>
    </section>
  );
};

export default BlogListOwlCarousel;