import Image from "next/image"
import FadeIn from "./FadeIn"

const IMAGES = [
  {
    src: "/images/sacas-apiladas.jpg",
    alt: "Sacas industriales apiladas, en excelente estado",
    caption: "Sacas usadas apiladas, listas para reutilizar",
  },
  {
    src: "/images/saca-detalle.jpg",
    alt: "Detalle del tejido de polipropileno de una saca industrial",
    caption: "Detalle del tejido de polipropileno",
  },
]

export default function ProductGallery() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Galería</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Así se ven nuestras sacas industriales</h2>
          <p className="text-gray-500">Fotos reales de nuestro stock disponible.</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {IMAGES.map(({ src, alt, caption }) => (
            <FadeIn key={src}>
              <div className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 px-4 py-3">{caption}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
