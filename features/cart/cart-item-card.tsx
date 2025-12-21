"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import { SITE_CONFIG } from "@/lib/constants"
import type { CartItem } from "@/types"
import { useCartStore } from "@/store/cart-store"
import Link from "next/link"

interface CartItemCardProps {
  item: CartItem
}

export function CartItemCard({ item }: CartItemCardProps) {
  const { updateQuantity, removeItem } = useCartStore()

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          <Link href={`/products/${item.product.slug}`} className="shrink-0">
            <img
              src={item.product.images[0] || "/placeholder.svg"}
              alt={item.product.name}
              className="h-24 w-24 rounded-md object-cover"
            />
          </Link>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <Link href={`/products/${item.product.slug}`} className="hover:text-primary">
                <h3 className="font-semibold">{item.product.name}</h3>
              </Link>
              <p className="text-sm text-muted-foreground">{item.product.brand}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.product.volume} • {item.product.alcoholPercentage}% ABV
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center rounded-md border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-12 text-center text-sm">{item.quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  disabled={item.quantity >= item.product.stock}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  {SITE_CONFIG.currencySymbol}
                  {(item.product.price * item.quantity).toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">
                  {SITE_CONFIG.currencySymbol}
                  {item.product.price.toLocaleString()} each
                </p>
              </div>
            </div>
          </div>

          <Button variant="ghost" size="icon" onClick={() => removeItem(item.productId)} className="shrink-0">
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
