"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { ProductCard } from "./product-card"
import { ProductFilters } from "./product-filters"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter, Search } from "lucide-react"
import type { Product, ProductFilters as Filters } from "@/types"
import { getBrands } from "@/lib/mock-data/products"
import { Skeleton } from "@/components/ui/skeleton"

export function ProductsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<Filters>({})

  const brands = getBrands()

  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setFilters((prev) => ({ ...prev, category: [category as any] }))
    }
  }, [searchParams])

  useEffect(() => {
    fetchProducts()
  }, [filters, page])

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const params = new URLSearchParams()

      if (filters.category) filters.category.forEach((c) => params.append("category", c))
      if (filters.brand) filters.brand.forEach((b) => params.append("brand", b))
      if (filters.priceRange) {
        params.append("minPrice", filters.priceRange[0].toString())
        params.append("maxPrice", filters.priceRange[1].toString())
      }
      if (filters.alcoholRange) {
        params.append("minAlcohol", filters.alcoholRange[0].toString())
        params.append("maxAlcohol", filters.alcoholRange[1].toString())
      }
      if (filters.rating) params.append("rating", filters.rating.toString())
      if (filters.inStock) params.append("inStock", "true")
      if (filters.search) params.append("search", filters.search)
      if (filters.sortBy) params.append("sortBy", filters.sortBy)
      params.append("page", page.toString())

      const response = await fetch(`/api/products?${params.toString()}`)
      const data = await response.json()

      setProducts(data.products)
      setTotal(data.total)
      setTotalPages(data.totalPages)
    } catch (error) {
      console.error("Failed to fetch products:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = () => {
    setFilters({ ...filters, search: searchQuery })
    setPage(1)
  }

  const handleSortChange = (value: string) => {
    setFilters({ ...filters, sortBy: value as any })
    setPage(1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 font-serif text-4xl font-bold">Shop Premium Spirits</h1>
        <p className="text-muted-foreground">Discover our curated collection of fine wines, whisky, and spirits</p>
      </div>

      {/* Search & Sort */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-1 gap-2">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="max-w-md"
          />
          <Button onClick={handleSearch} size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Select value={filters.sortBy || ""} onValueChange={handleSortChange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Name: A to Z</SelectItem>
              <SelectItem value="name-desc">Name: Z to A</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>

          {/* Mobile Filter Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                <Filter className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] overflow-y-auto">
              <ProductFilters filters={filters} onFiltersChange={setFilters} brands={brands} />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Results Info */}
      <div className="mb-4 text-sm text-muted-foreground">
        Showing {products.length} of {total} products
      </div>

      {/* Main Content */}
      <div className="flex gap-8">
        {/* Filters Sidebar - Desktop */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-20">
            <ProductFilters filters={filters} onFiltersChange={setFilters} brands={brands} />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {isLoading ? (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-square w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <Button variant="outline" disabled={page === 1} onClick={() => setPage(page - 1)}>
                    Previous
                  </Button>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <Button
                        key={i}
                        variant={page === i + 1 ? "default" : "outline"}
                        size="icon"
                        onClick={() => setPage(i + 1)}
                      >
                        {i + 1}
                      </Button>
                    ))}
                  </div>
                  <Button variant="outline" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="flex min-h-[400px] items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-medium">No products found</p>
                <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
