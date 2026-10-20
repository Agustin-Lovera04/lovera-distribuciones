import { useEffect, useRef } from 'react'
import { useCart } from '../../context/CartContext.jsx'
import { formatPrice } from '../../utils/formatPrice.js'
import { assetUrl } from '../../utils/assetUrl.js'
import { buildWhatsAppOrderLink } from '../../utils/whatsapp.js'
import { CloseIcon, MinusIcon, PlusIcon, TrashIcon } from '../Icons/Icons.jsx'
import './cartDrawer.css'

const FOCUSABLE = 'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])'

export default function CartDrawer({ onClose }) {
  const { items, totalPrice, removeItem, setQuantity, clear } = useCart()
  const dialogRef = useRef(null)

  useEffect(() => {
    dialogRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden' // evita scroll de fondo mientras está abierto
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  function onKeyDown(e) {
    if (e.key === 'Escape') {
      onClose()
      return
    }
    if (e.key !== 'Tab') return
    // el foco se queda dentro del carrito mientras está abierto
    const nodes = dialogRef.current?.querySelectorAll(FOCUSABLE)
    if (!nodes || nodes.length === 0) return
    const first = nodes[0]
    const last = nodes[nodes.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  const whatsappLink = items.length > 0 ? buildWhatsAppOrderLink(items) : null

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        tabIndex={-1}
        ref={dialogRef}
        onKeyDown={onKeyDown}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart-drawer__head">
          <h2 id="cart-title">Tu pedido</h2>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Cerrar carrito">
            <CloseIcon />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer__empty">
            <p className="cart-drawer__empty-title">Tu carrito está vacío.</p>
            <p>Sumá productos del catálogo y los ves acá antes de enviar el pedido.</p>
            <button type="button" className="button" onClick={onClose}>
              Ver catálogo
            </button>
          </div>
        ) : (
          <>
            <ul className="cart-drawer__list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item__thumb">
                    {item.image && <img src={assetUrl(item.image)} alt="" loading="lazy" />}
                  </div>
                  <div className="cart-item__info">
                    <p className="cart-item__name">{item.name}</p>
                    <p className="cart-item__unit">{formatPrice(item.price)} c/u</p>
                    <div className="stepper" role="group" aria-label={`Cantidad de ${item.name}`}>
                      <button
                        type="button"
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        aria-label="Restar una unidad"
                      >
                        <MinusIcon size={18} />
                      </button>
                      <output aria-live="polite">{item.quantity}</output>
                      <button
                        type="button"
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                        disabled={item.quantity >= 99}
                        aria-label="Sumar una unidad"
                      >
                        <PlusIcon size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="cart-item__side">
                    <p className="cart-item__subtotal">{formatPrice(item.price * item.quantity)}</p>
                    <button
                      type="button"
                      className="icon-button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Quitar ${item.name} del carrito`}
                    >
                      <TrashIcon size={20} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-drawer__foot">
              <div className="cart-drawer__total">
                <span>Total estimado</span>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>
              <p className="cart-drawer__note">
                Precios informativos. El negocio confirma precio, stock y entrega al recibir tu mensaje.
              </p>
              <a className="button button--block" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Confirmar pedido por WhatsApp
              </a>
              <button type="button" className="text-button" onClick={clear}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
