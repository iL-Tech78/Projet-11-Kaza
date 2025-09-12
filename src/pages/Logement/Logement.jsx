import { useParams, Navigate, useLocation } from 'react-router-dom'
import logements from '@/data/logements.json'
import NotFound from '@/pages/NotFound/NotFound.jsx' // utile si tu veux afficher inline ailleurs
import Slideshow from '@/components/Slideshow/Slideshow.jsx'
import Collapse from '@/components/Collapse/Collapse.jsx'
import Tag from '@/components/Tag/Tag.jsx'
import Rating from '@/components/Rating/Rating.jsx'
import Host from '@/components/Host/Host.jsx'
import './Logement.scss'

export default function Logement() {
  const { id } = useParams()
  const location = useLocation()
  const logement = logements.find((l) => l.id === id)

  if (!logement) {
    return <Navigate to="/404" replace state={{ from: location.pathname }} />
  }

  const { title, location: loc, tags = [], pictures = [], host = {}, rating, description, equipments = [] } = logement
  document.title = `Kasa — ${title}`

  return (
    <section className="logement" aria-labelledby="logement-title">
      <div className="container">
        <Slideshow pictures={pictures} alt={title} height="lg" />

        <header className="logement__header">
          <div className="logement__left">
            <h1 id="logement-title" className="logement__title">{title}</h1>
            <p className="logement__location">{loc}</p>
            <div className="logement__tags">
              {tags.map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
          </div>

          <div className="logement__right">
            <Host name={host.name} picture={host.picture} />
            <Rating value={rating} />
          </div>
        </header>

        <div className="logement__collapses">
          <Collapse title="Description" size="lg">
            <p>{description}</p>
          </Collapse>
          <Collapse title="Équipements" size="lg">
            <ul className="equip-list">
              {equipments.map((e) => <li key={e}>{e}</li>)}
            </ul>
          </Collapse>
        </div>
      </div>
    </section>
  )
}
