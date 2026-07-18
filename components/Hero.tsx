import Image from "next/image"
import { MessageCircle } from "lucide-react"
import FadeIn from "./FadeIn"

const SPECS = [
  { label: "Altura", value: "1.90 m" },
  { label: "Capacidad", value: "1.500 – 2.000 kg" },
  { label: "Estado", value: "Nuevas y usadas, excelente estado" },
  { label: "Precio", value: "$3.000 c/u" },
]

export default function Hero() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <span className="inline-block bg-blue-800 text-white text-xs font-medium px-3 py-1 rounded-full mb-6">
              Despacho a todo Santiago
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Sacas industriales grandes en excelente estado
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Sacas de 1.90 m de alto para cualquier uso general a granel. Nuevas y usadas,
              todas en excelente estado. Stock disponible para venta por volumen.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {SPECS.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                  <p className="font-semibold text-gray-900 text-sm">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/56933436148"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle size={18} />
                Solicitar cotización por WhatsApp
              </a>
            </div>
          </FadeIn>

          <div className="hidden lg:block">
            <FadeIn>
              <div className="text-center select-none">
                <div className="relative aspect-[4/5] w-full mb-6">
                  <Image
                    src="/images/sacas-apiladas.jpg"
                    alt="Sacas industriales de polipropileno apiladas"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="rounded-xl object-cover"
                  />
                </div>
                <p className="text-8xl font-bold text-blue-800 tracking-tight leading-none">$3.000</p>
                <p className="text-sm text-gray-400 mt-3">por saca</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
