import { Suspense } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProductsContent } from "@/features/products/products-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop Premium Wines, Whisky & Spirits - DaruAala",
  description: "Browse our extensive collection of premium wines, whisky, beer, and spirits from top brands worldwide.",
}

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsContent />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
