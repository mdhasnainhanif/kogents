"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Blog {
  id: number;
  slug: string; // added slug here
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  _embedded?: {
    "wp:featuredmedia"?: [
      {
        source_url: string;
      }
    ];
  };
}

const POSTS_PER_PAGE = 6;

const BlogCard: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timestamp = Date.now();
    fetch(`https://kogents.ai/wordpress-blog/wp-json/wp/v2/posts?_embed&per_page=100&_=${timestamp}`, {
      
      cache: 'no-store' 
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Fresh posts loaded at:', new Date().toLocaleTimeString());
        console.log('Posts fetched:', data);
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Page buttons
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <section>
      <div className="py-8 lg:py-24 bg-no-repeat bg-cover bg-[url('../img/bc/explore-bg.png')]">
        <div className="container px-5 mx-auto xl:px-0">
          <h2 className="mb-16 text-center text-light tracking-[-0.02em] lg:leading-[64px] text-3xl md:text-5xl font-semibold sectionHeading">
            Explore Kogents Agents
            <span className="block"></span>Engineering Approach
          </h2>

          {loading ? (
            <p className="text-center text-white">Loading...</p>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                {currentPosts.map((post) => {
                  const featuredImage =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
                    "/assets/img/previewimg.png"; // fallback image

                  return (
                    <div
                      key={post.id}
                      className="p-6 border rounded-lg border-b-600 bg-gd-tertiary"
                    >
                      <Image loading="lazy"
                        width={800}
                        height={600}
                        src={featuredImage}
                        className="w-full rounded-lg blog-img"
                        alt={post.title.rendered}
                      />
                      {/* <img
                        src={featuredImage}
                        className="w-full rounded-lg blog-img"
                        alt={post.title.rendered}
                      /> */}

                      <h3
                        className="block mt-8 mb-6 text-2xl font-medium text-w-500"
                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                      ></h3>

                      <div className="flex flex-wrap gap-2">
                        <Link href={`/blogs/${post.slug}`} className="pink buttonAnimation2 inline-block px-4 py-2 text-sm font-medium capitalize transition-all duration-300 border rounded-full btn-border bg-gd-secondary hover:bg-transparent text-w-900">
                          Read now
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12 gap-3">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className="pagination-btn bg-gd-secondary text-w-900 disabled:opacity-50"
                  >
                    Prev
                  </button>

                  {pages.map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`pagination-btn ${page === currentPage
                          ? "bg-pink-500 text-white"
                          : "bg-gd-secondary text-w-900 hover:bg-pink-400"
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
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
