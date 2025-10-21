"use client";

import { useEffect, useState } from 'react';
import LightRays from './LightRays';

export default function LightRaysWithDelay() {
  const [showLightRays, setShowLightRays] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        setShowLightRays(true);
      }, 5000); // 5s delay
    };

    // If already loaded, run immediately; otherwise wait for load.
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (!showLightRays) return null;

  return (
    <div className="hide-mobile">
      <LightRays raysColor="#5D51AF" />
    </div>
  );
}
