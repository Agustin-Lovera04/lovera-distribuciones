import { useMemo, useState } from 'react'
import { products } from '../data/products.js'
import { business } from '../config/business.js'
import logoGold from '../assets/logo-gold.png'
import SearchBar from '../components/SearchBar/SearchBar.jsx'
import CategoryFilter from '../components/CategoryFilter/CategoryFilter.jsx'
import BrandWall from '../components/BrandWall/BrandWall.jsx'
import Featured from '../components/Featured/Featured.jsx'
import HeroStage from '../components/HeroStage/HeroStage.jsx'
import ProductGrid from '../components/ProductGrid/ProductGrid.jsx'
import { useGoToSection } from '../hooks/useGoToSection.js'
import { scrollToId } from '../utils/scrollTo.js'
import { normalizeText } from '../utils/text.js'

const waDigits = String(business.whatsappNumber).replace(/\D/g, '')

export default function Home() {
  const goTo = useGoToSection()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState(null)
  const [subcategory, setSubcategory] = useState(null)

  const filtered = useMemo(() => {
    const term = normalizeText(search.trim())
    return products.filter((p) => {
      const matchesCategory = category ? p.category === category : true
      const matchesSub = subcategory ? p.subcategory === subcategory : true
      const matchesSearch = term ? normalizeText(p.name).includes(term) : true
      return matchesCategory && matchesSub && matchesSearch
    })
  }, [search, category, subcategory])

  const featured = useMemo(
    () => products.filter((p) => p.featured && p.available !== false).slice(0, 5),
    []
  )

  function changeCategory(id) {
    setCategory(id)
    setSubcategory(null)
  }

  function resetFilters() {
    setSearch('')
    setCategory(null)
    setSubcategory(null)
  }

  function selectFromWall(id, sub) {
    setSearch('')
    setCategory(id)
    setSubcategory(sub || null)
    setTimeout(() => scrollToId('catalogo'), 40) // tras aplicar el filtro
  }

  return (
    <>
      {/* ---------- PRIMERA PANTALLA ----------
          Dos bloques independientes: texto (izquierda) e imágenes (derecha).
          Las imágenes se configuran en src/config/hero.js */}
      <section className="hero is-dark" aria-labelledby="hero-title">
        <div className="hero__text">
          <h1 className="hero__logo" id="hero-title">
            <img src={logoGold} alt="Lovera Distribuciones" width="1692" height="808" />
          </h1>
          <div className="hero__meta" data-aos="fade-up" data-aos-delay="300">
            <p>Distribuidora en Santa Fe: bebidas, cuidado personal, limpieza y snacks.</p>
            <a className="button button--gold" href="#/" onClick={goTo('catalogo')}>
              Ver catálogo
            </a>
          </div>
        </div>
        <HeroStage />
      </section>

      <BrandWall
        search={search}
        onSearchChange={setSearch}
        onSearchSubmit={() => scrollToId('catalogo')}
        onSelect={selectFromWall}
      />

      <Featured products={featured} />

      <section className="container catalog" id="catalogo" aria-labelledby="catalog-title">
        <h2 className="catalog__title" id="catalog-title" data-aos="fade-up">
          Catálogo
        </h2>

        {products.length === 0 ? (
          <div className="catalog__empty" data-aos="fade-up" data-aos-delay="100">
            <p>Estamos actualizando el catálogo. Escribinos por WhatsApp y te pasamos la lista de productos.</p>
            <a className="button" href={`https://wa.me/${waDigits}`} target="_blank" rel="noopener noreferrer">
              Escribir por WhatsApp
            </a>
          </div>
        ) : (
          <div className="catalog__layout">
            <aside className="catalog__aside" aria-label="Buscar y filtrar">
              <SearchBar value={search} onChange={setSearch} />
              <CategoryFilter
                active={category}
                onChange={changeCategory}
                activeSub={subcategory}
                onSubChange={setSubcategory}
              />
            </aside>
            <ProductGrid products={filtered} onReset={resetFilters} />
          </div>
        )}
      </section>

      <section className="howto" id="como-pedir" aria-labelledby="howto-title">
        <div className="container howto__inner">
          <h2 className="howto__title" id="howto-title" data-aos="fade-up">
            Cómo pedir
          </h2>
          <ol className="howto__list">
            <li data-aos="fade-up" data-aos-delay="100">Elegís lo que necesitás del catálogo.</li>
            <li data-aos="fade-up" data-aos-delay="200">Ajustás las cantidades en tu pedido.</li>
            <li data-aos="fade-up" data-aos-delay="300">
              Lo enviás por WhatsApp y te confirmamos precio, stock y entrega.
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}
