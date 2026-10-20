// =======================================================================
//  IMÁGENES DE TUS PRODUCTOS (primera pantalla, lado derecho)
//
//  Cómo agregar tus imágenes:
//   1. Cada producto es un PNG con fondo transparente, ya recortado.
//   2. Guardalos en la carpeta  public/hero/
//   3. Escribilos abajo, uno por línea (podés agregar o quitar líneas).
//
//  Qué significa cada dato de una imagen:
//   src        nombre del archivo (dentro de public/hero/)
//   alt        descripción corta del producto
//   left       distancia desde el borde izquierdo, en %   (0 a 100)
//   bottom     distancia desde abajo, en %                (0 a 100)
//   height     alto de la imagen, en %                    (0 a 100)
//   z          capa: el número más alto queda adelante
//   animation  de dónde entra (ver lista abajo)
//   delay      demora en milisegundos (0, 200, 400, 600...)
//
//  Animaciones (de la librería AOS):
//   'fade-right'  entra desde la izquierda     'fade-left'  entra desde la derecha
//   'fade-up'     entra desde abajo            'fade-down'  entra desde arriba
//   'zoom-in'     aparece agrandándose
//
//  Para que todas queden como una sola imagen: ajustá left / bottom / height
//  de cada una hasta que se junten bien en el centro.
// =======================================================================

export const heroProducts = [
  { src: '/hero/whisky.png', alt: 'Whisky', left: -20, bottom: 10, height: 88, z: 1, animation: 'fade-up', delay: 200, mobile: { left: -5, bottom: 10, height: 90 }  },
  { src: '/hero/vino.png', alt: 'Vino', left: 35, bottom: 15, height: 76, z: 2, animation: 'fade-right', delay: 200, mobile: { left: 5, bottom: 0, height:90 }  },
  { src: '/hero/champagne.png', alt: 'Champagne', left: 68, bottom: 8, height: 86, z: 1, animation: 'fade-left', delay: 200, mobile: { left:70,bottom: -5, height: 100 }  },
  { src: '/hero/lata.png', alt: 'Creme Nivea', left: 15, bottom: 5, height: 40, z: 4, animation: 'fade-down', delay: 200, mobile: { left: 0, bottom: -12, height: 55 }  },
  { src: '/hero/bronceador.png', alt: 'Bronceador', left: 30, bottom: 10, height: 46, z: 3, animation: 'fade-down', delay: 200, mobile: { left: 25, bottom: 0, height: 50 }  },
  { src: '/hero/lyso.png', alt: 'Lysomform', left: 30, bottom: 15, height: 56, z: 1, animation: 'fade-left', delay: 200, mobile: { left: 35, bottom: 0, height: 70 }  },
  { src: '/hero/off.png', alt: 'off', left: 45, bottom: 10, height: 46, z: 1, animation: 'fade-right', delay: 200, mobile: { bottom: 0, height: 45 }  }
]

// Fondo de la zona de imágenes: 'navy' (azul, igual que el resto) o 'gold' (dorado)
export const heroBackground = 'navy'
