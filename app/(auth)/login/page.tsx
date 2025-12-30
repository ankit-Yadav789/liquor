import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/features/auth/login-form"

export const metadata: Metadata = {
  title: "Login - DaruAala",
  description: "Sign in to your account",
}

export default function LoginPage() {
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
          <CardTitle className="font-serif text-2xl">Welcome Back</CardTitle>
          <CardDescription>Sign in to your DaruAala account</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </div>
          <div className="text-center">
            <Link href="/forgot-password" className="text-sm text-muted-foreground hover:text-primary">
              Forgot password?
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
