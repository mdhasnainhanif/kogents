"use client";

import React, { useState, useEffect, useRef } from "react";

interface CounterState {
  responseTime: number;
  supportTickets: number;
  resolutionRate: number;
  roi: number;
}

interface CounterProps {
  data: {
    responseTime: number;
    supportTickets: number;
    resolutionRate: number;
    roi: number;
  };
  labels: {
    responseTime: string;
    supportTickets: string;
    resolutionRate: string;
    roi: string;
  };
  units: {
    responseTime: string;
    supportTickets: string;
    resolutionRate: string;
    roi: string;
  };
  title?: string;
  subtitle?: string;
}

const Counter: React.FC<CounterProps> = ({
  data,
  labels,
  units,
  title,
  subtitle,
}) => {
  const [counts, setCounts] = useState<CounterState>({
    responseTime: 0,
    supportTickets: 0,
    resolutionRate: 0,
    roi: 0,
  });

  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const duration: number = 2000; // 2 seconds animation
  const fps: number = 60;
  const frameDuration: number = 1000 / fps;
  const totalFrames: number = duration / frameDuration;

  const animateCounter = (): void => {
    console.log("Animation started");
    let frame: number = 0;

    const timer: NodeJS.Timeout = setInterval(() => {
      frame++;
      const progress: number = frame / totalFrames;

      const newCounts: CounterState = {
        responseTime: Math.floor(data.responseTime * progress),
        supportTickets: Math.floor(data.supportTickets * progress),
        resolutionRate: Math.floor(data.resolutionRate * progress),
        roi: Math.floor(data.roi * progress),
      };

      console.log("Frame:", frame, "Progress:", progress, "Counts:", newCounts);
      setCounts(newCounts);

      if (frame >= totalFrames) {
        clearInterval(timer);
        setCounts(data);
        console.log("Animation completed");
      }
    }, frameDuration);
  };

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      const observer: IntersectionObserver = new IntersectionObserver(
        (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            console.log(
              "Counter intersection:",
              entry.isIntersecting,
              hasAnimated
            );
            if (entry.isIntersecting && !hasAnimated) {
              console.log("Starting counter animation");
              setHasAnimated(true);
              animateCounter();
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      if (counterRef.current) {
        console.log("Observing counter element");
        observer.observe(counterRef.current);
      } else {
        console.log("Counter ref not found");
      }

      return () => {
        if (counterRef.current) {
          observer.unobserve(counterRef.current);
        }
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [hasAnimated, data]);

  return (
    <div className="sectionPadding py-16" ref={counterRef}>
      <div className="container">
        {/* {title && (
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <h2 className="headingSize text-white mb-3">{title}</h2>
              {subtitle && <p className="mb-1 paraColor text-base text-center md:text-xl text-w-100">{subtitle}</p>}
            </div>
          </div>
        )} */}
        <div className="counterBg">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="counter-item text-center">
                <div className="counter-number">
                  <span className="counter-value">{counts.responseTime}</span>
                  <span className="counter-symbol">{units.responseTime}</span>
                </div>
                <p className="counter-label">{labels.responseTime}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item text-center">
                <div className="counter-number">
                  <span className="counter-value">{counts.supportTickets}</span>
                  <span className="counter-symbol">{units.supportTickets}</span>
                </div>
                <p className="counter-label">{labels.supportTickets}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item text-center">
                <div className="counter-number">
                  <span className="counter-value">{counts.resolutionRate}</span>
                  <span className="counter-symbol">{units.resolutionRate}</span>
                </div>
                <p className="counter-label">{labels.resolutionRate}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="counter-item text-center">
                <div className="counter-number">
                  <span className="counter-value">{counts.roi}</span>
                  <span className="counter-symbol">{units.roi}</span>
                </div>
                <p className="counter-label">{labels.roi}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
