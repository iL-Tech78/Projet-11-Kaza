import { useParams } from "react-router-dom";

export default function Apartment() {
  const { id } = useParams();
  return (
    <section className="page">
      <h1>Logement id : #{id}</h1>
      <p>Je vais mettre les détails du logement ici </p>
    </section>
  );
}
