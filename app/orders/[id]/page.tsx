import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { OrderDetailContent } from "@/features/orders/order-detail-content"
import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  return {
    title: `Order #${id.slice(-8)} - JaipurWines`,
    description: "View order details and track your delivery",
  }
}

export default async function OrderDetailPage({ params }: Props) {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const { id } = await params

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <OrderDetailContent orderId={id} />
      </main>
      <Footer />
    </>
  )
}
