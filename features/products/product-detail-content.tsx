"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Star, Heart, Share2, Minus, Plus, ShieldCheck, Truck, RefreshCw } from "lucide-react"
import { SITE_CONFIG, PRODUCT_CATEGORIES } from "@/lib/constants"
import type { Product } from "@/types"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { useCartStore } from "@/store/cart-store"

interface ProductDetailContentProps {
  product: Product
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { toast } = useToast()
  const addItem = useCartStore((state) => state.addItem)

  const discountPercentage = product.discount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0

  const category = PRODUCT_CATEGORIES.find((c) => c.value === product.category)

  const handleAddToCart = () => {
    addItem(product, quantity)
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product.name} added to your cart`,
    })
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Product Images */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            {discountPercentage > 0 && (
              <Badge className="absolute right-4 top-4 bg-destructive text-destructive-foreground">
                {discountPercentage}% OFF
              </Badge>
            )}
            {product.stock < 10 && product.stock > 0 && (
              <Badge className="absolute left-4 top-4 bg-warning text-warning-foreground">
                Only {product.stock} left
              </Badge>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square overflow-hidden rounded-md border-2 transition-all ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* Product Info */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          {/* Header */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="secondary">{category?.label}</Badge>
              <Badge variant="outline">{product.brand}</Badge>
            </div>
            <h1 className="mb-3 font-serif text-4xl font-bold text-balance">{product.name}</h1>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating) ? "fill-secondary text-secondary" : "text-muted"
                    }`}
                  />
                ))}
                <span className="ml-2 font-medium">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-4xl font-bold text-primary">
              {SITE_CONFIG.currencySymbol}
              {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">
                {SITE_CONFIG.currencySymbol}
                {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h3 className="mb-2 font-semibold">About this product</h3>
            <p className="text-muted-foreground text-pretty">{product.description}</p>
          </div>

          {/* Details */}
          <Card>
            <CardContent className="grid gap-3 p-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Volume</p>
                <p className="font-medium">{product.volume}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Alcohol Content</p>
                <p className="font-medium">{product.alcoholPercentage}% ABV</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Origin</p>
                <p className="font-medium">{product.origin}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="font-medium">{product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}</p>
              </div>
            </CardContent>
          </Card>

          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-md border">
                <Button variant="ghost" size="icon" onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={product.stock === 0}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </Button>
            </div>

            {/* <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
              </Button>
            </div> */}
          </div>

          {/* Features */}
          <div className="grid gap-4 rounded-lg border p-4 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">100% Authentic</p>
                <p className="text-xs text-muted-foreground">Guaranteed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Cash On Delivery</p>
                {/* <p className="text-xs text-muted-foreground">On orders above ₹2000</p> */}
              </div>
            </div>
            {/* <div className="flex items-center gap-3">
              <RefreshCw className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-muted-foreground">7 days return policy</p>
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
