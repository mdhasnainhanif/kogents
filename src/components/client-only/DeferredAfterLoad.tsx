"use client";

import type React from "react";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** milliseconds after `load` (or immediately if already loaded). Default 2000 */
  delayMs?: number;
};

export default function DeferredAfterLoad({ children, delayMs = 2000 }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let t: number | undefined;

    const arm = () => {
      t = window.setTimeout(() => setReady(true), delayMs);
    };

    if (document.readyState === "complete") {
      arm();
    } else {
      window.addEventListener("load", arm, { once: true });
    }

    return () => {
      if (t) window.clearTimeout(t);
      window.removeEventListener("load", arm);
    };
  }, [delayMs]);

  if (!ready) return null;
  return <>{children}</>;
}

