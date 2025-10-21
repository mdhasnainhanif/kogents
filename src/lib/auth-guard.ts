// Authentication and authorization utilities
export interface User {
  id: string
  email: string
  name: string
  role: "admin" | "user" | "viewer"
  permissions: string[]
  subscription: "free" | "pro" | "enterprise"
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

// Route protection configuration
export interface RouteGuard {
  path: string
  requiresAuth: boolean
  requiredRole?: User["role"]
  requiredPermissions?: string[]
  requiredSubscription?: User["subscription"]
  redirectTo?: string
}

export const ROUTE_GUARDS: RouteGuard[] = [
  {
    path: "/dashboard",
    requiresAuth: true,
    redirectTo: "/login",
  },
  {
    path: "/chatbots",
    requiresAuth: true,
    requiredPermissions: ["chatbots:read"],
    redirectTo: "/dashboard",
  },
  {
    path: "/chatbots/brief",
    requiresAuth: true,
    requiredPermissions: ["chatbots:create"],
    requiredSubscription: "pro",
    redirectTo: "/chatbots",
  },
  {
    path: "/analytics",
    requiresAuth: true,
    requiredPermissions: ["analytics:read"],
    redirectTo: "/dashboard",
  },
  {
    path: "/team",
    requiresAuth: true,
    requiredRole: "admin",
    redirectTo: "/dashboard",
  },
  {
    path: "/settings",
    requiresAuth: true,
    requiredPermissions: ["settings:read"],
    redirectTo: "/dashboard",
  },
  {
    path: "/settings/billing",
    requiresAuth: true,
    requiredRole: "admin",
    requiredSubscription: "pro",
    redirectTo: "/settings",
  },
]

export class AuthGuard {
  private static instance: AuthGuard
  private authState: AuthState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  }

  static getInstance(): AuthGuard {
    if (!AuthGuard.instance) {
      AuthGuard.instance = new AuthGuard()
    }
    return AuthGuard.instance
  }

  // Check if user can access a route
  canAccessRoute(path: string, user: User | null): { allowed: boolean; redirectTo?: string; reason?: string } {
    const guard = ROUTE_GUARDS.find((g) => g.path === path || path.startsWith(g.path))

    if (!guard) {
      return { allowed: true }
    }

    // Check authentication
    if (guard.requiresAuth && !user) {
      return {
        allowed: false,
        redirectTo: guard.redirectTo || "/login",
        reason: "Authentication required",
      }
    }

    if (!user) {
      return { allowed: true }
    }

    // Check role
    if (guard.requiredRole && user.role !== guard.requiredRole) {
      // Allow admin to access all roles
      if (user.role !== "admin") {
        return {
          allowed: false,
          redirectTo: guard.redirectTo || "/dashboard",
          reason: `Required role: ${guard.requiredRole}`,
        }
      }
    }

    // Check permissions
    if (guard.requiredPermissions) {
      const hasAllPermissions = guard.requiredPermissions.every((permission) => user.permissions.includes(permission))

      if (!hasAllPermissions) {
        return {
          allowed: false,
          redirectTo: guard.redirectTo || "/dashboard",
          reason: `Missing permissions: ${guard.requiredPermissions.join(", ")}`,
        }
      }
    }

    // Check subscription
    if (guard.requiredSubscription) {
      const subscriptionLevels = { free: 0, pro: 1, enterprise: 2 }
      const userLevel = subscriptionLevels[user.subscription]
      const requiredLevel = subscriptionLevels[guard.requiredSubscription]

      if (userLevel < requiredLevel) {
        return {
          allowed: false,
          redirectTo: guard.redirectTo || "/dashboard",
          reason: `Required subscription: ${guard.requiredSubscription}`,
        }
      }
    }

    return { allowed: true }
  }

  // Get accessible routes for a user
  getAccessibleRoutes(user: User | null): string[] {
    return ROUTE_GUARDS.filter((guard) => this.canAccessRoute(guard.path, user).allowed).map((guard) => guard.path)
  }

  // Check if user has specific permission
  hasPermission(user: User | null, permission: string): boolean {
    if (!user) return false
    return user.permissions.includes(permission) || user.role === "admin"
  }

  // Check if user has required subscription
  hasSubscription(user: User | null, requiredSubscription: User["subscription"]): boolean {
    if (!user) return false

    const subscriptionLevels = { free: 0, pro: 1, enterprise: 2 }
    const userLevel = subscriptionLevels[user.subscription]
    const requiredLevel = subscriptionLevels[requiredSubscription]

    return userLevel >= requiredLevel
  }

  // Mock authentication (replace with real auth service)
  async authenticate(email: string, password: string): Promise<User> {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock user data
    const mockUser: User = {
      id: "1",
      email,
      name: "John Doe",
      role: "admin",
      permissions: ["chatbots:read", "chatbots:create", "analytics:read", "settings:read"],
      subscription: "pro",
    }

    this.authState = {
      user: mockUser,
      isAuthenticated: true,
      isLoading: false,
      error: null,
    }

    return mockUser
  }

  // Get current auth state
  getAuthState(): AuthState {
    return { ...this.authState }
  }

  // Logout
  logout(): void {
    this.authState = {
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    }
  }
}
