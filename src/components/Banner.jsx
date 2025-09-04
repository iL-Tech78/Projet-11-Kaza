export default function Banner({ image, children }) {
    return (
      <section className="banner" aria-label="Accroche">
        <img className="banner__img" src={image} alt="" aria-hidden="true" />
        <div className="banner__overlay" />
        <h1 className="banner__title">{children}</h1>
      </section>
    );
}
  