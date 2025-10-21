"use client";

import { useEffect, useState } from 'react';

export default function ResourceErrorHandler() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 20000); // 10s delay
    };

    // If already loaded, run immediately; otherwise wait for load.
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad, { once: true });
    }

    return () => window.removeEventListener("load", onLoad);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // Handle resource loading errors
    const handleError = (event: ErrorEvent) => {
      console.warn('Resource failed to load:', event.filename, event.message);
      // You can add analytics tracking here
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [isLoaded]);

  return null;
}
