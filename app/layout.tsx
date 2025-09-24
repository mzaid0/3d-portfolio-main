import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LoadingProvider } from "@/contexts/LoadingContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shabaan Mohamed ",
  description: "A modern, professional portfolio website with smooth animations and futuristic design",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <body className={inter.className} style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        <LoadingProvider>
          <div style={{ overflowX: 'hidden', maxWidth: '100vw', width: '100%' }}>
            {children}
          </div>
        </LoadingProvider>
      </body>
    </html>
  )
}
