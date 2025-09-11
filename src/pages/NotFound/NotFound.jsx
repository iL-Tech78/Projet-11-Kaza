import { Link } from 'react-router-dom'
import './NotFound.scss'

export default function NotFound() {
  document.title = 'Kasa — 404'
  return (
    <section className="notfound" aria-labelledby="nf-title">
      <div className="container notfound__inner">
        <h1 id="nf-title" className="notfound__code">404</h1>
        <p className="notfound__msg">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <p className="notfound__back">
          <Link to="/">Retourner sur la page d’accueil</Link>
        </p>
      </div>
    </section>
  )
}
