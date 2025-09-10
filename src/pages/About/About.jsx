import './About.scss'

export default function About() {
  document.title = 'Kasa — À propos'
  return (
    <section className="about" aria-labelledby="about-title">
      <h1 id="about-title">À propos</h1>
      <p>go mettre le contenu ici</p>
    </section>
  )
}
