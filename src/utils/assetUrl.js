// Las imágenes de /public deben respetar la ruta base de Vite
// (en GitHub Pages el sitio vive en /nombre-del-repo/, no en /).
// Uso: assetUrl('/products/off.jpg')  ->  '/lovera-distribuciones/products/off.jpg'
export function assetUrl(path) {
  if (!path) return ''
  if (/^https?:\/\//i.test(path)) return path
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`
}
