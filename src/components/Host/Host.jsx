import './Host.scss'

export default function Host({ name, picture }) {
  const initials = name?.split(' ').map(p => p[0]).slice(-2).join('').toUpperCase() || '?'
  const hasImg = Boolean(picture)

  return (
    <div className="host" aria-label={`Hôte : ${name}`}>
      <span className="host__name">{name}</span>
      <div className="host__avatar" aria-hidden={!hasImg}>
        {hasImg
          ? <img src={picture} alt="" />
          : <span className="host__fallback" aria-hidden="true">{initials}</span>
        }
      </div>
    </div>
  )
}
