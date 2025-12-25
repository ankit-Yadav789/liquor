"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Star, Award, TrendingUp, ShoppingBag, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const features = [
  { icon: Award, text: "Premium Quality", color: "text-primary" },
  { icon: Star, text: "5-Star Rated", color: "text-secondary" },
  { icon: TrendingUp, text: "Best Prices", color: "text-success" },
  { icon: ShoppingBag, text: "Fast Delivery", color: "text-accent" }
]

const testimonials = [
  { name: "John D.", rating: 5, text: "Best liquor selection in town!" },
  { name: "Sarah M.", rating: 5, text: "Fast delivery, authentic products" },
  { name: "Mike R.", rating: 5, text: "Premium quality, great prices" }
]

// Animated particles for visual appeal
const Particle = ({ delay }: { delay: number }) => (
  <motion.div
    className="absolute h-2 w-2 rounded-full bg-primary/30"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -100],
      x: [0, Math.random() * 50 - 25]
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2
    }}
  />
)

export function HeroPremiumSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleCall = () => {
    window.location.href = "tel:+1234567890"
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'd like to explore your premium liquor collection. Can you assist me?")
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank", "noopener,noreferrer")
  }

  return (
    <>
      {/* SEO-optimized structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            "name": "Premium Liquor Store",
            "description": "Premium wines, spirits, and craft beer delivered to your doorstep",
            "telephone": "+1234567890",
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "1000"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      <section
        ref={containerRef}
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-muted/10 to-background"
        aria-label="Premium liquor store hero section"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                bottom: 0
              }}
            >
              <Particle delay={i * 0.2} />
            </div>
          ))}
        </div>

        {/* Main content with parallax */}
        <motion.div style={{ y, opacity }} className="relative z-10">
          <div className="container mx-auto px-4 py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left side - Content */}
              <div className="space-y-8">
                {/* Animated badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary/30 px-6 py-3 backdrop-blur-sm"
                >
                  <Star className="h-5 w-5 text-secondary fill-secondary animate-pulse" />
                  <span className="font-bold text-foreground">
                    Rated #1 Premium Liquor Store
                  </span>
                </motion.div>

                {/* Main heading with gradient text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                    <span className="block">Elevate Your</span>
                    <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                      Drinking Experience
                    </span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl"
                >
                  Discover the world's finest wines, spirits, and craft beers. 
                  <span className="font-semibold text-foreground"> Authentic products</span>, 
                  <span className="font-semibold text-foreground"> unbeatable prices</span>, and 
                  <span className="font-semibold text-foreground"> lightning-fast delivery</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    size="lg"
                    onClick={handleCall}
                    className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-primary-foreground shadow-2xl hover:shadow-primary/50 transition-all duration-500 px-8 py-7 text-lg font-bold"
                    aria-label="Call us now for immediate assistance"
                  >
                    <span className="relative z-10 flex items-center">
                      <Phone className="mr-3 h-6 w-6 animate-bounce" />
                      Call Now - Get 10% Off
                    </span>
                  </Button>

                  <Button
                    size="lg"
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="group relative overflow-hidden border-2 border-secondary bg-secondary/10 hover:bg-secondary hover:text-secondary-foreground backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 px-8 py-7 text-lg font-bold"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <span className="relative z-10 flex items-center">
                      <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                      WhatsApp Chat
                    </span>
                  </Button>
                </motion.div>

                {/* Features grid */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                      className="flex flex-col items-center gap-2 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 p-4 hover:bg-card hover:scale-105 transition-all duration-300"
                    >
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      <span className="text-sm font-semibold text-center">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Rotating testimonial */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="relative rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 p-6 shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {testimonials[currentTestimonial].name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
                        ))}
                      </div>
                      <p className="text-foreground font-medium mb-1">
                        "{testimonials[currentTestimonial].text}"
                      </p>
                      <p className="text-sm text-muted-foreground">
                        - {testimonials[currentTestimonial].name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Visual showcase */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative hidden lg:block"
              >
                {/* Main product showcase */}
                <div className="relative">
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 blur-3xl rounded-full" />
                  
                  {/* Product grid */}
                  <div className="relative grid grid-cols-2 gap-4">
                    {[
                      "/premium-wine-cellar-collection.jpg",
                      "/luxury-whiskey-bottles-bar.jpg",
                      "/craft-beer-selection-bar.jpg",
                      "/champagne-celebration-elegant.jpg"
                    ].map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
                        className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-background"
                      >
                        <img
                          src={img}
                          alt={`Premium liquor product ${index + 1}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating offer badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="absolute -top-6 -right-6 bg-gradient-to-br from-destructive to-destructive/80 text-destructive-foreground rounded-full p-8 shadow-2xl border-4 border-background"
                  >
                    <div className="text-center">
                      <p className="text-4xl font-bold">20%</p>
                      <p className="text-sm font-semibold">OFF</p>
                    </div>
                  </motion.div>

                  {/* Floating stats */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-border/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-success to-success/70 flex items-center justify-center">
                        <TrendingUp className="h-7 w-7 text-success-foreground" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">10,000+</p>
                        <p className="text-sm text-muted-foreground">Happy Customers</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-xl border-t border-border/50"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-semibold">Available 24/7</span>
                </div>
                <div className="hidden md:block h-6 w-px bg-border" />
                <div className="hidden md:flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">100% Authentic</span>
                </div>
                <div className="hidden md:block h-6 w-px bg-border" />
                <div className="hidden md:flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-semibold">Free Delivery Over $50</span>
                </div>
              </div>
              <Button
                variant="ghost"
                className="group font-semibold"
                asChild
              >
                <a href="#products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-20 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-accent/20 via-primary/20 to-transparent blur-3xl" />
      </section>
    </>
  )
}
