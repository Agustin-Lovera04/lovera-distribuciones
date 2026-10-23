import ProductCard from '../ProductCard/ProductCard.jsx'

// Productos marcados con `featured: true` en src/data/products.js (hasta 3, con foto).
// Sin productos marcados, no se muestra.
export default function Featured({ products }) {
  if (products.length === 0) return null

  return (
    <section className="featured is-dark" id="destacados" aria-labelledby="featured-title">
      <div className="container">
        <h2 className="featured__title" id="featured-title" data-aos="fade-up">Destacados y Promos</h2>
        <ul className="featured__list">
          {products.map((product, i) => (
            <li key={product.id} data-aos="zoom-in" data-aos-delay={i * 200}>
              <ProductCard product={product} variant="feature" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
