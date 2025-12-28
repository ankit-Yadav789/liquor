import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CheckoutContent } from "@/features/checkout/checkout-content"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"

export const metadata: Metadata = {
  title: "Checkout - DaruAala",
  description: "Complete your order",
}

export default async function CheckoutPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login?redirect=/checkout")
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <CheckoutContent />
      </main>
      <Footer />
    </>
  )
}
