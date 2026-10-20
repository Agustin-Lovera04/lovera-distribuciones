import { business } from '../config/business.js'
import { formatPrice } from './formatPrice.js'

// Construye el link wa.me con el mensaje ya codificado.
// encodeURIComponent se encarga correctamente de acentos, ñ, saltos de
// línea y símbolos: no se debe armar el string manualmente en la URL.
export function buildWhatsAppOrderLink(cartItems) {
  const lines = []

  lines.push(`Hola ${business.name}! Quiero hacer este pedido:`)
  lines.push('')

  let total = 0

  for (const item of cartItems) {
    const subtotal = item.price * item.quantity
    total += subtotal
    lines.push(
      `• ${item.name} x${item.quantity} — ${formatPrice(item.price)} c/u — Subtotal: ${formatPrice(subtotal)}`
    )
  }

  lines.push('')
  lines.push(`Total estimado: ${formatPrice(total)}`)
  lines.push('')
  lines.push(
    'Nota: los precios y la disponibilidad quedan sujetos a confirmación del negocio.'
  )

  const message = lines.join('\n')
  const encoded = encodeURIComponent(message)

  return `https://wa.me/${business.whatsappNumber}?text=${encoded}`
}
