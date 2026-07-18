import { MessageCircle } from "lucide-react"
import WhatsAppLink from "./WhatsAppLink"

export default function FloatingWhatsApp() {
  return (
    <WhatsAppLink
      location="floating_button"
      ariaLabel="Abrir WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
    >
      <MessageCircle size={26} />
    </WhatsAppLink>
  )
}
