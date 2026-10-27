import { useState } from "react";
import PageHeading from "../components/PageHeading/PageHeading";
import { API_URL } from "../api";
import { pageMeta, canonicalLink } from "../seo";
import "./contact.css";

export const meta = () =>
  pageMeta({
    title: "Klachten — Regna Bewind",
    description: "Klachtenformulier voor Regna Bewind.",
    path: "/klachten",
  });

export const links = () => canonicalLink("/klachten");

const EMPTY_FORM = { name: "", email: "", message: "", company: "" };

export default function Klachten() {
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
        label="Klachten"
        title={
          <>
            Uw klacht
            <br />
            <em>in goede handen.</em>
          </>
        }
      >
        Heeft u een klacht? We nemen dit serieus en gaan er zorgvuldig mee om.
      </PageHeading>
      <section className="container contact-layout">
        <div id="klachten-formulier" className="contact-primary">
          <p className="eyebrow">Klachtenformulier</p>
          <h2>Laat het ons weten.</h2>
          {status === "sent" ? (
            <p className="contact-success" role="status">
              Dank u wel. Uw klacht is verzonden — we nemen zo snel mogelijk
              contact met u op.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label htmlFor="complaint-name">Naam</label>
                <input
                  id="complaint-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Uw naam"
                  required
                  maxLength={200}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="complaint-email">E-mailadres</label>
                <input
                  id="complaint-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="uw@email.nl"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="complaint-message">Bericht</label>
                <textarea
                  id="complaint-message"
                  name="message"
                  rows={6}
                  placeholder="Beschrijf uw klacht zo duidelijk mogelijk…"
                  required
                  maxLength={5000}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              {/* Honeypot: hidden from visitors, catches naive bots. */}
              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="complaint-company">Bedrijf</label>
                <input
                  id="complaint-company"
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
                {status === "sending" ? "Versturen…" : "Verstuur klacht"}
              </button>
            </form>
          )}
        </div>
        <aside className="contact-aside">
          <p className="eyebrow">Vertrouwelijk</p>
          <h3>Ernstig genomen</h3>
          <p>
            Elke klacht wordt zorgvuldig geregistreerd en binnen een redelijke
            termijn behandeld.
          </p>
        </aside>
      </section>
    </>
  );
}
