import type { User } from "@/types"

// Pre-configured admin and test users
export const MOCK_USERS: User[] = [
  {
    id: "admin_001",
    email: "admin@jaipurwines.com",
    name: "Admin User",
    phone: "+91-9876543210",
    role: "admin",
    isAgeVerified: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date(),
  },
  {
    id: "manager_001",
    email: "manager@jaipurwines.com",
    name: "Manager User",
    phone: "+91-9876543211",
    role: "manager",
    isAgeVerified: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date(),
  },
  {
    id: "user_001",
    email: "user@example.com",
    name: "Test User",
    phone: "+91-9876543212",
    role: "user",
    isAgeVerified: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date(),
  },
]

// Pre-hashed passwords (in production, these would be properly hashed)
// Password for all demo accounts: "Admin@123"
export const MOCK_USER_PASSWORDS: Record<string, string> = {
  admin_001: "$2b$10$nD2DmH7ugNA1athf1Lw.6uMrWXMcGHs.WjLZgRj8owcadDEd/LNtG", // Admin@123
  manager_001: "$2b$10$nD2DmH7ugNA1athf1Lw.6uMrWXMcGHs.WjLZgRj8owcadDEd/LNtG", // Admin@123
  user_001: "$2b$10$nD2DmH7ugNA1athf1Lw.6uMrWXMcGHs.WjLZgRj8owcadDEd/LNtG", // Admin@123
}

// Initialize global users array
export function initializeMockUsers() {
  if (typeof global !== "undefined") {
    ;(global as any).users = [...MOCK_USERS]
    ;(global as any).userPasswords = { ...MOCK_USER_PASSWORDS }
  }
}
