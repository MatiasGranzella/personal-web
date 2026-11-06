/* ============================================================================
   Genera las páginas estáticas del sitio a partir de scripts/servicios.mjs
   y de index.html. Sin dependencias: `node scripts/build.mjs` desde la raíz.

   Escribe:
     servicios/<slug>/index.html     páginas de servicios en español
     en/services/<slug>/index.html   las mismas en inglés
     en/index.html                   la home en inglés (copia de index.html con
                                     las meta en inglés; el contenido lo pone app.js)
     sitemap.xml                     todas las URLs, con sus versiones de idioma

   Lo generado se commitea (GitHub Pages sirve el repo tal cual).
   ========================================================================== */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, EMAIL, LINKEDIN, UI, SERVICES } from "./servicios.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const TODAY = new Date().toISOString().slice(0, 10);
const OG_IMAGE = `${SITE}/assets/og-image-v6.png`;

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const write = (rel, content) => {
  const file = join(ROOT, rel);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, content);
  console.log("  " + rel);
};
const filePath = (slug) => slug.replace(/^\//, "") + "index.html";

/* ---- Home: meta por idioma ---- */
const HOME = {
  es: {
    url: `${SITE}/`,
    title: "Matías Granzella — Backend & AI Engineer freelance en Buenos Aires",
    description:
      "Desarrollador freelance en Buenos Aires: chatbots e integraciones con IA, sistemas a medida con backend propio y landing pages. AI Lead en Ualá.",
    locale: "es_AR",
  },
  en: {
    url: `${SITE}/en/`,
    title: "Matías Granzella — Freelance Backend & AI Engineer (Argentina, remote)",
    description:
      "Backend & AI Engineer and AI Lead at Ualá. Freelance, remote from Buenos Aires: AI chatbots and integrations, custom software and landing pages.",
    locale: "en_US",
  },
};

/* ---- Íconos (los mismos trazos que app.js) ---- */
const ICON = {
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
};
const icon = (n, cls = "") => `<svg class="i${cls ? " " + cls : ""}" viewBox="0 0 24 24" aria-hidden="true">${ICON[n]}</svg>`;

const alternateLinks = (es, en) => `
  <link rel="alternate" hreflang="es" href="${es}" />
  <link rel="alternate" hreflang="en" href="${en}" />
  <link rel="alternate" hreflang="x-default" href="${es}" />`;

/* ---- Plantilla de una página de servicio ---- */
function servicePage(svc, lang) {
  const t = svc[lang];
  const u = UI[lang];
  const other = lang === "es" ? "en" : "es";
  const url = SITE + t.slug;
  const esUrl = SITE + svc.es.slug;
  const enUrl = SITE + svc.en.slug;
  const homeUrl = HOME[lang].url;
  const others = SERVICES.filter((s) => s.id !== svc.id);

  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: t.name,
        description: t.description,
        url,
        inLanguage: lang === "es" ? "es-AR" : "en",
        serviceType: t.name,
        provider: { "@id": `${SITE}/#person` },
        areaServed: lang === "es" ? [{ "@type": "Country", name: "Argentina" }, "Remoto"] : ["Worldwide (remote)", { "@type": "Country", name: "Argentina" }],
      },
      {
        "@type": "Person",
        "@id": `${SITE}/#person`,
        name: "Matías Granzella",
        url: `${SITE}/`,
        jobTitle: "Backend & AI Engineer",
        email: `mailto:${EMAIL}`,
        sameAs: [LINKEDIN],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Matías Granzella", item: homeUrl },
          { "@type": "ListItem", position: 2, name: u.breadcrumb, item: `${homeUrl}#servicios` },
          { "@type": "ListItem", position: 3, name: t.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  };

  const rows = (items) =>
    items.map(([title, text]) => `
          <li class="row">
            <h3 class="row__title">${esc(title)}</h3>
            <p class="row__text">${esc(text)}</p>
          </li>`).join("");

  const body = `
  <main id="main">
    <section class="page-hero">
      <div class="container">
        <nav class="crumbs" aria-label="Breadcrumb"><a href="${u.home}#servicios">${esc(u.breadcrumb)}</a><span aria-hidden="true">/</span><span>${esc(t.name)}</span></nav>
        <h1 class="page-hero__title">${esc(t.h1)}<span class="hero__accent">.</span></h1>
        <p class="page-hero__lede">${esc(t.lede)}</p>
        <div class="hero__ctas page-hero__ctas">
          <a class="btn btn--primary" href="mailto:${EMAIL}">${icon("mail")}${esc(u.mailCta)}</a>
          <a class="btn btn--ghost" href="${LINKEDIN}" target="_blank" rel="noopener">${icon("linkedin")}${esc(u.linkedinCta)}</a>
        </div>
      </div>
    </section>

    <section class="section page-sec" aria-labelledby="h-uses">
      <div class="container">
        <h2 class="section__title" id="h-uses">${esc(u.useCasesTitle)}<span class="hero__accent">.</span></h2>
        <ul class="rows">${rows(t.useCases)}
        </ul>
      </div>
    </section>

    <section class="section page-sec" aria-labelledby="h-proof">
      <div class="container">
        <h2 class="section__title" id="h-proof">${esc(u.proofTitle)}<span class="hero__accent">.</span></h2>
        <ul class="rows">${t.proof.map(([value, text]) => `
          <li class="row row--proof">
            <p class="row__value${/\d/.test(value) ? "" : " row__value--word"}">${esc(value)}</p>
            <p class="row__text">${esc(text)}</p>
          </li>`).join("")}
        </ul>
      </div>
    </section>

    <section class="section page-sec" aria-labelledby="h-process">
      <div class="container">
        <h2 class="section__title" id="h-process">${esc(u.processTitle)}<span class="hero__accent">.</span></h2>
        <ol class="rows rows--steps">${t.process.map(([title, text], i) => `
          <li class="row">
            <h3 class="row__title"><span class="row__num">0${i + 1}</span>${esc(title)}</h3>
            <p class="row__text">${esc(text)}</p>
          </li>`).join("")}
        </ol>
        <h3 class="page-sub">${esc(u.stackTitle)}</h3>
        <div class="service__tags">${t.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
      </div>
    </section>

    <section class="section page-sec" aria-labelledby="h-faq">
      <div class="container">
        <h2 class="section__title" id="h-faq">${esc(u.faqTitle)}<span class="hero__accent">.</span></h2>
        <div class="faq">${t.faq.map(([q, a]) => `
          <details class="faq__item">
            <summary>${esc(q)}${icon("plus")}</summary>
            <p>${esc(a)}</p>
          </details>`).join("")}
        </div>
      </div>
    </section>

    <section class="section section--tight" id="contacto">
      <div class="container">
        <div class="closing">
          <h2 class="closing__title">${esc(u.closingTitle)}</h2>
          <div class="closing__side">
            <p class="closing__text">${esc(u.closingText)}</p>
            <div class="closing__ctas">
              <a class="btn btn--primary" href="mailto:${EMAIL}">${icon("mail")}${esc(EMAIL)}</a>
              <a class="btn btn--ghost" href="${LINKEDIN}" target="_blank" rel="noopener">${icon("linkedin")}LinkedIn</a>
            </div>
          </div>
        </div>
        <nav class="page-others" aria-label="${esc(u.othersTitle)}">
          <h2 class="page-sub">${esc(u.othersTitle)}</h2>
          <ul>${others.map((s) => `
            <li><a class="link-arrow" href="${s[lang].slug}">${esc(s[lang].name)}${icon("arrow", "i--arrow")}</a></li>`).join("")}
          </ul>
        </nav>
      </div>
    </section>
  </main>`;

  return layout({
    lang,
    title: t.title,
    description: t.description,
    url,
    alternates: alternateLinks(esUrl, enUrl),
    langHref: svc[other].slug,
    jsonld,
    body,
  });
}

/* ---- Layout común de las páginas generadas ---- */
function layout({ lang, title, description, url, alternates, langHref, jsonld, body }) {
  const u = UI[lang];
  return `<!DOCTYPE html>
<!-- Generado por scripts/build.mjs a partir de scripts/servicios.mjs. No editar a mano. -->
<html lang="${lang === "es" ? "es" : "en"}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}" />
  <link rel="canonical" href="${url}" />${alternates}
  <meta name="theme-color" content="#f6f4ef" media="(prefers-color-scheme: light)" />
  <meta name="theme-color" content="#0b0b0b" media="(prefers-color-scheme: dark)" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Matías Granzella" />
  <meta property="og:locale" content="${lang === "es" ? "es_AR" : "en_US"}" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${OG_IMAGE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${OG_IMAGE}" />
  <meta name="twitter:creator" content="@mati_granzella" />
  <link rel="icon" href="/favicon.ico" sizes="48x48" />
  <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon-192.png" />
  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
  <script>
    (function () {
      try {
        var t = localStorage.getItem("theme");
        if (t === "dark" || (!t && matchMedia("(prefers-color-scheme: dark)").matches))
          document.documentElement.setAttribute("data-theme", "dark");
      } catch (e) {}
    })();
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Schibsted+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/styles.css" />
</head>
<body class="page">
  <a class="skip" href="#main">${esc(u.skip)}</a>
  <header class="nav" id="nav">
    <a href="${u.home}" class="nav__brand"><span class="nav__handle">matiasgranzella</span></a>
    <nav class="nav__links" aria-label="${lang === "es" ? "Secciones" : "Sections"}">
      ${u.nav.map(([label, href]) => `<a href="${href}">${esc(label)}</a>`).join("\n      ")}
    </nav>
    <div class="nav__actions">
      <a class="lang-toggle" href="${langHref}" hreflang="${lang === "es" ? "en" : "es"}" aria-label="${esc(u.langLabel)}">${u.langSwitch}</a>
      <button class="theme-toggle" id="themeToggle" type="button" aria-label="${esc(u.themeToDark)}">
        <svg class="icon-moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>
        <svg class="icon-sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      </button>
      <a class="btn btn--primary btn--sm" href="mailto:${EMAIL}">${esc(u.navCta)}</a>
    </div>
  </header>
${body}

  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__id">
        <a class="footer__name" href="${u.home}">Matías Granzella</a>
        <span class="footer__made">${esc(u.footerMade)} · © ${new Date().getFullYear()}</span>
      </div>
      <nav class="footer__links" aria-label="Links">
        <a href="mailto:${EMAIL}">${EMAIL}</a>
        <a href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://twitter.com/mati_granzella" target="_blank" rel="noopener">@mati_granzella</a>
      </nav>
    </div>
  </footer>
  <script src="/page.js"></script>
</body>
</html>
`;
}

/* ---- Home en inglés: index.html con las meta en inglés ---- */
function englishHome() {
  let html = readFileSync(join(ROOT, "index.html"), "utf8");
  const es = HOME.es, en = HOME.en;
  const swap = (from, to) => {
    if (!html.includes(from)) throw new Error(`build: no encontré en index.html: ${from}`);
    html = html.split(from).join(to);
  };
  swap('<html lang="es">', '<html lang="en">');
  swap(`<title>${esc(es.title)}</title>`, `<title>${esc(en.title)}</title>`);
  swap(`content="${esc(es.title)}"`, `content="${esc(en.title)}"`);
  swap(`content="${esc(es.description)}"`, `content="${esc(en.description)}"`);
  swap(`<link rel="canonical" href="${es.url}" />`, `<link rel="canonical" href="${en.url}" />`);
  swap(`<meta property="og:url" content="${es.url}" />`, `<meta property="og:url" content="${en.url}" />`);
  swap(`content="${es.locale}"`, `content="${en.locale}"`);
  swap('"inLanguage": "es-AR"', '"inLanguage": "en"');
  html = html.replace("<!DOCTYPE html>", "<!DOCTYPE html>\n<!-- Generado por scripts/build.mjs desde index.html. No editar a mano. -->");
  write("en/index.html", html);
}

/* ---- index.html: la meta de la home en español (title, description, hreflang) ---- */
function syncSpanishHome() {
  const file = join(ROOT, "index.html");
  let html = readFileSync(file, "utf8");
  const es = HOME.es;
  html = html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(es.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(es.description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(es.title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(es.description)}`)
    .replace(/(<meta name="twitter:title" content=")[^"]*/, `$1${esc(es.title)}`)
    .replace(/(<meta name="twitter:description" content=")[^"]*/, `$1${esc(es.description)}`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${es.url}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>(\s*<link rel="alternate" hreflang[^\n]*)*/, `<link rel="canonical" href="${es.url}" />${alternateLinks(es.url, HOME.en.url)}`);
  writeFileSync(file, html);
  console.log("  index.html (meta)");
}

/* ---- sitemap.xml ---- */
function sitemap() {
  const pairs = [[HOME.es.url, HOME.en.url], ...SERVICES.map((s) => [SITE + s.es.slug, SITE + s.en.slug])];
  const entry = (loc, es, en) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <xhtml:link rel="alternate" hreflang="es" href="${es}" />
    <xhtml:link rel="alternate" hreflang="en" href="${en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${es}" />
  </url>`;
  const urls = pairs.flatMap(([es, en]) => [entry(es, es, en), entry(en, es, en)]);
  write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`);
}

console.log("Generando:");
syncSpanishHome();
englishHome();
for (const svc of SERVICES) {
  write(filePath(svc.es.slug), servicePage(svc, "es"));
  write(filePath(svc.en.slug), servicePage(svc, "en"));
}
sitemap();
