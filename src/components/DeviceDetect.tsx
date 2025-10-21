'use client';

import { useEffect, useState } from 'react';

// Custom hook for safe device detection
export const useIsClient = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

// Custom hook for browser detection
export const useIsBrowser = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    if (isClient) {
      // Simple browser detection
      const isBrowserDevice = typeof window !== 'undefined' && 
        window.innerWidth < 768; // Consider devices wider than 768px as browsers
      setIsBrowser(isBrowserDevice);
    }
  }, [isClient]);

  return { isBrowser, isClient };
};

// Safe BrowserView component
export const SafeBrowserView: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  const { isBrowser, isClient } = useIsBrowser();

  // Don't render anything on server
  if (!isClient) {
    return null;
  }

  // Only render on browser devices
  if (!isBrowser) {
    return null;
  }

  return <div className={className}>{children}</div>;
};

// Safe MobileView component
export const SafeMobileView: React.FC<{ 
  children: React.ReactNode; 
  className?: string;
}> = ({ children, className }) => {
  const { isBrowser, isClient } = useIsBrowser();

  // Don't render anything on server
  if (!isClient) {
    return null;
  }

  // Only render on mobile devices
  if (isBrowser) {
    return null;
  }

  return <div className={className}>{children}</div>;
};
