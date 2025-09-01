// Bundle optimization utilities and dynamic imports
// src/lib/bundle-optimization.ts

// Bundle optimization utilities and dynamic imports
export class BundleOptimizer {
  // Cache the **promise** of the import to dedupe concurrent calls
  private static loadedModules = new Map<string, Promise<any>>();
  private static preloadQueue: Array<() => Promise<any>> = [];
  private static isPreloading = false;

  // Dynamic import with caching
  static async loadModule<T>(moduleId: string, importFn: () => Promise<T>): Promise<T> {
    if (!this.loadedModules.has(moduleId)) {
      this.loadedModules.set(moduleId, importFn().catch((err) => {
        // Invalidate the cache on failure so future calls can retry
        this.loadedModules.delete(moduleId);
        throw err;
      }));
    }
    // Await the cached promise
    return this.loadedModules.get(moduleId)! as Promise<T>;
  }

  // Preload modules during idle time
  static queuePreload(importFn: () => Promise<any>) {
    this.preloadQueue.push(importFn);
    void this.processPreloadQueue();
  }

  private static async processPreloadQueue() {
    if (this.isPreloading || this.preloadQueue.length === 0) return;

    this.isPreloading = true;

    // Use requestIdleCallback if available, otherwise setTimeout
    const scheduleWork = (callback: () => void) => {
      // Cast window to support TS in SSR-safe checks
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        (window as any).requestIdleCallback(callback, { timeout: 5000 });
      } else {
        setTimeout(callback, 0);
      }
    };

    while (this.preloadQueue.length > 0) {
      const importFn = this.preloadQueue.shift()!;
      await new Promise<void>((resolve) => {
        scheduleWork(async () => {
          try {
            await importFn();
          } catch (error) {
            console.warn("Preload failed:", error);
          }
          resolve();
        });
      });
    }

    this.isPreloading = false;
  }

  // Tree shaking helper - only import what's needed
  static async loadSpecificExports<T extends Record<string, any>>(
    importFn: () => Promise<T>,
    exports: (keyof T)[],
  ): Promise<Pick<T, keyof T>> {
    const mod = await importFn(); // ✅ renamed from `module`
    const result = {} as Pick<T, keyof T>;

    for (const exportName of exports) {
      if (exportName in mod) {
        result[exportName] = mod[exportName];
      }
    }

    return result;
  }

  // Code splitting for route-based chunks
  static createRouteLoader(routePath: string) {
    return {
      component: () =>
        this.loadModule(
          `route-${routePath}`,
          () => import(`@/app${routePath}/page`),
        ),
      preload: () => this.queuePreload(() => import(`@/app${routePath}/page`)),
    };
  }

  // Feature-based code splitting
  static createFeatureLoader<T>(featureName: string, importPath: string) {
    return {
      load: (): Promise<T> =>
        this.loadModule(
          `feature-${featureName}`,
          () => import(importPath) as Promise<T>,
        ),
      preload: () => this.queuePreload(() => import(importPath)),
    };
  }
}

