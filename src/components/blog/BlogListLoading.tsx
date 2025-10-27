// components/blog/BlogListLoading.tsx
"use client";

import React from "react";

const BlogListLoading: React.FC = () => {
  return (
    <section>
      <div className="container pb-24">
        <span className="buttonAnimation green width_fit purple d-block px-4 py-2 text-sm font-medium rounded-full border-blue-400 bg-b-600 text-tropical-indigo mx-auto">
          Blogs
        </span>
        <h2 className="text-center tracking-[-0.02em] text-3xl md:text-5xl font-semibold headingSize">
          Recent Blogs
        </h2>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="p-6 border rounded-lg border-b-600 bg-gd-tertiary animate-pulse"
            >
              <div className="w-full h-48 rounded-lg mb-4 bg-gray-300/40" />
              <div className="h-4 w-24 mb-3 bg-gray-300/40 rounded" />
              <div className="h-6 w-3/4 mb-2 bg-gray-300/40 rounded" />
              <div className="h-6 w-2/3 mb-4 bg-gray-300/40 rounded" />
              <div className="flex gap-4 mb-4">
                <div className="h-4 w-24 bg-gray-300/40 rounded" />
                <div className="h-4 w-20 bg-gray-300/40 rounded" />
              </div>
              <div className="h-4 w-full mb-2 bg-gray-300/40 rounded" />
              <div className="h-4 w-5/6 mb-6 bg-gray-300/40 rounded" />
              <div className="h-9 w-28 bg-gray-300/40 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogListLoading;
