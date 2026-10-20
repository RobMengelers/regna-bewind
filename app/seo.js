const SITE_URL = "https://regnabewind.nl";

export function pageMeta({ title, description, path, type = "website" }) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:site_name", content: "Regna Bewind" },
    { property: "og:locale", content: "nl_NL" },
    { property: "og:type", content: type },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: `${SITE_URL}${path}` },
    { property: "og:image", content: `${SITE_URL}/kennismaking.png` },
  ];
}

export function canonicalLink(path) {
  return [{ rel: "canonical", href: `${SITE_URL}${path}` }];
}

export function jsonLd(data) {
  return [{ "script:ld+json": data }];
}

export { SITE_URL };
