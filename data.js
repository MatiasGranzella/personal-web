/* ============================================================================
   TU CONTENIDO — EDITÁ SOLO ESTE ARCHIVO
   ----------------------------------------------------------------------------
   Cambiá los textos, links y datos de abajo y la web se actualiza sola.
   Cargado con tu info real desde tu LinkedIn. Ajustá lo que quieras.
   ========================================================================== */

window.PROFILE = {

  /* -------------------------------------------------------------------------
     1. DATOS BÁSICOS / HERO
     ---------------------------------------------------------------------- */
  meta: {
    siteTitle: "Matías Granzella — AI Lead & Founder de Vesty",
    siteDescription: "AI Lead @ Ualá · Founder de Vesty. Construyo aplicaciones de IA en producción y la app que unifica tus inversiones en una sola pantalla.",
  },

  hero: {
    name: "Matías Granzella",
    headline: "AI Lead @ Ualá · Founder de Vesty",
    tagline: "Construyo IA en producción — y la app que unifica tus inversiones.",
    intro:
      "Soy Licenciado en Sistemas (UBA) con un Magíster en Business Analytics (Di Tella). " +
      "Llevo casi 6 años en data, software e inteligencia artificial: hoy lidero el desarrollo " +
      "de aplicaciones de IA en Ualá y construyo Vesty, mi propia app de inversiones.",
    location: "Buenos Aires, Argentina",
    // Tu foto: poné el archivo en assets/ y referencialo (ej: "assets/foto.jpg").
    // Si lo dejás vacío, se muestran tus iniciales en un círculo.
    photo: "assets/foto_perfil.jpeg",
    ctas: [
      { label: "Conocé Vesty", href: "#vesty", primary: true },
      { label: "Conectemos", href: "#contacto", primary: false },
    ],
    stats: [
      { value: "+6", label: "años en data, software & IA" },
      { value: "AI Lead", label: "en Ualá" },
      { value: "Founder", label: "de Vesty" },
    ],
  },

  /* -------------------------------------------------------------------------
     2. SOBRE MÍ
     ---------------------------------------------------------------------- */
  about: {
    title: "Sobre mí",
    paragraphs: [
      "Soy Matías, Licenciado en Sistemas de Información (UBA) con un Magíster en " +
        "Management & Analytics (UTDT). Pasé por Business Intelligence, Analytics " +
        "Engineering y Data Platform Engineering, y hoy estoy 100% enfocado en IA.",
      "Como AI Lead en Ualá, diseño y desarrollo aplicaciones de Inteligencia Artificial " +
        "en producción: sistemas basados en LLMs como chatbots y asistentes conversacionales, " +
        "con foco en impacto medible en métricas de negocio.",
      "Construyo soluciones end-to-end: desde la arquitectura backend y las APIs, hasta la " +
        "integración de LLMs, RAG, data en tiempo real, monitoreo y evaluación. En paralelo, " +
        "llevo adelante Vesty, mi proyecto propio.",
    ],
    highlights: ["AI Engineering", "LLM Applications", "Software Engineering", "Data Engineering", "Backend APIs", "Cloud & DevOps", "Founder"],
  },

  /* -------------------------------------------------------------------------
     BANDA DE LOGROS / MÉTRICAS (números que impactan)
     ---------------------------------------------------------------------- */
  metrics: {
    items: [
      { value: "81%", label: "accuracy del chatbot de IA en producción" },
      { value: "8,5%", label: "de ahorro en costos de cloud (GCP) que lideré" },
      { value: "2", label: "asistentes de IA en producción en Ualá" },
      { value: "+6", label: "años en data, software & IA" },
    ],
  },

  /* -------------------------------------------------------------------------
     3. VESTY (tu app) — sección destacada
     ---------------------------------------------------------------------- */
  vesty: {
    title: "Vesty",
    subtitle: "Mi proyecto propio",
    pitch: "Tu portfolio, unificado.",
    description:
      "Tu plata está en 5 lugares. Tu visión, no. Vesty reúne brokers, bancos y exchanges " +
      "en una sola pantalla, en castellano y sin jerga de banco. Importás tus extractos y " +
      "entendés tu plata de verdad — en pesos y en dólares.",
    // Bloque problema → solución (estilo vestyapp.io)
    problem: {
      before: "5 apps abiertas, 1 Excel, 0 claridad.",
      after: "Una vista. Tu plata. Junta.",
    },
    features: [
      { icon: "📥", title: "Importación CSV inteligente", text: "Subís el extracto del broker y la IA mapea los campos automáticamente." },
      { icon: "💱", title: "Multimoneda", text: "Pesos y dólares: oficial, blue, CCL, MEP. Cambiás en un click." },
      { icon: "📈", title: "Rendimiento en USD real", text: "Tu retorno real usando el tipo de cambio histórico de cada operación." },
      { icon: "🎯", title: "Vesty Score", text: "Un puntaje 0–100 que resume valuación, crecimiento, rentabilidad y salud financiera." },
      { icon: "🤖", title: "Finny", text: "Tu asistente de portafolio: insights y alertas, todos los días." },
    ],
    // Frase de confianza (estilo vestyapp.io)
    trust: "No somos un broker, no movemos tu dinero. Solo te lo mostramos clarito.",
    mockup: {
      appName: "Vesty",
      greeting: "Hola, Matías 👋",
      balanceLabel: "Tu portfolio",
      balanceValue: "USD 12.480",
      change: "+8,2% en USD real",
      score: 82,
      scoreLabel: "Vesty Score",
    },
    // CTA principal (apunta a tu web real de Vesty)
    cta: { label: "Demo interactiva", href: "https://vestyapp.io" },
    links: [
      { label: "vestyapp.io", href: "https://vestyapp.io", icon: "🌐" },
      { label: "Vesty en LinkedIn", href: "https://www.linkedin.com/company/vesty", icon: "in" },
      { label: "@vestyapp", href: "https://twitter.com/vestyapp", icon: "𝕏" },
    ],
  },

  /* -------------------------------------------------------------------------
     4. EXPERIENCIA (timeline)
     ---------------------------------------------------------------------- */
  experience: {
    title: "Experiencia",
    items: [
      {
        period: "2026 — Hoy",
        role: "Founder",
        company: "Vesty",
        description:
          "Creé Vesty, la app que unifica las inversiones del inversor argentino en una sola " +
          "pantalla: multimoneda real, rendimiento neto de comisiones, CEDEARs ajustados e " +
          "importación de extractos con IA. Lidero visión, producto y desarrollo.",
        current: true,
      },
      {
        period: "2024 — Hoy",
        role: "AI Lead · Sr AI Engineer",
        company: "Ualá",
        description:
          "Coordino y desarrollo soluciones de Generative AI para áreas críticas. Chatbot de " +
          "Customer Experience con LLM (OpenAI) + RAG que clasifica consultas con 81% de accuracy, " +
          "y un chatbot conversacional de Cobranzas que automatiza gestiones y deriva casos sensibles a un humano.",
        current: true,
      },
      {
        period: "2023 — 2024",
        role: "Sr Data Platform Engineer",
        company: "Ualá",
        description:
          "Desarrollé y optimicé la plataforma de datos: IaC con Terraform/Terragrunt y CI/CD, " +
          "un generador automático de features, una solución event-driven (pub/sub) para ETLs, y " +
          "un análisis de costos en GCP que generó un 8,5% de ahorro sobre la facturación total.",
        current: false,
      },
      {
        period: "2022 — 2023",
        role: "Sr Analytics Engineer",
        company: "Ualá",
        description:
          "Lideré la implementación de dbt como herramienta de ETL para BI: migración desde Qlik, " +
          "Pentaho y Power BI, definición de metodologías y mejores prácticas, macros y tests, y " +
          "orquestación con Airflow sobre Google Cloud.",
        current: false,
      },
      {
        period: "2020 — 2021",
        role: "Ssr BI Analyst",
        company: "Ualá",
        description:
          "Soluciones de datos end-to-end: relevamiento con stakeholders, ETLs en Redshift y Qlik, " +
          "y dashboards en Qlik y Power BI. Proyectos de conversión de campañas, lanzamiento de FCI y " +
          "dólar MEP, rentabilidad de clientes y cartera de créditos.",
        current: false,
      },
      {
        period: "2019 — 2020",
        role: "BI Analyst",
        company: "Data IQ (Qlik Master Reseller)",
        description:
          "Desarrollo de tableros en QlikSense y QlikView de punta a punta para clientes como " +
          "OSDE, Loma Negra, Western Union y Banco Ciudad. Buddy de nuevos analistas.",
        current: false,
      },
      {
        period: "2018 — 2019",
        role: "Pasante RPA",
        company: "IBM",
        description:
          "Desarrollo de robots para automatizar procesos repetitivos en web, SAP y Excel para " +
          "cuentas internas de SSA en la región (WinAutomation, Automation Anywhere).",
        current: false,
      },
    ],
  },

  /* -------------------------------------------------------------------------
     5. EDUCACIÓN
     ---------------------------------------------------------------------- */
  education: {
    title: "Educación",
    items: [
      {
        period: "2022 — 2023",
        degree: "Maestría en Management & Analytics",
        school: "Universidad Torcuato Di Tella (UTDT)",
      },
      {
        period: "2014 — 2019",
        degree: "Licenciatura en Sistemas de Información",
        school: "Universidad de Buenos Aires (UBA)",
      },
    ],
    // Chips que aparecen debajo de educación
    languages: {
      label: "Idiomas",
      items: ["Español — Nativo", "Inglés — Professional Working (B2 FCE)"],
    },
    certifications: {
      label: "Certificaciones",
      items: ["Data Developer", "Data Science", "B2 First Certificate (FCE)"],
    },
  },

  /* -------------------------------------------------------------------------
     INTERESES / HOBBIES   ← EDITÁ con lo tuyo de verdad 🙂
     (cambiá los íconos y textos; agregá o sacá los que quieras)
     ---------------------------------------------------------------------- */
  interests: {
    title: "Fuera del trabajo",
    intro: "Un poco de lo que me gusta cuando no estoy construyendo.",
    items: [
      { icon: "⚪🔴", label: "Hincha de River", text: "De River hasta la médula. Los domingos son sagrados." },
      { icon: "🎾", label: "Pádel", text: "Mi cable a tierra: cancha, amigos y un poco de competencia." },
      { icon: "📈", label: "Mercados", text: "Sigo el mundo de las inversiones más allá de Vesty." },
      { icon: "🤖", label: "Trastear con IA", text: "Experimentar con modelos y side-projects nuevos." },
    ],
  },

  /* -------------------------------------------------------------------------
     6. SKILLS / EXPERTISE
     ---------------------------------------------------------------------- */
  skills: {
    title: "Skills & expertise",
    groups: [
      {
        category: "IA & LLMs",
        items: [
          { name: "OpenAI API · LangChain · LangGraph", level: 92 },
          { name: "RAG & embeddings (pgvector)", level: 88 },
          { name: "Eval & monitoreo (Langfuse)", level: 82 },
        ],
      },
      {
        category: "Software & Cloud",
        items: [
          { name: "Python", level: 92 },
          { name: "Google Cloud (BigQuery, Cloud Run…)", level: 88 },
          { name: "APIs REST · Arquitecturas event-driven", level: 85 },
          { name: "Docker · Terraform · CI/CD", level: 80 },
        ],
      },
      {
        category: "Data & Analytics",
        items: [
          { name: "SQL · PostgreSQL", level: 90 },
          { name: "dbt · Airflow", level: 86 },
          { name: "Power BI · Looker · Qlik", level: 84 },
        ],
      },
    ],
  },

  /* -------------------------------------------------------------------------
     STACK TECNOLÓGICO (se muestra debajo de Skills)
     ---------------------------------------------------------------------- */
  stack: {
    title: "Mi stack",
    groups: [
      { category: "Lenguajes", items: ["Python", "SQL"] },
      { category: "IA & LLMs", items: ["OpenAI API", "LangChain", "LangGraph", "RAG", "Langfuse", "pgvector"] },
      { category: "Cloud (GCP)", items: ["BigQuery", "Cloud Run", "Cloud SQL", "Cloud Functions", "Pub/Sub", "Composer", "Storage", "IAM"] },
      { category: "Data & ETL", items: ["dbt", "Airflow", "PostgreSQL", "Redshift"] },
      { category: "BI", items: ["Power BI", "Looker", "QlikSense", "QlikView"] },
      { category: "DevOps", items: ["Docker", "Terraform", "Terragrunt", "GitHub Actions", "CI/CD", "Git"] },
    ],
  },

  /* -------------------------------------------------------------------------
     CONTENIDO / CHARLAS / POSTS   ← EDITÁ con tus links reales
     (cada item: type = etiqueta, title, date opcional, href = link)
     ---------------------------------------------------------------------- */
  content: {
    title: "Contenido & charlas",
    intro: "Escribo y comparto sobre IA, producto e inversiones.",
    items: [
      { type: "Post", title: "¿No sabés en qué acción invertir?", date: "", href: "https://www.linkedin.com/posts/matias-federico-granzella_no-sab%C3%A9s-en-qu%C3%A9-acci%C3%B3n-invertir-no-sab%C3%A9s-activity-7468683807051792385-kYv3" },
      { type: "Charla", title: "DataTalk en Ualá", date: "", href: "https://www.linkedin.com/posts/pablo-a-guzzi_datatalk-uali-data-ugcPost-7406729397979922433-m8Z-" },
      { type: "Artículo", title: "Así nace Vesty", date: "", href: "https://vestyapp.io/blog/asi-nace-vesty" },
    ],
    // Botón al final de la sección
    cta: { label: "Ver más en LinkedIn", href: "https://www.linkedin.com/in/matias-federico-granzella/recent-activity/all/" },
  },

  /* -------------------------------------------------------------------------
     7. CONTACTO / REDES
     ---------------------------------------------------------------------- */
  contact: {
    title: "Conectemos",
    text: "¿Tenés una idea, una propuesta o querés hablar de IA? Hablemos por LinkedIn o X.",
    // Sin mail público (para evitar spam). Dejá email en "" y la web no lo muestra.
    email: "",
    // CTA principal de contacto (en vez del mail). Apunta a tu LinkedIn.
    cta: { label: "Conectá en LinkedIn", href: "https://www.linkedin.com/in/matias-federico-granzella" },
    socials: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/matias-federico-granzella", icon: "in" },
      { label: "@mati_granzella", href: "https://twitter.com/mati_granzella", icon: "𝕏" },
    ],
  },

  // Color de acento de toda la web (probá: "#0F9D6F" verde, "#4F46E5" violeta, "#E11D48" rojo)
  accent: "#0F9D6F",
};
