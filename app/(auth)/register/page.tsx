import type { Metadata } from "next"
import Link from "next/link"
import { Wine } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RegisterForm } from "@/features/auth/register-form"

export const metadata: Metadata = {
  title: "Register - DaruAala",
  description: "Create your account",
}

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Wine className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="font-serif text-2xl">Create Account</CardTitle>
          <CardDescription>Sign up to start shopping premium wines and spirits</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
