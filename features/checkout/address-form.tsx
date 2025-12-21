"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { addressSchema, type AddressInput } from "@/lib/validations/checkout"

interface AddressFormProps {
  onSubmit: (data: AddressInput) => void
  defaultValues?: AddressInput
  isLoading?: boolean
}

export function AddressForm({ onSubmit, defaultValues, isLoading }: AddressFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<AddressInput>({
    resolver: zodResolver(addressSchema),
    defaultValues,
  })

  const isDefault = watch("isDefault")

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name *</Label>
          <Input id="fullName" {...register("fullName")} disabled={isLoading} />
          {errors.fullName && <p className="text-sm text-destructive">{errors.fullName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input id="phone" type="tel" {...register("phone")} disabled={isLoading} />
          {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="addressLine1">Address Line 1 *</Label>
        <Input id="addressLine1" {...register("addressLine1")} disabled={isLoading} />
        {errors.addressLine1 && <p className="text-sm text-destructive">{errors.addressLine1.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="addressLine2">Address Line 2</Label>
        <Input id="addressLine2" {...register("addressLine2")} disabled={isLoading} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="city">City *</Label>
          <Input id="city" {...register("city")} disabled={isLoading} />
          {errors.city && <p className="text-sm text-destructive">{errors.city.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">State *</Label>
          <Input id="state" {...register("state")} disabled={isLoading} />
          {errors.state && <p className="text-sm text-destructive">{errors.state.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="pincode">Pincode *</Label>
          <Input id="pincode" {...register("pincode")} disabled={isLoading} />
          {errors.pincode && <p className="text-sm text-destructive">{errors.pincode.message}</p>}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="isDefault"
          checked={isDefault}
          onCheckedChange={(checked) => setValue("isDefault", checked as boolean)}
          disabled={isLoading}
        />
        <label
          htmlFor="isDefault"
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Save as default address
        </label>
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save Address"}
      </Button>
    </form>
  )
}
