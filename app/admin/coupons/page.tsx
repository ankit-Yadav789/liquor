import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { AdminCouponsContent } from "@/features/admin/admin-coupons-content"

export const metadata = {
  title: "Coupons & Offers - Admin",
  description: "Manage discount coupons and promotional offers",
}

export default async function AdminCouponsPage() {
  const user = await getCurrentUser()

  if (!user || (user.role !== "admin" && user.role !== "manager")) {
    redirect("/")
  }

  return <AdminCouponsContent />
}
