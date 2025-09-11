import './About.scss'
import Banner from '@/components/Banner/Banner.jsx'
import Collapse from '@/components/Collapse/Collapse.jsx'

import bannerAbout from '@/assets/images/banner-about.jpg' // Mon Image 

export default function About() {
  document.title = 'Kasa — À propos'

  const sections = [
    {
      title: 'Fiabilité',
      body: `Les annonces postées sur Kasa garantissent une fiabilité totale.
      Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.`
    },
    {
      title: 'Respect',
      body: `Le respect est la valeur fondatrice de Kasa. Toute demande est traitée avec attention
      pour garantir une expérience agréable aux hôtes comme aux voyageurs.`
    },
    {
      title: 'Service',
      body: `Nos équipes sont à votre écoute pour vous accompagner avant, pendant et après votre séjour.`
    },
    {
      title: 'Sécurité',
      body: `La sécurité est la priorité. Chaque logement répond à des critères stricts pour assurer votre tranquilité.`
    }
  ]

  return (
    <section className="about" aria-labelledby="about-title">
      <div className="container">
        <h1 id="about-title" className="sr-only">À propos</h1>

        <Banner image={bannerAbout} small />

        <div className="about__stack">
          {sections.map((s) => (
            <Collapse key={s.title} title={s.title} size="md">
              <p>{s.body}</p>
            </Collapse>
          ))}
        </div>
      </div>
    </section>
  )
}
