import { business } from '../config/business.js'

export default function Privacidad() {
  return (
    <div className="container legal-page">
      <h1>Política de privacidad</h1>
      <p>
        Este sitio es un catálogo estático: no tiene registro de usuarios,
        no almacena datos en un servidor propio y no usa cookies de
        seguimiento ni analítica de terceros.
      </p>

      <h2>Datos que manejamos</h2>
      <ul>
        <li>
          <strong>Carrito de compras:</strong> se guarda únicamente en tu
          navegador (localStorage), en tu dispositivo. No lo recibimos ni
          lo almacenamos nosotros.
        </li>
        <li>
          <strong>Datos de contacto:</strong> cuando confirmás un pedido por
          WhatsApp, el mensaje (con los productos elegidos) se envía
          directamente a nuestro WhatsApp. Esa conversación queda sujeta a
          la política de privacidad de WhatsApp/Meta, no a este sitio.
        </li>
      </ul>

      <h2>Titular responsable</h2>
      <p className="pending">
        [DATO PENDIENTE] Nombre/razón social: {business.legal.razonSocial || '— completar —'}
        <br />
        CUIT: {business.legal.cuit || '— completar —'}
        <br />
        Domicilio: {business.legal.domicilioFiscal || '— completar —'}
        <br />
        Email de contacto: {business.legal.emailContacto || '— completar —'}
      </p>

      <h2>Aviso</h2>
      <p>
        Este texto describe el funcionamiento técnico real del sitio. No
        constituye asesoramiento legal ni garantiza cumplimiento de la Ley
        25.326 de Protección de Datos Personales ni de otra normativa
        argentina vigente. Se recomienda revisión por un profesional antes
        de publicar, especialmente si en el futuro se agregan formularios,
        cuentas de usuario o cualquier recolección adicional de datos.
      </p>
    </div>
  )
}
