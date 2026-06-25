import FadeIn from "./FadeIn"

const SPECS = [
  { label: "Capacidad de carga", value: "500 – 2.000 kg", desc: "Factor de seguridad 5:1 o 6:1" },
  { label: "Material", value: "PP tejido", desc: "Polipropileno UV estabilizado" },
  { label: "Medidas estándar", value: "90×90×90 cm", desc: "También 100×100×100 y personalizadas" },
  { label: "Asas", value: "4 asas PP", desc: "Alta tenacidad, cosidas y reforzadas" },
  { label: "Liner interior", value: "Opcional", desc: "PE para granulares finos o material húmedo" },
  { label: "Descarga inferior", value: "Opcional", desc: "Spout o skirt para vaciado controlado" },
]

export default function ProductSpecs() {
  return (
    <section id="especificaciones" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Ficha técnica</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Especificaciones del producto</h2>
          <p className="text-gray-500">Dimensiones y materiales estándar. Pedidos personalizados disponibles.</p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECS.map(({ label, value, desc }) => (
            <FadeIn key={label}>
              <div className="bg-white border border-gray-200 rounded-xl p-6 h-full">
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">{label}</p>
                <p className="text-xl font-semibold text-blue-800 mb-1">{value}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
