import { NextResponse } from "next/server"
import { registerSchema } from "@/lib/validations/auth"
import { hashPassword } from "@/lib/password"
import { createToken, setAuthCookie } from "@/lib/auth"
import type { User } from "@/types"
import { MOCK_USERS, MOCK_USER_PASSWORDS } from "@/lib/mock-data/users"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = registerSchema.parse(body)

    if (!(global as any).users) {
      ;(global as any).users = [...MOCK_USERS]
      ;(global as any).userPasswords = { ...MOCK_USER_PASSWORDS }
    }

    const users = (global as any).users

    // Check if user already exists
    const existingUser = users.find((u: any) => u.email === validatedData.email)
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    // Hash password
    const hashedPassword = await hashPassword(validatedData.password)

    // Create user
    const newUser: User = {
      id: `user_${Date.now()}`,
      email: validatedData.email,
      name: validatedData.name,
      phone: validatedData.phone,
      role: "user",
      isAgeVerified: validatedData.isAgeVerified,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    // Store user (with hashed password separately)
    users.push(newUser)

    // Store password separately (in production, use database)
    ;(global as any).userPasswords = (global as any).userPasswords || {}
    ;(global as any).userPasswords[newUser.id] = hashedPassword

    // Create JWT token
    const token = await createToken(newUser)
    await setAuthCookie(token)

    // Return user without sensitive data
    return NextResponse.json({ user: newUser }, { status: 201 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }
    return NextResponse.json({ error: "Registration failed" }, { status: 500 })
  }
}
