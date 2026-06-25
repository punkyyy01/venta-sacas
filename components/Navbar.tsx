export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-semibold text-gray-900 text-lg">Sacas Chile</span>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#productos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Productos
          </a>
          <a href="#especificaciones" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Especificaciones
          </a>
          <a href="#cotizar" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
            Contacto
          </a>
          <a
            href="#cotizar"
            className="bg-blue-800 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Cotizar
          </a>
        </nav>
        <a
          href="#cotizar"
          className="md:hidden bg-blue-800 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Cotizar
        </a>
      </div>
    </header>
  )
}
