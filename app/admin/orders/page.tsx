import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { AdminOrdersContent } from "@/features/admin/admin-orders-content"

export const metadata = {
  title: "Orders Management - Admin",
  description: "Manage customer orders and fulfillment",
}

export default async function AdminOrdersPage() {
  const user = await getCurrentUser()

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    redirect("/")
  }

  return <AdminOrdersContent />
}
