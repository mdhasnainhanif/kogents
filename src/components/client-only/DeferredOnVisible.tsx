"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /**
   * Example: "600px" or "200px 0px"
   * Larger values mount earlier (less chance of jank).
   */
  rootMargin?: string;
  /** Default 0.1 */
  threshold?: number;
};

export default function DeferredOnVisible({
  children,
  rootMargin = "600px 0px",
  threshold = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;
    const el = ref.current;
    if (!el) return;

    // If IO not supported, render immediately.
    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return <div ref={ref}>{isVisible ? children : null}</div>;
}

