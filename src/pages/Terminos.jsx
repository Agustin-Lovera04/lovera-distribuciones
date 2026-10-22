import { business } from "../config/business.js";

export default function Terminos() {
  return (
    <div className="container legal-page">
      <h1>Términos y condiciones</h1>

      <h2>Qué es este sitio</h2>
      <p>
        {business.name} publica acá un catálogo de productos a modo informativo.
        No es una tienda online con pago en línea: el pedido se arma en el
        navegador y se envía como mensaje de WhatsApp al negocio, quien confirma
        manualmente precio, stock y forma de pago.
      </p>

      <h2>Precios y disponibilidad</h2>
      <p>
        Los precios y totales que se muestran en el sitio son estimativos,
        calculados en tu navegador, y pueden no reflejar modificaciones
        recientes. La disponibilidad de cada producto se confirma al recibir el
        pedido por WhatsApp. Ningún precio mostrado acá constituye una oferta en
        firme ni un comprobante de pago.
      </p>

      <h2>Cómo se confirma un pedido</h2>
      <p>
        Al presionar "Confirmar pedido por WhatsApp" se abre una conversación
        con el número oficial del negocio con el detalle de tu pedido. La compra
        se concreta recién cuando el negocio confirma por ese medio
        disponibilidad, precio final y forma de entrega o pago.
      </p>

      <h2>Entregas, cambios y cancelaciones</h2>
      <p className="pending">
        Se mantiene comunicacion directa con nosotrs y se brindara soporte
        adecuado para cada situacion.
      </p>

      <h2>Aviso</h2>
      <p>
        Este texto describe el funcionamiento real del sitio y no debe tomarse
        como garantía de cumplimiento de la Ley de Defensa del Consumidor
        (24.240) ni de otra normativa argentina vigente sobre venta a distancia.
        Se recomienda revisión legal antes de publicar.
      </p>
    </div>
  );
}
