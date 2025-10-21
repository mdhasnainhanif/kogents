"use client";

import { useEffect, useRef } from 'react'

const PlatformsPageClient = () => {
  const lastUrlRef = useRef(typeof window !== 'undefined' ? window.location.search : '');
  
  // Scroll to AllChannelsCard section when filter parameter is present
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    const checkAndScroll = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const filterParam = urlParams.get("filter");
      
      console.log("Checking URL params:", window.location.search, "Filter:", filterParam);
      
      if (filterParam && (filterParam === "platforms" || filterParam === "integrations")) {
        console.log("Filter detected, attempting to scroll to AllChannelsCard");
        
        const scrollToSection = () => {
          const element = document.getElementById('all-channels-card');
          console.log("Attempting to scroll, element found:", !!element);
          
          if (element) {
            // Add offset for header
            const headerHeight = 100;
            const elementPosition = element.offsetTop - headerHeight;
            
            console.log("Element position:", element.offsetTop, "Header height:", headerHeight, "Scroll to:", elementPosition);
            
            // Try window.scrollTo first
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
            
            // Backup method with scrollIntoView
            setTimeout(() => {
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }, 100);
            
            console.log("Scrolled to AllChannelsCard section");
            return true;
          } else {
            console.log("Element not found, trying alternative selectors...");
            // Try alternative selectors
            const altElement = document.querySelector('.container') || document.querySelector('[id*="all-channels"]');
            console.log("Alternative element found:", !!altElement);
          }
          return false;
        };
        
        // Try multiple times with increasing delays
        let attempts = 0;
        const maxAttempts = 10;
        
        const tryScroll = () => {
          attempts++;
          console.log(`Scroll attempt ${attempts}/${maxAttempts}`);
          
          if (scrollToSection() || attempts >= maxAttempts) {
            return;
          }
          
          // Try again after increasing delay
          setTimeout(tryScroll, 300 * attempts);
        };
        
        // Start trying after a longer delay to ensure page is loaded
        setTimeout(tryScroll, 500);
      }
    };

    // Check immediately
    checkAndScroll();

    // Set up interval to check for URL changes
    const checkUrlChange = () => {
      const currentUrl = window.location.search;
      if (currentUrl !== lastUrlRef.current) {
        lastUrlRef.current = currentUrl;
        console.log("URL changed, checking for scroll");
        checkAndScroll();
      }
    };

    // Check for URL changes every 200ms
    const intervalId = setInterval(checkUrlChange, 200);

    // Also listen for URL changes
    const handleUrlChange = () => {
      checkUrlChange();
    };

    // Listen for clicks on dropdown links
    const handleLinkClick = (event: MouseEvent) => {
      const target = (event.target as Element)?.closest('a');
      if (target && target.href && target.href.includes('platforms?filter=')) {
        console.log("Dropdown link clicked:", target.href);
        // Extract filter from href to check if it's the same as current
        const url = new URL(target.href);
        const filterParam = url.searchParams.get('filter');
        const currentUrl = new URLSearchParams(window.location.search);
        const currentFilter = currentUrl.get('filter');
        
        console.log("Clicked filter:", filterParam, "Current filter:", currentFilter);
        
        // If it's the same filter, force scroll immediately
        if (filterParam === currentFilter && filterParam && (filterParam === "platforms" || filterParam === "integrations")) {
          console.log("Same filter clicked, forcing scroll");
          setTimeout(() => {
            checkAndScroll();
          }, 100);
        } else {
          // Different filter, wait for URL to update
          setTimeout(checkUrlChange, 50);
        }
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    document.addEventListener('click', handleLinkClick, true);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('popstate', handleUrlChange);
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PlatformsPageClient;
