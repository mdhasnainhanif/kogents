"use client";

import dynamic from "next/dynamic";

const PerformanceOptimizer = dynamic(() => import("../PerformanceOptimizer"), {
  ssr: false,
});

export default PerformanceOptimizer;

