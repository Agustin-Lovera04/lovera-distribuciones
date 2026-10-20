import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>Página no encontrada</h1>
      <p>El enlace que buscás no existe o se movió.</p>
      <Link to="/" className="button">Volver al catálogo</Link>
    </div>
  )
}
