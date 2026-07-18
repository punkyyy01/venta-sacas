import { ShieldCheck, RefreshCw, Truck, Clock, SlidersHorizontal, BadgePercent } from "lucide-react"
import FadeIn from "./FadeIn"

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Buen estado garantizado",
    desc: "Sacas revisadas y en buen estado, listas para reutilizar.",
  },
  {
    icon: RefreshCw,
    title: "Reutilizable",
    desc: "Diseñadas para múltiples ciclos de carga en condiciones industriales.",
  },
  {
    icon: Truck,
    title: "Fácil manejo",
    desc: "Tamaño y peso pensados para mover con equipo industrial estándar.",
  },
  {
    icon: Clock,
    title: "Entrega rápida",
    desc: "Stock disponible. Despacho a todo Santiago.",
  },
  {
    icon: SlidersHorizontal,
    title: "Nuevas y usadas",
    desc: "Mezcla de sacas nuevas y usadas, todas en excelente estado.",
  },
  {
    icon: BadgePercent,
    title: "Venta por volumen",
    desc: "Ideal para pedidos grandes (ej. 300+ unidades). $3.000 por unidad, cotiza sin compromiso.",
  },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Por qué elegirnos</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Ventajas de comprar sacas industriales en Santiago</h2>
          <p className="text-gray-500">Más que un producto, una solución de embalaje confiable para tu operación.</p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <FadeIn key={title}>
              <div className="flex gap-4">
                <Icon className="text-blue-800 shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
