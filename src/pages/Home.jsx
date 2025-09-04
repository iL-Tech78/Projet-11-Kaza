import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../data/logements.json";
import hero from "../assets/images/hero.png";

export default function Home() {
  return (
    <div className="home">
      <Banner image={hero}>Chez vous, partout et ailleurs</Banner>

      <section className="home__grid" aria-label="Liste des logements">
        {data.map((logement) => {
          const cover =
            logement.cover ||
            (logement.pictures && logement.pictures[0]) ||
            "";
          return (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={cover}
            />
          );
        })}
      </section>
    </div>
  );
}
