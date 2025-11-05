"use client";

import { useEffect, useState } from 'react';

interface ResourceStatus {
  url: string;
  status: 'loading' | 'loaded' | 'error';
  error?: string;
}

export default function ResourceLoadingTest() {
  const [resources, setResources] = useState<ResourceStatus[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Critical resources to test
  const criticalResources = [
    '/assets/css/output.css',
    '/assets/css/styles.css',
    '/assets/css/bootstrap.css',
    '/assets/fonts/Satoshi-Variable.ttf',
    '/assets/fonts/Poppins-Regular.ttf',
    '/favicon.svg',
  ];

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 10000); // 10s delay
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

    const testResource = async (url: string): Promise<ResourceStatus> => {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        if (response.ok) {
          return { url, status: 'loaded' };
        } else {
          return { url, status: 'error', error: `HTTP ${response.status}` };
        }
      } catch (error) {
        return { 
          url, 
          status: 'error', 
          error: error instanceof Error ? error.message : 'Unknown error' 
        };
      }
    };

    const testAllResources = async () => {
      const results = await Promise.all(
        criticalResources.map(url => testResource(url))
      );
      setResources(results);
    };

    testAllResources();
  }, [isLoaded]);

  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV === 'production' && !isVisible) {
    return null;
  }

  if (!isLoaded) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg max-w-sm z-50">
      {/* <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-bold">Resource Loading Test</h3>
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="text-xs bg-gray-600 px-2 py-1 rounded"
        >
          {isVisible ? 'Hide' : 'Show'}
        </button>
      </div> */}
      
      {isVisible && (
        <div className="space-y-1 text-xs">
          {resources.map((resource, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${
                resource.status === 'loaded' ? 'bg-green-500' : 
                resource.status === 'error' ? 'bg-red-500' : 'bg-yellow-500'
              }`} />
              <span className="truncate">{resource.url}</span>
              {resource.error && (
                <span className="text-red-400 text-xs">({resource.error})</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

