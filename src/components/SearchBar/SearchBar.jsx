import { SearchIcon } from '../Icons/Icons.jsx'
import './searchBar.css'

// Buscador por nombre. Se puede usar más de una vez en la página
// (cada uso necesita su propio `id`).
export default function SearchBar({
  value,
  onChange,
  onSubmit,
  id = 'buscador',
  label = 'Buscar productos por nombre',
  placeholder = 'Buscar producto por nombre',
}) {
  return (
    <form
      className="search-bar"
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
        if (onSubmit) onSubmit()
      }}
    >
      <label htmlFor={id} className="visually-hidden">{label}</label>
      <SearchIcon size={22} />
      <input
        id={id}
        type="search"
        enterKeyHint="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="off"
      />
    </form>
  )
}
