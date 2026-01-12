"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"


import { mockProducts } from "@/lib/mock-data/products"
import { Product } from "@/types"

export function BestSellers() {

  const bestSellers = [
    "jameson-irish-whiskey",
    "rockford-reserve",
    "ballantines-finest",
    "antiquity-blue"
  ]
    .map(slug => mockProducts.find(p => p.slug === slug))
    .filter((p): p is Product => p !== undefined)


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
                  <Image
                    src={product.images?.[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
