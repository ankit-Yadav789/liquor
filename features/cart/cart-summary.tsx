"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { SITE_CONFIG } from "@/lib/constants"
import { useCartStore } from "@/store/cart-store"
import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"

interface CartSummaryProps {
  showCheckoutButton?: boolean
}

export function CartSummary({ showCheckoutButton = true }: CartSummaryProps) {
  const { getSubtotal, couponCode, couponDiscount, applyCoupon, removeCoupon } = useCartStore()
  const [couponInput, setCouponInput] = useState("")
  const [couponError, setCouponError] = useState("")

  const subtotal = getSubtotal()
  const discountAmount = (subtotal * couponDiscount) / 100
  const deliveryCharge = subtotal >= 2000 ? 0 : 100
  const total = subtotal - discountAmount + deliveryCharge

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) {
      setCouponError("Please enter a coupon code")
      return
    }

    applyCoupon(couponInput)
    setCouponInput("")
    setCouponError("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span>
              {SITE_CONFIG.currencySymbol}
              {subtotal.toLocaleString()}
            </span>
          </div>

          {couponDiscount > 0 && (
            <div className="flex justify-between text-sm text-success">
              <span>Discount ({couponDiscount}%)</span>
              <span>
                -{SITE_CONFIG.currencySymbol}
                {discountAmount.toLocaleString()}
              </span>
            </div>
          )}

          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Delivery Charge</span>
            <span>
              {deliveryCharge === 0 ? (
                <span className="text-success">FREE</span>
              ) : (
                `${SITE_CONFIG.currencySymbol}${deliveryCharge}`
              )}
            </span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span className="text-lg text-primary">
            {SITE_CONFIG.currencySymbol}
            {total.toLocaleString()}
          </span>
        </div>

        {subtotal < 2000 && (
          <p className="text-xs text-muted-foreground">
            Add {SITE_CONFIG.currencySymbol}
            {(2000 - subtotal).toLocaleString()} more to get FREE delivery
          </p>
        )}

        <Separator />

        {/* Coupon Code */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Have a coupon code?</p>
          {couponCode ? (
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="flex-1">
                {couponCode}
              </Badge>
              <Button variant="ghost" size="icon" onClick={removeCoupon}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter code"
                  value={couponInput}
                  onChange={(e) => {
                    setCouponInput(e.target.value)
                    setCouponError("")
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                />
                <Button variant="secondary" onClick={handleApplyCoupon}>
                  Apply
                </Button>
              </div>
              {couponError && <p className="text-xs text-destructive">{couponError}</p>}
            </>
          )}
        </div>

        {showCheckoutButton && (
          <Button size="lg" className="w-full" onClick={handleCheckout}>
            Proceed to Checkout
          </Button>
        )}
      </CardContent>
    </Card>
  )
}

function handleCheckout() {
  const { items, getSubtotal, couponDiscount } = useCartStore.getState()
  const subtotal = getSubtotal()
  const discountAmount = (subtotal * couponDiscount) / 100
  const deliveryCharge = subtotal >= 2000 ? 0 : 100
  const total = subtotal - discountAmount + deliveryCharge

  let message = "*New Order Request*\n\n*Items:*\n"
  
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.product.name} (x${item.quantity}) - ${SITE_CONFIG.currencySymbol}${item.product.price * item.quantity}\n`
  })

  message += `\n*Summary:*\n`
  message += `Subtotal: ${SITE_CONFIG.currencySymbol}${subtotal}\n`
  if (couponDiscount > 0) {
    message += `Discount: -${SITE_CONFIG.currencySymbol}${discountAmount}\n`
  }
  message += `Delivery: ${deliveryCharge === 0 ? "FREE" : `${SITE_CONFIG.currencySymbol}${deliveryCharge}`}\n`
  message += `*Total: ${SITE_CONFIG.currencySymbol}${total}*\n`
  
  message += `\nPlease process my order.`

  const phoneNumber = "917340050070"
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  
  window.open(url, "_blank")
}
