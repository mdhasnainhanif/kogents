"use client";

import { useEffect } from 'react';

const ScrollLock = ({ duration = 6000 }: { duration?: number }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Get current scroll position
    const scrollY = window.scrollY;
    
    // Disable scrolling
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling after duration
    const timeout = setTimeout(() => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }, duration);

    // Cleanup function
    return () => {
      clearTimeout(timeout);
      // Ensure scrolling is re-enabled on unmount
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [duration]);

  return null;
};

export default ScrollLock;