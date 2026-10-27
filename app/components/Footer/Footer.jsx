import { Link } from "react-router";
import Brand from "../Brand/Brand";
import { pages } from "../../navigation";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-top">
        <Brand />
        <p>
          Persoonlijke aandacht.
          <br />
          Financiële rust.
        </p>
        <nav aria-label="Footernavigatie">
          {pages.map(([path, label]) => (
            <Link to={path} key={path} prefetch="intent">
              {label}
            </Link>
          ))}
          <Link to="/veelgestelde-vragen" prefetch="intent">Veelgestelde vragen</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Regna Bewind</span>
        <span>Landgraaf, Limburg</span>
      </div>
    </footer>
  );
}
