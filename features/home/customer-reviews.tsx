"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Excellent service! Got my order delivered in just 2 hours. The product quality is top-notch.",
    product: "Johnnie Walker Black Label",
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    comment: "Best liquor store in Jaipur! Authentic products and great customer support.",
    product: "Chivas Regal 18 Years",
  },
  {
    id: 3,
    name: "Amit Singh",
    rating: 4,
    comment: "Wide variety of products and competitive prices. Highly recommended!",
    product: "Jack Daniel's Tennessee Whiskey",
  },
  {
    id: 4,
    name: "Neha Verma",
    rating: 5,
    comment: "Impressed with the packaging and delivery. Will definitely order again!",
    product: "Absolut Vodka",
  },
]

export function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="border-y bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">Customer Reviews</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">What our customers say about us</p>
        </motion.div>

        <div className="relative">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border bg-card p-6"
              >
                <Quote className="h-8 w-8 text-primary/20" />
                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-secondary text-secondary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{review.comment}</p>
                <div className="mt-4 border-t pt-4">
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Purchased: {review.product}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
