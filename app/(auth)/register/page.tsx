import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
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
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Image 
              src="/logo1.png" 
              alt="DaruAala Logo" 
              width={40} 
              height={40} 
              className="h-10 w-10 object-contain" 
            />
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
