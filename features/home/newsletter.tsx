"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscribed Successfully!",
        description: "Check your email for a 10% discount code.",
      })
      setEmail("")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl border bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 text-center md:p-12"
      >
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-secondary-foreground">
            <Gift className="h-4 w-4" />
            Get 10% Off on First Order
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight lg:text-4xl">Subscribe to Our Newsletter</h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Get exclusive offers, new arrivals, and special discounts delivered to your inbox
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 rounded-md border bg-background px-4 py-3 text-sm"
            />
            <Button type="submit" size="lg" disabled={isLoading}>
              <Mail className="mr-2 h-4 w-4" />
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="mt-4 text-xs text-muted-foreground">
            By subscribing, you agree to receive promotional emails. You can unsubscribe anytime.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
