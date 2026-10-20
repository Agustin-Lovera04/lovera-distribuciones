import { Link } from 'react-router-dom'
import logoGold from '../../assets/logo-gold.png'
import CartButton from '../CartButton/CartButton.jsx'
import { useGoToSection } from '../../hooks/useGoToSection.js'
import './header.css'

export default function Header() {
  const goTo = useGoToSection()

  function skipToContent(e) {
    e.preventDefault()
    document.getElementById('contenido')?.focus()
  }

  return (
    <>
      <a href="#/" className="skip-link" onClick={skipToContent}>
        Saltar al contenido
      </a>
      <header className="site-header is-dark">
        <div className="site-header__inner">
          <Link to="/" className="site-header__brand" aria-label="Lovera Distribuciones, inicio">
            <img src={logoGold} alt="" width="1692" height="808" />
          </Link>
          <nav className="site-nav" aria-label="Principal">
            <a href="#/" onClick={goTo('catalogo')}>Catálogo</a>
            <a href="#/" onClick={goTo('marcas')}>Marcas</a>
            <a href="#/" onClick={goTo('como-pedir')}>Cómo pedir</a>
            <a href="#/" onClick={goTo('contacto')}>Contacto</a>
          </nav>
          <CartButton />
        </div>
      </header>
    </>
  )
}
