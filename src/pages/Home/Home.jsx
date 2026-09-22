import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Regna Bewind · Landgraaf</p>
          <h1>
            Grip op uw financiën.
            <br />
            <em>Ruimte om te leven.</em>
          </h1>
          <p>
            Regna Bewind helpt u met overzicht, rust en persoonlijke aandacht
            voor uw financiële situatie.
          </p>
          <div className="hero-actions">
            <Link className="button" to="/contact">
              Een kennismaking plannen <span aria-hidden="true">›</span>
            </Link>
          </div>
          <div className="hero-note">
            <span />
            Uw verhaal vormt het vertrekpunt.
          </div>
        </div>
        <div className="hero-photo">
          <img
            src="/leenhof.jpg"
            alt="Het groene landschap van de oorspronkelijke Regna Bewind website"
            fetchPriority="high"
          />
          <div className="photo-caption">
            <span>Een vertrouwd perspectief.</span>
            <small>REGNA BEWIND</small>
          </div>
        </div>
      </section>
      <section className="container home-intro">
        <div>
          <p className="eyebrow">De mens achter de cijfers</p>
          <h2>
            U bent meer
            <br />
            dan een dossier.
          </h2>
        </div>
        <div>
          <p>
            Uw verhaal, uw situatie en uw toekomst staan centraal in alles wat
            we doen. Met ruime ervaring in de financiële dienstverlening maken
            we samen een plan dat bij u past.
          </p>
          <Link className="text-link" to="/over-ons">
            Maak kennis met Regna <span aria-hidden="true">›</span>
          </Link>
        </div>
      </section>
      <section className="home-process">
        <div className="container process-layout">
          <div className="process-image">
            <img src="/financieel-overzicht.png" alt="Een overzichtelijk bureau met administratie, een notitieboek en rekenmachine" width="1536" height="1024" loading="lazy" decoding="async" />
          </div>
          <div className="process-copy">
            <p className="eyebrow">Hoe we werken</p>
            <h2>Stap voor stap.<br />Met aandacht voor u.</h2>
            <ol className="process-steps">
              <li><h3>Kennismaken</h3><p>We beginnen met uw verhaal. Wat speelt er en waar heeft u ondersteuning bij nodig?</p></li>
              <li><h3>Overzicht krijgen</h3><p>We brengen uw financiële situatie in kaart. Zo wordt duidelijk wat er geregeld moet worden.</p></li>
              <li><h3>Een plan op maat</h3><p>Uw situatie vormt de basis voor een passende aanpak, met aandacht voor uw persoonlijke behoeften.</p></li>
            </ol>
            <Link className="text-link" to="/diensten">Bekijk onze diensten <span aria-hidden="true">›</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
