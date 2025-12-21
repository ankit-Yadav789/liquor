import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"

const mockUsers = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "user",
    orders: 12,
    totalSpent: 45000,
    status: "active",
    joinedAt: "2024-06-15",
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya@example.com",
    role: "user",
    orders: 8,
    totalSpent: 32000,
    status: "active",
    joinedAt: "2024-08-20",
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@jaipurwines.com",
    role: "admin",
    orders: 0,
    totalSpent: 0,
    status: "active",
    joinedAt: "2024-01-01",
  },
]

export async function GET() {
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json({
    users: mockUsers,
    total: mockUsers.length,
  })
}
