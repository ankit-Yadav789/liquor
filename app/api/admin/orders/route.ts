import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"

// Mock orders for admin view
const mockOrders = [
  {
    id: "ORD001",
    userId: "user_1",
    customerName: "Rahul Sharma",
    customerEmail: "rahul@example.com",
    total: 8500,
    status: "confirmed",
    paymentStatus: "paid",
    itemsCount: 3,
    createdAt: "2025-01-15T10:30:00Z",
  },
  {
    id: "ORD002",
    userId: "user_2",
    customerName: "Priya Patel",
    customerEmail: "priya@example.com",
    total: 12500,
    status: "shipped",
    paymentStatus: "paid",
    itemsCount: 5,
    createdAt: "2025-01-14T15:45:00Z",
  },
  {
    id: "ORD003",
    userId: "user_3",
    customerName: "Amit Kumar",
    customerEmail: "amit@example.com",
    total: 4500,
    status: "pending",
    paymentStatus: "pending",
    itemsCount: 2,
    createdAt: "2025-01-16T09:15:00Z",
  },
]

export async function GET(request: Request) {
  const user = await getCurrentUser()

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status")

  let filtered = mockOrders

  if (status && status !== "all") {
    filtered = mockOrders.filter((order) => order.status === status)
  }

  return NextResponse.json({
    orders: filtered,
    total: filtered.length,
  })
}
