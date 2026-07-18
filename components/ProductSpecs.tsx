import FadeIn from "./FadeIn"

const SPECS = [
  { label: "Altura", value: "1.90 m", desc: "Medida estándar" },
  { label: "Capacidad de carga", value: "1.500 – 2.000 kg", desc: "" },
  // TODO: confirmar material exacto con proveedor
  { label: "Material", value: "Polipropileno tejido", desc: "" },
  { label: "Estado", value: "Nuevas y usadas", desc: "Todas revisadas, excelente estado" },
]

export default function ProductSpecs() {
  return (
    <section id="especificaciones" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Ficha técnica</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Especificaciones de nuestras sacas industriales</h2>
          {/* TODO: confirmar ancho y largo con cliente, solo se conoce el alto */}
          <p className="text-gray-500">Medidas y materiales de nuestras sacas industriales.</p>
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
