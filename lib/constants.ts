export const SITE_CONFIG = {
  name: "JaipurWines",
  description: "Premium liquor, wines, and beer delivered to your doorstep",
  url: "https://jaipurwines.com",
  legalAge: 21,
  currency: "INR",
  currencySymbol: "₹",
}

export const PRODUCT_CATEGORIES = [
  { value: "wine", label: "Wine", icon: "🍷" },
  { value: "whisky", label: "Whisky", icon: "🥃" },
  { value: "beer", label: "Beer", icon: "🍺" },
  { value: "vodka", label: "Vodka", icon: "🍸" },
  { value: "rum", label: "Rum", icon: "🥂" },
  { value: "gin", label: "Gin", icon: "🍹" },
  { value: "tequila", label: "Tequila", icon: "🥃" },
  { value: "brandy", label: "Brandy", icon: "🥃" },
] as const

export const ORDER_STATUS_LABELS = {
  pending: "Pending",
  confirmed: "Confirmed",
  processing: "Processing",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
} as const

export const PAYMENT_STATUS_LABELS = {
  pending: "Pending",
  paid: "Paid",
  failed: "Failed",
  refunded: "Refunded",
} as const
