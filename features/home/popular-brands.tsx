"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const brands = [
  { name: "Johnnie Walker", logo: "/johnnie-walker-logo.jpg" },
  { name: "Jack Daniels", logo: "/jack-daniels-logo.jpg" },
  { name: "Chivas Regal", logo: "/chivas-regal-logo.jpg" },
  { name: "Absolut", logo: "/absolut-vodka-logo.jpg" },
  { name: "Bacardi", logo: "/bacardi-logo.jpg" },
  { name: "Hennessy", logo: "/hennessy-logo.jpg" },
  { name: "Beefeater", logo: "/beefeater-gin-logo.jpg" },
  { name: "Grey Goose", logo: "/grey-goose-logo.jpg" },
]

export function PopularBrands() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-balance text-4xl font-bold tracking-tight lg:text-5xl">Popular Brands</h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">Shop from the world's finest brands</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-4">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Link
              href={`/products?brand=${brand.name}`}
              className="group block rounded-lg border bg-card p-4 transition-all hover:shadow-lg"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className="h-40 w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
