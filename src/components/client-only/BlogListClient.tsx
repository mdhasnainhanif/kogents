"use client";

import dynamic from "next/dynamic";

const BlogList = dynamic(() => import("../blog/BlogList"), {
  ssr: false,
});

export default BlogList;

