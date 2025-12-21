"use client"

import React from "react"
import { Phone } from "lucide-react"

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M20.52 3.48A11.93 11.93 0 0 0 12 1C6.48 1 2 5.48 2 11c0 1.74.45 3.37 1.23 4.83L2 23l7.41-1.93A11.94 11.94 0 0 0 12 23c5.52 0 10-4.48 10-10 0-1.89-.51-3.66-1.48-5.16zM12 21.5c-.54 0-1.07-.07-1.58-.2L5.5 20.6l.58-1.82A9.5 9.5 0 1 1 21.5 11 9.49 9.49 0 0 1 12 21.5z" />
    <path d="M16.2 14.07c-.22-.11-1.3-.64-1.5-.72-.2-.08-.35-.11-.5.11s-.57.72-.7.87c-.13.15-.25.17-.47.06-.22-.11-.93-.34-1.77-1.08-.65-.58-1.09-1.29-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.27.33-.4.11-.13.15-.22.23-.37.08-.15.03-.28-.02-.39-.05-.11-.5-1.2-.69-1.64-.18-.43-.37-.37-.5-.38l-.43-.01c-.15 0-.39.06-.6.28-.22.22-.82.8-.82 1.95 0 1.15.84 2.27.96 2.43.13.16 1.66 2.61 4.02 3.56 2.36.96 2.36.64 2.78.6.42-.04 1.37-.56 1.56-1.1.19-.54.19-1 .13-1.1-.06-.1-.22-.15-.44-.26z"/>
  </svg>
)

export function FloatingContact({
  phone = process.env.NEXT_PUBLIC_SUPPORT_PHONE || "+919876543210",
  whatsappText = process.env.NEXT_PUBLIC_WHATSAPP_TEXT || "Hello, I need help",
}: {
  phone?: string
  whatsappText?: string
}) {
  // Format phone for wa.me: remove non-digits and leading zeros
  const waPhone = phone.replace(/\D/g, "").replace(/^0+/, "")
  const waHref = `https://wa.me/${waPhone}?text=${encodeURIComponent(whatsappText)}`

  const telHref = `tel:${phone.replace(/\s+/g, "")}`

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg hover:scale-105 transition-transform"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>

      <a
        href={telHref}
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 text-white shadow-lg hover:scale-105 transition-transform"
        aria-label="Call us"
        title="Call us"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  )
}