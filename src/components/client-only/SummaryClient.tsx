"use client";

import dynamic from "next/dynamic";

const Summary = dynamic(() => import("../ai-whatsapp-agent/Summary"), {
  ssr: false,
});

export default Summary;

