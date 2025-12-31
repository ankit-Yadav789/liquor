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
  metadataBase: new URL("https://daruaala.com"), // Use your production URL
  title: {
    default: "DaruAala - Premium Liquor, Wines & Beer Delivery in Jaipur",
    template: "%s | Daruaala",
  },
  description:
    "DaruAala is Jaipur's premier online liquor store. Shop premium wines, whisky, beer, and spirits. Fast home delivery in Lalkothi, Barkat Nagar, and across Jaipur.",
  keywords: [
    "DaruAala",
    "liquor delivery Jaipur",
    "wine shop Jaipur",
    "beer delivery Lalkothi",
    "buy alcohol online Jaipur",
    "whisky price Jaipur",
    "spirits",
    "premium liquor India",
  ],
  authors: [{ name: "DaruAala" }],
  creator: "DaruAala",
  publisher: "DaruAala",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "DaruAala - Premium Liquor, Wines & Beer Delivery in Jaipur",
    description:
      "Order your favorite drinks from DaruAala. Fast delivery of premium wines, whisky, beer, and spirits in Jaipur.",
    url: "https://daruaala.com",
    siteName: "DaruAala",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Ensure this image exists
        width: 1200,
        height: 630,
        alt: "DaruAala - Premium Liquor Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DaruAala - Premium Liquor Delivery Jaipur",
    description: "Fast delivery of premium wines, whisky, beer, and spirits in Jaipur.",
    images: ["/og-image.png"],
    creator: "@daruaala", // Add actual handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo1.png",
    apple: "/logo1.png",
    shortcut: "/logo1.png",
  },
  alternates: {
    canonical: "./",
  },
  verification: {
    google: "WQ7wj1w9JhU0kRyeRnxPnefMUs7mqjf6L_CZDkVnGgg", // Replace with actual code from GSC
  },
  generator: "v0.app",
};

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
