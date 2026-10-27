import { Link } from "react-router";
import PageHeading from "../components/PageHeading/PageHeading";
import { pageMeta, canonicalLink } from "../seo";
import "../styles/article.css";

export const meta = () =>
  pageMeta({
    title: "Beschermingsbewind (wettelijk bewind) — Regna Bewind",
    description:
      "Beschermingsbewind beschermt uw financiën wanneer u die zelf niet meer kunt behartigen. Lees hoe het werkt, wat het kost en hoe u het aanvraagt.",
    path: "/diensten/beschermingsbewind",
  });

export const links = () => canonicalLink("/diensten/beschermingsbewind");

export default function Beschermingsbewind() {
  return (
    <>
      <PageHeading
        label="Beschermingsbewind"
        title={
          <>
            Uw financiën
            <br />
            <em>goed beschermd.</em>
          </>
        }
      >
        Beschermingsbewind — ook wel wettelijk bewind genoemd — zorgt ervoor
        dat uw inkomen en vermogen worden beheerd door een professionele
        bewindvoerder die door de kantonrechter is aangesteld.
      </PageHeading>

      <section className="container article-section">
        <div className="article-grid">
          <h2>Wat is beschermingsbewind?</h2>
          <div className="article-prose">
            <p>
              Beschermingsbewind is een maatregel uit het Burgerlijk Wetboek
              (artikel 1:381 BW). Het is bedoeld voor mensen die hun
              vermogensrechtelijke belangen niet meer behoorlijk kunnen
              behartigen, bijvoorbeeld door verkwisting, verslaving, een
              verstandelijke beperking of problematische schulden.
            </p>
            <p>
              De kantonrechter wijst dan een bewindvoerder aan. Deze
              professionele bewindvoerder beheert uw financiën: uw inkomen
              komt binnen op een beheerrekening, uw vaste lasten worden op
              tijd betaald en u ontvangt een vast, afgesproken bedrag om van te
              leven. Zo houdt u overzicht en rust, zonder dat u zich zorgen
              hoeft te maken over rekeningen die blijven liggen.
            </p>
            <p>
              Ieder beschermingsbewind wordt ingeschreven in het openbare
              curatele- en bewindregister. Dat betekent dat de maatregel
              formeel en transparant is vastgelegd.
            </p>
          </div>
        </div>
      </section>

      <section className="container article-section">
        <div className="article-grid">
          <h2>Wanneer is beschermingsbewind passend?</h2>
          <ul className="article-list">
            <li>
              <strong>Verkwisting</strong>
              Uw uitgaven lopen structureel uit de hand en er blijft te weinig
              over voor basisbehoeften.
            </li>
            <li>
              <strong>Verslaving</strong>
              Een verslaving aan bijvoorbeeld gokken, alcohol of drugs zorgt
              voor financiële chaos.
            </li>
            <li>
              <strong>Verstandelijke of lichamelijke beperking</strong>
              Door een beperking of aandoening is het lastig om uw zaken
              zelfstandig te regelen.
            </li>
            <li>
              <strong>Problematische schulden</strong>
              Uw schulden zijn opgelopen tot een niveau waarbij structureel
              beheer en begeleiding nodig zijn.
            </li>
          </ul>
        </div>
      </section>

      <section className="container article-section">
        <div className="article-grid">
          <h2>Hoe werkt de aanvraag?</h2>
          <ol className="article-steps">
            <li>
              <div>
                <h3>Kennismaking</h3>
                <p>
                  We bespreken uw situatie en uw wensen. Ook leggen we uit wat
                  u van het traject kunt verwachten.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Verzoek bij de kantonrechter</h3>
                <p>
                  Een verzoek tot beschermingsbewind wordt ingediend bij de
                  kantonrechter van uw woonplaats. Dit kan door uzelf, maar
                  ook door een familielid, partner, arts of hulpverlener. Een
                  advocaat is niet verplicht.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Uitspraak en inschrijving</h3>
                <p>
                  De kantonrechter doet uitspraak en wijst een bewindvoerder
                  aan. U kunt daarbij uw voorkeur uitspreken. De maatregel
                  wordt ingeschreven in het curatele- en bewindregister.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Plan van aanpak en beheer</h3>
                <p>
                  De bewindvoerder stelt een plan van aanpak op, brengt uw
                  financiën in kaart en begint met het beheer van uw inkomen
                  en uitgaven. Jaarlijks legt de bewindvoerder verantwoording
                  af.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="container article-section">
        <div className="article-grid">
          <h2>Wat doen wij voor u?</h2>
          <div className="article-prose">
            <p>
              Bij Regna Bewind nemen we het dagelijkse beheer uit handen. We
              zorgen dat uw vaste lasten — huur, energie, zorgverzekering —
              op tijd worden betaald, en we houden overzicht in uw
              wisselende uitgaven.
            </p>
            <p>
              Daarnaast helpen we met toeslagen, regelingen en uw
              belastingaangifte. Heeft u te maken met schuldeisers, dan
              spreken we hen namens u en verwijzen we door naar een
              schuldhulpverleningsinstantie of het wettelijk schuldtraject
              (WSNP) als dat nodig is.
            </p>
            <p>
              U houdt zelf grip: u weet altijd waar u aan toe bent en welk
              bedrag u vrij te besteden heeft.
            </p>
            <p className="article-note">
              Rust en overzicht, vanaf de eerste dag.
            </p>
          </div>
        </div>
      </section>

      <section className="container article-section">
        <div className="article-grid">
          <h2>Wat kost beschermingsbewind?</h2>
          <div className="article-prose">
            <p>
              De beloning van een professionele bewindvoerder staat vast en
              wordt jaarlijks vastgesteld door de overheid. In 2026 bedraagt
              de jaarbeloning <strong>€1.630</strong> (of{" "}
              <strong>€2.107</strong> bij problematische schulden), plus een
              eenmalig bedrag voor de aanvangswerkzaamheden van{" "}
              <strong>€767</strong> — of <strong>€574</strong> als eerder al
              eerder beschermingsbewind liep. De tarieven zijn sinds 2026 vrijgesteld van
              btw.
            </p>
            <p>
              De bewindvoerder declareert de beloning via de rechtbank. U
              betaalt deze kosten uit uw inkomen of vermogen. Kan dat niet,
              dan komt soms bijzondere bijstand van uw gemeente in beeld. Wij
              denken hier graag in de kennismaking met u over mee.
            </p>
          </div>
        </div>
      </section>

      <section className="container article-cta">
        <h2>Begin met een kennismaking.</h2>
        <p>
          Heeft u behoefte aan rust en overzicht in uw financiën? We
          bespreken graag wat beschermingsbewind voor u kan betekenen.
        </p>
        <Link className="button" to="/contact#contact-formulier" prefetch="intent">
          Neem contact op <span aria-hidden="true">›</span>
        </Link>
      </section>
    </>
  );
}
