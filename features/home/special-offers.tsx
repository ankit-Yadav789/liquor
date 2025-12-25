"use client"

import { motion } from "framer-motion"
import { Tag, Clock, Percent } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const offers = [
  {
    title: "Flat 20% Off",
    description: "On orders above ₹5000",
    code: "WINE20",
    icon: Percent,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Weekend Special",
    description: "Buy 2 Get 1 Free on selected items",
    code: "WEEKEND",
    icon: Tag,
    color: "bg-secondary/10 text-secondary-foreground",
  },
  // {
  //   title: "Limited Time",
  //   description: "Extra 15% off on premium whisky",
  //   code: "WHISKY15",
  //   icon: Clock,
  //   color: "bg-accent/10 text-accent-foreground",
  // },
]

export function SpecialOffers() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
          <Tag className="h-4 w-4" />
          Limited Offers
        </div>
        <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl">Special Deals & Offers</h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">Save big on your favorite drinks</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-lg border bg-card p-6 text-center transition-shadow hover:shadow-lg"
          >
            <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${offer.color}`}>
              <offer.icon className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold">{offer.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{offer.description}</p>
            <div className="mt-4 rounded-md border-2 border-dashed border-primary bg-primary/5 p-3">
              <p className="text-xs text-muted-foreground">Use Code</p>
              <p className="mt-1 text-lg font-bold text-primary">{offer.code}</p>
            </div>
            <Button asChild className="mt-4 w-full">
              <Link href="/products">Shop Now</Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
