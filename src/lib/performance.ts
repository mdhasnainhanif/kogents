// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: Map<string, number> = new Map()

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  startTiming(label: string): void {
    this.metrics.set(`${label}_start`, performance.now())
  }

  endTiming(label: string): number {
    const startTime = this.metrics.get(`${label}_start`)
    if (!startTime) return 0

    const duration = performance.now() - startTime
    this.metrics.set(label, duration)
    return duration
  }

  getMetric(label: string): number | undefined {
    return this.metrics.get(label)
  }

  getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics)
  }

  logPrefetchMetrics(): void {
    const prefetchTime = this.getMetric("prefetch")
    const navigationTime = this.getMetric("navigation")

    if (prefetchTime) {
      console.log(`Prefetch completed in ${prefetchTime.toFixed(2)}ms`)
    }

    if (navigationTime) {
      console.log(`Navigation completed in ${navigationTime.toFixed(2)}ms`)
    }
  }
}

// Route prefetching utilities
export const prefetchUtils = {
  // Prefetch critical routes immediately
  prefetchCriticalRoutes: async () => {
    const criticalRoutes = ["/dashboard", "/chatbots"]
    const promises = criticalRoutes.map((route) => {
      return import(`@/app${route}/page`)
    })

    try {
      await Promise.all(promises)
      console.log("Critical routes prefetched successfully")
    } catch (error) {
      console.warn("Failed to prefetch some critical routes:", error)
    }
  },

  // Prefetch routes based on user behavior
  prefetchBasedOnHistory: (visitedRoutes: string[]) => {
    // Implement intelligent prefetching based on user's navigation patterns
    const frequentRoutes = visitedRoutes.filter((route, index, arr) => {
      return arr.indexOf(route) !== index // Find duplicates (frequently visited)
    })

    return frequentRoutes.slice(0, 3) // Prefetch top 3 frequent routes
  },
}
