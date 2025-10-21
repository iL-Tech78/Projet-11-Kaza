import './Banner.scss'

export default function Banner({ image, title, small = false }) {
  return (
    <section
      className={`banner ${small ? 'banner--small' : ''}`}
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
