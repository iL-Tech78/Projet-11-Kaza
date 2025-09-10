import { Link } from 'react-router-dom'
import './NotFound.scss'

export default function NotFound() {
  document.title = 'Kasa — 404'
  return (
    <section className="notfound" aria-labelledby="nf-title">
      <h1 id="nf-title">404 — Page non trouvée</h1>
      <p>La page demandée n’existe pas.</p>
      <p><Link to="/">Revenir à l’accueil</Link></p>
    </section>
  )
}
