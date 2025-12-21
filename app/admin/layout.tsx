import type { ReactNode } from "react"
import { AdminSidebar } from "@/features/admin/admin-sidebar"
import { AdminHeader } from "@/features/admin/admin-header"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
