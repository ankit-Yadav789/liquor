import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import type { Order, OrderItem } from "@/types"

// Mock orders storage - replace with database in production
const orders: Order[] = []

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { items, shippingAddress, paymentMethod, subtotal, discount, deliveryCharge, total } = body

    // Create order
    const order: Order = {
      id: `order_${Date.now()}`,
      userId: user.id,
      user,
      items: items as OrderItem[],
      subtotal,
      discount,
      tax: 0,
      deliveryCharge,
      total,
      status: "pending",
      paymentMethod,
      paymentStatus: paymentMethod === "cod" ? "pending" : "paid",
      shippingAddress,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    orders.push(order)

    // Store in global for demo purposes
    ;(global as any).orders = orders

    return NextResponse.json({ order }, { status: 201 })
  } catch (error) {
    console.error("Order creation error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const userOrders = ((global as any).orders || []).filter((order: Order) => order.userId === user.id)

    return NextResponse.json({ orders: userOrders }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 })
  }
}
