import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
// Tipografías incluidas en el sitio (no se piden a Google)
import '@fontsource-variable/newsreader'
import '@fontsource-variable/hanken-grotesk'
// Animaciones de entrada
import 'aos/dist/aos.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'

// HashRouter: evita 404 al refrescar o compartir links en GitHub Pages.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </HashRouter>
  </React.StrictMode>
)
