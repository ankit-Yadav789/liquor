import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  const { id } = await params

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { status } = await request.json()

    // In production: Update order status in database
    // await db.orders.update(id, { status, updatedAt: new Date() })

    return NextResponse.json({
      success: true,
      message: "Order status updated successfully",
      order: { id, status, updatedAt: new Date() },
    })
  } catch (error) {
    console.error("[ADMIN_ORDERS_PATCH]", error)
    return NextResponse.json({ error: "Failed to update order" }, { status: 500 })
  }
}
