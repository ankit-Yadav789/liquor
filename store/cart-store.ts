import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CartItem, Product } from "@/types"

interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  getItemCount: () => number
  getSubtotal: () => number
  applyCoupon: (code: string) => void
  removeCoupon: () => void
  couponCode?: string
  couponDiscount: number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: undefined,
      couponDiscount: 0,

      addItem: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.productId === product.id)

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.productId === product.id
                  ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
                  : item,
              ),
            }
          }

          return {
            items: [...state.items, { productId: product.id, product, quantity: Math.min(quantity, product.stock) }],
          }
        })
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        }))
      },

      updateQuantity: (productId, quantity) => {
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter((item) => item.productId !== productId),
            }
          }

          return {
            items: state.items.map((item) =>
              item.productId === productId ? { ...item, quantity: Math.min(quantity, item.product.stock) } : item,
            ),
          }
        })
      },

      clearCart: () => {
        set({ items: [], couponCode: undefined, couponDiscount: 0 })
      },

      getItemCount: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getSubtotal: () => {
        return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0)
      },

      applyCoupon: (code) => {
        // Mock coupon logic - in production, validate with backend
        const validCoupons: Record<string, number> = {
          WELCOME10: 10,
          SAVE20: 20,
          FIRST50: 50,
        }

        const discount = validCoupons[code.toUpperCase()]
        if (discount) {
          set({ couponCode: code.toUpperCase(), couponDiscount: discount })
        }
      },

      removeCoupon: () => {
        set({ couponCode: undefined, couponDiscount: 0 })
      },
    }),
    {
      name: "jaipurwines-cart",
    },
  ),
)
