import { Link } from 'react-router-dom'
import './Card.scss'

/**
 * Props :
 * - id (string)       : Mon identifiant du logement (pour le lien)
 * - title (string)    : Le titre du logement
 * - cover (string)    : L'URL de l'image de couverture
 */

export default function Card({ id, title, cover }) {
  const src = cover || 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"/>' 

  return (
    <article className="card">
      <Link to={`/logement/${id}`} className="card__link" aria-label={`Voir le logement : ${title}`}>
        <figure className="card__figure">
          <img className="card__img" src={src} alt={title} />
          <figcaption className="card__caption">{title}</figcaption>
        </figure>
      </Link>
    </article>
  )
}
