# Lovera Distribuciones — sitio web

Catálogo con pedido por WhatsApp. React + Vite. Sin backend, sin base de datos, sin pagos.

## Usar en tu computadora

Requiere Node 20.19 o superior (recomendado 22).

```bash
npm install
npm run dev      # abre http://localhost:5173/
npm run build    # genera dist/ para producción
```

## Cargar productos

Todo el catálogo está en `src/data/products.js` (categorías en `src/data/categories.js`).
Cada producto:

```js
{
  id: 'off-aerosol-360',          // único y estable, no lo cambies después
  name: 'Off! Aerosol 360 ml',
  category: 'sc-johnson',         // debe existir en categories.js
  price: 4500,                    // número en pesos, sin puntos ni símbolo
  image: '/products/off-aerosol-360.jpg',  // archivo dentro de public/products/
  description: 'Opcional.',
  available: true,                // false = muestra "Sin stock"
  featured: true,                 // opcional: aparece en "Destacados" (hasta 3)
}
```

Las fotos van en `public/products/`. Mejor todas cuadradas y con fondo blanco o neutro.
Marcá 2 o 3 productos con `featured: true` para activar la sección "Destacados", que se
muestra recién cuando hay productos marcados.

## Cambiar el look

Paleta y tipografías están al principio de `src/index.css` (variables `--green`, `--ground`,
`--font-display`, etc.). Las categorías y sus descripciones, en `src/data/categories.js`.

## Datos del negocio

`src/config/business.js`: número de WhatsApp (formato `5493424076088`, sin `+` ni espacios),
Instagram y datos legales (razón social, CUIT, domicilio, email).
Buscá "DATO PENDIENTE" en `src/pages/` para completar las páginas legales.

## Publicar en GitHub Pages (una sola vez)

1. Creá un repositorio nuevo en GitHub (público), sin README.
2. En la carpeta del proyecto:
   ```bash
   git init
   git add .
   git commit -m "Sitio Lovera Distribuciones"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPO.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Pestaña **Actions**: esperá el tilde verde (1–2 min). El link del sitio aparece en
   Settings → Pages: `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

No hay que editar ninguna ruta: el nombre del repo se toma solo.

## Actualizar el sitio

```bash
git add .
git commit -m "Actualizo productos"
git push
```

Se vuelve a publicar solo en 1–2 minutos.

## Alcance y seguridad

- Los precios se calculan en el navegador y son solo informativos: el negocio siempre
  confirma precio y stock por WhatsApp.
- El carrito vive en el navegador de cada visitante (localStorage).
- No hay formularios, cookies de seguimiento ni servicios de terceros. Las tipografías
  (Newsreader y Hanken Grotesk) están incluidas en el sitio, no se piden a Google.
- Las páginas legales son un borrador: revisalas con un profesional antes de publicar.
- Correr `npm audit` de vez en cuando.
