"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/features/products/product-card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Mock data - will be replaced with real data
const mockProducts = [
  {
    id: "1",
    name: "Château Margaux 2015",
    slug: "chateau-margaux-2015",
    description: "A legendary Bordeaux wine with exceptional aging potential",
    category: "wine" as const,
    brand: "Château Margaux",
    price: 45000,
    originalPrice: 50000,
    discount: 10,
    alcoholPercentage: 13.5,
    volume: "750ml",
    origin: "France",
    images: ["/red-wine-bottle-chateau-margaux.jpg"],
    stock: 12,
    featured: true,
    rating: 4.9,
    reviewCount: 125,
    tags: ["red wine", "bordeaux", "premium"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Johnnie Walker Blue Label",
    slug: "johnnie-walker-blue-label",
    description: "An exceptional blend of rare whiskies",
    category: "whisky" as const,
    brand: "Johnnie Walker",
    price: 18000,
    alcoholPercentage: 40,
    volume: "750ml",
    origin: "Scotland",
    images: ["/johnnie-walker-blue-label-whisky.jpg"],
    stock: 25,
    featured: true,
    rating: 4.8,
    reviewCount: 89,
    tags: ["scotch", "blended", "premium"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Dom Pérignon Vintage 2012",
    slug: "dom-perignon-vintage-2012",
    description: "The ultimate expression of champagne excellence",
    category: "wine" as const,
    brand: "Dom Pérignon",
    price: 25000,
    originalPrice: 28000,
    discount: 11,
    alcoholPercentage: 12.5,
    volume: "750ml",
    origin: "France",
    images: ["/dom-perignon-champagne-bottle.jpg"],
    stock: 8,
    featured: true,
    rating: 5.0,
    reviewCount: 156,
    tags: ["champagne", "sparkling", "luxury"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Glenfiddich 18 Year Old",
    slug: "glenfiddich-18-year-old",
    description: "Rich and complex single malt scotch",
    category: "whisky" as const,
    brand: "Glenfiddich",
    price: 8500,
    alcoholPercentage: 40,
    volume: "750ml",
    origin: "Scotland",
    images: ["/glenfiddich-18-whisky.png"],
    stock: 30,
    featured: true,
    rating: 4.7,
    reviewCount: 203,
    tags: ["single malt", "aged", "scotch"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

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
          {mockProducts.map((product) => (
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
