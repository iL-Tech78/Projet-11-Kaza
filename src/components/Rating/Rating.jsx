import './Rating.scss'

export default function Rating({ value = '0', max = 5 }) {
  const n = Math.max(0, Math.min(Number(value), max))
  return (
    <div className="rating" aria-label={`Note ${n} sur ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star key={i} filled={i < n} />
      ))}
    </div>
  )
}

function Star({ filled }) {
  return (
    <svg
      className={`rating__star ${filled ? 'is-filled' : ''}`}
      width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"
    >
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.84L18.18 22 12 18.77 5.82 22 7 14.11 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  )
}
