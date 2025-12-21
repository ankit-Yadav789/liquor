import { z } from "zod"

export const loginSchema = z.object({
  email: z.preprocess((val) => (typeof val === "string" ? val.trim().toLowerCase() : val), z.string().email("Invalid email address")),
  password: z.preprocess((val) => (typeof val === "string" ? val.trim() : val), z.string().min(6, "Password must be at least 6 characters")),
})

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    isAgeVerified: z.boolean().refine((val) => val === true, {
      message: "You must be 21+ years old to register",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
