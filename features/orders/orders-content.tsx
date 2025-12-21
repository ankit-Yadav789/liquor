"use client"

import { useEffect, useState } from "react"
import { OrderCard } from "./order-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import type { Order } from "@/types"
import { Skeleton } from "@/components/ui/skeleton"

export function OrdersContent() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("all")

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const response = await fetch("/api/orders")
      const data = await response.json()
      setOrders(data.orders || [])
    } catch (error) {
      console.error("Failed to fetch orders:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterOrders = (status?: Order["status"]) => {
    if (!status) return orders
    return orders.filter((order) => order.status === status)
  }

  const filteredOrders =
    activeTab === "all"
      ? orders
      : activeTab === "active"
        ? orders.filter((o) => ["pending", "confirmed", "processing", "shipped"].includes(o.status))
        : filterOrders(activeTab as Order["status"])

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="mb-8 h-10 w-48" />
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-40 w-full" />
          ))}
        </div>
      </div>
    )
  }

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
          <ShoppingBag className="mb-4 h-16 w-16 text-muted-foreground" />
          <h2 className="mb-2 font-serif text-2xl font-bold">No orders yet</h2>
          <p className="mb-6 text-muted-foreground">Start shopping to place your first order</p>
          <Button asChild size="lg">
            <Link href="/products">Browse Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 font-serif text-3xl font-bold">My Orders</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 w-full justify-start">
          <TabsTrigger value="all">All Orders</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="delivered">Delivered</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => <OrderCard key={order.id} order={order} />)
          ) : (
            <div className="flex min-h-[300px] items-center justify-center text-center">
              <div>
                <p className="text-lg font-medium">No orders found</p>
                <p className="text-sm text-muted-foreground">Try a different filter</p>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
