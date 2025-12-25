"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState, useRef } from "react"

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
  {
    id: 5,
    name: "Vikram Patel",
    rating: 5,
    comment: "Amazing collection and fast delivery. The best online liquor store!",
    product: "Grey Goose Vodka",
  },
  {
    id: 6,
    name: "Anjali Reddy",
    rating: 4,
    comment: "Great prices and excellent customer service. Highly satisfied!",
    product: "Bacardi Rum",
  },
]

export function CustomerReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

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
          {/* Horizontal Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[300px] md:w-[350px] snap-start"
              >
                <div className="h-full rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <div className="mt-4 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "fill-secondary text-secondary" : "text-muted"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground line-clamp-4">{review.comment}</p>
                  <div className="mt-4 border-t pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-xs text-muted-foreground">Purchased: {review.product}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator - Mobile Only */}
          <div className="mt-4 flex justify-center gap-2 md:hidden">
            {reviews.map((_, index) => (
              <div
                key={index}
                className="h-2 w-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>

          {/* Gradient Fade on Edges */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-muted/30 to-transparent" />
        </div>

        {/* Scroll Hint Text */}
        <p className="text-center text-sm text-muted-foreground mt-6 md:hidden">
          👈 Swipe to see more reviews
        </p>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
