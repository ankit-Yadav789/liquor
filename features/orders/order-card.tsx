"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Package } from "lucide-react"
import { SITE_CONFIG, ORDER_STATUS_LABELS } from "@/lib/constants"
import type { Order } from "@/types"
import Link from "next/link"
import { format } from "date-fns"

interface OrderCardProps {
  order: Order
}

export function OrderCard({ order }: OrderCardProps) {
  const getStatusColor = (status: Order["status"]) => {
    const colors = {
      pending: "bg-warning text-warning-foreground",
      confirmed: "bg-blue-500 text-white",
      processing: "bg-blue-600 text-white",
      shipped: "bg-purple-500 text-white",
      delivered: "bg-success text-success-foreground",
      cancelled: "bg-destructive text-destructive-foreground",
    }
    return colors[status]
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">Order #{order.id.slice(-8)}</p>
                <Badge className={getStatusColor(order.status)}>{ORDER_STATUS_LABELS[order.status]}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Placed on {format(new Date(order.createdAt), "MMM dd, yyyy")}
              </p>
              <p className="mt-1 text-sm">
                {order.items.length} item{order.items.length > 1 ? "s" : ""} • {SITE_CONFIG.currencySymbol}
                {order.total.toLocaleString()}
              </p>
            </div>
          </div>

          <Button asChild variant="outline" className="sm:w-auto bg-transparent">
            <Link href={`/orders/${order.id}`}>
              View Details
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Order Items Preview */}
        <div className="mt-4 flex gap-2 overflow-x-auto">
          {order.items.slice(0, 4).map((item) => (
            <img
              key={item.productId}
              src={item.product.images[0] || "/placeholder.svg"}
              alt={item.product.name}
              className="h-16 w-16 rounded-md border object-cover"
            />
          ))}
          {order.items.length > 4 && (
            <div className="flex h-16 w-16 items-center justify-center rounded-md border bg-muted text-sm font-medium">
              +{order.items.length - 4}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
