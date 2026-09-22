import PageHeading from "../../components/PageHeading/PageHeading";
import "./About.css";

export default function About() {
  return (
    <>
      <PageHeading
        label="Over Regna Bewind"
        title={
          <>
            Persoonlijk betrokken.
            <br />
            <em>Zorgvuldig geregeld.</em>
          </>
        }
      >
        Uw verhaal, uw situatie en uw toekomst staan centraal in alles wat we
        doen.
      </PageHeading>
      <section className="container about-grid">
        <div className="editorial-image">
          <img
            src="/petra-mengelers.jpg"
            alt="Petra Mengelers achter haar laptop"
            loading="lazy"
            decoding="async"
            width="1545"
            height="1600"
          />
        </div>
        <div className="prose">
          <p className="eyebrow">Petra Mengelers · Oprichter</p>
          <h2>
            U bent meer
            <br />
            dan een dossier.
          </h2>
          <p>
            Regna Bewind is opgericht door Petra Mengelers en staat voor
            persoonlijke aandacht. Petra heeft ruime ervaring in de financiële
            dienstverlening. Voor haar staat zorg voor de klant centraal.
          </p>
          <p>
            De klant is geen nummer of dossier, maar een mens met een
            persoonlijk verhaal en specifieke behoeften. Voor iedere klant wordt
            een plan van aanpak op maat gemaakt.
          </p>
          <div className="statement">
            Iedere situatie is anders.
            <br />
            Goede hulp begint met goed luisteren.
          </div>
        </div>
      </section>
    </>
  );
}
