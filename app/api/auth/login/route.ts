import { NextResponse } from "next/server"
import { loginSchema } from "@/lib/validations/auth"
import { verifyPassword } from "@/lib/password"
import { createToken, setAuthCookie } from "@/lib/auth"
import { MOCK_USERS, MOCK_USER_PASSWORDS } from "@/lib/mock-data/users"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = loginSchema.parse(body)

    if (!(global as any).users) {
      ;(global as any).users = [...MOCK_USERS]
      ;(global as any).userPasswords = { ...MOCK_USER_PASSWORDS }
    }

    // Mock user lookup - replace with database query in production
    const users = (global as any).users || []
    const user = users.find((u: any) => u.email === validatedData.email)

    const isDev = process.env.NODE_ENV !== "production"

    if (!user) {
      if (isDev) {
        console.log("Login attempt - user not found:", { email: validatedData.email })
        return NextResponse.json({ error: "User not found" }, { status: 401 })
      }
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Verify password
    const userPasswords = (global as any).userPasswords || {}
    const hashedPassword = userPasswords[user.id]

    if (!hashedPassword) {
      if (isDev) {
        console.log("Login attempt - no stored password for user:", { id: user.id })
        return NextResponse.json({ error: "No password for user" }, { status: 401 })
      }
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const isValidPassword = await verifyPassword(validatedData.password, hashedPassword)

    if (!isValidPassword) {
      if (isDev) {
        console.log("Login attempt - password mismatch for user:", { id: user.id })
        return NextResponse.json({ error: "Invalid password" }, { status: 401 })
      }
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // Create JWT token
    const token = await createToken(user)
    await setAuthCookie(token)

    // Return user without sensitive data
    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
