import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En desarrollo (npm run dev) el sitio corre en la raíz: http://localhost:5173/
// En producción, GitHub Pages publica en /NOMBRE-DEL-REPO/. El workflow
// (.github/workflows/deploy.yml) pasa ese nombre solo, así que NO hace falta
// editar nada aunque tu repositorio se llame distinto.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? process.env.BASE_PATH || '/lovera-distribuciones/' : '/',
  build: { outDir: 'dist', sourcemap: false },
}))
