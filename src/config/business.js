// Configuración central del negocio.
// Todo lo que se repite en el sitio (nombre, WhatsApp, redes) vive acá
// para no tener que buscarlo en múltiples componentes.

export const business = {
  name: 'Lovera Distribuciones',

  // Número de WhatsApp en formato internacional, SIN espacios, guiones ni "+".
  // Ejemplo real para Argentina, celular de Santa Fe: 5493424076088
  //   54   -> código de país (Argentina)
  //   9    -> prefijo obligatorio para celulares en wa.me
  //   342  -> código de área (Santa Fe) SIN el 0
  //   4076088 -> número local SIN el 15
  // TODO(dato pendiente): confirmar que este número sea el correcto para
  // recibir pedidos (se tomó de la info ya cargada: 342 4 076088).
  whatsappNumber: '5493424076088',

  instagram: 'https://instagram.com/loveradistribuciones.sf',
  instagramHandle: '@loveradistribuciones.sf',

  // TODO(dato pendiente): Facebook, si lo usan para pedidos también.
  facebook: '',

  // Datos para pie de página / páginas legales.
  // TODO(dato pendiente): completar antes de publicar. No se inventan.
  legal: {
    razonSocial: '', // Nombre completo del titular o razón social
    cuit: '',
    domicilioFiscal: '',
    localidad: 'Santa Fe, Argentina',
    emailContacto: '',
  },
}
