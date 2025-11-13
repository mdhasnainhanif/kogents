"use client";
import React, { useState, useEffect, useRef } from "react";
interface CounterState {
    responseTime: number;
    supportTickets: number;
    resolutionRate: number;
    roi: number;
}
const Counter: React.FC<{ className?: string }> = ({ className }) => {
    const data = {
        responseTime: 10,
        supportTickets: 24,
        resolutionRate: 10,
        roi: 90,
    };
    const labels = {
        responseTime: "Leading Platforms Supported",
        supportTickets: "Availability",
        resolutionRate: "Deployment",
        roi: "Uptime Reliability",
    };
    const units = {
        responseTime: "+",
        supportTickets: "hrs",
        resolutionRate: "×",
        roi: "%",
    };
    const title = "";
    const subtitle = "";
    const [counts, setCounts] = useState<CounterState>({
        responseTime: 0,
        supportTickets: 0,
        resolutionRate: 0,
        roi: 0,
    });
    const [hasAnimated, setHasAnimated] = useState<boolean>(false);
    const counterRef = useRef<HTMLDivElement>(null);
    const duration: number = 2000;
    const fps: number = 60;
    const frameDuration: number = 1000 / fps;
    const totalFrames: number = duration / frameDuration;
    const animateCounter = (): void => {
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
            setCounts(newCounts);
            if (frame >= totalFrames) {
                clearInterval(timer);
                setCounts(data);
            }
        }, frameDuration);
    };
    useEffect(() => {
        const timer: NodeJS.Timeout = setTimeout(() => {
            const observer: IntersectionObserver = new IntersectionObserver(
                (entries: IntersectionObserverEntry[]) => {
                    entries.forEach((entry: IntersectionObserverEntry) => {
                        if (entry.isIntersecting && !hasAnimated) {
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
                observer.observe(counterRef.current);
            }
            return () => {
                if (counterRef.current) {
                    observer.unobserve(counterRef.current);
                }
            };
        }, 100);
        return () => clearTimeout(timer);
    }, [hasAnimated]);
    return (
        <div className={`sectionPadding py-16 newBgTwo ${className}`} ref={counterRef}>
            <div className="container">
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
