"use client"

import { useCartStore } from "@/store/cart-store"
import { CartItemCard } from "./cart-item-card"
import { CartSummary } from "./cart-summary"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export function CartContent() {
  const items = useCartStore((state) => state.items)

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
          <h2 className="mb-2 font-serif text-2xl font-bold">Your cart is empty</h2>
          <p className="mb-6 text-muted-foreground">Start shopping to add items to your cart</p>
          <Button asChild size="lg">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 font-serif text-3xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <CartItemCard key={item.productId} item={item} />
          ))}
        </div>

        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
