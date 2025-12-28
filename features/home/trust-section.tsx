"use client"

import { motion } from "framer-motion"
import { ShieldCheck, CreditCard, Truck, FileCheck } from "lucide-react"

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Authentic Brands",
    description: "100% genuine products from authorized distributors",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe & encrypted payment gateway with multiple options",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick delivery to your doorstep with careful handling",
  },
  {
    icon: FileCheck,
    title: "Legal Compliance",
    description: "Fully licensed and compliant with all regulations",
  },
]

export function TrustSection() {
  return (
    <section className="border-y bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight lg:text-4xl">Why Choose DaruAala</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">Your trusted partner for premium beverages</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
