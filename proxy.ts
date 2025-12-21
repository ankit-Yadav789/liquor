import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getAuthTokenFromRequest, verifyToken } from "./lib/auth"

// Define protected routes
const protectedRoutes = ["/profile", "/orders", "/checkout"]
const adminRoutes = ["/admin"]
const authRoutes = ["/login", "/register"]

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = await getAuthTokenFromRequest(request)

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route))
  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route))
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  // If accessing auth routes while logged in, redirect to home
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // If accessing protected routes without token, redirect to login
  if ((isProtectedRoute || isAdminRoute) && !token) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Verify token for protected routes
  if ((isProtectedRoute || isAdminRoute) && token) {
    const payload = await verifyToken(token)

    if (!payload) {
      const loginUrl = new URL("/login", request.url)
      loginUrl.searchParams.set("redirect", pathname)
      return NextResponse.redirect(loginUrl)
    }

    // Check admin access
    if (isAdminRoute && payload.role !== "admin" && payload.role !== "manager") {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
}
