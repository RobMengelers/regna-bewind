import { Link } from "react-router";
import PageHeading from "../components/PageHeading/PageHeading";
import { pageMeta, canonicalLink, jsonLd } from "../seo";
import "../styles/article.css";

const faqItems = [
  {
    question: "Wat is beschermingsbewind?",
    answer:
      "Beschermingsbewind — ook wel wettelijk bewind genoemd — is een maatregel uit het Burgerlijk Wetboek (artikel 1:381 BW) voor mensen die hun financiële belangen niet meer zelfstandig kunnen behartigen. De kantonrechter wijst een professionele bewindvoerder aan die uw inkomen en vermogen beheert, zodat uw rekeningen op tijd worden betaald en u een vast bedrag vrij te besteden heeft.",
  },
  {
    question: "Wanneer is beschermingsbewind nodig?",
    answer:
      "Beschermingsbewind kan worden ingesteld bij verkwisting, verslaving, een verstandelijke of lichamelijke beperking, of problematische schulden. Het is bedoeld voor mensen die hun vermogensrechtelijke belangen niet meer behoorlijk kunnen behartigen.",
  },
  {
    question: "Hoe vraag ik beschermingsbewind aan?",
    answer:
      "Een verzoek wordt ingediend bij de kantonrechter van uw woonplaats. U kunt dit zelf doen, maar ook een partner, familielid (tot de vierde graad), arts, hulpverlener of de officier van justitie kan het verzoek indienen. Een advocaat is niet verplicht. Wij helpen u graag bij de voorbereiding.",
  },
  {
    question: "Wie wijst de bewindvoerder aan?",
    answer:
      "De kantonrechter wijst de bewindvoerder aan. Daarbij wordt zo mogelijk rekening gehouden met uw voorkeur. De benoeming wordt ingeschreven in het openbare curatele- en bewindregister (CCBR).",
  },
  {
    question: "Wat kost een bewindvoerder?",
    answer:
      "De beloning van een professionele bewindvoerder is vastgesteld door de overheid. In 2026 bedraagt de jaarbeloning €1.630 (€2.107 bij problematische schulden), plus eenmalig €767 aanvangswerkzaamheden — of €574 als eerder al budgetbeheer liep. De tarieven zijn sinds 2026 vrijgesteld van btw.",
  },
  {
    question: "Vergoedt de gemeente de kosten van beschermingsbewind?",
    answer:
      "De kosten worden in de regel betaald door de betrokkene zelf. Als dat niet gaat, kunt u navragen of uw gemeente een regeling heeft, bijvoorbeeld via de Wmo of bijzondere bijstand. Veel gemeenten hebben een voorziening voor beschermingsbewind; informeer bij uw gemeente naar de mogelijkheden.",
  },
  {
    question: "Wat is het verschil tussen beschermingsbewind en budgetbeheer?",
    answer:
      "Bij budgetbeheer is er geen rechterlijke uitspraak: het is een vrijwillige overeenkomst tussen u en een organisatie die uw financiën beheert. Bij beschermingsbewind stelt de kantonrechter de maatregel vast en wijst hij een bewindvoerder aan die wettelijk verantwoordelijk is. Budgetbeheer is daarmee laagdrempeliger; beschermingsbewind biedt meer zekerheid en formele bescherming.",
  },
  {
    question: "Wat doet een bewindvoerder precies?",
    answer:
      "Een bewindvoerder beheert uw inkomen en vermogen: uw inkomen komt binnen op een beheerrekening, vaste lasten worden op tijd betaald en u ontvangt een vast bedrag om van te leven. Daarnaast helpt de bewindvoerder met toeslagen, regelingen, schuldenoverleg en belastingaangifte, en legt jaarlijks verantwoording af aan de kantonrechter.",
  },
  {
    question: "Kan ik zelf een bewindvoerder kiezen?",
    answer:
      "Ja. Bij het verzoek kunt u aangeven wie u als bewindvoerder voorstelt. De kantonrechter volgt uw voorkeur in de regel, tenzij daar bezwaren tegen zijn.",
  },
  {
    question: "Wat is het verschil tussen bewind, curatele en mentorschap?",
    answer:
      "Bewind gaat over uw geld en vermogen. Curatele gaat over uw persoonlijke beslissingen én uw vermogen, en betekent dat u voor een deel niet meer zelfstandig mag beslissen. Mentorschap gaat alleen over persoonlijke belastingen, zoals zorg en wonen, en niet over geld. Beschermingsbewind is de lichtste van deze maatregelen.",
  },
  {
    question: "Hoe lang duurt het voordat beschermingsbewind start?",
    answer:
      "Dat hangt af van de werkdruk bij de rechtbank en van de stukken die nodig zijn. Reken op enkele weken tot enkele maanden tussen het indienen van het verzoek en de uitspraak. Zodra de maatregel is vastgesteld, kunnen we starten met het beheer.",
  },
];

export const links = () => canonicalLink("/veelgestelde-vragen");

export const meta = () => [
  ...pageMeta({
    title: "Veelgestelde vragen — Regna Bewind",
    description:
      "Antwoorden op veelgestelde vragen over beschermingsbewind, budgetbeheer, kosten en de aanvraag.",
    path: "/veelgestelde-vragen",
  }),
  ...jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }),
];

export default function VeelgesteldeVragen() {
  return (
    <>
      <PageHeading
        label="Veelgestelde vragen"
        title={
          <>
            Duidelijke antwoorden
            <br />
            <em>op uw vragen.</em>
          </>
        }
      >
        De meest gestelde vragen over beschermingsbewind, budgetbeheer en de
        kosten — helder op een rij.
      </PageHeading>
      <section className="container faq-list">
        {faqItems.map((item) => (
          <article className="faq-item" key={item.question}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
        <p className="faq-footer-note">
          Staat uw vraag er niet bij?{" "}
          <Link to="/contact">Neem contact op</Link> — we denken graag met u
          mee.
        </p>
      </section>
    </>
  );
}
