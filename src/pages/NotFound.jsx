export default function NotFound() {
  return (
    <section className="page">
      <h1>404 — Page non trouvée</h1>
      <p>La page demandée n’existe pas.</p>
      <Link to="/">Je vais mettre mon lien qui permet le Retour à l’accueil</Link>
    </section>
  );
}
