import { useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  useLocation,
} from "react-router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";

const SITE_URL = "https://regnabewind.nl";

export const meta = () => [
  { title: "Regna Bewind — Persoonlijke aandacht, overzicht en rust" },
  {
    name: "description",
    content:
      "Regna Bewind biedt beschermingsbewind en budgetbeheer in Landgraaf en omstreken. Persoonlijke aandacht en financiële rust.",
  },
  { property: "og:site_name", content: "Regna Bewind" },
  { property: "og:locale", content: "nl_NL" },
  { property: "og:type", content: "website" },
  { property: "og:image", content: `${SITE_URL}/kennismaking.png` },
  { name: "theme-color", content: "#202120" },
];

export const links = () => [
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=2" },
];

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Regna Bewind",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/kennismaking.png`,
  description:
    "Persoonlijke ondersteuning bij beschermingsbewind (wettelijk bewind) en budgetbeheer.",
  telephone: "+31639712304",
  email: "info@regnabewind.nl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Postbus 30040",
    postalCode: "6370 KA",
    addressLocality: "Landgraaf",
    addressCountry: "NL",
  },
  areaServed: {
    "@type": "Country",
    name: "Nederland",
  },
  founder: {
    "@type": "Person",
    name: "Petra Mengelers",
    jobTitle: "Bewindvoerder",
  },
  knowsLanguage: "nl",
};

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(
        decodeURIComponent(hash.slice(1)),
      );
      if (el) {
        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        if (reduce) {
          el.scrollIntoView();
        } else {
          const startY = window.scrollY;
          const targetY =
            el.getBoundingClientRect().top + startY - 48;
          const startTime = performance.now();
          const duration = 1000;
          const easeInOutCubic = (t) =>
            t < 0.5
              ? 4 * t * t * t
              : 1 - Math.pow(-2 * t + 2, 3) / 2;
          const step = (now) => {
            const progress = Math.min(
              (now - startTime) / duration,
              1,
            );
            window.scrollTo(
              0,
              startY + (targetY - startY) * easeInOutCubic(progress),
            );
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
        el.focus({ preventScroll: true });
        return;
      }
    }
    window.scrollTo(0, 0);
    document.getElementById("main")?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return null;
}

export function Layout({ children }) {
  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Naar de inhoud
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <RouteEffects />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
