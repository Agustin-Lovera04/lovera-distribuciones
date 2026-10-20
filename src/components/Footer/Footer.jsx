import { Link } from 'react-router-dom'
import { business } from '../../config/business.js'
import logoGold from '../../assets/logo-gold.png'
import './footer.css'

// Solo números: evita armar un link roto si el valor tuviera espacios o símbolos.
const waDigits = String(business.whatsappNumber).replace(/\D/g, '')

export default function Footer() {
  return (
    <footer className="site-footer is-dark" id="contacto">
      <div className="container">
        <div className="site-footer__top">
          <h2 className="site-footer__title" data-aos="fade-up">Escribinos</h2>
          <div className="site-footer__links" data-aos="fade-up" data-aos-delay="100">
            <a
              href={`https://wa.me/${waDigits}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp (se abre en una pestaña nueva)"
            >
              WhatsApp
            </a>
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${business.instagramHandle} (se abre en una pestaña nueva)`}
            >
              Instagram
            </a>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <img className="site-footer__logo" src={logoGold} alt="" width="1692" height="808" />
        </div>

        <div className="site-footer__legal">
          <p>{business.legal.localidad}</p>
          <nav aria-label="Legal">
            <Link to="/terminos">Términos y condiciones</Link>
            <Link to="/privacidad">Privacidad</Link>
          </nav>
          <p className="site-footer__note">
            Los precios publicados son orientativos y están sujetos a confirmación y disponibilidad.
          </p>
        </div>
      </div>
    </footer>
  )
}
