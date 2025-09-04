import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  const imageSrc = cover ?? "";

  return (
    <article className="card">
      <Link to={`/logement/${id}`} className="card__link" aria-label={`Voir le logement : ${title}`}>
        <figure className="card__figure">
          {}
          <img className="card__img" src={imageSrc} alt="" loading="lazy" />
          <figcaption className="card__caption">{title}</figcaption>
        </figure>
      </Link>
    </article>
  );
}
