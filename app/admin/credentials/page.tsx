import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Key, User, UserCog } from "lucide-react"

export default function AdminCredentialsPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-2">Admin Login Credentials</h1>
        <p className="text-muted-foreground">Demo accounts for testing the DaruAala platform</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle>Admin Account</CardTitle>
            </div>
            <CardDescription>Full access to all features and management tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span className="font-medium">Email:</span>
              </div>
              <code className="block bg-muted p-3 rounded-md text-sm">admin@daruaala.com</code>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Key className="h-4 w-4" />
                <span className="font-medium">Password:</span>
              </div>
              <code className="block bg-muted p-3 rounded-md text-sm">Admin@123</code>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <UserCog className="h-5 w-5 text-primary" />
              <CardTitle>Manager Account</CardTitle>
            </div>
            <CardDescription>Limited admin access for order and product management</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span className="font-medium">Email:</span>
              </div>
              <code className="block bg-muted p-3 rounded-md text-sm">manager@daruaala.com</code>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Key className="h-4 w-4" />
                <span className="font-medium">Password:</span>
              </div>
              <code className="block bg-muted p-3 rounded-md text-sm">Admin@123</code>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <User className="h-5 w-5 text-primary" />
              <CardTitle>Regular User Account</CardTitle>
            </div>
            <CardDescription>Standard customer account for testing shopping features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <User className="h-4 w-4" />
                <span className="font-medium">Email:</span>
              </div>
              <code className="block bg-muted p-3 rounded-md text-sm">user@example.com</code>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Key className="h-4 w-4" />
                <span className="font-medium">Password:</span>
              </div>
              <code className="block bg-muted p-3 rounded-md text-sm">Admin@123</code>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-1 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">Important Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>• All demo accounts use the same password for testing convenience</p>
            <p>• Admin account has full access to the admin dashboard</p>
            <p>• Manager account can manage products and orders</p>
            <p>• Regular user account for testing customer features</p>
            <p>• In production, use secure passwords and proper authentication</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Access Admin Dashboard</h2>
        <p className="text-sm text-muted-foreground mb-4">
          After logging in with admin credentials, navigate to{" "}
          <code className="bg-background px-2 py-1 rounded">/admin</code> to access the admin dashboard.
        </p>
        <a
          href="/login"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
        >
          Go to Login Page
        </a>
      </div>
    </div>
  )
}
