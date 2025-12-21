"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"

export function ResponsibleDrinking() {
  return (
    <section className="border-y bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-warning/10 px-4 py-2 text-warning">
            <AlertTriangle className="h-5 w-5" />
            <span className="text-sm font-semibold">Important Notice</span>
          </div>
          <h2 className="text-balance text-2xl font-bold tracking-tight lg:text-3xl">Drink Responsibly</h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            This website is for adults aged 21 years or above. Alcohol consumption can be harmful to your health. Please
            drink responsibly and never drink and drive.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <Link href="/responsible-drinking" className="font-medium text-primary hover:underline">
              Learn more about responsible drinking
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
