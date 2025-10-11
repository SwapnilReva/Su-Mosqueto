import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import Image from "next/image"
import Header from "./Header"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Su Mosquito Net - Premium Window Protection",
  description: "Luxury mosquito net solutions for elegant homes",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${playfair.variable} ${inter.variable} ${GeistMono.variable}`}>
        {/* Header */}
        <Header />

        {/* Page content */}
        <div className="pt-20">{children}</div>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            {/* Accent bar */}
            <div className="h-px w-full bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-transparent mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4">
              <div className="lg:col-span-2">
                <p className="text-slate-300 max-w-md leading-relaxed">
                  Premium German-engineered mosquito nets that combine superior protection with luxury aesthetics.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2.5">Quick Links</h3>
                <div className="space-y-0.5">
                  <a href="#home" className="block text-slate-300 hover:text-white/90 transition-colors">
                    Home
                  </a>
                  <a href="#about" className="block text-slate-300 hover:text-white/90 transition-colors">
                    About Us
                  </a>
                  <a href="#services" className="block text-slate-300 hover:text-white/90 transition-colors">
                    Services
                  </a>
                  <a href="#gallery" className="block text-slate-300 hover:text-white/90 transition-colors">
                    Gallery
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2.5">Contact Info</h3>
                <div className="space-y-1 text-slate-300">
                  <div>
                    Phone: <a href="tel:+91 9909437575" className="hover:text-white/90 transition-colors">+91 9909437575</a>
                  </div>
                  <div>
                    Email: <a href="mailto:swapnil.reva1499@gmail.com" className="hover:text-white/90 transition-colors">swapnil.reva1499@gmail.com</a>
                  </div>
                  <div>Address: 131, Vishal Industrial society, U M Road, Surat, Gujrat 395007</div>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-5 pt-3.5 text-center">
              <p className="text-slate-400">
                © 2025 Su Mosquito Net. All rights reserved. | Premium German Window Solutions
              </p>
            </div>
          </div>
        </footer>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
