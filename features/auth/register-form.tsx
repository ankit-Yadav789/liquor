"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useAuthStore } from "@/store/auth-store"
import { registerSchema, type RegisterInput } from "@/lib/validations/auth"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { SITE_CONFIG } from "@/lib/constants"

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [ageVerified, setAgeVerified] = useState(false)
  const { toast } = useToast()
  const setUser = useAuthStore((state) => state.setUser)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterInput) => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Registration failed")
      }

      setUser(result.user)
      toast({
        title: "Success",
        description: "Your account has been created successfully.",
      })

      router.push("/")
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Registration failed. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="John Doe" {...register("name")} disabled={isLoading} />
        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" {...register("email")} disabled={isLoading} />
        {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" type="tel" placeholder="9876543210" {...register("phone")} disabled={isLoading} />
        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="••••••••" {...register("password")} disabled={isLoading} />
        {errors.password && <p className="text-sm text-destructive">{errors.password.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          {...register("confirmPassword")}
          disabled={isLoading}
        />
        {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>}
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="ageVerified"
          checked={ageVerified}
          onCheckedChange={(checked) => {
            setAgeVerified(checked as boolean)
            setValue("isAgeVerified", checked as boolean)
          }}
          disabled={isLoading}
        />
        <label
          htmlFor="ageVerified"
          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          I confirm that I am {SITE_CONFIG.legalAge} years or older
        </label>
      </div>
      {errors.isAgeVerified && <p className="text-sm text-destructive">{errors.isAgeVerified.message}</p>}

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Create Account
      </Button>
    </form>
  )
}
