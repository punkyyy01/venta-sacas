import { MessageCircle, PackageCheck, CreditCard, Truck } from "lucide-react"
import FadeIn from "./FadeIn"

const STEPS = [
  { icon: MessageCircle, title: "1. Cotizas por WhatsApp", desc: "Nos escribes la cantidad que necesitas y te confirmamos precio y disponibilidad al momento." },
  { icon: PackageCheck, title: "2. Confirmamos stock y despacho", desc: "Coordinamos fecha de entrega según tu comuna dentro de Santiago." },
  // TODO: confirmar con el cliente los medios de pago reales antes de publicar
  { icon: CreditCard, title: "3. Coordinamos el pago", desc: "Acordamos la forma de pago antes de la entrega." },
  { icon: Truck, title: "4. Recibes tu pedido", desc: "Despachamos directo a tu obra o bodega en Santiago." },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Proceso</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Cómo funciona la compra</h2>
          <p className="text-gray-500">Simple y directo, sin trámites complicados.</p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map(({ icon: Icon, title, desc }) => (
            <FadeIn key={title}>
              <Icon className="text-blue-800 mb-3" size={24} />
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
