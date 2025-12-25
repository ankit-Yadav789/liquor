"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    image: "/premium-wine-cellar-collection.jpg",
    title: "Exquisite Wine Collection",
    subtitle: "Discover the finest wines from around the world",
    alt: "Premium wine cellar with aged bottles and elegant lighting"
  },
  {
    id: 2,
    image: "/luxury-whiskey-bottles-bar.jpg",
    title: "Premium Spirits & Whiskey",
    subtitle: "Aged to perfection, crafted for connoisseurs",
    alt: "Luxury whiskey bottles displayed in upscale bar setting"
  },
  {
    id: 3,
    image: "/craft-beer-selection-bar.jpg",
    title: "Craft Beer Selection",
    subtitle: "Artisanal brews from local and international breweries",
    alt: "Craft beer selection with various bottles and tap handles"
  },
  {
    id: 4,
    image: "/champagne-celebration-elegant.jpg",
    title: "Celebrate in Style",
    subtitle: "Premium champagne for your special moments",
    alt: "Elegant champagne bottles with celebration theme"
  }
]

export function HeroSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleCall = () => {
    window.location.href = "tel:+9876543210"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/9876543210?text=Hello, I'm interested in your premium liquor collection", "_blank")
  }

  return (
    <section 
      className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      aria-label="Premium liquor collection hero section"
    >
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            className="h-full w-full object-cover"
            loading="eager"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/30 to-background/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex h-full items-center px-4">
        <div className="max-w-2xl space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="font-serif text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
                {slides[currentSlide].title.split(" ").map((word, index) => (
                  <span key={index}>
                    {index === slides[currentSlide].title.split(" ").length - 1 ? (
                      <span className="text-primary">{word}</span>
                    ) : (
                      word + " "
                    )}
                  </span>
                ))}
              </h1>
              <p className="text-xl  md:text-2xl">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleCall}
              aria-label="Call us directly"
            >
              <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-2 border-secondary bg-green-500/70 hover:bg-green-500 hover:text-green-500 shadow-lg hover:shadow-xl transition-all text-white hover:text-white duration-300"
              onClick={handleWhatsApp}
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="mr-2 h-5 w-5 transition-transform text-white group-hover:scale-110" />
              WhatsApp
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-6 pt-4"
          >
            <div className="rounded-lg bg-card/50 backdrop-blur-sm px-4 py-3 border border-border/50">
              <p className="text-2xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div className="rounded-lg bg-card/50 backdrop-blur-sm px-4 py-3 border border-border/50">
              <p className="text-2xl font-bold text-primary">50+</p>
              <p className="text-sm text-muted-foreground">Brands</p>
            </div>
            <div className="rounded-lg bg-card/50 backdrop-blur-sm px-4 py-3 border border-border/50">
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-sm text-muted-foreground">Delivery</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-12 bg-primary" 
                : "w-2 bg-muted-foreground/50 hover:bg-muted-foreground"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-20 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
    </section>
  )
}
