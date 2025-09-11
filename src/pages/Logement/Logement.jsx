import { useParams } from 'react-router-dom'
import logements from '@/data/logements.json'
import NotFound from '@/pages/NotFound/NotFound.jsx'
import Slideshow from '@/components/Slideshow/Slideshow.jsx'
import './Logement.scss'

export default function Logement() {
  const { id } = useParams()
  const logement = logements.find((l) => l.id === id)

  if (!logement) return <NotFound />

  document.title = `Kasa — ${logement.title}`

  return (
    <section className="logement" aria-labelledby="logement-title">
      <div className="container">
        {/* Carrousel */}
        <Slideshow
          pictures={logement.pictures}
          alt={logement.title}
          height="lg"
        />

        {/* Le reste de la page (titre, location, tags, host, rating, collapses) viendra ensuite */}
        <header className="logement__head">
          <h1 id="logement-title" className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
        </header>
      </div>
    </section>
  )
}
