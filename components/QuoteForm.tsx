"use client"

import { useState } from "react"
import { Send } from "lucide-react"

const WA = "56933436148"

type F = {
  name: string
  company: string
  phone: string
  quantity: string
  notes: string
}

type Errs = Partial<Record<keyof F, string>>

const REQUIRED: (keyof F)[] = ["name", "company", "phone", "quantity"]

function validate(f: F): Errs {
  const e: Errs = {}
  for (const k of REQUIRED) if (!f[k].trim()) e[k] = "Campo obligatorio"
  return e
}

export default function QuoteForm() {
  const [f, setF] = useState<F>({ name: "", company: "", phone: "", quantity: "", notes: "" })
  const [errs, setErrs] = useState<Errs>({})
  const [sent, setSent] = useState(false)

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    const e = validate(f)
    setErrs(e)
    if (Object.keys(e).length) return

    const msg =
      `*Nueva cotización — Sacas industriales*\n\n` +
      `Nombre: ${f.name}\n` +
      `Empresa: ${f.company}\n` +
      `Teléfono: ${f.phone}\n` +
      `Cantidad: ${f.quantity}\n\n` +
      `Requerimiento:\n${f.notes.trim() || "Sin requerimientos adicionales"}`

    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank")
    setSent(true)
  }

  function set(key: keyof F) {
    return (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const val = ev.target.value
      setF((p) => ({ ...p, [key]: val }))
      if (errs[key]) setErrs((p) => ({ ...p, [key]: undefined }))
    }
  }

  function Field({
    k,
    label,
    placeholder,
  }: {
    k: keyof F
    label: string
    placeholder?: string
  }) {
    const hasErr = Boolean(errs[k])
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {REQUIRED.includes(k) ? " *" : ""}
        </label>
        <input
          value={f[k]}
          onChange={set(k)}
          placeholder={placeholder}
          className={`w-full rounded-lg border px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 transition ${
            hasErr ? "border-red-400 bg-red-50" : "border-gray-300"
          }`}
        />
        {hasErr && <p className="text-red-500 text-xs mt-1">{errs[k]}</p>}
      </div>
    )
  }

  return (
    <section id="cotizar" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-2">Contacto</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Solicita tu cotización</h2>
        <p className="text-gray-500 mb-10">Sin compromiso. Respondemos en menos de 24 horas hábiles.</p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field k="name" label="Nombre y apellido" />
            <Field k="company" label="Empresa" />
            <Field k="phone" label="Teléfono" />
            <Field k="quantity" label="Cantidad estimada" placeholder="Ej: 100 sacas de 1.000 kg con liner" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Requerimiento especial</label>
            <textarea
              value={f.notes}
              onChange={set("notes")}
              rows={4}
              placeholder="Ej: necesito spout inferior para cemento, entrega en Puente Alto..."
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Send size={16} />
            Enviar por WhatsApp
          </button>

          {sent && (
            <p className="text-center text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg py-3 px-4">
              ✅ ¡Mensaje preparado! Si WhatsApp no se abrió automáticamente, haz clic nuevamente.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
