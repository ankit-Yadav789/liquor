import { z } from "zod"

export const productSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.enum(["wine", "whisky", "beer", "vodka", "rum", "gin", "tequila", "brandy"]),
  brand: z.string().min(2, "Brand is required"),
  price: z.number().positive("Price must be positive"),
  alcoholPercentage: z.number().min(0).max(100, "Alcohol percentage must be between 0-100"),
  volume: z.string().min(1, "Volume is required"),
  origin: z.string().min(2, "Origin is required"),
  stock: z.number().int().min(0, "Stock cannot be negative"),
  images: z.array(z.string()).min(1, "At least one image is required"),
})

export type ProductInput = z.infer<typeof productSchema>
