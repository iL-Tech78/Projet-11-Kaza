import { useState, useMemo, useCallback } from 'react'
import './Slideshow.scss'

export default function Slideshow({ pictures = [], alt = 'Photo du logement', height = 'lg' }) {
  const slides = useMemo(() => Array.isArray(pictures) ? pictures.filter(Boolean) : [], [pictures])
  const count = slides.length
  const [index, setIndex] = useState(0)

  const hasControls = count > 1
  const goPrev = useCallback(() => setIndex(i => (i - 1 + count) % count), [count])
  const goNext = useCallback(() => setIndex(i => (i + 1) % count), [count])

  if (count === 0) {
    return null
  }

  return (
    <figure className={`slideshow slideshow--${height}`} aria-label="Galerie de photos">
      {}
      <div className="slideshow__track">
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className={`slideshow__img ${i === index ? 'is-active' : ''}`}
            loading={i === index ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {}
      {hasControls && (
        <>
          <button
            type="button"
            className="slideshow__ctrl slideshow__ctrl--prev"
            aria-label="Image précédente"
            onClick={goPrev}
          >
            <Chevron />
          </button>

          <button
            type="button"
            className="slideshow__ctrl slideshow__ctrl--next"
            aria-label="Image suivante"
            onClick={goNext}
          >
            <Chevron />
          </button>

          {}
          <figcaption className="slideshow__count" aria-live="polite">
            {index + 1}/{count}
          </figcaption>
        </>
      )}
    </figure>
  )
}

function Chevron() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
