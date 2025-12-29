"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/features/products/product-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { mockProducts } from "@/lib/mock-data/products"

// Get top 4 highest rated products
const featuredProducts = [...mockProducts]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 4)

export function FeaturedProducts() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold md:text-4xl">Featured Products</h2>
            <p className="mt-3 text-muted-foreground">Handpicked selection of our finest offerings</p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex bg-transparent">
            <Link href="/products">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button asChild variant="outline">
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
