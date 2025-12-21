import { NextResponse } from "next/server"
import { getFilteredProducts } from "@/lib/mock-data/products"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const filters = {
      category: searchParams.get("category") || undefined,
      brand: searchParams.get("brand") || undefined,
      minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
      maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
      minAlcohol: searchParams.get("minAlcohol") ? Number(searchParams.get("minAlcohol")) : undefined,
      maxAlcohol: searchParams.get("maxAlcohol") ? Number(searchParams.get("maxAlcohol")) : undefined,
      rating: searchParams.get("rating") ? Number(searchParams.get("rating")) : undefined,
      inStock: searchParams.get("inStock") === "true",
      search: searchParams.get("search") || undefined,
      sortBy: searchParams.get("sortBy") || undefined,
      page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
      limit: searchParams.get("limit") ? Number(searchParams.get("limit")) : 12,
    }

    const result = getFilteredProducts(filters)

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
