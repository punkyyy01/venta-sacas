import FadeIn from "./FadeIn"

export default function Industries() {
  return (
    <section id="productos" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn>
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Usos</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Para qué se usa una saca?</h2>
          <p className="text-gray-500 max-w-2xl">
            Sirven para cualquier tipo de carga a granel de uso general: áridos, escombros, insumos
            agrícolas, bodegaje y transporte, y más. No aptas para uso químico.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
