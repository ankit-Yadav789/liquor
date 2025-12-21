import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { AdminProductsContent } from "@/features/admin/admin-products-content"

export const metadata = {
  title: "Products Management - Admin",
  description: "Manage products, categories, and inventory",
}

export default async function AdminProductsPage() {
  const user = await getCurrentUser()

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    redirect("/")
  }

  return <AdminProductsContent />
}
