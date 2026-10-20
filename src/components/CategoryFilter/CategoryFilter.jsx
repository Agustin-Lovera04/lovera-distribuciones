import { Fragment } from 'react'
import { categories, drinkTypes } from '../../data/categories.js'
import './categoryFilter.css'

// Filtros del catálogo. Al elegir "Bebidas" se despliegan los tipos
// (vinos, whisky, ron...) que se editan en src/data/categories.js.
export default function CategoryFilter({ active, onChange, activeSub, onSubChange }) {
  return (
    <div className="filters" role="group" aria-label="Filtrar por categoría">
      <button type="button" aria-pressed={active === null} onClick={() => onChange(null)}>
        Todas
      </button>
      {categories.map((cat) => (
        <Fragment key={cat.id}>
          <button type="button" aria-pressed={active === cat.id} onClick={() => onChange(cat.id)}>
            {cat.label}
          </button>
          {cat.id === 'bebidas' && active === 'bebidas' && (
            <div className="filters__sub" role="group" aria-label="Tipo de bebida">
              <button type="button" aria-pressed={activeSub === null} onClick={() => onSubChange(null)}>
                Todas las bebidas
              </button>
              {drinkTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  aria-pressed={activeSub === type.id}
                  onClick={() => onSubChange(type.id)}
                >
                  {type.label}
                </button>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  )
}
