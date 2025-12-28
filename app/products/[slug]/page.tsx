import { Suspense } from "react"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ProductDetailContent } from "@/features/products/product-detail-content"
import { getProductBySlug, mockProducts } from "@/lib/mock-data/products"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found - DaruAala",
    }
  }

  return {
    title: `${product.name} - DaruAala`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images,
    },
  }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <ProductDetailContent product={product} />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
