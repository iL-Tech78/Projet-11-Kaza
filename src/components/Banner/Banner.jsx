import './Banner.scss'

/**
 * Mes Props :
 * - image (string)  : Ce sera l'URL de l'image d'arrière-plan
 * - title (string?) : texte superposé (optionnel, si vide -> pas de <h1>)
 * - small (bool?)   : variante plus compacte (utile pour la page À propos)
 */
export default function Banner({ image, title, small = false }) {
  return (
    <section
      className={`banner ${small ? 'banner--small' : ''}`} // Classe conditionnelle
      role="region"
      aria-label={title || 'Bannière'}
    >
      <img className="banner__img" src={image} alt="" aria-hidden="true" />
      {}
      {title && <h1 className="banner__title">{title}</h1>}
      <div className="banner__overlay" aria-hidden="true" />
    </section>
  )
}
