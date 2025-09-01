import type React from "react"
export interface NavigationState {
  activeItem: string
  expandedItems: string[]
  prefetchedRoutes: Set<string>
  isLoading: boolean
  error: string | null
}

export interface PrefetchConfig {
  enabled: boolean
  strategy: "immediate" | "viewport" | "hover"
  delay: number
  priority: "auto" | "high" | "low"
}

export interface NavigationItem {
  title: string
  url: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string
  children?: NavigationItem[]
}

export interface NetworkStatus {
  online: boolean
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g"
  saveData?: boolean
  downlink?: number
  rtt?: number
}
