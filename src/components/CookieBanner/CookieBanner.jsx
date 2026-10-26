import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CookieBanner.css";

const STORAGE_KEY = "lovera-cookie-notice";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedChoice = sessionStorage.getItem(STORAGE_KEY);

    if (!savedChoice) {
      setVisible(true);
    }
  }, []);

  function acceptNotice() {
    sessionStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function dismissNotice() {
    sessionStorage.setItem(STORAGE_KEY, "dismissed");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside
      className="cookie-banner"
      role="dialog"
      aria-label="Aviso sobre cookies"
    >
      <div className="cookie-banner__content">
        <div className="cookie-banner__text">
          <h2 className="cookie-banner__title">Tu privacidad nos importa</h2>

          <p>
            Utilizamos almacenamiento local para recordar tu elección sobre este
            aviso. Para más información sobre el tratamiento de datos, consultá
            nuestra política de privacidad.
          </p>

          <Link className="cookie-banner__link" to="/privacidad">
            Privacidad
          </Link>
        </div>

        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--primary"
            onClick={acceptNotice}
          >
            Aceptar
          </button>

          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--secondary"
            onClick={dismissNotice}
          >
            Cerrar
          </button>
        </div>
      </div>
    </aside>
  );
}
