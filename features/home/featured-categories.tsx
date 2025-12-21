"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { PRODUCT_CATEGORIES } from "@/lib/constants"
import { motion } from "framer-motion"

export function FeaturedCategories() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold md:text-4xl">Shop by Category</h2>
          <p className="mt-3 text-muted-foreground">Explore our premium selection of wines, spirits, and beer</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6"
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <motion.div key={category.value} variants={item}>
              <Link href={`/products?category=${category.value}`}>
                <Card className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg">
                  <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                    <div className="mb-4 text-6xl transition-transform group-hover:scale-110">{category.icon}</div>
                    <h3 className="text-center font-semibold text-lg">{category.label}</h3>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
