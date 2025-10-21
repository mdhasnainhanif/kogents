"use client"

interface PerformanceEntry {
  name: string
  startTime: number
  duration: number
  type: string
}

interface PrefetchTiming {
  url: string
  startTime: number
  endTime?: number
  success?: boolean
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor | null = null
  private entries: PerformanceEntry[] = []
  private prefetchTimings: Map<string, PrefetchTiming> = new Map()
  private observers: PerformanceObserver[] = []
  private cleanupCallbacks: (() => void)[] = []
  private metrics: Map<string, number> = new Map()

  private constructor() {
    this.initializeObservers()
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  private initializeObservers() {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
      return
    }

    try {
      // Observe navigation timing
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.addEntry({
            name: entry.name,
            startTime: entry.startTime,
            duration: entry.duration,
            type: entry.entryType,
          })
        }
      })
      navObserver.observe({ entryTypes: ["navigation"] })
      this.observers.push(navObserver)

      // Observe resource timing
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.addEntry({
            name: entry.name,
            startTime: entry.startTime,
            duration: entry.duration,
            type: entry.entryType,
          })
        }
      })
      resourceObserver.observe({ entryTypes: ["resource"] })
      this.observers.push(resourceObserver)

      // Observe measure timing
      const measureObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.addEntry({
            name: "LCP",
            startTime: entry.startTime,
            duration: entry.startTime,
            type: "largest-contentful-paint",
          })
        }
      })
      measureObserver.observe({ entryTypes: ["measure"] })
      this.observers.push(measureObserver)
    } catch (error) {
      console.warn("Error initializing performance observers:", error)
    }
  }

  private addEntry(entry: PerformanceEntry) {
    this.entries.push(entry)

    // Keep only last 100 entries to prevent memory leaks
    if (this.entries.length > 100) {
      this.entries = this.entries.slice(-100)
    }
  }

  measureLCP() {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
      return
    }

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.set("lcp", entry.startTime)
          this.addEntry({
            name: "LCP",
            startTime: entry.startTime,
            duration: entry.startTime,
            type: "largest-contentful-paint",
          })
        }
      })
      observer.observe({ entryTypes: ["largest-contentful-paint"] })
      this.observers.push(observer)
    } catch (error) {
      console.warn("Error measuring LCP:", error)
    }
  }

  measureFID() {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
      return
    }

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = (entry as any).processingStart - entry.startTime
          this.metrics.set("fid", fid)
          this.addEntry({
            name: "FID",
            startTime: entry.startTime,
            duration: fid,
            type: "first-input",
          })
        }
      })
      observer.observe({ entryTypes: ["first-input"] })
      this.observers.push(observer)
    } catch (error) {
      console.warn("Error measuring FID:", error)
    }
  }

  measureCLS() {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
      return
    }

    try {
      let clsValue = 0
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        this.metrics.set("cls", clsValue)
      })
      observer.observe({ entryTypes: ["layout-shift"] })
      this.observers.push(observer)
    } catch (error) {
      console.warn("Error measuring CLS:", error)
    }
  }

  measureMemoryUsage() {
    if (typeof window !== "undefined" && "performance" in window && "memory" in performance) {
      const memory = (performance as any).memory
      this.metrics.set("memory_used", memory.usedJSHeapSize)
      this.metrics.set("memory_total", memory.totalJSHeapSize)
      this.metrics.set("memory_limit", memory.jsHeapSizeLimit)
    }
  }

  startNavigation(route: string) {
    this.metrics.set(`navigation_${route}_start`, performance.now())
  }

  endNavigation(route: string) {
    const startTime = this.metrics.get(`navigation_${route}_start`)
    if (startTime) {
      const duration = performance.now() - startTime
      this.metrics.set(`navigation_${route}_duration`, duration)
      return duration
    }
    return 0
  }

  startPrefetch(url: string) {
    this.prefetchTimings.set(url, {
      url,
      startTime: performance.now(),
    })
  }

  endPrefetch(url: string, success: boolean) {
    const timing = this.prefetchTimings.get(url)
    if (timing) {
      timing.endTime = performance.now()
      timing.success = success

      this.addEntry({
        name: `prefetch-${url}`,
        startTime: timing.startTime,
        duration: timing.endTime - timing.startTime,
        type: "prefetch",
      })
    }
  }

  getEntries(): PerformanceEntry[] {
    return [...this.entries]
  }

  getPrefetchTimings(): PrefetchTiming[] {
    return Array.from(this.prefetchTimings.values())
  }

  getNavigationMetrics(): Record<string, number> {
    const navMetrics: Record<string, number> = {}
    this.metrics.forEach((value, key) => {
      if (key.includes("navigation_")) {
        navMetrics[key] = value
      }
    })
    return navMetrics
  }

  getPrefetchMetrics(): Record<string, any> {
    const prefetchData: Record<string, any> = {}
    this.prefetchTimings.forEach((value, key) => {
      const duration = value.endTime ? value.endTime - value.startTime : null
      prefetchData[key] = {
        duration,
        success: value.success,
        efficiency: duration ? (value.success ? duration : Number.POSITIVE_INFINITY) : null,
      }
    })
    return prefetchData
  }

  getCoreWebVitals(): Record<string, number> {
    return {
      lcp: this.metrics.get("lcp") || 0,
      fid: this.metrics.get("fid") || 0,
      cls: this.metrics.get("cls") || 0,
    }
  }

  getMemoryMetrics(): Record<string, number> {
    return {
      used: this.metrics.get("memory_used") || 0,
      total: this.metrics.get("memory_total") || 0,
      limit: this.metrics.get("memory_limit") || 0,
    }
  }

  exportMetrics(): Record<string, any> {
    return {
      navigation: this.getNavigationMetrics(),
      prefetch: this.getPrefetchMetrics(),
      coreWebVitals: this.getCoreWebVitals(),
      memory: this.getMemoryMetrics(),
      timestamp: Date.now(),
    }
  }

  cleanup() {
    // Disconnect all observers
    this.observers.forEach((observer) => {
      try {
        observer.disconnect()
      } catch (error) {
        console.warn("Error disconnecting performance observer:", error)
      }
    })
    this.observers = []

    // Clear data
    this.entries = []
    this.prefetchTimings.clear()
    this.metrics.clear()

    // Run cleanup callbacks
    this.cleanupCallbacks.forEach((callback) => {
      try {
        callback()
      } catch (error) {
        console.warn("Error running cleanup callback:", error)
      }
    })
    this.cleanupCallbacks = []
  }

  addCleanupCallback(callback: () => void) {
    this.cleanupCallbacks.push(callback)
  }
}

// Performance audit utilities
export const performanceAudit = {
  // Audit navigation performance
  auditNavigation: async (): Promise<Record<string, any>> => {
    const monitor = PerformanceMonitor.getInstance()
    const metrics = monitor.exportMetrics()

    return {
      ...metrics,
      audit: {
        navigationEfficiency: performanceAudit.calculateNavigationEfficiency(metrics.navigation),
        prefetchEffectiveness: performanceAudit.calculatePrefetchEffectiveness(metrics.prefetch),
        overallScore: performanceAudit.calculateOverallScore(metrics),
      },
      recommendations: performanceAudit.getPerformanceRecommendations(metrics),
    }
  },

  calculateNavigationEfficiency: (navMetrics: Record<string, number>): number => {
    const durations = Object.values(navMetrics).filter((v) => typeof v === "number" && v > 0)
    if (durations.length === 0) return 100

    const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length
    return Math.max(0, 100 - avgDuration / 10) // Score based on average duration
  },

  calculatePrefetchEffectiveness: (prefetchMetrics: Record<string, any>): number => {
    const metrics = Object.values(prefetchMetrics)
    if (metrics.length === 0) return 100

    const successRate = metrics.filter((m: any) => m.success).length / metrics.length
    const avgDuration =
      metrics.filter((m: any) => m.duration).reduce((sum: number, m: any) => sum + m.duration, 0) / metrics.length

    return Math.round(successRate * 70 + Math.max(0, 30 - avgDuration / 100) * 30)
  },

  calculateOverallScore: (metrics: Record<string, any>): number => {
    const cwv = metrics.coreWebVitals
    let score = 100

    // Deduct points for poor Core Web Vitals
    if (cwv.lcp > 2500) score -= 20
    if (cwv.fid > 100) score -= 15
    if (cwv.cls > 0.1) score -= 15

    // Factor in navigation and prefetch efficiency
    const navEfficiency = performanceAudit.calculateNavigationEfficiency(metrics.navigation)
    const prefetchEffectiveness = performanceAudit.calculatePrefetchEffectiveness(metrics.prefetch)

    return Math.round((score + navEfficiency + prefetchEffectiveness) / 3)
  },

  getPerformanceRecommendations: (metrics: Record<string, any>): string[] => {
    const recommendations: string[] = []
    const cwv = metrics.coreWebVitals

    if (cwv.lcp > 2500) {
      recommendations.push("LCP is slow. Consider optimizing images and reducing server response time.")
    }

    if (cwv.fid > 100) {
      recommendations.push("FID is high. Consider reducing JavaScript execution time.")
    }

    if (cwv.cls > 0.1) {
      recommendations.push("CLS is high. Ensure proper sizing for dynamic content.")
    }

    const prefetchMetrics = metrics.prefetch
    const failedPrefetches = Object.values(prefetchMetrics).filter((m: any) => !m.success).length
    const totalPrefetches = Object.keys(prefetchMetrics).length

    if (totalPrefetches > 0 && failedPrefetches / totalPrefetches > 0.2) {
      recommendations.push("High prefetch failure rate. Check network conditions and prefetch strategy.")
    }

    // Memory recommendations
    if (metrics.memory.used / metrics.memory.limit > 0.8) {
      recommendations.push("High memory usage detected. Consider optimizing component lifecycle and cleanup.")
    }

    return recommendations
  },
}

export const NavigationPerformanceMonitor = PerformanceMonitor

export function cleanupPerformanceMonitor() {
  const instance = PerformanceMonitor.getInstance()
  instance.cleanup()
  // Reset singleton
  ;(PerformanceMonitor as any).instance = null
}

// Auto-cleanup on page unload
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", cleanupPerformanceMonitor)
  window.addEventListener("pagehide", cleanupPerformanceMonitor)
}
