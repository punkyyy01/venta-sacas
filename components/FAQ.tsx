import FadeIn from "./FadeIn"

const FAQS = [
  {
    q: "¿Dónde comprar sacas de polipropileno en Santiago?",
    a: "En Sacas Chile despachamos a todo Santiago. Escríbenos por WhatsApp al +56 9 3343 6148 para cotizar y coordinar la entrega.",
  },
  {
    q: "¿Venden bolsones industriales usados?",
    a: "Sí, tenemos stock de sacas nuevas y usadas. Todas las usadas pasan revisión y se venden en excelente estado, listas para reutilizar.",
  },
  {
    q: "¿Cuál es el precio de las big bags en Chile?",
    a: "El precio es $3.000 CLP por unidad. Trabajamos principalmente venta por volumen, ideal para pedidos de 300 o más unidades.",
  },
  {
    q: "¿Sirven las sacas para escombros o áridos?",
    a: "Sí, son sacas de uso general a granel: áridos, escombros, insumos agrícolas, bodegaje y transporte. No son aptas para uso químico.",
  },
  {
    q: "¿Cuánto miden las sacas industriales?",
    a: "Miden 1.90 m de alto y tienen capacidad de carga de 1.500 a 2.000 kg. Escríbenos por WhatsApp si necesitas confirmar largo y ancho para tu proyecto específico.",
    // TODO: sumar ancho/largo exactos al copy cuando el cliente los confirme
  },
  {
    q: "¿Hacen despacho de sacas usadas por volumen a otras zonas?",
    a: "Nuestro despacho cubre Santiago. Si tu pedido es grande, cuéntanos el volumen y la comuna por WhatsApp y vemos disponibilidad.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
}

export default function FAQ() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn className="mb-12">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">FAQ</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Preguntas frecuentes</h2>
          <p className="text-gray-500">Lo que más nos preguntan sobre las sacas industriales.</p>
        </FadeIn>
        <div className="max-w-3xl space-y-3">
          {FAQS.map(({ q, a }) => (
            <FadeIn key={q}>
              <details className="group bg-white border border-gray-200 rounded-xl px-6 py-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-gray-900">
                  {q}
                  <span className="text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-500 mt-3">{a}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
