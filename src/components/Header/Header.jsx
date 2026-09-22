import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Brand from "../Brand/Brand";
import { pages } from "../../navigation";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="utility">
        <span>Persoonlijke aandacht. Financiële rust.</span>
        <a href="tel:+31639712304">
          06 39 71 23 04 <span aria-hidden="true">›</span>
        </a>
      </div>
      <div className="navigation">
        <Brand />
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Sluiten ×" : "Menu ☰"}
        </button>
        <nav
          id="main-navigation"
          className={open ? "is-open" : ""}
          aria-label="Hoofdnavigatie"
          onKeyDown={(event) => {
            if (event.key === "Escape") setOpen(false);
          }}
        >
          {pages.map(([path, label]) => (
            <NavLink key={path} to={path} end onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
          <Link
            className="button small"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Kennismaken <span aria-hidden="true">›</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
