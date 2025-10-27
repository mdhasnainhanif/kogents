// Performance monitoring utility for development
class PerformanceMonitor {
  private isEnabled: boolean;
  private reflowCount: number = 0;
  private lastMeasureTime: number = 0;
  private measurements: Array<{ timestamp: number; type: string; duration: number }> = [];

  constructor() {
    this.isEnabled = process.env.NODE_ENV === 'development';
    this.init();
  }
 
  private init() {
    if (!this.isEnabled) return;

    // Monitor layout thrashing
    // this.monitorLayoutThrashing();
    
    // Monitor forced reflows
    this.monitorForcedReflows();
    
    // Monitor scroll performance
    this.monitorScrollPerformance();
  }

  // private monitorLayoutThrashing() {
  //   let lastOffsetHeight = 0;
  //   let lastOffsetWidth = 0;
  //   let lastClientHeight = 0;
  //   let lastClientWidth = 0;

  //   const checkForThrashing = () => {
  //     const elements = document.querySelectorAll('*');
  //     let thrashingDetected = false;

  //     elements.forEach((el) => {
  //       if (el instanceof HTMLElement) {
  //         const currentOffsetHeight = el.offsetHeight;
  //         const currentOffsetWidth = el.offsetWidth;
  //         const currentClientHeight = el.clientHeight;
  //         const currentClientWidth = el.clientWidth;

  //         if (currentOffsetHeight !== lastOffsetHeight ||
  //             currentOffsetWidth !== lastOffsetWidth ||
  //             currentClientHeight !== lastClientHeight ||
  //             currentClientWidth !== lastClientWidth) {
  //           thrashingDetected = true;
  //         }

  //         lastOffsetHeight = currentOffsetHeight;
  //         lastOffsetWidth = currentOffsetWidth;
  //         lastClientHeight = currentClientHeight;
  //         lastClientWidth = currentClientWidth;
  //       }
  //     });

  //     if (thrashingDetected) {
  //       this.logWarning('Layout thrashing detected - multiple DOM measurements in quick succession');
  //     }
  //   };

  //   // Check every 100ms
  //   setInterval(checkForThrashing, 100);
  // }

  private monitorForcedReflows() {
    const originalGetBoundingClientRect = Element.prototype.getBoundingClientRect;
    const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
    const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');
    // const originalClientHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientHeight');
    // const originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth');

    let lastCallTime = 0;
    const THRESHOLD = 16; // 60fps threshold

    // Monitor getBoundingClientRect calls
    Element.prototype.getBoundingClientRect = function() {
      const now = performance.now();
      if (now - lastCallTime < THRESHOLD) {
        PerformanceMonitor.getInstance().logWarning(
          'Potential forced reflow: getBoundingClientRect called too frequently',
          { element: this.tagName, timeSinceLastCall: now - lastCallTime }
        );
      }
      lastCallTime = now;
      return originalGetBoundingClientRect.call(this);
    };

    // Monitor offsetHeight/Width calls
    if (originalOffsetHeight) {
      Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
        get: function() {
          const now = performance.now();
          if (now - lastCallTime < THRESHOLD) {
            PerformanceMonitor.getInstance().logWarning(
              'Potential forced reflow: offsetHeight accessed too frequently',
              { element: this.tagName, timeSinceLastCall: now - lastCallTime }
            );
          }
          lastCallTime = now;
          return originalOffsetHeight.get?.call(this) || 0;
        }
      });
    }

    if (originalOffsetWidth) {
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
        get: function() {
          const now = performance.now();
          if (now - lastCallTime < THRESHOLD) {
            PerformanceMonitor.getInstance().logWarning(
              'Potential forced reflow: offsetWidth accessed too frequently',
              { element: this.tagName, timeSinceLastCall: now - lastCallTime }
            );
          }
          lastCallTime = now;
          return originalOffsetWidth.get?.call(this) || 0;
        }
      });
    }
  }

  private monitorScrollPerformance() {
    let scrollEventCount = 0;
    let lastScrollTime = 0;
    const SCROLL_THRESHOLD = 100; // Max scroll events per second

    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type: string, listener: EventListener, options?: boolean | AddEventListenerOptions) {
      if (type === 'scroll') {
        const wrappedListener = (event: Event) => {
          const now = performance.now();
          scrollEventCount++;

          if (now - lastScrollTime >= 1000) {
            if (scrollEventCount > SCROLL_THRESHOLD) {
              PerformanceMonitor.getInstance().logWarning(
                'High scroll event frequency detected',
                { eventsPerSecond: scrollEventCount, target: this }
              );
            }
            scrollEventCount = 0;
            lastScrollTime = now;
          }

          listener.call(this, event);
        };

        return originalAddEventListener.call(this, type, wrappedListener, options);
      }

      return originalAddEventListener.call(this, type, listener, options);
    };
  }

  public logWarning(message: string, data?: any) {
    if (!this.isEnabled) return;

    console.warn(`🚨 Performance Warning: ${message}`, data);
    this.reflowCount++;
    
    this.measurements.push({
      timestamp: performance.now(),
      type: 'warning',
      duration: 0
    });

    // Log summary every 10 warnings
    if (this.reflowCount % 10 === 0) {
      this.logSummary();
    }
  }

  public measurePerformance<T>(name: string, fn: () => T): T {
    if (!this.isEnabled) return fn();

    const start = performance.now();
    const result = fn();
    const end = performance.now();
    const duration = end - start;

    this.measurements.push({
      timestamp: start,
      type: name,
      duration
    });

    if (duration > 16) { // Longer than 60fps frame
      console.warn(`⚠️ Slow operation detected: ${name} took ${duration.toFixed(2)}ms`);
    }

    return result;
  }

  public logSummary() {
    if (!this.isEnabled || this.measurements.length === 0) return;

    const totalWarnings = this.measurements.filter(m => m.type === 'warning').length;
    const avgDuration = this.measurements
      .filter(m => m.type !== 'warning')
      .reduce((sum, m) => sum + m.duration, 0) / 
      Math.max(1, this.measurements.filter(m => m.type !== 'warning').length);

    console.group('📊 Performance Summary');
    console.log(`Total warnings: ${totalWarnings}`);
    console.log(`Average operation duration: ${avgDuration.toFixed(2)}ms`);
    console.log(`Total measurements: ${this.measurements.length}`);
    console.groupEnd();

    // Clear old measurements
    this.measurements = this.measurements.slice(-100);
  }

  public getStats() {
    return {
      reflowCount: this.reflowCount,
      measurementCount: this.measurements.length,
      lastMeasurement: this.measurements[this.measurements.length - 1]
    };
  }

  public static getInstance(): PerformanceMonitor {
    if (!(window as any).__performanceMonitor) {
      (window as any).__performanceMonitor = new PerformanceMonitor();
    }
    return (window as any).__performanceMonitor;
  }
}

// Export singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Development helper functions
export const devOnly = {
  // Measure performance only in development
  measure: (name: string, fn: () => any) => {
    if (process.env.NODE_ENV === 'development') {
      return performanceMonitor.measurePerformance(name, fn);
    }
    return fn();
  },

  // Log warnings only in development
  warn: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      performanceMonitor.logWarning(message, data);
    }
  },

  // Get performance stats only in development
  getStats: () => {
    if (process.env.NODE_ENV === 'development') {
      return performanceMonitor.getStats();
    }
    return null;
  }
};

// Auto-initialize in development
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  // Initialize the performance monitor
  void performanceMonitor;
}
