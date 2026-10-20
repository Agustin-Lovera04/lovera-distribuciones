import { useState } from 'react'
import { useCart } from '../../context/CartContext.jsx'
import { formatPrice } from '../../utils/formatPrice.js'
import { assetUrl } from '../../utils/assetUrl.js'
import { MinusIcon, PlusIcon } from '../Icons/Icons.jsx'
import './productRow.css'

// Una línea de la "carta": foto, nombre, descripción, precio y el control
// para pedir ahí mismo (agregar, o sumar/restar si ya está en el pedido).
export default function ProductRow({ product }) {
  const { items, addItem, setQuantity, removeItem } = useCart()
  const [imageFailed, setImageFailed] = useState(false)
  const inCart = items.find((item) => item.id === product.id)
  const soldOut = product.available === false
  const showImage = product.image && !imageFailed

  function decrease() {
    if (inCart.quantity <= 1) removeItem(product.id)
    else setQuantity(product.id, inCart.quantity - 1)
  }

  return (
    <article className={`row${showImage ? ' row--thumb' : ''}`}>
      {showImage && (
        <div className="row__thumb">
          <img
            src={assetUrl(product.image)}
            alt={product.name}
            width="160"
            height="160"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        </div>
      )}
      <div className="row__text">
        <h3 className="row__name">{product.name}</h3>
        {product.description && <p className="row__desc">{product.description}</p>}
      </div>
      <div className="row__buy">
        <p className="row__price">{formatPrice(product.price)}</p>
        <div className="row__action">
        {soldOut ? (
          <span className="row__out">Sin stock</span>
        ) : inCart ? (
          <div className="stepper" role="group" aria-label={`Cantidad de ${product.name}`}>
            <button type="button" onClick={decrease} aria-label="Restar una unidad">
              <MinusIcon size={18} />
            </button>
            <output aria-live="polite">{inCart.quantity}</output>
            <button
              type="button"
              onClick={() => setQuantity(product.id, inCart.quantity + 1)}
              disabled={inCart.quantity >= 99}
              aria-label="Sumar una unidad"
            >
              <PlusIcon size={18} />
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="add-button"
            onClick={() => addItem(product, 1)}
            aria-label={`Agregar ${product.name} al pedido`}
          >
            <PlusIcon size={20} />
            <span className="add-button__label">Agregar</span>
          </button>
        )}
        </div>
      </div>
    </article>
  )
}
