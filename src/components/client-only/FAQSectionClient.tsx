"use client";

import dynamic from "next/dynamic";

const FAQSection = dynamic(() => import("../solutions/csr/FAQSection"), {
  ssr: false,
});

export default FAQSection;

