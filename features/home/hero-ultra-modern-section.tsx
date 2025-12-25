"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Sparkles, Zap, Shield, Truck, ChevronDown } from "lucide-react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useState, useEffect, useRef } from "react"

// Floating 3D card effect
const FloatingCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10, rotateX: 5, scale: 1.02 }}
      className="transform-gpu"
    >
      {children}
    </motion.div>
  )
}

// Animated gradient blob
const GradientBlob = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 0.6 }}
    transition={{ duration: 1.5, delay }}
    className="absolute rounded-full blur-3xl"
    style={{
      background: "radial-gradient(circle, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-accent) 100%)",
      width: "600px",
      height: "600px"
    }}
  />
)

export function HeroUltraModernSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mouse tracking for 3D tilt effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10])
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10])

  const springConfig = { damping: 20, stiffness: 150 }
  const rotateXSpring = useSpring(rotateX, springConfig)
  const rotateYSpring = useSpring(rotateY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x)
      mouseY.set(y)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const handleCall = () => {
    window.location.href = "tel:+1234567890"
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in your premium collection. Let's chat!")
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      {/* Enhanced SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LiquorStore",
            "name": "Premium Liquor Collection",
            "description": "Ultra-premium wines, spirits, and craft beverages with same-day delivery",
            "url": "https://yourdomain.com",
            "telephone": "+1234567890",
            "priceRange": "$$-$$$",
            "image": "/premium-wine-cellar-collection.jpg",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2500",
              "bestRating": "5"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "paymentAccepted": "Cash, Credit Card, Debit Card",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Premium Liquor Products",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Premium Wine Collection"
                  }
                }
              ]
            }
          })
        }}
      />

      <section
        ref={containerRef}
        className="relative min-h-screen overflow-hidden bg-background"
        aria-label="Ultra-modern premium liquor hero section"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated gradient background */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40">
            <GradientBlob delay={0} />
          </div>
          <div className="absolute -bottom-40 -right-40">
            <GradientBlob delay={0.3} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <GradientBlob delay={0.6} />
          </div>
        </div> */}

        {/* Grid pattern overlay */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" /> */}

        {/* Main content */}
        <div className="container relative z-10 mx-auto px-2 py-10 md:py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Content */}
            <div className="space-y-10">
              {/* Animated badge with glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-xl opacity-60 animate-pulse" />
                  <div className="relative flex items-center gap-3 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border border-primary/30 px-6 py-3 backdrop-blur-xl">
                    <Sparkles className="h-5 w-5 text-secondary animate-spin-slow" />
                    <span className="font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      Award-Winning Selection 2024
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Main heading with staggered animation */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95]"
                >
                  <span className="block">Luxury</span>
                  <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    Redefined
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
                  <p className="text-lg font-semibold text-muted-foreground">
                    Premium Spirits & Fine Wines
                  </p>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
              >
                Experience the pinnacle of taste with our{" "}
                <span className="font-bold text-foreground">curated collection</span> of 
                world-class wines and spirits. From rare vintages to craft distillations.
              </motion.p>

              {/* CTA Buttons with advanced styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Button
                  size="lg"
                  onClick={handleCall}
                  className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-primary-foreground shadow-2xl hover:shadow-primary/50 transition-all duration-500 px-10 py-8 text-lg font-bold rounded-2xl"
                  aria-label="Call now for exclusive offers"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Phone className="h-6 w-6" />
                    <span>Call Now</span>
                    <Zap className="h-5 w-5 animate-pulse" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Button>

                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="group relative overflow-hidden border-2 border-secondary bg-secondary/5 hover:bg-secondary hover:text-secondary-foreground backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 px-10 py-8 text-lg font-bold rounded-2xl"
                  aria-label="Chat on WhatsApp"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span>WhatsApp</span>
                  </span>
                </Button>
              </motion.div>

              {/* Trust badges with icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="grid grid-cols-3 gap-4 pt-8"
              >
                {[
                  { icon: Shield, text: "100% Authentic", color: "from-primary to-accent" },
                  { icon: Zap, text: "Same Day", color: "from-secondary to-primary" },
                  { icon: Truck, text: "Free Shipping", color: "from-accent to-secondary" }
                ].map((badge, index) => (
                  <FloatingCard key={index} delay={1 + index * 0.1}>
                    <div className="flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 p-4 hover:border-primary/50 transition-all duration-300">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${badge.color} flex items-center justify-center`}>
                        <badge.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-bold text-center">{badge.text}</span>
                    </div>
                  </FloatingCard>
                ))}
              </motion.div>

              {/* Stats bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="flex items-center gap-8 pt-6 border-t border-border/50"
              >
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">500+</p>
                  <p className="text-sm text-muted-foreground font-medium">Products</p>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">50+</p>
                  <p className="text-sm text-muted-foreground font-medium">Brands</p>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
                <div>
                  <p className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">4.9★</p>
                  <p className="text-sm text-muted-foreground font-medium">Rating</p>
                </div>
              </motion.div>
            </div>

            {/* Right side - 3D Product showcase */}
            <motion.div
              style={{
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformStyle: "preserve-3d"
              }}
              className="relative hidden lg:block perspective-1000"
            >
              <div className="relative">
                {/* Main product display with bento grid */}
                <div className="grid grid-cols-6 grid-rows-6 gap-4 h-[600px]">
                  {/* Large featured image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    whileHover={{ scale: 1.02, z: 50 }}
                    className="col-span-4 row-span-4 rounded-3xl overflow-hidden shadow-2xl border-4 border-background relative group"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src="/premium-wine-cellar-collection.jpg"
                      alt="Premium wine cellar collection showcase"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-bold text-xl">Premium Collection</p>
                      <p className="text-white/80 text-sm">Curated Selection</p>
                    </div>
                  </motion.div>

                  {/* Small image 1 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    whileHover={{ scale: 1.05, z: 50 }}
                    className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-xl border-4 border-background"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src="/luxury-whiskey-bottles-bar.jpg"
                      alt="Luxury whiskey collection"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  {/* Small image 2 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ scale: 1.05, z: 50 }}
                    className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-xl border-4 border-background"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src="/craft-beer-selection-bar.jpg"
                      alt="Craft beer selection"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  {/* Medium image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    whileHover={{ scale: 1.05, z: 50 }}
                    className="col-span-4 row-span-2 rounded-3xl overflow-hidden shadow-xl border-4 border-background"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src="/champagne-celebration-elegant.jpg"
                      alt="Champagne celebration collection"
                      className="h-full w-full object-cover"
                    />
                  </motion.div>

                  {/* Stat card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={{ scale: 1.05, z: 50 }}
                    className="col-span-2 row-span-2 rounded-3xl bg-gradient-to-br from-primary via-secondary to-accent p-6 flex flex-col items-center justify-center text-center shadow-2xl border-4 border-background"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <p className="text-5xl font-bold text-primary-foreground mb-2">25%</p>
                    <p className="text-sm font-semibold text-primary-foreground/90">OFF</p>
                    <p className="text-xs text-primary-foreground/70 mt-1">First Order</p>
                  </motion.div>
                </div>

                {/* Floating glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl -z-10 opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-sm text-muted-foreground font-medium">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-6 w-6 text-primary" />
          </motion.div>
        </motion.div>

        {/* Cursor follower effect (desktop only) */}
        {isHovered && (
          <motion.div
            className="hidden lg:block fixed pointer-events-none z-50 h-8 w-8 rounded-full border-2 border-primary/50 bg-primary/10 backdrop-blur-sm"
            style={{
              left: mousePosition.x - 16,
              top: mousePosition.y - 16
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          />
        )}
      </section>
    </>
  )
}
