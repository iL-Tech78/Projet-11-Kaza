import { useId, useState } from 'react'
import './Collapse.scss'

/**
 * Props :
 * - title (string)            : l'en-tête du panneau
 * - children (ReactNode)      : Ici le contenu à afficher/masquer
 * - defaultOpen (boolean)     : Je le mets par défaut fermé (conforme au brief)
 * - size ("md" | "lg")        : La hauteur/typo du header selon la page (About = md, Logement = lg)
 */

export default function Collapse({ title, children, defaultOpen = false, size = 'md' }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  const contentId = `collapse-content-${panelId}`

  function toggle() {
    setOpen((o) => !o)
  }

  return (
    <section className={`collapse collapse--${size}`}>
      <h2 className="collapse__heading">
        <button
          type="button"
          className="collapse__button"
          aria-expanded={open}
          aria-controls={contentId}
          onClick={toggle}
        >
          <span className="collapse__title">{title}</span>

          {/* Ma Flèche inline SVG qui pivote via le CSS */}
          <svg
            className={`collapse__chevron ${open ? 'is-open' : ''}`}
            width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"
          >
            <path d="M7 10l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </h2>

      {/* Ma Zone animée : J'anime la hauteur + l’opacité uniquement en CSS */}
      <div
        id={contentId}
        role="region"
        aria-labelledby={contentId}
        className={`collapse__content ${open ? 'is-open' : ''}`}
      >
        <div className="collapse__inner">
          {children}
        </div>
      </div>
    </section>
  )
}
