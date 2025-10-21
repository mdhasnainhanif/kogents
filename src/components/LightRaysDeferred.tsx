"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import LightRays only when needed
const LightRays = dynamic(() => import("./LightRays"), {
  ssr: false,
});

interface LightRaysDeferredProps {
  raysOrigin?: "top-center" | "top-left" | "top-right" | "right" | "left" | "bottom-center" | "bottom-right" | "bottom-left";
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  pulsating?: boolean;
  fadeDistance?: number;
  saturation?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  noiseAmount?: number;
  distortion?: number;
  className?: string;
  introAnimation?: boolean;
}

export default function LightRaysDeferred(props: LightRaysDeferredProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 100); // 10s delay
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

  return <LightRays {...props} />;
}
