import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToId } from '../utils/scrollTo.js'

// Con HashRouter no se pueden usar anclas "#seccion" (chocan con las rutas).
// Este hook devuelve un handler que hace scroll suave, y si estás en otra
// página (ej. Términos) primero vuelve al inicio.
export function useGoToSection() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return useCallback(
    (id) => (e) => {
      e.preventDefault()
      if (pathname === '/') {
        scrollToId(id)
        return
      }
      navigate('/')
      setTimeout(() => scrollToId(id), 80)
    },
    [pathname, navigate]
  )
}
