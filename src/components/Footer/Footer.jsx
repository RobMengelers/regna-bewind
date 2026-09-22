import { Link } from "react-router-dom";
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
            <Link to={path} key={path}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Regna Bewind</span>
        <span>Landgraaf, Limburg</span>
      </div>
    </footer>
  );
}
