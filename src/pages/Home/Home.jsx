import './Home.scss'

export default function Home() {
  document.title = 'Kasa — Accueil'
  return (
    <section className="home" aria-labelledby="home-title">
      <h1 id="home-title">Accueil</h1>
      <p>Go mettre la liste des logements…</p>
    </section>
  )
}
