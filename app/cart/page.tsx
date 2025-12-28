import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CartContent } from "@/features/cart/cart-content"

export const metadata: Metadata = {
  title: "Shopping Cart - DaruAala",
  description: "Review your cart and proceed to checkout",
}

export default function CartPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <CartContent />
      </main>
      <Footer />
    </>
  )
}
