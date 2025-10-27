// components/blog/BlogCardLoading.tsx
"use client";

import React from "react";

/**
 * Next.js-style skeleton loader:
 * - No outer <section> or container: parent controls layout.
 * - Pulse placeholders for image, category, title, meta, excerpt, button.
 */
export default function BlogCardLoading() {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="p-6 border rounded-lg border-b-600 bg-gd-tertiary animate-pulse"
          aria-busy="true"
          aria-live="polite"
        >
          {/* image */}
          <div className="w-full h-48 rounded-lg mb-4 bg-gray-300/40" />

          {/* category */}
          <div className="h-4 w-28 mb-4 bg-gray-300/40 rounded" />

          {/* title (2 lines) */}
          <div className="h-6 w-4/5 mb-2 bg-gray-300/40 rounded" />
          <div className="h-6 w-3/5 mb-4 bg-gray-300/40 rounded" />

          {/* meta (date + reading time) */}
          <div className="flex items-center gap-4 mb-4">
            <div className="h-4 w-28 bg-gray-300/40 rounded" />
            <div className="h-4 w-24 bg-gray-300/40 rounded" />
          </div>

          {/* excerpt (2–3 lines) */}
          <div className="h-4 w-full mb-2 bg-gray-300/40 rounded" />
          <div className="h-4 w-5/6 mb-2 bg-gray-300/40 rounded" />
          <div className="h-4 w-2/3 mb-6 bg-gray-300/40 rounded" />

          {/* button */}
          <div className="h-9 w-28 bg-gray-300/40 rounded-full" />
        </div>
      ))}
    </>
  );
}
