"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Load the real modal only on the client, after hydration
const LazyCTAModal = dynamic(() => import("@/components/popup/CTAModal"), {
  ssr: false,
});

export default function CTAModalClient() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 10000); // 10s delay
    };

    // If already loaded, run immediately; otherwise wait for load.
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (!isLoaded) return null;

  return <LazyCTAModal />;
}
