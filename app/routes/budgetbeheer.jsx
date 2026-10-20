import { Link } from "react-router";
import PageHeading from "../components/PageHeading/PageHeading";
import { pageMeta, canonicalLink } from "../seo";
import "../styles/article.css";

export const meta = () =>
  pageMeta({
    title: "Budgetbeheer — overzicht in uw dagelijkse geldzaken | Regna Bewind",
    description:
      "Budgetbeheer van Regna Bewind: wij beheren uw inkomen en vaste lasten, zodat u elke maand rondkomt en grip houdt op uw geldzaken.",
    path: "/diensten/budgetbeheer",
  });

export const links = () => canonicalLink("/diensten/budgetbeheer");

export default function Budgetbeheer() {
  return (
    <>
      <PageHeading
        label="Budgetbeheer"
        title={
          <>
            Overzicht in uw
            <br />
            <em>dagelijkse geldzaken.</em>
          </>
        }
      >
        Budgetbeheer is een vrijwillige regeling waarbij wij uw inkomsten en
        uitgaven beheren. Zonder tussenkomst van de rechter, met heldere
        afspraken die bij uw situatie passen.
      </PageHeading>

      <section className="container article-section">
        <div className="article-grid">
          <h2>Wat is budgetbeheer?</h2>
          <div className="article-prose">
            <p>
              Bij budgetbeheer stort u (of een uitkeringsinstantie) uw inkomen
              op een beheerrekening van Regna Bewind. Wij betalen daaruit uw
              vaste lasten — huur, energie, zorgverzekering, gemeentelijke
              heffingen — en maken het resterende bedrag in termijnen aan u
              over. Zo weet u zeker dat de belangrijkste rekeningen op tijd
              worden betaald.
            </p>
            <p>
              In tegenstelling tot beschermingsbewind is budgetbeheer een
              overeenkomst tussen u en Regna Bewind. Er is geen uitspraak van
              de kantonrechter nodig en u kunt er op elk moment mee stoppen.
              Het is een laagdrempelige manier om weer rust en overzicht te
              krijgen.
            </p>
          </div>
        </div>
      </section>

      <section className="container article-section">
        <div className="article-grid">
          <h2>Voor wie is budgetbeheer?</h2>
          <ul className="article-list">
            <li>
              <strong>Als u het overzicht kwijt bent</strong>
              Rekeningen stapelen zich op of u weet niet precies waar uw geld
              elke maand naar toe gaat.
            </li>
            <li>
              <strong>Bij dreigende betalingsproblemen</strong>
              U wilt voorkomen dat achterstanden leiden tot schulden of
              incassokosten.
            </li>
            <li>
              <strong>Na een ingrijpende gebeurtenis</strong>
              Een scheiding, overlijden, arbeidsongeschiktheid of pensioen
              kan uw financiële situatie volledig veranderen.
            </li>
            <li>
              <strong>Ter ondersteuning bij bewind</strong>
              Soms loopt eerst budgetbeheer, voordat (of naast) een
              wettelijk beschermingsbewind wordt gestart.
            </li>
          </ul>
        </div>
      </section>

      <section className="container article-section">
        <div className="article-grid">
          <h2>Hoe werkt het?</h2>
          <ol className="article-steps">
            <li>
              <div>
                <h3>Kennismaking en intake</h3>
                <p>
                  We bespreken uw situatie, inkomsten en uitgaven. Samen
                  bepalen we wat er geregeld moet worden.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Inrichting beheerrekening</h3>
                <p>
                  Uw inkomen komt voortaan binnen op een afgescheiden
                  beheerrekening. Van daaruit betalen wij uw vaste lasten.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Persoonlijke vrijgave</h3>
                <p>
                  Het bedrag dat overblijft, maken we in de afgesproken
                  termijnen aan u over — bijvoorbeeld wekelijks of per
                  twee weken.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h3>Bijsturen waar nodig</h3>
                <p>
                  We houden contact en sturen bij als uw situatie verandert.
                  U kunt altijd vragen stellen.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="container article-section">
        <div className="article-grid">
          <h2>Wat kost het?</h2>
          <div className="article-prose">
            <p>
              De kosten van budgetbeheer hangen af van uw situatie en de
              werkzaamheden die nodig zijn. Tijdens de kennismaking maken we
              hierover heldere afspraken, zodat u vooraf weet waar u aan toe
              bent.
            </p>
            <p>
              In sommige gevallen is budgetbeheer onderdeel van een
              beschermingsbewind. In dat geval vallen de werkzaamheden onder
              de wettelijke tarieven voor de bewindvoerder.
            </p>
            <p className="article-note">
              Altijd duidelijke afspraken, vooraf.
            </p>
          </div>
        </div>
      </section>

      <section className="container article-cta">
        <h2>Weet u het even niet meer?</h2>
        <p>
          Plan een vrijblijvende kennismaking. Samen kijken we wat er
          nodig is om uw geldzaken weer op orde te brengen.
        </p>
        <Link className="button" to="/contact#contact-formulier">
          Neem contact op <span aria-hidden="true">›</span>
        </Link>
      </section>
    </>
  );
}
