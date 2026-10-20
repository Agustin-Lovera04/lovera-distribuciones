import { useRef, useState } from 'react'
import { useCart } from '../../context/CartContext.jsx'
import CartDrawer from '../Cart/CartDrawer.jsx'
import { CartIcon } from '../Icons/Icons.jsx'
import './cartButton.css'

export default function CartButton() {
  const { totalItems } = useCart()
  const [open, setOpen] = useState(false)
  const triggerRef = useRef(null)

  function close() {
    setOpen(false)
    // devolvemos el foco al botón que abrió el carrito (accesibilidad por teclado)
    triggerRef.current?.focus()
  }

  const label =
    totalItems > 0
      ? `Abrir carrito, ${totalItems} ${totalItems === 1 ? 'producto' : 'productos'}`
      : 'Abrir carrito, vacío'

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="cart-button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={label}
      >
        <CartIcon size={26} />
        {totalItems > 0 && (
          // key = cantidad: el número "salta" cada vez que cambia
          <span key={totalItems} className="cart-button__badge" aria-hidden="true">
            {totalItems}
          </span>
        )}
      </button>
      {open && <CartDrawer onClose={close} />}
    </>
  )
}
