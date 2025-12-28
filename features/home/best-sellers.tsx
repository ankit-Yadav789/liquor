"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, Trophy } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BestSellerProduct {
  id: string
  name: string
  brand: string
  price: number
  rating: number
  images: string[]
  slug: string
}

export function BestSellers() {
  const [bestSellers, setBestSellers] = useState<BestSellerProduct[]>([
    {
      id: "45",
      name: "Jameson Irish Whiskey",
      brand: "Jameson",
      price: 3000,
      rating: 4.8,
      images: ["/whisky-placeholder.png"],
      slug: "jameson-irish-whiskey"
    },
    {
      id: "46",
      name: "Rockford Reserve",
      brand: "Rockford",
      price: 1400,
      rating: 4.4,
      images: ["/whisky-placeholder.png"],
      slug: "rockford-reserve"
    },
    {
      id: "47",
      name: "Ballantine's Finest",
      brand: "Ballantine's",
      price: 1900,
      rating: 4.6,
      images: ["/whisky-placeholder.png"],
      slug: "ballantines-finest"
    },
    {
      id: "48",
      name: "Antiquity Blue",
      brand: "Antiquity",
      price: 1600,
      rating: 4.5,
      images: ["/whisky-placeholder.png"],
      slug: "antiquity-blue"
    }
  ])

  // useEffect(() => {
  //   // Fetch best sellers from API
  //   fetch("/api/products?sort=sales&limit=4")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // Only update if API returns valid data
  //       if (data.products && data.products.length > 0) {
  //         setBestSellers(data.products.slice(0, 4))
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Using fallback products:", error)
  //       // Keep the fallback data if API fails
  //     })
  // }, [])

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
        >
          <Trophy className="h-4 w-4" />
          Most Loved
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl"
        >
          Best Sellers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-pretty text-lg text-muted-foreground"
        >
          Discover what our customers love the most
        </motion.p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {bestSellers.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/products/${product.slug}`}>
              <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg">
                <div className="absolute right-2 top-2 z-10 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Loved
                </div>
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.images?.[0] || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      console.error("Image failed to load:", product.images?.[0])
                      e.currentTarget.src = "/placeholder.svg"
                    }}
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                  <h3 className="mt-1 font-semibold line-clamp-2">{product.name}</h3>
                  <div className="mt-2 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-muted"
                        }`}
                      />
                    ))}
                    <span className="ml-1 text-sm text-muted-foreground">({product.rating})</span>
                  </div>
                  <p className="mt-2 text-lg font-bold text-primary">₹{product.price}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <Button asChild size="lg">
          <Link href="/products">View All Products</Link>
        </Button>
      </motion.div>
    </section>
  )
}
