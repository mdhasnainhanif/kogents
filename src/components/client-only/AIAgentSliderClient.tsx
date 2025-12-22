"use client";

import dynamic from "next/dynamic";

const AIAgentSlider = dynamic(() => import("../home/csr/AIAgentSlider"), {
  ssr: false,
});

export default AIAgentSlider;

