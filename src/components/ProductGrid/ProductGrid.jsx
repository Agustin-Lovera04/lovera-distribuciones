import { useEffect, useState } from 'react'
import ProductRow from '../ProductRow/ProductRow.jsx'
import { products as allProducts } from '../../data/products.js'
import { categories, drinkTypes } from '../../data/categories.js'
import { scrollToId } from '../../utils/scrollTo.js'
import './productGrid.css'

const PAGE_SIZE = 10 // productos por página (cambiá este número si querés más o menos)

// Avisos en desarrollo (npm run dev): revisá la consola del navegador (F12).
if (import.meta.env.DEV) {
  const seen = new Set()
  const subs = drinkTypes.map((d) => d.id)
  allProducts.forEach((p) => {
    if (seen.has(p.id)) console.warn(`ID repetido: "${p.id}". Cada producto necesita un id distinto.`)
    seen.add(p.id)
    if (!categories.some((c) => c.id === p.category)) console.warn(`"${p.name}": la category "${p.category}" no existe.`)
    if (p.subcategory && p.category !== 'bebidas') console.warn(`"${p.name}": tiene subcategory pero no es bebida.`)
    if (p.subcategory && !subs.includes(p.subcategory)) console.warn(`"${p.name}": la subcategory "${p.subcategory}" no existe.`)
  })
}

export default function ProductGrid({ products, onReset }) {
  const [page, setPage] = useState(1)

  // al cambiar filtros o búsqueda, vuelve a la página 1
  useEffect(() => {
    setPage(1)
  }, [products])

  if (products.length === 0) {
    return (
      <div className="carta-wrap">
        <div className="carta__empty" role="status">
          <p>No encontramos productos con esa búsqueda.</p>
          <button type="button" className="button" onClick={onReset}>
            Ver todos los productos
          </button>
        </div>
      </div>
    )
  }

  const totalPages = Math.ceil(products.length / PAGE_SIZE)
  const current = Math.min(page, totalPages)
  const visible = products.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE)

  function goTo(n) {
    setPage(n)
    scrollToId('catalogo')
  }

  return (
    <div className="carta-wrap">
      <ul className="carta">
        {visible.map((product, i) => (
          <li key={`${product.id}-${i}`}>
            <ProductRow product={product} />
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <nav className="pager" aria-label="Páginas del catálogo">
          <button type="button" onClick={() => goTo(current - 1)} disabled={current === 1}>
            Anterior
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goTo(n)}
              aria-current={n === current ? 'page' : undefined}
              aria-label={`Página ${n}`}
            >
              {n}
            </button>
          ))}
          <button type="button" onClick={() => goTo(current + 1)} disabled={current === totalPages}>
            Siguiente
          </button>
        </nav>
      )}
    </div>
  )
}
