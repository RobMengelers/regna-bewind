import { useState } from "react";
import PageHeading from "../../components/PageHeading/PageHeading";
import { API_URL } from "../../api";
import "./Contact.css";

const EMPTY_FORM = { name: "", email: "", message: "", company: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(
          data?.error ?? "Er is iets misgegaan. Probeer het later opnieuw."
        );
      }
      setStatus("sent");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error && err.message
          ? err.message
          : "Er is iets misgegaan. Probeer het later opnieuw."
      );
    }
  }

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
          <div className="contact-detail">
            <small>Bel ons</small>
            06 39 71 23 04
          </div>
          <div className="contact-detail">
            <small>Mail ons</small>
            info@regnabewind.nl
          </div>
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
          <h2>
            Uw verhaal mag
            <br />
            er zijn.
          </h2>
          <p>
            Een vraag stellen is een eerste stap. Vertel ons waar u tegenaan
            loopt, dan bespreken we samen hoe Regna Bewind u kan ondersteunen.
          </p>
          {status === "sent" ? (
            <p className="contact-success" role="status">
              Dank u wel. Uw bericht is verzonden — we nemen zo snel mogelijk
              contact met u op.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="contact-name">Naam</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={200}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">E-mailadres</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">Bericht</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  required
                  maxLength={5000}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              {/* Honeypot: hidden from visitors, catches naive bots. */}
              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="contact-company">Bedrijf</label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              {error && (
                <p className="contact-error" role="alert">
                  {error}
                </p>
              )}
              <button
                className="button"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Versturen…" : "Verstuur bericht"}
              </button>
            </form>
          )}
        </div>
        <figure>
          <img
            src="/kennismaking.png"
            alt="Sfeerbeeld van een rustige gespreksruimte met twee stoelen aan een tafel"
            width="1536"
            height="1024"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Sfeerimpressie</figcaption>
        </figure>
      </section>
    </>
  );
}
