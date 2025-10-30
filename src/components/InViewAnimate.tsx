"use client";

import React from "react";

interface InViewAnimateProps extends React.HTMLAttributes<HTMLDivElement> {
  animClass?: string; // e.g. "fade-up-200"
  once?: boolean;
  rootMargin?: string;
  threshold?: number | number[];
}

export function InViewAnimate({
  animClass = "fade-up-100",
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.1,
  className = "",
  children,
  ...rest
}: InViewAnimateProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.classList.add("inview-init");
    if (animClass) element.classList.add(animClass);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("inview-in");
            if (once) return;
          } else if (!once) {
            element.classList.remove("inview-in");
          }
        });
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [animClass, once, rootMargin, threshold]);

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  );
}

export default InViewAnimate;


