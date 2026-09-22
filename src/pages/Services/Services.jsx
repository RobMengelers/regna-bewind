import PageHeading from "../../components/PageHeading/PageHeading";
import "./Services.css";

const services = [
  [
    "Aanvraag bewind",
    "Begeleiding bij de aanvraag voor onderbewindstelling en een helder plan van aanpak op maat.",
  ],
  [
    "Financieel overzicht",
    "We brengen uw financiële situatie zorgvuldig in kaart en zorgen voor structuur in uw administratie.",
  ],
  [
    "Regelingen & toeslagen",
    "We onderzoeken de mogelijkheden voor bijzondere bijstand, toeslagen en passende regelingen.",
  ],
  [
    "Schulden & belasting",
    "We spreken met schuldeisers, verwijzen door waar nodig en verzorgen uw aangifte inkomstenbelasting Box 1.",
  ],
];

export default function Services() {
  return (
    <>
      <PageHeading
        label="Onze diensten"
        title={
          <>
            Overzicht geeft
            <br />
            <em>vertrouwen.</em>
          </>
        }
      >
        Van de eerste aanvraag tot de dagelijkse administratie: we staan naast u
        en zorgen dat uw financiën goed geregeld zijn.
      </PageHeading>
      <section className="container service-list" aria-label="Dienstverlening">
        {services.map(([title, text], index) => (
          <article className="service-row" key={title}>
            <span className="service-number">0{index + 1}</span>
            <h2>{title}</h2>
            <div>
              <p>{text}</p>
              {index === 3 && (
                <p>
                  Bij problematische schulden verwijzen wij door naar een
                  schuldhulpverleningsinstantie of een wettelijk schuldtraject
                  (WSNP).
                </p>
              )}
            </div>
          </article>
        ))}
      </section>
      <section className="accountability container">
        <figure className="services-photo">
          <img
            src="/persoonlijk-financieel-beheer.jpg"
            alt="Petra Mengelers naast eurobiljetten en een envelop van de Belastingdienst"
            width="1905"
            height="920"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            Een persoonlijk gezicht. Zorg voor uw financiën.
          </figcaption>
        </figure>
        <div className="accountability-copy">
          <p className="eyebrow">Zorgvuldigheid voorop</p>
          <h2>Inzicht in wat we doen.</h2>
          <p>
            Wij beheren uw financiële administratie en leggen jaarlijks
            verantwoording af aan de rechtbank.
          </p>
        </div>
      </section>
    </>
  );
}
