import Image from "next/image"

const IMAGES = [
  {
    src: "/images/sacas-apiladas.jpg",
    alt: "Sacas industriales apiladas, en excelente estado",
  },
  {
    src: "/images/saca-detalle.jpg",
    alt: "Detalle del tejido de polipropileno de una saca industrial",
  },
]

export default function ProductGallery() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {IMAGES.map(({ src, alt }) => (
            <div key={alt} className="relative aspect-[3/2]">
              <Image
                src={src}
                alt={alt}
                fill
                className="rounded-xl object-cover w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
