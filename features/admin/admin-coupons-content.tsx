"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CouponDialog } from "./coupon-dialog"

const mockCoupons = [
  {
    id: "1",
    code: "WELCOME10",
    discountType: "percentage" as const,
    discountValue: 10,
    minOrderValue: 1000,
    maxDiscount: 500,
    usageCount: 45,
    usageLimit: 100,
    expiresAt: new Date("2025-03-31"),
    isActive: true,
  },
  {
    id: "2",
    code: "FLAT500",
    discountType: "fixed" as const,
    discountValue: 500,
    minOrderValue: 5000,
    usageCount: 12,
    usageLimit: 50,
    expiresAt: new Date("2025-02-28"),
    isActive: true,
  },
]

export function AdminCouponsContent() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold">Coupons & Offers</h1>
          <p className="text-muted-foreground">Manage discount coupons and promotional offers</p>
        </div>
        <Button onClick={() => setDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Coupon
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Min Order</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Expires</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCoupons.map((coupon) => (
                <TableRow key={coupon.id}>
                  <TableCell className="font-mono font-bold">{coupon.code}</TableCell>
                  <TableCell>
                    {coupon.discountType === "percentage"
                      ? `${coupon.discountValue}% off`
                      : `₹${coupon.discountValue} off`}
                    {coupon.maxDiscount && ` (max ₹${coupon.maxDiscount})`}
                  </TableCell>
                  <TableCell>₹{coupon.minOrderValue.toLocaleString()}</TableCell>
                  <TableCell>
                    {coupon.usageCount} / {coupon.usageLimit}
                  </TableCell>
                  <TableCell>{coupon.expiresAt.toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant={coupon.isActive ? "default" : "secondary"}>
                      {coupon.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <CouponDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  )
}
