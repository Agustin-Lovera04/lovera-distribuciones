import { useEffect, useRef, useState } from 'react'
import { useCart } from '../../context/CartContext.jsx'
import { formatPrice } from '../../utils/formatPrice.js'
import { assetUrl } from '../../utils/assetUrl.js'
import { CheckIcon, PlusIcon } from '../Icons/Icons.jsx'
import './productCard.css'

export default function ProductCard({ product, variant }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  function handleAdd() {
    addItem(product, 1)
    setAdded(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setAdded(false), 1500)
  }

  const soldOut = product.available === false

  return (
    <article className={`product${variant === 'feature' ? ' product--feature' : ''}`}>
      <div className="product__media">
        {product.image && !imageFailed && (
          <img
            src={assetUrl(product.image)}
            alt={product.name}
            width="480"
            height="480"
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>
      <div className="product__body">
        <h3 className="product__name">{product.name}</h3>
        {product.description && <p className="product__desc">{product.description}</p>}
        <div className="product__row">
          <span className="product__price">{formatPrice(product.price)}</span>
          {soldOut ? (
            <span className="product__out">Sin stock</span>
          ) : (
            <button
              type="button"
              className={`add-button${added ? ' is-added' : ''}`}
              onClick={handleAdd}
              aria-label={`Agregar ${product.name} al carrito`}
            >
              {added ? <CheckIcon /> : <PlusIcon />}
            </button>
          )}
        </div>
        <span className="visually-hidden" role="status">
          {added ? `${product.name} agregado al carrito` : ''}
        </span>
      </div>
    </article>
  )
}
