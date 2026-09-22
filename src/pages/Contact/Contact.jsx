import PageHeading from "../../components/PageHeading/PageHeading";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <PageHeading
        label="Contact"
        title={
          <>
            De eerste stap?
            <br />
            <em>Een goed gesprek.</em>
          </>
        }
      >
        Heeft u vragen of wilt u kennismaken? Neem gerust contact op. We nemen
        de tijd voor uw verhaal.
      </PageHeading>
      <section className="container contact-layout">
        <div className="contact-primary">
          <p className="eyebrow">Direct contact</p>
          <h2>We horen graag van u.</h2>
          <a className="contact-link" href="tel:+31639712304">
            <small>Bel ons</small>06 39 71 23 04{" "}
            <span aria-hidden="true">›</span>
          </a>
          <a className="contact-link" href="mailto:info@regnabewind.nl">
            <small>Mail ons</small>info@regnabewind.nl{" "}
            <span aria-hidden="true">›</span>
          </a>
        </div>
        <aside className="contact-aside">
          <p className="eyebrow">Praktische informatie</p>
          <h3>Telefonisch bereikbaar</h3>
          <p>
            Maandag t/m donderdag
            <br />
            09:30 – 12:00 uur
            <br />
            <span>Vrijdag gesloten</span>
          </p>
          <hr />
          <h3>Postadres</h3>
          <address>
            Regna Bewind
            <br />
            Postbus 30040
            <br />
            6370 KA Landgraaf
          </address>
        </aside>
      </section>
      <section className="container contact-conversation">
        <div>
          <p className="eyebrow">Een persoonlijke kennismaking</p>
          <h2>Uw verhaal mag<br />er zijn.</h2>
          <p>Een vraag stellen is een eerste stap. Vertel ons waar u tegenaan loopt, dan bespreken we samen hoe Regna Bewind u kan ondersteunen.</p>
          <a className="text-link" href="mailto:info@regnabewind.nl">Stuur ons een bericht <span aria-hidden="true">›</span></a>
        </div>
        <figure>
          <img src="/kennismaking.png" alt="Sfeerbeeld van een rustige gespreksruimte met twee stoelen aan een tafel" width="1536" height="1024" loading="lazy" decoding="async" />
          <figcaption>Sfeerimpressie</figcaption>
        </figure>
      </section>
    </>
  );
}
