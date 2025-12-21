"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CouponDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CouponDialog({ open, onOpenChange }: CouponDialogProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Coupon</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="code">Coupon Code</Label>
            <Input id="code" placeholder="SUMMER2025" className="font-mono uppercase" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discountType">Discount Type</Label>
            <Select defaultValue="percentage">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="percentage">Percentage</SelectItem>
                <SelectItem value="fixed">Fixed Amount</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="value">Discount Value</Label>
              <Input id="value" type="number" placeholder="10" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxDiscount">Max Discount</Label>
              <Input id="maxDiscount" type="number" placeholder="500" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="minOrder">Min Order Value</Label>
              <Input id="minOrder" type="number" placeholder="1000" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="limit">Usage Limit</Label>
              <Input id="limit" type="number" placeholder="100" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input id="expiry" type="date" required />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">Create Coupon</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
