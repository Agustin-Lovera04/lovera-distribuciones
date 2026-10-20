import { useEffect, useState } from 'react'
import { assetUrl } from '../../utils/assetUrl.js'
import { heroProducts, heroBackground } from '../../config/hero.js'

// true cuando la pantalla mide menos de 900px (celular / tablet chica)
function useIsMobile() {
  const query = '(max-width: 899px)'
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const media = window.matchMedia(query)
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return isMobile
}

export default function HeroStage() {
  const [loaded, setLoaded] = useState(0)
  const isMobile = useIsMobile()

  return (
    <div className={`hero__stage hero__stage--${heroBackground}`} style={{ overflow: 'hidden' }}>
      {heroProducts.map((item) => {
        // En celular se usan las medidas de "mobile"; lo que falte, toma el valor de escritorio
        const pos = isMobile && item.mobile ? { ...item, ...item.mobile } : item
        return (
          <div
            key={item.src}
            className="hero__item"
            style={{
              position: 'absolute',
              left: `${pos.left}%`,
              bottom: `${pos.bottom}%`,
              height: `${pos.height}%`,
              zIndex: item.z,
            }}
            data-aos={item.animation}
            data-aos-delay={item.delay}
            data-aos-duration="1000"
          >
            <img
              src={assetUrl(item.src)}
              alt={item.alt}
              onLoad={() => setLoaded((n) => n + 1)}
              onError={(e) => {
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>
        )
      })}
      {import.meta.env.DEV && loaded === 0 && (
        <p className="hero__note">
          Guardá tus imágenes en <strong>public/hero/</strong> y configuralas en <strong>src/config/hero.js</strong>
        </p>
      )}
    </div>
  )
}
