export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="font-semibold text-lg mb-1">Sacas Chile</p>
            <p className="text-gray-400 text-sm">Embalaje industrial confiable para Santiago</p>
          </div>
          <div>
            <p className="text-sm text-gray-400 mb-1">
              WhatsApp:{" "}
              <a
                href="https://wa.me/56933436148"
                className="text-white hover:text-gray-300 transition-colors"
              >
                +56 9 3343 6148
              </a>
            </p>
            <p className="text-sm text-gray-400">
              Email:{" "}
              <a
                href="mailto:contacto@sacaschile.cl"
                className="text-white hover:text-gray-300 transition-colors"
              >
                contacto@sacaschile.cl
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-500">© 2025 Sacas Chile · Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}
