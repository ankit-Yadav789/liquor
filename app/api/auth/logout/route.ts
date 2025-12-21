import { NextResponse } from "next/server"
import { removeAuthCookie } from "@/lib/auth"

export async function POST() {
  try {
    await removeAuthCookie()
    return NextResponse.json({ message: "Logged out successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 })
  }
}
