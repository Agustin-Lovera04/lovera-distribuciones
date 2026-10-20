import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import OrderBar from './components/OrderBar/OrderBar.jsx'
import Home from './pages/Home.jsx'
import Privacidad from './pages/Privacidad.jsx'
import Terminos from './pages/Terminos.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  // AOS: animaciones al hacer scroll. Se activan con data-aos="..." en cualquier elemento.
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out', once: true, offset: 60 })
  }, [])

  return (
    <div className="app-shell">
      <ScrollToTop />
      <Header />
      <main id="contenido" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <OrderBar />
    </div>
  )
}
