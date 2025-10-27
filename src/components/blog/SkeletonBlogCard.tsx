"use client";

import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton: React.FC = () => {
  return (
    <div className="p-6 border rounded-lg border-b-600 bg-gd-tertiary bg-[#0b0720] dark-skeleton" aria-busy="true">
      {/* Featured image */}
      <Skeleton height={192} className="mb-4 rounded-lg" />

      {/* Category */}
      <Skeleton width={110} height={14} className="mb-4" />

      {/* Title (2 lines) */}
      <Skeleton width="80%" height={22} className="mb-2" />
      <Skeleton width="60%" height={22} className="mb-4" />

      {/* Meta (date + reading time) */}
      <div className="flex items-center gap-4 mb-4">
        <Skeleton width={110} height={14} />
        <Skeleton width={90} height={14} />
      </div>

      {/* Excerpt (3 lines) */}
      <Skeleton height={14} className="mb-2" />
      <Skeleton width="85%" height={14} className="mb-2" />
      <Skeleton width="70%" height={14} className="mb-6" />

      {/* Button */}
      <Skeleton width={112} height={36} borderRadius={9999} />
    </div>
  );
};

const SkeletonBlogCard: React.FC = () => {
  return (
    <SkeletonTheme baseColor="rgb(58, 49, 112)" highlightColor="rgb(106, 91, 183)">
      {Array.from({ length: 6 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </SkeletonTheme>
  );
};

export default SkeletonBlogCard;
