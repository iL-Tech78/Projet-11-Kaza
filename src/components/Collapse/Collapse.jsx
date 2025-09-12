import { useState } from "react"
import "./Collapse.scss"

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="collapse">
      {}
      <button
        className="collapse__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="collapse__title">{title}</span>

        {}
        <svg
          className={`collapse__chevron ${isOpen ? "is-open" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {}
      <div className={`collapse__content ${isOpen ? "is-open" : ""}`}>
        <div className="collapse__inner">{children}</div>
      </div>
    </section>
  )
}
