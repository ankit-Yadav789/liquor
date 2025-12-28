import { jwtVerify, SignJWT } from "jose"
import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import type { User } from "@/types"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "daruaala-secret-key-change-in-production")

const TOKEN_NAME = "daruaala-auth-token"

export async function createToken(user: User): Promise<string> {
  const token = await new SignJWT({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET)

  return token
}

export async function verifyToken(token: string) {
  try {
    const verified = await jwtVerify(token, JWT_SECRET)
    return verified.payload as {
      id: string
      email: string
      name: string
      role: "user" | "admin" | "manager"
    }
  } catch {
    return null
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies()
  cookieStore.set(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  })
}

export async function getAuthToken() {
  const cookieStore = await cookies()
  return cookieStore.get(TOKEN_NAME)?.value
}

export async function removeAuthCookie() {
  const cookieStore = await cookies()
  cookieStore.delete(TOKEN_NAME)
}

export async function getCurrentUser(): Promise<User | null> {
  const token = await getAuthToken()
  if (!token) return null

  const payload = await verifyToken(token)
  if (!payload) return null

  // In production, fetch full user from database
  return {
    id: payload.id,
    email: payload.email,
    name: payload.name,
    role: payload.role,
    isAgeVerified: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export async function getAuthTokenFromRequest(request: NextRequest) {
  return request.cookies.get(TOKEN_NAME)?.value
}
