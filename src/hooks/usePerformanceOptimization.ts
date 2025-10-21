import { useRef, useCallback, useEffect } from 'react';

// Type-safe timeout handling for browser environments
// In browsers: setTimeout returns number
type TimeoutHandle = number;

// Performance optimization utilities to prevent forced reflows
export const usePerformanceOptimization = () => {
  const rafRef = useRef<number | null>(null);
  const throttleTimeoutRef = useRef<TimeoutHandle | null>(null);
  const lastExecutionTime = useRef<number>(0);

  // Throttle function execution to prevent excessive calls
  const throttle = useCallback((func: () => void, delay: number) => {
    const now = Date.now();
    if (now - lastExecutionTime.current < delay) return; 
    lastExecutionTime.current = now;

    if (throttleTimeoutRef.current) {
      window.clearTimeout(throttleTimeoutRef.current);
    }

    throttleTimeoutRef.current = window.setTimeout(() => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => func());
    }, delay);
  }, []);

  // Debounce function execution
  const debounce = useCallback((func: () => void, delay: number) => {
    if (throttleTimeoutRef.current) {
      window.clearTimeout(throttleTimeoutRef.current);
    }
    throttleTimeoutRef.current = window.setTimeout(func, delay);
  }, []);
 
  // Batch DOM queries to prevent forced reflows 
  const batchDOMQueries = useCallback(<T>(
    queries: Array<() => T>,
    batchSize: number = 5 
  ): Promise<T[]> => { 
    return new Promise((resolve) => {
      const results: T[] = [];
      let currentIndex = 0;

      const processBatch = () => {
        const endIndex = Math.min(currentIndex + batchSize, queries.length);
        
        // Process current batch
        for (let i = currentIndex; i < endIndex; i++) {
          try {
            results[i] = queries[i]();
          } catch (error) {
            console.warn('DOM query failed:', error);
          }
        }

        currentIndex = endIndex;

        if (currentIndex < queries.length) {
          // Schedule next batch
          rafRef.current = requestAnimationFrame(processBatch);
        } else {
          resolve(results);
        }
      };

      // Start processing
      rafRef.current = requestAnimationFrame(processBatch);
    });
  }, []);

  // Safe DOM measurement that caches results
  const createDOMMeasurer = useCallback(<T>(
    getter: () => T,
    cacheTime: number = 100
  ) => {
    let cachedValue: T | null = null;
    let lastCacheTime = 0;

    return () => {
      const now = Date.now();
      if (cachedValue !== null && now - lastCacheTime < cacheTime) {
        return cachedValue;
      }

      try {
        cachedValue = getter();
        lastCacheTime = now;
        return cachedValue;
      } catch (error) {
        console.warn('DOM measurement failed:', error);
        return cachedValue;
      }
    };
  }, []);

  // Optimized scroll handler with passive listeners
  const createOptimizedScrollHandler = useCallback((
    handler: () => void,
    options: { throttle?: number; passive?: boolean } = {}
  ) => {
    const { throttle: throttleDelay = 16, passive = true } = options;
    
    const throttledHandler = throttle(handler, throttleDelay);
    
    return {
      handler: throttledHandler,
      options: { passive }
    };
  }, [throttle]);

  // Cleanup function
  const cleanup = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (throttleTimeoutRef.current) {
      window.clearTimeout(throttleTimeoutRef.current);
      throttleTimeoutRef.current = null;
    }
  }, []);

  // Auto-cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return {
    throttle,
    debounce,
    batchDOMQueries,
    createDOMMeasurer,
    createOptimizedScrollHandler,
    cleanup
  };
};

// Specialized hook for scroll-based animations
export const useScrollOptimization = (handler: () => void, throttleDelay: number = 16) => {
  const { createOptimizedScrollHandler, cleanup } = usePerformanceOptimization();
  
  const optimizedHandler = useCallback(() => {
    const { handler: scrollHandler } = createOptimizedScrollHandler(handler, { 
      throttle: throttleDelay,
      passive: true 
    });
    return scrollHandler;
  }, [handler, throttleDelay, createOptimizedScrollHandler]);

  return {
    scrollHandler: optimizedHandler,
    cleanup
  };
};

// Hook for preventing layout thrashing
export const useLayoutThrashingPrevention = () => {
  const measurementsRef = useRef<Map<string, { value: any; timestamp: number }>>(new Map());
  const CACHE_DURATION = 100; // 100ms cache

  const getCachedMeasurement = useCallback((key: string, getter: () => any) => {
    const cached = measurementsRef.current.get(key);
    const now = Date.now();

    if (cached && now - cached.timestamp < CACHE_DURATION) {
      return cached.value;
    }

    const value = getter();
    measurementsRef.current.set(key, { value, timestamp: now });
    return value;
  }, []);

  const clearCache = useCallback(() => {
    measurementsRef.current.clear();
  }, []);

  return {
    getCachedMeasurement,
    clearCache
  };
};
