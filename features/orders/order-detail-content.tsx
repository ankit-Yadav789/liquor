"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Package,
  MapPin,
  CreditCard,
  Download,
  Check,
  Clock,
  Truck,
  CheckCircle2,
  XCircle,
  ChevronLeft,
} from "lucide-react"
import { SITE_CONFIG, ORDER_STATUS_LABELS, PAYMENT_STATUS_LABELS } from "@/lib/constants"
import type { Order } from "@/types"
import Link from "next/link"
import { format } from "date-fns"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/hooks/use-toast"

interface OrderDetailContentProps {
  orderId: string
}

export function OrderDetailContent({ orderId }: OrderDetailContentProps) {
  const [order, setOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    fetchOrder()
  }, [orderId])

  const fetchOrder = async () => {
    try {
      const response = await fetch(`/api/orders/${orderId}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch order")
      }

      setOrder(data.order)
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to load order",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownloadInvoice = () => {
    toast({
      title: "Invoice Download",
      description: "Invoice download functionality will be implemented with a PDF generator",
    })
  }

  const getStatusIcon = (status: Order["status"]) => {
    const icons = {
      pending: Clock,
      confirmed: Check,
      processing: Package,
      shipped: Truck,
      delivered: CheckCircle2,
      cancelled: XCircle,
    }
    return icons[status]
  }

  const getStatusColor = (status: Order["status"]) => {
    const colors = {
      pending: "text-warning",
      confirmed: "text-blue-500",
      processing: "text-blue-600",
      shipped: "text-purple-500",
      delivered: "text-success",
      cancelled: "text-destructive",
    }
    return colors[status]
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="mb-8 h-10 w-48" />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <Skeleton className="h-64" />
            <Skeleton className="h-48" />
          </div>
          <Skeleton className="h-96" />
        </div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <Package className="mb-4 h-16 w-16 text-muted-foreground" />
          <h2 className="mb-2 font-serif text-2xl font-bold">Order not found</h2>
          <p className="mb-6 text-muted-foreground">The order you're looking for doesn't exist</p>
          <Button asChild>
            <Link href="/orders">View All Orders</Link>
          </Button>
        </div>
      </div>
    )
  }

  const StatusIcon = getStatusIcon(order.status)
  const statusColor = getStatusColor(order.status)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="/orders">
              <ChevronLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="font-serif text-3xl font-bold">Order #{order.id.slice(-8)}</h1>
            <p className="text-muted-foreground">Placed on {format(new Date(order.createdAt), "MMMM dd, yyyy")}</p>
          </div>
        </div>
        <Button variant="outline" onClick={handleDownloadInvoice}>
          <Download className="mr-2 h-4 w-4" />
          Invoice
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Order Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <StatusIcon className={`h-5 w-5 ${statusColor}`} />
                Order Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge className="text-base">{ORDER_STATUS_LABELS[order.status]}</Badge>
                <Badge variant="outline">{PAYMENT_STATUS_LABELS[order.paymentStatus]}</Badge>
              </div>

              {/* Status Timeline */}
              <div className="mt-6 space-y-4">
                {[
                  { status: "pending", label: "Order Placed", icon: Clock },
                  { status: "confirmed", label: "Confirmed", icon: Check },
                  { status: "processing", label: "Processing", icon: Package },
                  { status: "shipped", label: "Shipped", icon: Truck },
                  { status: "delivered", label: "Delivered", icon: CheckCircle2 },
                ].map((step, index) => {
                  const statusOrder = ["pending", "confirmed", "processing", "shipped", "delivered"]
                  const currentIndex = statusOrder.indexOf(order.status)
                  const stepIndex = statusOrder.indexOf(step.status)
                  const isCompleted = stepIndex <= currentIndex && order.status !== "cancelled"
                  const StepIcon = step.icon

                  return (
                    <div key={step.status} className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          isCompleted ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <StepIcon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className={`font-medium ${isCompleted ? "text-foreground" : "text-muted-foreground"}`}>
                          {step.label}
                        </p>
                      </div>
                      {isCompleted && stepIndex === currentIndex && (
                        <Badge variant="secondary" className="ml-auto">
                          Current
                        </Badge>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {order.items.map((item) => (
                <div key={item.productId} className="flex gap-4">
                  <img
                    src={item.product.images[0] || "/placeholder.svg"}
                    alt={item.product.name}
                    className="h-20 w-20 rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.product.brand}</p>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {SITE_CONFIG.currencySymbol}
                      {(item.price * item.quantity).toLocaleString()}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {SITE_CONFIG.currencySymbol}
                      {item.price.toLocaleString()} each
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="font-semibold">{order.shippingAddress.fullName}</p>
                <p className="text-sm text-muted-foreground">{order.shippingAddress.phone}</p>
                <p className="text-sm">
                  {order.shippingAddress.addressLine1}
                  {order.shippingAddress.addressLine2 && `, ${order.shippingAddress.addressLine2}`}
                </p>
                <p className="text-sm">
                  {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Method
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium capitalize">{order.paymentMethod.replace("-", " ")}</p>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>
                    {SITE_CONFIG.currencySymbol}
                    {order.subtotal.toLocaleString()}
                  </span>
                </div>

                {order.discount > 0 && (
                  <div className="flex justify-between text-sm text-success">
                    <span>Discount</span>
                    <span>
                      -{SITE_CONFIG.currencySymbol}
                      {order.discount.toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Charge</span>
                  <span>
                    {order.deliveryCharge === 0 ? (
                      <span className="text-success">FREE</span>
                    ) : (
                      `${SITE_CONFIG.currencySymbol}${order.deliveryCharge}`
                    )}
                  </span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-lg text-primary">
                  {SITE_CONFIG.currencySymbol}
                  {order.total.toLocaleString()}
                </span>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-medium">Need Help?</p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
