import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { AuthProvider } from "@/components/providers/auth-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { FloatingContact } from "@/components/ui/FloatingContact"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "JaipurWines - Premium Liquor, Wines & Beer",
  description: "Shop premium wines, whisky, beer, and spirits. Quality guaranteed with fast delivery.",
  keywords: ["wine", "liquor", "beer", "whisky", "spirits", "online liquor store"],
  authors: [{ name: "JaipurWines" }],
  openGraph: {
    title: "JaipurWines - Premium Liquor, Wines & Beer",
    description: "Shop premium wines, whisky, beer, and spirits. Quality guaranteed with fast delivery.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            {children}
         <FloatingContact />      
            <Toaster />
            <Analytics />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
