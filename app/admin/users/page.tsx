import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { AdminUsersContent } from "@/features/admin/admin-users-content"

export const metadata = {
  title: "Users Management - Admin",
  description: "Manage customer accounts and permissions",
}

export default async function AdminUsersPage() {
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    redirect("/")
  }

  return <AdminUsersContent />
}
