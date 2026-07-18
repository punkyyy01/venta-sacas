import { MessageCircle } from "lucide-react"
import WhatsAppLink from "./WhatsAppLink"

export default function WhatsAppStrip() {
  return (
    <div className="bg-green-50 border-y border-green-200 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <MessageCircle className="text-green-600 shrink-0" size={24} />
          <p className="text-sm sm:text-base">
            <span className="font-semibold text-gray-900">¿Necesitas respuesta rápida?</span>{" "}
            <span className="text-gray-500">
              Escríbenos al +56 9 3343 6148 — respondemos en minutos
            </span>
          </p>
        </div>
        <WhatsAppLink
          location="strip"
          className="shrink-0 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          Abrir WhatsApp
        </WhatsAppLink>
      </div>
    </div>
  )
}
