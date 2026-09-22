import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="container not-found">
      <p className="eyebrow">404</p>
      <h1>Pagina niet gevonden.</h1>
      <Link className="button" to="/">
        Terug naar home ›
      </Link>
    </section>
  );
}
