"use client"

import type React from "react"

import { useEffect } from "react"
import { useAuthStore } from "@/store/auth-store"

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { setUser, setLoading } = useAuthStore()

  useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch("/api/auth/me")
        if (response.ok) {
          const data = await response.json()
          setUser(data.user)
        } else {
          setUser(null)
        }
      } catch {
        setUser(null)
      }
    }

    loadUser()
  }, [setUser, setLoading])

  return <>{children}</>
}
