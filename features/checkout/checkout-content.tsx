"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCartStore } from "@/store/cart-store"
import { useAuthStore } from "@/store/auth-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AddressForm } from "./address-form"
import { SITE_CONFIG } from "@/lib/constants"
import { useToast } from "@/hooks/use-toast"
import type { AddressInput } from "@/lib/validations/checkout"
import { CreditCard, Smartphone, Banknote, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function CheckoutContent() {
  const [step, setStep] = useState<"address" | "payment">("address")
  const [shippingAddress, setShippingAddress] = useState<AddressInput | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<"cod" | "card" | "upi">("cod")
  const [isProcessing, setIsProcessing] = useState(false)

  const { items, getSubtotal, couponDiscount, clearCart } = useCartStore()
  const user = useAuthStore((state) => state.user)
  const router = useRouter()
  const { toast } = useToast()

  const subtotal = getSubtotal()
  const discountAmount = (subtotal * couponDiscount) / 100
  const deliveryCharge = subtotal >= 2000 ? 0 : 100
  const total = subtotal - discountAmount + deliveryCharge

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
          <h2 className="mb-2 font-serif text-2xl font-bold">Your cart is empty</h2>
          <p className="mb-6 text-muted-foreground">Add items to your cart before checkout</p>
          <Button asChild size="lg">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  const handleAddressSubmit = (data: AddressInput) => {
    setShippingAddress(data)
    setStep("payment")
  }

  const handlePlaceOrder = async () => {
    if (!shippingAddress) {
      toast({
        title: "Error",
        description: "Please add a shipping address",
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      const orderData = {
        userId: user?.id,
        items: items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.product.price,
        })),
        shippingAddress,
        paymentMethod,
        subtotal,
        discount: discountAmount,
        deliveryCharge,
        total,
      }

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to place order")
      }

      clearCart()
      toast({
        title: "Success",
        description: "Your order has been placed successfully!",
      })

      router.push(`/orders/${result.order.id}`)
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to place order",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 font-serif text-3xl font-bold">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {/* Shipping Address */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>1. Shipping Address</span>
                {step === "payment" && shippingAddress && (
                  <Button variant="ghost" size="sm" onClick={() => setStep("address")}>
                    Edit
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {step === "address" || !shippingAddress ? (
                <AddressForm onSubmit={handleAddressSubmit} />
              ) : (
                <div className="rounded-lg border p-4">
                  <p className="font-medium">{shippingAddress.fullName}</p>
                  <p className="text-sm text-muted-foreground">{shippingAddress.phone}</p>
                  <p className="mt-2 text-sm">
                    {shippingAddress.addressLine1}
                    {shippingAddress.addressLine2 && `, ${shippingAddress.addressLine2}`}
                  </p>
                  <p className="text-sm">
                    {shippingAddress.city}, {shippingAddress.state} - {shippingAddress.pincode}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment Method */}
          {step === "payment" && (
            <Card>
              <CardHeader>
                <CardTitle>2. Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={(value: any) => setPaymentMethod(value)}>
                  <div className="flex items-center space-x-3 rounded-lg border p-4">
                    <RadioGroupItem value="cod" id="cod" />
                    <Banknote className="h-5 w-5 text-muted-foreground" />
                    <Label htmlFor="cod" className="flex-1 cursor-pointer">
                      <p className="font-medium">Cash on Delivery</p>
                      <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 rounded-lg border p-4">
                    <RadioGroupItem value="card" id="card" />
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <Label htmlFor="card" className="flex-1 cursor-pointer">
                      <p className="font-medium">Credit/Debit Card</p>
                      <p className="text-sm text-muted-foreground">Visa, Mastercard, Amex</p>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 rounded-lg border p-4">
                    <RadioGroupItem value="upi" id="upi" />
                    <Smartphone className="h-5 w-5 text-muted-foreground" />
                    <Label htmlFor="upi" className="flex-1 cursor-pointer">
                      <p className="font-medium">UPI</p>
                      <p className="text-sm text-muted-foreground">Google Pay, PhonePe, Paytm</p>
                    </Label>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Order Summary */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.productId} className="flex gap-3">
                    <img
                      src={item.product.images[0] || "/placeholder.svg"}
                      alt={item.product.name}
                      className="h-16 w-16 rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium">
                        {SITE_CONFIG.currencySymbol}
                        {(item.product.price * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>
                    {SITE_CONFIG.currencySymbol}
                    {subtotal.toLocaleString()}
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-sm text-success">
                    <span>Discount</span>
                    <span>
                      -{SITE_CONFIG.currencySymbol}
                      {discountAmount.toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>
                    {deliveryCharge === 0 ? (
                      <span className="text-success">FREE</span>
                    ) : (
                      `${SITE_CONFIG.currencySymbol}${deliveryCharge}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between border-t pt-2 font-semibold">
                  <span>Total</span>
                  <span className="text-lg text-primary">
                    {SITE_CONFIG.currencySymbol}
                    {total.toLocaleString()}
                  </span>
                </div>
              </div>

              {step === "payment" && (
                <Button size="lg" className="w-full" onClick={handlePlaceOrder} disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Place Order"}
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
