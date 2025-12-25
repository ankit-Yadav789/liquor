"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const heroSlides = [
  {
    id: 1,
    image: "/vintage-wine-barrels-cellar.jpg",
    category: "Wine Collection",
    title: "Aged to Perfection",
    description: "Experience the rich flavors of our carefully curated vintage wine selection",
    badge: "New Arrivals",
    alt: "Vintage wine barrels in traditional cellar with ambient lighting"
  },
  {
    id: 2,
    image: "/premium-scotch-whisky-glass.jpg",
    category: "Premium Spirits",
    title: "The Art of Distillation",
    description: "Discover single malt scotch and premium whiskeys from renowned distilleries",
    badge: "Limited Edition",
    alt: "Premium scotch whisky in crystal glass with ice"
  },
  {
    id: 3,
    image: "/cocktail-mixology-bar.jpg",
    category: "Mixology Essentials",
    title: "Craft Your Experience",
    description: "Everything you need to create professional cocktails at home",
    badge: "Trending",
    alt: "Professional mixology setup with cocktail ingredients and tools"
  }
]

export function HeroModernSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(timer)
  }, [activeSlide, isPaused])

  const nextSlide = () => {
    setDirection(1)
    setActiveSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const handleDirectCall = () => {
    window.location.href = "tel:+1234567890"
  }

  const handleWhatsAppChat = () => {
    const message = encodeURIComponent("Hi! I'm interested in your premium liquor collection. Can you help me?")
    window.open(`https://wa.me/1234567890?text=${message}`, "_blank", "noopener,noreferrer")
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  }

  return (
    <section 
      className="relative h-screen min-h-[700px] overflow-hidden bg-background"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Premium liquor hero showcase"
    >
      {/* Background Slider */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <img
              src={heroSlides[activeSlide].image}
              alt={heroSlides[activeSlide].alt}
              className="h-full w-full object-cover"
              loading="eager"
            />
            {/* Multi-layer gradient overlay - Dark overlay for both light and dark modes */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            {/* Vignette effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto flex h-full items-center px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  {heroSlides[activeSlide].badge}
                </span>
              </motion.div>

              {/* Category */}
              <p className="text-lg font-medium text-secondary uppercase tracking-wider">
                {heroSlides[activeSlide].category}
              </p>

              {/* Title */}
              <h1 className="font-serif text-5xl font-bold leading-tight md:text-6xl lg:text-7xl xl:text-8xl">
                <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                  {heroSlides[activeSlide].title}
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed md:text-2xl">
                {heroSlides[activeSlide].description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-2xl hover:shadow-primary/50 transition-all duration-300 px-8 py-6 text-lg"
                  onClick={handleDirectCall}
                  aria-label="Call us for immediate assistance"
                >
                  <span className="relative z-10 flex items-center">
                    <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12 group-hover:scale-110" />
                    Direct Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group relative overflow-hidden border-2 border-secondary bg-secondary/5 hover:bg-secondary hover:text-secondary-foreground backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 px-8 py-6 text-lg"
                  onClick={handleWhatsAppChat}
                  aria-label="Chat with us on WhatsApp"
                >
                  <span className="relative z-10 flex items-center">
                    <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110 group-hover:rotate-6" />
                    WhatsApp
                  </span>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Authentic Products</p>
                    <p className="text-xs text-muted-foreground">100% Genuine</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <span className="text-secondary font-bold">★</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Premium Quality</p>
                    <p className="text-xs text-muted-foreground">Curated Selection</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                    <span className="text-success font-bold">⚡</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Fast Delivery</p>
                    <p className="text-xs text-muted-foreground">Same Day Available</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Side - Featured Product Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative rounded-3xl bg-card/40 backdrop-blur-xl border border-border/50 p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-2xl" />
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold">Featured This Week</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Premium Selection</span>
                    <span className="font-bold text-primary">500+ Items</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Top Brands</span>
                    <span className="font-bold text-secondary">50+ Partners</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Happy Customers</span>
                    <span className="font-bold text-success">10,000+</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    "The finest selection of wines and spirits, delivered with care and expertise."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-card/80 backdrop-blur-sm p-3 shadow-lg hover:bg-card transition-all duration-300 hover:scale-110 border border-border/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-card/80 backdrop-blur-sm p-3 shadow-lg hover:bg-card transition-all duration-300 hover:scale-110 border border-border/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => {
              setDirection(index > activeSlide ? 1 : -1)
              setActiveSlide(index)
            }}
            className="group relative"
            aria-label={`Go to slide ${index + 1}: ${slide.category}`}
            aria-current={index === activeSlide ? "true" : "false"}
          >
            <div className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeSlide 
                ? "w-16 bg-gradient-to-r from-primary to-secondary" 
                : "w-8 bg-muted-foreground/40 group-hover:bg-muted-foreground/70"
            }`} />
            {index === activeSlide && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -top-1 -left-1 h-3.5 w-3.5 rounded-full bg-primary shadow-lg shadow-primary/50"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="pointer-events-none absolute -right-32 top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-32 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-accent/20 to-primary/20 blur-3xl" />
    </section>
  )
}
