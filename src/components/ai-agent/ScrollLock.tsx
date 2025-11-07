"use client";

import { useEffect } from 'react';

const ScrollLock = ({ duration = 6000 }: { duration?: number }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Get current scroll position
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    
    // Prevent scrolling but keep scrollbar visible
    const preventScroll = (e: Event) => {
      e.preventDefault();
      window.scrollTo(scrollX, scrollY);
    };

    // Prevent scroll using multiple event types
    const preventWheel = (e: WheelEvent) => {
      e.preventDefault();
      window.scrollTo(scrollX, scrollY);
    };

    const preventTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    const preventKeyScroll = (e: KeyboardEvent) => {
      // Prevent arrow keys, space, page up/down from scrolling
      if (
        ['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)
      ) {
        e.preventDefault();
        window.scrollTo(scrollX, scrollY);
      }
    };

    // Add event listeners to prevent scrolling
    window.addEventListener('scroll', preventScroll, { passive: false });
    window.addEventListener('wheel', preventWheel, { passive: false });
    window.addEventListener('touchmove', preventTouchMove, { passive: false });
    window.addEventListener('keydown', preventKeyScroll);

    // Re-enable scrolling after duration
    const timeout = setTimeout(() => {
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('wheel', preventWheel);
      window.removeEventListener('touchmove', preventTouchMove);
      window.removeEventListener('keydown', preventKeyScroll);
    }, duration);

    // Cleanup function
    return () => {
      clearTimeout(timeout);
      // Remove all event listeners
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('wheel', preventWheel);
      window.removeEventListener('touchmove', preventTouchMove);
      window.removeEventListener('keydown', preventKeyScroll);
    };
  }, [duration]);

  return null;
};

export default ScrollLock;