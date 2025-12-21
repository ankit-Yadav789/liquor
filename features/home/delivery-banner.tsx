"use client"

import { motion } from "framer-motion"
import { Truck, MapPin, Clock, Shield } from "lucide-react"

export function DeliveryBanner() {
  return (
    <section className="bg-primary py-12 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Truck className="mx-auto h-10 w-10" />
            <h3 className="mt-4 font-semibold">Fast Delivery</h3>
            <p className="mt-2 text-sm opacity-90">Same-day & next-day delivery available</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <MapPin className="mx-auto h-10 w-10" />
            <h3 className="mt-4 font-semibold">Delivery Locations</h3>
            <p className="mt-2 text-sm opacity-90">All across Jaipur & nearby areas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <Clock className="mx-auto h-10 w-10" />
            <h3 className="mt-4 font-semibold">Order Anytime</h3>
            <p className="mt-2 text-sm opacity-90">24/7 ordering with timely deliveries</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Shield className="mx-auto h-10 w-10" />
            <h3 className="mt-4 font-semibold">Legal Compliance</h3>
            <p className="mt-2 text-sm opacity-90">Licensed & following all regulations</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
