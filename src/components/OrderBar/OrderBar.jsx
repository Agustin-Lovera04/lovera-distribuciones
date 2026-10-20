import { useState } from 'react'
import { useCart } from '../../context/CartContext.jsx'
import { formatPrice } from '../../utils/formatPrice.js'
import CartDrawer from '../Cart/CartDrawer.jsx'
import './orderBar.css'

// Barra de pedido: aparece cuando hay productos en el carrito.
export default function OrderBar() {
  const { totalItems, totalPrice } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <>
      {totalItems > 0 && (
        <div className="order-bar is-dark" role="region" aria-label="Resumen del pedido">
          <p className="order-bar__info">
            <strong>{totalItems} {totalItems === 1 ? 'producto' : 'productos'}</strong>
            <span>{formatPrice(totalPrice)} estimado</span>
          </p>
          <button type="button" className="button button--gold" onClick={() => setOpen(true)}>
            Ver pedido
          </button>
        </div>
      )}
      {open && <CartDrawer onClose={() => setOpen(false)} />}
    </>
  )
}
