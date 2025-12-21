"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, MoreVertical, Ban, CheckCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const mockUsers = [
  {
    id: "1",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "user",
    orders: 12,
    totalSpent: 45000,
    status: "active",
    joinedAt: "2024-06-15",
  },
  {
    id: "2",
    name: "Priya Patel",
    email: "priya@example.com",
    role: "user",
    orders: 8,
    totalSpent: 32000,
    status: "active",
    joinedAt: "2024-08-20",
  },
  {
    id: "3",
    name: "Admin User",
    email: "admin@jaipurwines.com",
    role: "admin",
    orders: 0,
    totalSpent: 0,
    status: "active",
    joinedAt: "2024-01-01",
  },
]

export function AdminUsersContent() {
  const [search, setSearch] = useState("")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold">Users Management</h1>
        <p className="text-muted-foreground">Manage customer accounts and permissions</p>
      </div>

      <Card>
        <CardHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-xs text-muted-foreground">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.role === "admin" ? "default" : "secondary"} className="capitalize">
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.orders}</TableCell>
                  <TableCell>₹{user.totalSpent.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "active" ? "default" : "destructive"} className="capitalize">
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.joinedAt}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Ban className="mr-2 h-4 w-4" />
                          Block User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
