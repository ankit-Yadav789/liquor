import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { mockProducts } from "@/lib/mock-data/products"

// GET single product
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  const { id } = await params

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const product = mockProducts.find((p) => p.id === id)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json({ product })
}

// PATCH - Update product
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  const { id } = await params

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const data = await request.json()

    // In production: Validate with Zod and update in database
    // const product = await db.products.update(id, { ...data, updatedAt: new Date() })

    return NextResponse.json({
      success: true,
      product: { id, ...data, updatedAt: new Date() },
    })
  } catch (error) {
    console.error("[ADMIN_PRODUCTS_PATCH]", error)
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

// DELETE - Delete product
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser()
  const { id } = await params

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // In production: Delete from database
    // await db.products.delete(id)

    return NextResponse.json({ success: true, message: "Product deleted successfully" })
  } catch (error) {
    console.error("[ADMIN_PRODUCTS_DELETE]", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
