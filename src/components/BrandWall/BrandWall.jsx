import { wallItems } from '../../data/categories.js'
import SearchBar from '../SearchBar/SearchBar.jsx'
import './brandWall.css'

// "Distribuimos": tipos de bebida + Nivea + SC Johnson, con un buscador por nombre.
// Tocar un rubro lleva al catálogo filtrado. Los rubros se editan en src/data/categories.js.
export default function BrandWall({ search, onSearchChange, onSearchSubmit, onSelect }) {
  return (
    <section className="wall" id="marcas" aria-labelledby="wall-title">
      <div className="container">
        <div className="wall__head">
          <h2 className="wall__title" id="wall-title" data-aos="fade-up">
            Distribuimos
          </h2>
          <div className="wall__search" data-aos="fade-up" data-aos-delay="100">
            <SearchBar
              id="buscador-inicio"
              value={search}
              onChange={onSearchChange}
              onSubmit={onSearchSubmit}
            />
          </div>
        </div>
        <ul className="wall__list">
          {wallItems.map((item, i) => (
            <li
              key={`${item.category}-${item.subcategory || 'all'}`}
              data-aos="fade-up"
              data-aos-delay={(i % 4) * 100}
            >
              <button
                type="button"
                className="wall__brand"
                onClick={() => onSelect(item.category, item.subcategory)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
