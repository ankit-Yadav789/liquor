"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-10 md:py-22">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="font-serif text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
              Premium <span className="text-primary">Wines</span> & Spirits
            </h1>
            <p className="text-lg text-muted-foreground text-pretty md:text-xl">
              Discover our curated collection of fine wines, aged whisky, and craft beer. Quality guaranteed with fast
              delivery to your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Premium Products</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Top Brands</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src="/premium-wine-bottles-collection-elegant-lighting.jpg"
                alt="Premium wine collection"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 rounded-xl border bg-card p-6 shadow-lg"
            >
              <p className="text-sm font-medium text-muted-foreground">Special Offer</p>
              <p className="mt-1 font-serif text-2xl font-bold">20% OFF</p>
              <p className="text-sm text-muted-foreground">On your first order</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
    </section>
  )
}
