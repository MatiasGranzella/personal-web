/* ============================================================================
   TU CONTENIDO — EDITÁ SOLO ESTE ARCHIVO
   ----------------------------------------------------------------------------
   Cambiá los textos, links y datos de abajo y la web se actualiza sola.
   PROFILE = versión en español (la principal).
   PROFILE_EN (al final) = solo los textos en inglés; lo que no esté ahí
   se toma de la versión en español (links, stack, colores, etc.).
   ========================================================================== */

window.PROFILE = {

  /* -------------------------------------------------------------------------
     DATOS BÁSICOS
     ---------------------------------------------------------------------- */
  meta: {
    siteTitle: "Matías Granzella — AI Lead y desarrollador Full Stack",
    siteDescription: "AI Lead en Ualá y desarrollador Full Stack. Construyo sistemas a medida con IA en producción: web, backend, datos y LLMs. Founder de Vesty y Millo Manager.",
  },

  // Textos fijos de la interfaz (menú, botones, etiquetas)
  ui: {
    lang: "es",
    switchTo: "EN",
    switchLabel: "Ver el sitio en inglés",
    skip: "Saltar al contenido",
    nav: { services: "Servicios", projects: "Proyectos", experience: "Experiencia", content: "Contenido" },
    navCta: "Hablemos",
    themeToDark: "Cambiar a modo oscuro",
    themeToLight: "Cambiar a modo claro",
    current: "Actual",
    roles: "roles",
    stackAria: "Tecnologías con las que trabajo",
    vestyScoreHint: "Valuación · crecimiento · salud",
    vestyAria: "Pantalla de ejemplo de la app Vesty",
    milloAria: "Carta de jugador en Millo Manager",
  },

  // Link principal de contacto (lo usan la nav, el hero y el cierre)
  linkedin: "https://www.linkedin.com/in/matias-federico-granzella",

  /* -------------------------------------------------------------------------
     HERO
     ---------------------------------------------------------------------- */
  hero: {
    name: "Matías Granzella",
    handle: "matiasgranzella",
    // Título principal. Usá \n para cortar la línea; la última línea va en verde.
    title: "Hola, soy\nMatías Granzella.",
    subtitle:
      "AI Lead en Ualá y desarrollador Full Stack. Hace más de 8 años construyo sistemas " +
      "a medida de punta a punta: web, backend, datos e IA. Founder de Vesty y Millo Manager.",
    photo: "assets/foto_perfil.jpeg",
    ctas: [
      { label: "Conectemos", href: "linkedin", primary: true },
      { label: "Ver experiencia", href: "#experiencia", primary: false },
    ],
    // Línea de estado debajo de los botones. Dejala en "" para ocultarla.
    availability: "",
    location: "",
  },

  /* -------------------------------------------------------------------------
     STACK (cintas al final de la página)
     items: herramientas; "logo" = archivo en assets/stack/ (sin logo = solo texto)
     capabilities: lo que sé hacer, en la segunda cinta
     ---------------------------------------------------------------------- */
  stack: {
    label: "Herramientas y capacidades",
    items: [
      { name: "Next.js", logo: "nextdotjs" },
      { name: "React", logo: "react" },
      { name: "Python", logo: "python" },
      { name: "FastAPI", logo: "fastapi" },
      { name: "Go", logo: "go", logoOnly: true },
      { name: "OpenAI", logo: "openai" },
      { name: "LangChain", logo: "langchain" },
      { name: "LangGraph", logo: "langgraph" },
      { name: "Langfuse" },
      { name: "PostgreSQL", logo: "postgresql" },
      { name: "pgvector" },
      { name: "Google Cloud", logo: "googlecloud" },
      { name: "BigQuery", logo: "googlebigquery" },
      { name: "Pub/Sub", logo: "googlepubsub" },
      { name: "dbt", logo: "dbt" },
      { name: "Airflow", logo: "apacheairflow" },
      { name: "Terraform", logo: "terraform" },
      { name: "Docker", logo: "docker" },
      { name: "GitHub Actions", logo: "githubactions" },
      { name: "Git", logo: "git" },
      { name: "Supabase", logo: "supabase" },
      { name: "Vercel", logo: "vercel" },
    ],
    capabilities: [
      "Desarrollo Full Stack", "Sistemas a medida", "Diseño de sistemas", "Arquitecturas web",
      "APIs REST", "Arquitecturas event-driven",
      "Agentes con LLMs", "RAG y embeddings", "Evaluación y monitoreo de LLMs",
      "Infraestructura como código", "CI/CD", "Modelado de datos", "Pipelines ETL / ELT",
      "Optimización de costos cloud",
    ],
  },

  /* -------------------------------------------------------------------------
     SERVICIOS (freelance). "proof" = algo real que ya hiciste.
     ---------------------------------------------------------------------- */
  services: {
    title: "IA en producción, no en demos.",
    intro:
      "Desarrollo sistemas a medida de punta a punta, del frontend a la IA, y los llevo " +
      "a producción, donde se usan y se miden.",
    items: [
      {
        title: "Desarrollo Full Stack a medida",
        text:
          "Aplicaciones web, backends y APIs, bases de datos y deploy. De la idea a un " +
          "producto que la gente usa, con IA integrada donde suma de verdad.",
        proofValue: "2",
        proof: "productos propios en producción, hechos end-to-end: Vesty y Millo Manager.",
        tags: ["Next.js", "React", "FastAPI", "Go"],
      },
      {
        title: "Asistentes y chatbots con LLMs",
        text:
          "Atención al cliente, cobranzas, soporte interno. Diseño el flujo, integro el " +
          "modelo con tus datos (RAG), y dejo evaluación y monitoreo andando desde el día uno.",
        proofValue: "81%",
        proof: "de accuracy clasificando consultas en el chatbot de CX de Ualá.",
        tags: ["OpenAI", "LangGraph", "RAG", "Langfuse"],
      },
      {
        title: "Plataformas y pipelines de datos",
        text:
          "Modelado con dbt, orquestación con Airflow, infraestructura como código y " +
          "arquitecturas event-driven en Google Cloud. Datos confiables para que la IA tenga de qué comer.",
        proofValue: "8,5%",
        proof: "de ahorro sobre la facturación total de GCP en Ualá.",
        tags: ["dbt", "Airflow", "Terraform", "GCP"],
      },
    ],
  },

  /* -------------------------------------------------------------------------
     PROYECTOS PROPIOS — cada uno es una tarjeta con su propia identidad.
     kind: "vesty" (pantalla de la app) | "millo" (carta de jugador)
     ---------------------------------------------------------------------- */
  projects: {
    title: "Proyectos propios",
    intro: "Productos que diseño, construyo y mantengo en producción, de punta a punta.",
    items: [
  {
    kind: "vesty",
    title: "Vesty",
    logo: "assets/vesty-logo.png",
    pitch: "Tu portfolio, unificado.",
    description:
      "Tu plata está en 5 lugares. Tu visión, no. Vesty reúne brokers, bancos y exchanges " +
      "en una sola pantalla, en castellano y sin jerga de banco.",
    problem: {
      before: "5 apps abiertas, 1 Excel, 0 claridad.",
      after: "Una vista. Tu plata. Junta.",
    },
    // icon: import | currency | chart | assistant
    features: [
      { icon: "import", title: "Importación con IA", text: "Subís el extracto del broker y la IA mapea los campos sola." },
      { icon: "currency", title: "Multimoneda real", text: "Pesos y dólares: oficial, blue, CCL y MEP." },
      { icon: "chart", title: "Rendimiento en USD", text: "Con el tipo de cambio histórico de cada operación." },
      { icon: "assistant", title: "Finny", text: "Un asistente que te avisa lo que importa de tu portfolio." },
    ],
    trust: "No es un broker y no mueve tu dinero: solo te lo muestra claro.",
    mockup: {
      caption: "Pantalla ilustrativa · datos de ejemplo",
      greeting: "Hola, Matías",
      balanceLabel: "Tu portfolio",
      balanceValue: "USD 12.480",
      change: "+8,2% en USD",
      score: 82,
      scoreLabel: "Vesty Score",
      holdings: [
        { name: "CEDEARs", value: "USD 5.210", pct: 42 },
        { name: "Bonos", value: "USD 3.990", pct: 32 },
        { name: "Cripto", value: "USD 1.870", pct: 15 },
      ],
    },
    cta: { label: "Conocer Vesty", href: "https://vestyapp.io" },
    secondary: { label: "Así nace Vesty", href: "https://vestyapp.io/blog/asi-nace-vesty" },
  },
  {
    kind: "millo",
    title: "Millo Manager",
    logo: "assets/millo-logo.png",
    pitch: "La historia de River, ahora se juega.",
    description:
      "Un football manager gratis y sin descargas dedicado a River Plate. Coleccionás a los " +
      "ídolos de todas las épocas, armás tu mejor XI y dirigís al club en la liga y las copas.",
    // icon: cards | formation | trophy | whistle
    features: [
      { icon: "cards", title: "+550 cartas", text: "Ídolos de toda la historia del club, en cinco rarezas." },
      { icon: "formation", title: "Tu mejor XI", text: "8 formaciones y química por posición." },
      { icon: "trophy", title: "8 competiciones", text: "Liga, Copa Argentina, Libertadores, Mundial de Clubes y más." },
      { icon: "whistle", title: "Partidos en vivo", text: "Cambios, penales y ajustes tácticos durante el partido." },
    ],
    trust: "Proyecto independiente hecho por hinchas. Gratis y sin compras dentro del juego.",
    mockup: {
      caption: "Carta del juego",
      rating: 93,
      position: "MP · DC",
      rarity: "Leyenda",
      name: "Francescoli",
      photo: "assets/millo-francescoli.jpg",
      years: "’83 — ’97",
      stats: [["RIT", 84], ["TIR", 89], ["PAS", 90], ["REG", 93], ["DEF", 42], ["FÍS", 76]],
    },
    cta: { label: "Jugar Millo Manager", href: "https://millomanager.com.ar" },
  },
    ],
  },

  /* -------------------------------------------------------------------------
     EXPERIENCIA (los roles seguidos de la misma empresa se agrupan solos)
     ---------------------------------------------------------------------- */
  experience: {
    title: "Experiencia",
    about:
      "Licenciado en Sistemas (UBA) con un Magíster en Management & Analytics (Di Tella). " +
      "Pasé por Business Intelligence, Analytics Engineering y Data Platform antes de " +
      "enfocarme 100% en IA, así que construyo el sistema entero, no solo el prompt.",
    items: [
      {
        period: "2026 — Hoy",
        role: "AI Lead",
        company: "Ualá",
        description:
          "Lidero el desarrollo de soluciones de IA generativa para procesos y áreas críticas del negocio.",
        current: true,
      },
      {
        period: "2024 — 2026",
        role: "Sr AI Engineer",
        company: "Ualá",
        description:
          "Chatbot de Customer Experience con LLM + RAG que clasifica consultas con 81% de accuracy, " +
          "y un chatbot de Cobranzas que automatiza gestiones y deriva casos sensibles a un humano.",
      },
      {
        period: "2023 — 2024",
        role: "Sr Data Platform Engineer",
        company: "Ualá",
        description:
          "IaC con Terraform/Terragrunt y CI/CD, generador automático de features, ETLs " +
          "event-driven con Pub/Sub y un análisis de costos de GCP que ahorró 8,5% de la facturación.",
      },
      {
        period: "2022 — 2023",
        role: "Sr Analytics Engineer",
        company: "Ualá",
        description:
          "Lideré la adopción de dbt para BI: migración desde Qlik, Pentaho y Power BI, " +
          "buenas prácticas, tests y orquestación con Airflow en Google Cloud.",
      },
      {
        period: "2020 — 2021",
        role: "Ssr BI Analyst",
        company: "Ualá",
        description:
          "ETLs en Redshift y Qlik y dashboards para el lanzamiento de FCI y dólar MEP, " +
          "rentabilidad de clientes y cartera de créditos.",
      },
      {
        period: "2019 — 2020",
        role: "BI Analyst",
        company: "Data IQ",
        description:
          "Tableros QlikSense y QlikView de punta a punta para OSDE, Loma Negra, Western Union y Banco Ciudad.",
      },
      {
        period: "2018 — 2019",
        role: "Pasante RPA",
        company: "IBM",
        description: "Robots para automatizar procesos en web, SAP y Excel (WinAutomation, Automation Anywhere).",
      },
    ],
  },

  education: {
    title: "Formación",
    items: [
      { period: "2022 — 2023", degree: "Maestría en Management & Analytics", school: "Universidad Torcuato Di Tella" },
      { period: "2014 — 2019", degree: "Licenciatura en Sistemas de Información", school: "Universidad de Buenos Aires" },
    ],
    extra: [
      { label: "Idiomas", text: "Español nativo · Inglés profesional (B2 First)" },
      { label: "Certificaciones", text: "Data Developer · Data Science · B2 First Certificate" },
    ],
  },

  /* -------------------------------------------------------------------------
     CONTENIDO / CHARLAS / POSTS
     ---------------------------------------------------------------------- */
  content: {
    title: "Escribo y hablo sobre IA",
    items: [
      { type: "Charla", title: "DataTalk en Ualá", href: "https://www.linkedin.com/posts/pablo-a-guzzi_datatalk-uali-data-ugcPost-7406729397979922433-m8Z-" },
      { type: "Artículo", title: "Así nace Vesty", href: "https://vestyapp.io/blog/asi-nace-vesty" },
      { type: "Post", title: "¿No sabés en qué acción invertir?", href: "https://www.linkedin.com/posts/matias-federico-granzella_no-sab%C3%A9s-en-qu%C3%A9-acci%C3%B3n-invertir-no-sab%C3%A9s-activity-7468683807051792385-kYv3" },
    ],
    cta: { label: "Más en LinkedIn", href: "https://www.linkedin.com/in/matias-federico-granzella/recent-activity/all/" },
  },

  /* -------------------------------------------------------------------------
     CIERRE / CONTACTO
     ---------------------------------------------------------------------- */
  contact: {
    title: "¿Tenés un proyecto de IA en mente?",
    text: "Una conversación de 30 minutos, sin compromiso. Escribime por LinkedIn y lo vemos.",
    cta: { label: "Escribime por LinkedIn", href: "linkedin" },
    socials: [
      { label: "@mati_granzella", href: "https://twitter.com/mati_granzella", icon: "x" },
    ],
    // Una línea humana al pie del cierre. Dejala en "" para ocultarla.
    personal: "",
  },

  /* -------------------------------------------------------------------------
     FOOTER
     ---------------------------------------------------------------------- */
  footer: {
    made: "Hecho en Buenos Aires",
    cv: { label: "Descargar CV", href: "assets/cv-matias-granzella-es.pdf" },
    top: "Volver arriba",
  },

  // Color de marca en modo claro (botones, detalles, cierre). Verde bosque.
  accent: "#1F5F4A",
};

/* ============================================================================
   ENGLISH VERSION — solo textos. Mismo orden que arriba: cada lista se
   traduce posición por posición.
   ========================================================================== */
window.PROFILE_EN = {
  meta: {
    siteTitle: "Matías Granzella — AI Lead and Full Stack developer",
    siteDescription: "AI Lead at Ualá and Full Stack developer. I build custom systems with AI in production: web, backend, data and LLMs. Founder of Vesty and Millo Manager.",
  },
  ui: {
    lang: "en",
    switchTo: "ES",
    switchLabel: "Ver el sitio en español",
    skip: "Skip to content",
    nav: { services: "Services", projects: "Projects", experience: "Experience", content: "Writing" },
    navCta: "Let’s talk",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    current: "Current",
    roles: "roles",
    stackAria: "Technologies I work with",
    vestyScoreHint: "Valuation · growth · health",
    vestyAria: "Example screen of the Vesty app",
    milloAria: "Player card in Millo Manager",
  },
  hero: {
    title: "Hi, I’m\nMatías Granzella.",
    subtitle:
      "AI Lead at Ualá and Full Stack developer. For 8+ years I’ve built custom systems " +
      "end to end: web, backend, data and AI. Founder of Vesty and Millo Manager.",
    ctas: [
      { label: "Let’s connect" },
      { label: "See experience" },
    ],
  },
  stack: {
    label: "Tools and capabilities",
    capabilities: [
      "Full Stack development", "Custom systems", "System design", "Web architecture",
      "REST APIs", "Event-driven architecture",
      "LLM agents", "RAG and embeddings", "LLM evaluation and monitoring",
      "Infrastructure as code", "CI/CD", "Data modeling", "ETL / ELT pipelines",
      "Cloud cost optimization",
    ],
  },
  services: {
    title: "AI in production, not in demos.",
    intro:
      "I build custom systems end to end, from the frontend to the AI, and take them " +
      "to production, where they get used and measured.",
    items: [
      {
        title: "Custom Full Stack development",
        text:
          "Web applications, backends and APIs, databases and deployment. From idea to a " +
          "product people use, with AI built in where it actually helps.",
        proof: "products of my own in production, built end-to-end: Vesty and Millo Manager.",
      },
      {
        title: "LLM assistants and chatbots",
        text:
          "Customer support, collections, internal help desks. I design the flow, connect the " +
          "model to your data (RAG), and ship evaluation and monitoring from day one.",
        proof: "accuracy classifying queries in Ualá’s customer-experience chatbot.",
      },
      {
        title: "Data platforms and pipelines",
        text:
          "Modeling with dbt, orchestration with Airflow, infrastructure as code and " +
          "event-driven architectures on Google Cloud. Reliable data so the AI has something to work with.",
        proofValue: "8.5%",
        proof: "savings on Ualá’s total GCP bill.",
      },
    ],
  },
  projects: {
    title: "My own products",
    intro: "Products I design, build and run in production, end to end.",
    items: [
      {
        pitch: "Your portfolio, in one place.",
        description:
          "Your money is in 5 places. Your view of it isn’t. Vesty brings brokers, banks and " +
          "exchanges into a single screen, in plain Spanish, for Argentine investors.",
        problem: {
          before: "5 open apps, 1 spreadsheet, 0 clarity.",
          after: "One view. Your money. Together.",
        },
        features: [
          { title: "AI import", text: "Upload your broker statement and the AI maps the fields." },
          { title: "Real multi-currency", text: "Pesos and dollars: official, blue, CCL and MEP rates." },
          { title: "Returns in USD", text: "Using the historical exchange rate of each trade." },
          { title: "Finny", text: "An assistant that flags what matters in your portfolio." },
        ],
        trust: "Not a broker and never moves your money: it just shows it clearly.",
        mockup: {
          caption: "Illustrative screen · sample data",
          greeting: "Hi, Matías",
          balanceLabel: "Your portfolio",
          balanceValue: "USD 12,480",
          change: "+8.2% in USD",
          holdings: [
            { name: "CEDEARs", value: "USD 5,210" },
            { name: "Bonds", value: "USD 3,990" },
            { name: "Crypto", value: "USD 1,870" },
          ],
        },
        cta: { label: "Visit Vesty" },
        secondary: { label: "How Vesty started" },
      },
      {
        pitch: "River Plate’s history, now playable.",
        description:
          "A free, no-download football manager dedicated to River Plate. Collect legends " +
          "from every era, build your best XI and lead the club through the league and cups.",
        features: [
          { title: "550+ cards", text: "Legends from the club’s entire history, in five rarities." },
          { title: "Your best XI", text: "8 formations and positional chemistry." },
          { title: "8 competitions", text: "League, Copa Argentina, Libertadores, Club World Cup and more." },
          { title: "Live matches", text: "Subs, penalties and tactical changes during the game." },
        ],
        trust: "An independent project made by fans. Free, with no in-game purchases.",
        mockup: { caption: "In-game card", rarity: "Legend" },
        cta: { label: "Play Millo Manager" },
      },
    ],
  },
  experience: {
    title: "Experience",
    about:
      "BSc in Information Systems (University of Buenos Aires) and a Master’s in Management & " +
      "Analytics (Universidad Torcuato Di Tella). I went through Business Intelligence, Analytics " +
      "Engineering and Data Platform before focusing fully on AI, so I build the whole system, not just the prompt.",
    items: [
      {
        period: "2026 — Now",
        description: "I lead the development of Generative AI solutions for critical business processes and areas.",
      },
      {
        description:
          "A customer-experience chatbot with LLM + RAG that classifies queries with 81% accuracy, " +
          "and a collections chatbot that automates cases and hands sensitive ones to a human.",
      },
      {
        description:
          "IaC with Terraform/Terragrunt and CI/CD, an automatic feature generator, event-driven " +
          "ETLs with Pub/Sub, and a GCP cost analysis that saved 8.5% of the bill.",
      },
      {
        description:
          "Led the adoption of dbt for BI: migration from Qlik, Pentaho and Power BI, best " +
          "practices, tests and orchestration with Airflow on Google Cloud.",
      },
      {
        description:
          "ETLs on Redshift and Qlik, and dashboards for the launch of mutual funds and MEP dollar, " +
          "customer profitability and the loan portfolio.",
      },
      {
        description:
          "End-to-end QlikSense and QlikView dashboards for OSDE, Loma Negra, Western Union and Banco Ciudad.",
      },
      {
        role: "RPA Intern",
        description: "Bots automating processes across web, SAP and Excel (WinAutomation, Automation Anywhere).",
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      { degree: "Master’s in Management & Analytics", school: "Universidad Torcuato Di Tella" },
      { degree: "BSc in Information Systems", school: "University of Buenos Aires" },
    ],
    extra: [
      { label: "Languages", text: "Spanish (native) · English, professional working (B2 First)" },
      { label: "Certifications", text: "Data Developer · Data Science · B2 First Certificate" },
    ],
  },
  content: {
    title: "I write and talk about AI",
    items: [
      { type: "Talk", title: "DataTalk at Ualá" },
      { type: "Article", title: "How Vesty started (Spanish)" },
      { type: "Post", title: "Not sure which stock to buy? (Spanish)" },
    ],
    cta: { label: "More on LinkedIn" },
  },
  footer: {
    made: "Made in Buenos Aires",
    cv: { label: "Download CV", href: "assets/cv-matias-granzella-en.pdf" },
    top: "Back to top",
  },
  contact: {
    title: "Got an AI project in mind?",
    text: "A 30-minute conversation, no strings attached. Message me on LinkedIn and let’s see.",
    cta: { label: "Message me on LinkedIn" },
  },
};
