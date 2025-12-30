"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Package, ShoppingCart, Users, Tag, Palette, BarChart3, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/coupons", label: "Coupons", icon: Tag },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/theme", label: "Theme", icon: Palette },
  { href: "/admin/settings", label: "Settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 border-r bg-muted/20 lg:block">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/admin" className="flex items-center gap-2">
          <Image 
            src="/logo1.png" 
            alt="Admin Logo" 
            width={32} 
            height={32} 
            className="h-8 w-8 object-contain" 
          />
          <span className="font-bold">Admin Panel</span>
        </Link>
      </div>

      <ScrollArea className="h-[calc(100vh-4rem)]">
        <nav className="space-y-1 p-4">
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href

            return (
              <Button
                key={link.href}
                variant={isActive ? "secondary" : "ghost"}
                className={cn("w-full justify-start", isActive && "bg-primary/10 text-primary")}
                asChild
              >
                <Link href={link.href}>
                  <Icon className="mr-2 h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            )
          })}
        </nav>
      </ScrollArea>
    </aside>
  )
}
