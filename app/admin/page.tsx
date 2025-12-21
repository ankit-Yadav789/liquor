import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { AdminDashboard } from "@/features/admin/admin-dashboard"

export const metadata = {
  title: "Admin Dashboard - JaipurWines",
  description: "Manage your liquor e-commerce platform",
}

export default async function AdminPage() {
  const user = await getCurrentUser()

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    redirect("/")
  }

  return <AdminDashboard user={user} />
}
