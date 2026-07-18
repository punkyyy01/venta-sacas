import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import FloatingWhatsApp from "@/components/FloatingWhatsApp"

const inter = Inter({ subsets: ["latin"] })

const SITE_URL = "https://curumillaspa.cl"

const TITLE = "Sacas Industriales 1.90m en Santiago | Sacas Chile"
const DESCRIPTION =
  "Sacas industriales de 1.90 m, nuevas y usadas en excelente estado. Capacidad 1.500-2.000 kg. $3.000 por unidad, venta por volumen. Despacho en Santiago, Chile."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Sacas Chile",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Saca industrial 1.90m",
  description:
    "Saca industrial de 1.90 m de alto, nueva o usada en excelente estado, capacidad 1.500 a 2.000 kg.",
  offers: {
    "@type": "Offer",
    price: "3000",
    priceCurrency: "CLP",
    availability: "https://schema.org/InStock",
    areaServed: "Santiago, Chile",
    seller: {
      "@type": "Organization",
      name: "Sacas Chile",
      telephone: "+56933436148",
    },
  },
  brand: {
    "@type": "Brand",
    name: "Sacas Chile",
  },
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sacas Chile",
  description: "Venta de sacas industriales nuevas y usadas por volumen, con despacho en Santiago, Chile.",
  url: SITE_URL,
  telephone: "+56933436148",
  email: "contacto@curumillaspa.cl",
  areaServed: {
    "@type": "City",
    name: "Santiago",
  },
  priceRange: "$$",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  )
}
