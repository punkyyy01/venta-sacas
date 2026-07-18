import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Industries from "@/components/Industries"
import ProductSpecs from "@/components/ProductSpecs"
import Benefits from "@/components/Benefits"
import ProductGallery from "@/components/ProductGallery"
import FAQ from "@/components/FAQ"
import WhatsAppStrip from "@/components/WhatsAppStrip"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <ProductSpecs />
        <Benefits />
        <ProductGallery />
        <FAQ />
        <WhatsAppStrip />
      </main>
      <Footer />
    </>
  )
}
