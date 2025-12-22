"use client";

import dynamic from "next/dynamic";

const TechnologiesSlider = dynamic(
  () => import("../CustomerServiceAIAgents/TechnologiesSlider"),
  { ssr: false }
);

export default TechnologiesSlider;

