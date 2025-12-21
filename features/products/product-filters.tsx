"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PRODUCT_CATEGORIES, SITE_CONFIG } from "@/lib/constants"
import { X } from "lucide-react"
import type { ProductFilters as ProductFiltersType } from "@/types"

interface ProductFiltersProps {
  filters: ProductFiltersType
  onFiltersChange: (filters: ProductFiltersType) => void
  brands: string[]
}

export function ProductFilters({ filters, onFiltersChange, brands }: ProductFiltersProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>(filters.priceRange || [0, 50000])
  const [alcoholRange, setAlcoholRange] = useState<[number, number]>(filters.alcoholRange || [0, 50])

  const handleCategoryChange = (category: string, checked: boolean) => {
    const categories = filters.category || []
    const updated = checked ? [...categories, category as any] : categories.filter((c) => c !== category)
    onFiltersChange({ ...filters, category: updated.length > 0 ? updated : undefined })
  }

  const handleBrandChange = (brand: string, checked: boolean) => {
    const brandsList = filters.brand || []
    const updated = checked ? [...brandsList, brand] : brandsList.filter((b) => b !== brand)
    onFiltersChange({ ...filters, brand: updated.length > 0 ? updated : undefined })
  }

  const handlePriceChange = () => {
    onFiltersChange({ ...filters, priceRange })
  }

  const handleAlcoholChange = () => {
    onFiltersChange({ ...filters, alcoholRange })
  }

  const handleClearFilters = () => {
    setPriceRange([0, 50000])
    setAlcoholRange([0, 50])
    onFiltersChange({})
  }

  const hasActiveFilters =
    (filters.category && filters.category.length > 0) ||
    (filters.brand && filters.brand.length > 0) ||
    filters.priceRange ||
    filters.alcoholRange ||
    filters.rating ||
    filters.inStock

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Filters</h3>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={handleClearFilters}>
            <X className="mr-1 h-4 w-4" />
            Clear
          </Button>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-3">
        <Label className="text-base">Category</Label>
        <div className="space-y-2">
          {PRODUCT_CATEGORIES.map((category) => (
            <div key={category.value} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.value}`}
                checked={filters.category?.includes(category.value as any) || false}
                onCheckedChange={(checked) => handleCategoryChange(category.value, checked as boolean)}
              />
              <label
                htmlFor={`category-${category.value}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="space-y-3">
        <Label className="text-base">Brand</Label>
        <div className="max-h-48 space-y-2 overflow-y-auto">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={`brand-${brand}`}
                checked={filters.brand?.includes(brand) || false}
                onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
              />
              <label
                htmlFor={`brand-${brand}`}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-base">Price Range</Label>
        <div className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={50000} step={500} />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              {SITE_CONFIG.currencySymbol}
              {priceRange[0].toLocaleString()}
            </span>
            <span>
              {SITE_CONFIG.currencySymbol}
              {priceRange[1].toLocaleString()}
            </span>
          </div>
          <Button variant="secondary" size="sm" onClick={handlePriceChange} className="w-full">
            Apply
          </Button>
        </div>
      </div>

      {/* Alcohol Range */}
      <div className="space-y-3">
        <Label className="text-base">Alcohol Content (%)</Label>
        <div className="space-y-4">
          <Slider value={alcoholRange} onValueChange={setAlcoholRange} max={50} step={0.5} />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{alcoholRange[0]}%</span>
            <span>{alcoholRange[1]}%</span>
          </div>
          <Button variant="secondary" size="sm" onClick={handleAlcoholChange} className="w-full">
            Apply
          </Button>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-3">
        <Label className="text-base">Minimum Rating</Label>
        <Select
          value={filters.rating?.toString() || "any"}
          onValueChange={(value) =>
            onFiltersChange({ ...filters, rating: value === "any" ? undefined : Number(value) })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Any rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any rating</SelectItem>
            <SelectItem value="4">4+ Stars</SelectItem>
            <SelectItem value="4.5">4.5+ Stars</SelectItem>
            <SelectItem value="4.8">4.8+ Stars</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        <Checkbox
          id="inStock"
          checked={filters.inStock || false}
          onCheckedChange={(checked) => onFiltersChange({ ...filters, inStock: checked as boolean })}
        />
        <label
          htmlFor="inStock"
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          In Stock Only
        </label>
      </div>
    </div>
  )
}
