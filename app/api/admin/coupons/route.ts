import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import type { Coupon } from "@/types"

const mockCoupons: Coupon[] = [
  {
    id: "1",
    code: "WELCOME10",
    discountType: "percentage",
    discountValue: 10,
    minOrderValue: 1000,
    maxDiscount: 500,
    usageCount: 45,
    usageLimit: 100,
    expiresAt: new Date("2025-03-31"),
    isActive: true,
    createdAt: new Date("2025-01-01"),
  },
  {
    id: "2",
    code: "FLAT500",
    discountType: "fixed",
    discountValue: 500,
    minOrderValue: 5000,
    usageCount: 12,
    usageLimit: 50,
    expiresAt: new Date("2025-02-28"),
    isActive: true,
    createdAt: new Date("2025-01-05"),
  },
]

export async function GET() {
  const user = await getCurrentUser()

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json({
    coupons: mockCoupons,
    total: mockCoupons.length,
  })
}

export async function POST(request: Request) {
  const user = await getCurrentUser()

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const data = await request.json()

    const newCoupon: Coupon = {
      id: `coupon_${Date.now()}`,
      usageCount: 0,
      isActive: true,
      createdAt: new Date(),
      ...data,
    }

    // In production: Save to database
    // await db.coupons.create(newCoupon)

    return NextResponse.json({ success: true, coupon: newCoupon }, { status: 201 })
  } catch (error) {
    console.error("[ADMIN_COUPONS_POST]", error)
    return NextResponse.json({ error: "Failed to create coupon" }, { status: 500 })
  }
}
