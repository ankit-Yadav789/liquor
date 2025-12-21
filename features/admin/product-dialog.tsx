"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Product } from "@/types"

interface ProductDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: Product | null
}

export function ProductDialog({ open, onOpenChange, product }: ProductDialogProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Implement product save logic
    setTimeout(() => {
      setIsLoading(false)
      onOpenChange(false)
    }, 1000)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{product ? "Edit Product" : "Add New Product"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" defaultValue={product?.name} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="brand">Brand</Label>
              <Input id="brand" defaultValue={product?.brand} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select defaultValue={product?.category}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wine">Wine</SelectItem>
                  <SelectItem value="whisky">Whisky</SelectItem>
                  <SelectItem value="beer">Beer</SelectItem>
                  <SelectItem value="vodka">Vodka</SelectItem>
                  <SelectItem value="rum">Rum</SelectItem>
                  <SelectItem value="gin">Gin</SelectItem>
                  <SelectItem value="tequila">Tequila</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price (₹)</Label>
              <Input id="price" type="number" defaultValue={product?.price} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock">Stock</Label>
              <Input id="stock" type="number" defaultValue={product?.stock} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="alcohol">Alcohol %</Label>
              <Input id="alcohol" type="number" step="0.1" defaultValue={product?.alcoholPercentage} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="volume">Volume</Label>
              <Input id="volume" defaultValue={product?.volume} placeholder="750ml" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="origin">Origin</Label>
              <Input id="origin" defaultValue={product?.origin} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" defaultValue={product?.description} rows={4} required />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : product ? "Update Product" : "Add Product"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
