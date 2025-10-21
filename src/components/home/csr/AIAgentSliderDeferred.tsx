"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import AIAgentSlider only when needed
const AIAgentSlider = dynamic(() => import("./AIAgentSlider"), {
  ssr: false,
});

export default function AIAgentSliderDeferred() {
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

  return <AIAgentSlider />;
}
