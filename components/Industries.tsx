import { Factory, Pickaxe, Leaf, Recycle, FlaskConical, Package } from "lucide-react"
import FadeIn from "./FadeIn"

const INDUSTRIES = [
  { icon: Factory, title: "Construcción", desc: "Arena, ripio, cemento, escombros" },
  { icon: Pickaxe, title: "Minería", desc: "Concentrados, minerales, relaves" },
  { icon: Leaf, title: "Agroindustria", desc: "Fertilizantes, semillas, granos" },
  { icon: Recycle, title: "Reciclaje", desc: "Plásticos, cartón, chatarra liviana" },
  { icon: FlaskConical, title: "Química", desc: "Polvos, resinas, pigmentos" },
  { icon: Package, title: "Logística", desc: "Almacenamiento y paletización a granel" },
]

export default function Industries() {
  return (
    <section id="productos" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Aplicaciones</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">¿Dónde se usa una saca?</h2>
          <p className="text-gray-500">Industrias que confían en sacas para mover y almacenar a granel.</p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map(({ icon: Icon, title, desc }) => (
            <FadeIn key={title}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 h-full">
                <Icon className="text-blue-800 mb-3" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
