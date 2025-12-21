import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { AdminThemeContent } from "@/features/admin/admin-theme-content"

export const metadata = {
  title: "Theme Management - Admin",
  description: "Customize website appearance and branding",
}

export default async function AdminThemePage() {
  const user = await getCurrentUser()

  if (!user || user.role !== "admin") {
    redirect("/")
  }

  return <AdminThemeContent />
}
