import Image from "next/image"
import { MessageCircle } from "lucide-react"
import FadeIn from "./FadeIn"

const SPECS = [
  { label: "Capacidad", value: "500 – 2.000 kg" },
  { label: "Material", value: "PP tejido" },
  { label: "Medidas", value: "Estándar y a medida" },
  { label: "Liner", value: "Con o sin" },
]

export default function Hero() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="inline-block bg-blue-800 text-white text-xs font-medium px-3 py-1 rounded-full mb-6">
              Despacho a todo Santiago
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Sacas industriales para trabajo pesado
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              Empaques flexibles de gran capacidad para construcción, minería y agroindustria.
              Stock disponible y pedidos a medida.
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
                href="#cotizar"
                className="bg-blue-800 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Solicitar cotización
              </a>
              <a
                href="https://wa.me/56933436148"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </FadeIn>

          <div className="hidden lg:flex items-center justify-center">
            <FadeIn>
              <div className="text-center select-none">
                <Image
                  src="https://placehold.co/480x360/e2e8f0/94a3b8?text=Foto+del+producto"
                  alt="Saca industrial de polipropileno"
                  width={480}
                  height={360}
                  className="rounded-xl w-full object-cover mb-6"
                />
                <p className="text-9xl font-bold text-blue-800 tracking-tight leading-none">2.000</p>
                <p className="text-sm text-gray-400 mt-3">kg capacidad máxima</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
