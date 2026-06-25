import Image from "next/image"

const IMAGES = [
  {
    src: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Vista+frontal",
    alt: "Saca industrial vista frontal",
  },
  {
    src: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Detalle+asas",
    alt: "Detalle de asas reforzadas",
  },
  {
    src: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Descarga+inferior",
    alt: "Sistema de descarga inferior",
  },
]

export default function ProductGallery() {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
