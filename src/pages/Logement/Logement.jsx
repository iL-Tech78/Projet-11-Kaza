import { useParams } from 'react-router-dom'
import './Logement.scss'

export default function Logement() {
  const { id } = useParams()
  document.title = 'Kasa — Détail logement'

  return (
    <section className="logement" aria-labelledby="logement-title">
      <h1 id="logement-title">Logement #{id}</h1>
      <p>Go mettre les détails ici</p>
    </section>
  )
}
