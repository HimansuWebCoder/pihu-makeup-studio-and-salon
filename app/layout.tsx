import type React from "react"
import type { Metadata } from "next/types"
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WelcomePopup from "@/components/welcome-popup"
import CallButton from "@/components/call-button"
import LoadingScreen from "@/components/loading-screen"
import WhatsAppButton from "@/components/whatsapp-button"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Define luxury fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Pihu Makeup Studio and Salon",
  description: "Professional makeup and salon services",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
         <LoadingScreen />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WelcomePopup />
          <CallButton />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
