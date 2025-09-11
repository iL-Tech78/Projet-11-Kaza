import { useParams } from 'react-router-dom'
import logements from '@/data/logements.json'
import NotFound from '@/pages/NotFound/NotFound.jsx'
import './Logement.scss'

export default function Logement() {
  const { id } = useParams()
  const logement = logements.find((l) => l.id === id)

  if (!logement) {
    // Si id inconnu -Z page 404
    return <NotFound />
  }

  document.title = `Kasa — ${logement.title}`

  return (
    <section className="logement" aria-labelledby="logement-title">
      <div className="container">
        <h1 id="logement-title" className="sr-only">{logement.title}</h1>
        {}
        <p>Go mettre les détails ici</p>
      </div>
    </section>
  )
}
