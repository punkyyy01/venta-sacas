"use client"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const WHATSAPP_NUMBER = "56933436148"

export default function WhatsAppLink({
  location,
  className,
  ariaLabel,
  children,
}: {
  location: string
  className?: string
  ariaLabel?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => window.gtag?.("event", "whatsapp_click", { location })}
    >
      {children}
    </a>
  )
}
