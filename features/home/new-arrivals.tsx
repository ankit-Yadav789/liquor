"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface NewArrival {
  id: string
  name: string
  brand: string
  price: number
  rating: number
  image: string
  slug: string
}

export function NewArrivals() {
  const [newArrivals, setNewArrivals] = useState<NewArrival[]>([])

  useEffect(() => {
    fetch("/api/products?sort=newest&limit=4")
      .then((res) => res.json())
      .then((data) => setNewArrivals(data.products?.slice(0, 4) || []))
      .catch(console.error)
  }, [])

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary-foreground"
        >
          <Sparkles className="h-4 w-4" />
          Just Arrived
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl"
        >
          New Arrivals
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-pretty text-lg text-muted-foreground"
        >
          Discover the latest additions to our collection
        </motion.p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {newArrivals.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/products/${product.slug}`}>
              <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg">
                <div className="absolute right-2 top-2 z-10 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  New
                </div>
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
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
        <Button asChild size="lg" variant="outline">
          <Link href="/products">Explore All New Items</Link>
        </Button>
      </motion.div>
    </section>
  )
}
