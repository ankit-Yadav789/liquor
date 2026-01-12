"use client"

import type React from "react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Product } from "@/types"
import { SITE_CONFIG } from "@/lib/constants"
import { useCartStore } from "@/store/cart-store"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const { toast } = useToast()

  const discountPercentage = product.discount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem(product, 1)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
        <Link href={`/products/${product.slug}`}>
          <div className="relative aspect-square overflow-hidden bg-muted">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            {discountPercentage > 0 && (
              <Badge className="absolute right-2 top-2 bg-destructive text-destructive-foreground">
                {discountPercentage}% OFF
              </Badge>
            )}
            {product.stock < 10 && product.stock > 0 && (
              <Badge className="absolute left-2 top-2 bg-warning text-warning-foreground">
                Only {product.stock} left
              </Badge>
            )}
            {product.stock === 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                <Badge variant="destructive">Out of Stock</Badge>
              </div>
            )}
          </div>
        </Link>

        <CardContent className="p-4">
          <Link href={`/products/${product.slug}`}>
            <div className="mb-2 flex items-start justify-between gap-2">
              <h3 className="line-clamp-2 font-semibold text-balance transition-colors group-hover:text-primary">
                {product.name}
              </h3>
            </div>
            <p className="mb-2 text-sm text-muted-foreground">{product.brand}</p>
            <div className="mb-3 flex items-center gap-1">
              <Star className="h-4 w-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">
                {SITE_CONFIG.currencySymbol}
                {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {SITE_CONFIG.currencySymbol}
                  {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {product.volume} • {product.alcoholPercentage}% ABV
            </p>
          </Link>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button className="w-full" disabled={product.stock === 0} onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
