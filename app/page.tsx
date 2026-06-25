import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Industries from "@/components/Industries"
import ProductSpecs from "@/components/ProductSpecs"
import Benefits from "@/components/Benefits"
import ProductGallery from "@/components/ProductGallery"
import WhatsAppStrip from "@/components/WhatsAppStrip"
import QuoteForm from "@/components/QuoteForm"
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
        <WhatsAppStrip />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}
