// User Types
export interface User {
  id: string
  email: string
  name: string
  role: "user" | "admin" | "manager"
  phone?: string
  isAgeVerified: boolean
  createdAt: Date
  updatedAt: Date
}

// Product Types
export interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: ProductCategory
  brand: string
  price: number
  originalPrice?: number
  discount?: number
  alcoholPercentage: number
  volume: string
  origin: string
  images: string[]
  stock: number
  featured: boolean
  rating: number
  reviewCount: number
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export type ProductCategory = "wine" | "whisky" | "beer" | "vodka" | "rum" | "gin" | "tequila" | "brandy"

// Cart Types
export interface CartItem {
  productId: string
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  subtotal: number
  discount: number
  total: number
}

// Order Types
export interface Order {
  id: string
  userId: string
  user: User
  items: OrderItem[]
  subtotal: number
  discount: number
  tax: number
  deliveryCharge: number
  total: number
  status: OrderStatus
  paymentMethod: string
  paymentStatus: PaymentStatus
  shippingAddress: Address
  couponCode?: string
  createdAt: Date
  updatedAt: Date
}

export interface OrderItem {
  productId: string
  product: Product
  quantity: number
  price: number
}

export type OrderStatus = "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled"
export type PaymentStatus = "pending" | "paid" | "failed" | "refunded"

// Address Types
export interface Address {
  id?: string
  fullName: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  pincode: string
  isDefault?: boolean
}

// Coupon Types
export interface Coupon {
  id: string
  code: string
  discountType: "percentage" | "fixed"
  discountValue: number
  minOrderValue: number
  maxDiscount?: number
  expiresAt: Date
  usageLimit: number
  usageCount: number
  isActive: boolean
  createdAt: Date
}

// Review Types
export interface Review {
  id: string
  userId: string
  user: User
  productId: string
  rating: number
  comment: string
  createdAt: Date
}

// Filter Types
export interface ProductFilters {
  category?: ProductCategory[]
  brand?: string[]
  priceRange?: [number, number]
  alcoholRange?: [number, number]
  rating?: number
  inStock?: boolean
  search?: string
  sortBy?: "price-asc" | "price-desc" | "name-asc" | "name-desc" | "rating" | "newest"
}
