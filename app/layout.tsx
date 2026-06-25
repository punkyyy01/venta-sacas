import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sacas Industriales | Sacas Chile — Santiago, Chile",
  description:
    "Sacas de polipropileno tejido (big bags) para construcción, minería y agricultura. Capacidad 500 a 2.000 kg. Despacho a todo Santiago. Solicita tu cotización.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}<Analytics /></body>
    </html>
  )
}
