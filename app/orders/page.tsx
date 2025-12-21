import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { OrdersContent } from "@/features/orders/orders-content"
import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "My Orders - JaipurWines",
  description: "Track and manage your orders",
}

export default async function OrdersPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login?redirect=/orders")
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <OrdersContent />
      </main>
      <Footer />
    </>
  )
}
