import './Home.scss'
import Banner from '@/components/Banner/Banner.jsx'
import Card from '@/components/Card/Card.jsx'
import logements from '@/data/logements.json'

import bannerHome from '@/assets/images/banner-home.jpg' // Mon image

export default function Home() {
  document.title = 'Kasa — Accueil'

  return (
    <section className="home" aria-labelledby="home-title">
      <div className="container">
        <h1 id="home-title" className="sr-only">Accueil</h1>

        <Banner image={bannerHome} title="Chez vous, partout et ailleurs" />

        <div className="home__grid" role="list">
          {logements.map((l) => (
            <div role="listitem" key={l.id}>
              <Card id={l.id} title={l.title} cover={l.cover} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
