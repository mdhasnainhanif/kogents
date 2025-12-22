"use client";

import dynamic from "next/dynamic";

const ProductSection = dynamic(() => import("../home/csr/ProductSection"), {
  ssr: false,
});

export default ProductSection;

