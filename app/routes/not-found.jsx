import { Link } from "react-router";
import "./not-found.css";

export const meta = () => [{ title: "Pagina niet gevonden — Regna Bewind" }];

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
