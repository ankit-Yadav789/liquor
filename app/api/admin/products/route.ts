import { NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { mockProducts } from "@/lib/mock-data/products"
import type { Product } from "@/types"

// GET all products (admin view with all details)
export async function GET() {
  const user = await getCurrentUser()

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json({
    products: mockProducts,
    total: mockProducts.length,
  })
}

// POST - Create new product
export async function POST(request: Request) {
  const user = await getCurrentUser()

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const data = await request.json()

    // In production, validate data with Zod and save to database
    const newProduct: Product = {
      id: `product_${Date.now()}`,
      slug: data.name.toLowerCase().replace(/\s+/g, "-"),
      createdAt: new Date(),
      updatedAt: new Date(),
      rating: 0,
      reviewCount: 0,
      tags: [],
      featured: false,
      ...data,
    }

    // In production: Save to database
    // await db.products.create(newProduct)

    return NextResponse.json({ success: true, product: newProduct }, { status: 201 })
  } catch (error) {
    console.error("[ADMIN_PRODUCTS_POST]", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
