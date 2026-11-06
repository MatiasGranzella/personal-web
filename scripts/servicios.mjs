/* ============================================================================
   PÁGINAS DE SERVICIOS — el contenido de cada página, en español y en inglés.
   Editás acá y corrés `node scripts/build.mjs`: genera el HTML estático
   (servicios/, en/services/, en/index.html y sitemap.xml).

   Solo cosas reales: nada de testimonios, precios ni casos inventados.
   ========================================================================== */

export const SITE = "https://matiasgranzella.com";
export const EMAIL = "hola@matiasgranzella.com";
export const LINKEDIN = "https://www.linkedin.com/in/matias-federico-granzella";

// Textos comunes de la plantilla
export const UI = {
  es: {
    home: "/",
    nav: [["Servicios", "/#servicios"], ["Proyectos", "/#proyectos"], ["Experiencia", "/#experiencia"]],
    navCta: "Escribime",
    langSwitch: "EN",
    langLabel: "Read in English",
    themeToDark: "Cambiar a modo oscuro",
    breadcrumb: "Servicios",
    mailCta: "Escribime",
    linkedinCta: "LinkedIn",
    useCasesTitle: "Para qué sirve",
    proofTitle: "Lo que ya hice",
    processTitle: "Cómo trabajo",
    stackTitle: "Con qué lo armo",
    faqTitle: "Preguntas frecuentes",
    othersTitle: "Otros servicios",
    closingTitle: "¿Lo charlamos?",
    closingText: "Contame qué necesitás y en 30 minutos vemos si te puedo ayudar y cómo.",
    footerMade: "Hecho en Buenos Aires",
    skip: "Saltar al contenido",
  },
  en: {
    home: "/en/",
    nav: [["Services", "/en/#servicios"], ["Projects", "/en/#proyectos"], ["Experience", "/en/#experiencia"]],
    navCta: "Email me",
    langSwitch: "ES",
    langLabel: "Leer en español",
    themeToDark: "Switch to dark mode",
    breadcrumb: "Services",
    mailCta: "Email me",
    linkedinCta: "LinkedIn",
    useCasesTitle: "What it’s for",
    proofTitle: "What I’ve already built",
    processTitle: "How I work",
    stackTitle: "What I build it with",
    faqTitle: "FAQ",
    othersTitle: "Other services",
    closingTitle: "Shall we talk?",
    closingText: "Tell me what you need and in 30 minutes we’ll see whether and how I can help.",
    footerMade: "Made in Buenos Aires",
    skip: "Skip to content",
  },
};

// Cada servicio: `es` y `en` con la misma forma. `slug` arma la URL.
export const SERVICES = [
  {
    id: "chatbots",
    es: {
      slug: "/servicios/chatbots-con-ia/",
      name: "Chatbots e integraciones con IA",
      title: "Chatbots con IA para empresas · Desarrollador freelance | Matías Granzella",
      description:
        "Desarrollo chatbots y asistentes con IA conectados a tus datos y sistemas: atención al cliente, cobranzas y procesos internos. AI Lead en Ualá. Buenos Aires y remoto.",
      h1: "Chatbots con IA para tu empresa",
      lede:
        "Armo chatbots y asistentes con LLMs conectados a tus datos y a tus sistemas, para atender a tus clientes o resolver procesos internos. " +
        "Es lo que hago todos los días como AI Lead en Ualá.",
      useCases: [
        ["Atención al cliente", "Entiende la consulta, la clasifica y responde con la información de tu negocio. Lo que no puede resolver se lo pasa a una persona, con el caso ya resumido."],
        ["Cobranzas y gestiones", "Conversaciones que siguen un proceso: recordar un vencimiento, ofrecer un plan de pago, registrar lo que acordó el cliente. Los casos delicados van a tu equipo."],
        ["Asistentes internos", "Un asistente que busca en tu documentación, tus planillas o tu base de datos y le responde a tu equipo en segundos."],
        ["Automatizaciones con IA", "Leer mails, PDFs o extractos y cargar los datos donde van. En Vesty, la IA lee el extracto de cualquier broker y lo importa sola."],
      ],
      proof: [
        ["81%", "de accuracy clasificando consultas por producto y problema en el chatbot de atención al cliente de Ualá, hecho con un LLM y RAG."],
        ["Cobranzas", "En Ualá también desarrollé el chatbot de cobranzas del área de Créditos: resuelve solo la mayoría de las gestiones y deriva los casos críticos a una persona."],
        ["Vesty", "En mi propio producto, la IA importa los extractos de brokers y bancos y un asistente analiza la cartera de cada usuario."],
      ],
      process: [
        ["Charla inicial", "Qué consultas o tareas querés automatizar, con qué datos y en qué canal: tu web, WhatsApp o una herramienta interna."],
        ["Prototipo con tus datos", "Una primera versión con casos reales de tu negocio, para ver rápido si responde bien."],
        ["Evaluación antes de salir", "Armamos un set de preguntas con la respuesta esperada y medimos cuántas acierta. Si no llega al nivel que acordamos, no sale."],
        ["Producción y monitoreo", "Lo conecto a tus sistemas y dejo métricas y trazas para ver qué pregunta la gente, qué responde el bot y dónde falla."],
      ],
      stack: ["OpenAI API", "LangChain", "LangGraph", "RAG", "pgvector", "Langfuse", "Python", "FastAPI"],
      faq: [
        ["¿Puede funcionar por WhatsApp?", "Sí. El mismo bot puede atender en WhatsApp, en tu web o dentro de una herramienta interna; el canal se define en la primera charla."],
        ["¿Qué pasa si el bot no sabe la respuesta?", "Lo armo para que lo diga y derive la conversación a una persona. Que invente una respuesta es justo lo que se mide y se corrige en la evaluación."],
        ["¿Qué pasa con los datos de mis clientes?", "Uso las APIs de los proveedores de modelos, que no usan esos datos para entrenar. Definimos juntos qué datos puede ver el bot y qué no."],
        ["¿Cuánto cuesta?", "Depende de los canales, las integraciones y la cantidad de casos que tenga que resolver. Después de la primera charla te paso un presupuesto."],
      ],
    },
    en: {
      slug: "/en/services/ai-chatbots/",
      name: "AI chatbots and integrations",
      title: "AI Chatbot Development for Businesses · Freelance | Matías Granzella",
      description:
        "I build LLM chatbots and assistants connected to your data and systems: customer support, collections and internal workflows. AI Lead at Ualá. Remote from Argentina.",
      h1: "AI chatbots for your business",
      lede:
        "I build LLM chatbots and assistants connected to your data and your systems, to serve your customers or handle internal workflows. " +
        "It’s what I do every day as AI Lead at Ualá, an Argentine fintech.",
      useCases: [
        ["Customer support", "It understands the question, classifies it and answers with your business’s information. Whatever it can’t solve goes to a person, already summarized."],
        ["Collections and account workflows", "Conversations that follow a process: payment reminders, payment plans, recording what the customer agreed to. Sensitive cases go to your team."],
        ["Internal assistants", "An assistant that searches your docs, spreadsheets or database and answers your team in seconds."],
        ["AI automations", "Reading emails, PDFs or statements and loading the data where it belongs. In Vesty, AI reads any broker’s statement and imports it on its own."],
      ],
      proof: [
        ["81%", "accuracy classifying queries by product and issue in Ualá’s customer-support chatbot, built with an LLM and RAG."],
        ["Collections", "At Ualá I also built the collections chatbot for the Lending team: it resolves most cases on its own and hands critical ones to a person."],
        ["Vesty", "In my own product, AI imports statements from brokers and banks, and an assistant analyzes each user’s portfolio."],
      ],
      process: [
        ["First call", "Which questions or tasks you want to automate, with what data and on which channel: your website, WhatsApp or an internal tool."],
        ["Prototype with your data", "A first version tested on real cases from your business, to see quickly whether it answers well."],
        ["Evaluation before launch", "We build a set of questions with expected answers and measure how many it gets right. If it doesn’t reach the agreed bar, it doesn’t ship."],
        ["Production and monitoring", "I connect it to your systems and set up metrics and traces to see what people ask, what the bot answers and where it fails."],
      ],
      stack: ["OpenAI API", "LangChain", "LangGraph", "RAG", "pgvector", "Langfuse", "Python", "FastAPI"],
      faq: [
        ["Can it work on WhatsApp?", "Yes. The same bot can serve customers on WhatsApp, on your website or inside an internal tool; we pick the channel on the first call."],
        ["What happens when the bot doesn’t know the answer?", "I build it to say so and hand the conversation to a person. Making up answers is exactly what the evaluation measures and fixes."],
        ["What about my customers’ data?", "I use the model providers’ APIs, which don’t train on that data. We decide together what the bot can and can’t see."],
        ["Do you work with clients outside Argentina?", "Yes, remotely and in English. I’m based in Buenos Aires (GMT-3), which overlaps well with US and European working hours."],
        ["How much does it cost?", "It depends on the channels, integrations and number of cases it has to handle. After the first call I send you a quote."],
      ],
    },
  },
  {
    id: "sistemas",
    es: {
      slug: "/servicios/sistemas-a-medida/",
      name: "Sistemas a medida",
      title: "Desarrollo de software a medida · Programador freelance | Matías Granzella",
      description:
        "Desarrollo sistemas web a medida: frontend, backend, base de datos y deploy, pensados para cómo trabaja tu negocio. Next.js, Python y Go. Buenos Aires y remoto.",
      h1: "Sistemas a medida para tu negocio",
      lede:
        "Para cuando la planilla o la herramienta genérica ya no alcanzan. Armo el sistema entero, con frontend, backend, base de datos y deploy, " +
        "pensado para cómo trabaja tu negocio.",
      useCases: [
        ["Paneles y backoffice", "Una herramienta interna para cargar, buscar y controlar lo que hoy vive en planillas sueltas o en mails."],
        ["Portales y apps web", "Una app con login para tus clientes o tu equipo: pedidos, turnos, seguimiento, reportes."],
        ["Integraciones", "Hacer que tus sistemas se hablen entre sí por APIs, para no cargar lo mismo dos veces."],
        ["Automatización de procesos", "Tareas que hoy se hacen a mano todos los días, resueltas por un proceso que corre solo y avisa si algo falla."],
      ],
      proof: [
        ["Vesty", "Mi app web que reúne brokers, bancos y exchanges en una sola pantalla: multimoneda real, rendimiento en dólares e importación de extractos con IA. React, FastAPI y Supabase."],
        ["Gran Manager", "Un juego web de manager con más de 2.000 cartas de los 5 grandes del fútbol argentino, en producción. Next.js y Supabase, con toda la lógica del juego del lado del servidor."],
        ["Ualá", "Seis años en Ualá: infraestructura como código con Terraform, procesos event-driven con Pub/Sub y un análisis de costos de Google Cloud que ahorró 8,5% de la factura."],
      ],
      process: [
        ["Relevamiento", "Me contás cómo trabajan hoy, qué se traba y quién va a usar el sistema. De ahí sale qué conviene hacer primero."],
        ["Primera versión chica", "Definimos la versión más chica que ya te sirva, con sus pantallas y sus datos, y arrancamos por ahí."],
        ["Entregas cortas", "Cada una o dos semanas ves avances en un link de prueba y los ajustamos con tu uso real."],
        ["Puesta en producción", "Queda publicado en tu dominio y en tus cuentas, con el código y la documentación para que no dependas de mí."],
      ],
      stack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Go", "PostgreSQL", "Supabase", "Google Cloud", "Docker"],
      faq: [
        ["¿Por qué a medida y no una herramienta ya hecha?", "Si una herramienta existente te resuelve el problema, te lo voy a decir. El sistema a medida conviene cuando tu proceso es tu diferencial o cuando estás pagando varias herramientas que no se hablan."],
        ["¿Quién mantiene el sistema después?", "Puedo seguir yo con un mantenimiento mensual, o te lo dejo documentado para que lo tome otra persona."],
        ["¿Cuánto tarda?", "Depende del alcance. Por eso arrancamos con la versión más chica que ya te sirva y sumamos sobre algo que está andando."],
        ["¿Cuánto cuesta?", "Después de la charla inicial y el relevamiento te paso un presupuesto por esa primera versión."],
      ],
    },
    en: {
      slug: "/en/services/custom-software/",
      name: "Custom software",
      title: "Custom Software Development · Freelance Full Stack Developer | Matías Granzella",
      description:
        "I build custom web systems end to end: frontend, backend, database and deployment, shaped around how your business works. Next.js, Python and Go. Remote from Argentina.",
      h1: "Custom software for your business",
      lede:
        "For when spreadsheets or off-the-shelf tools stop being enough. I build the whole system, frontend, backend, database and deployment, " +
        "shaped around how your business actually works.",
      useCases: [
        ["Dashboards and back offices", "An internal tool to enter, search and track what today lives in scattered spreadsheets or emails."],
        ["Portals and web apps", "An app with login for your customers or your team: orders, bookings, tracking, reports."],
        ["Integrations", "Getting your systems to talk to each other through APIs, so nobody types the same thing twice."],
        ["Process automation", "Tasks done by hand every day, handled by a process that runs on its own and alerts you when something fails."],
      ],
      proof: [
        ["Vesty", "My web app that brings brokers, banks and exchanges into one screen: real multi-currency, returns in USD and AI statement import. React, FastAPI and Supabase."],
        ["Gran Manager", "A web football-manager game with 2,000+ cards from Argentina’s Big Five clubs, in production. Next.js and Supabase, with all game logic on the server."],
        ["Ualá", "Six years at Ualá: infrastructure as code with Terraform, event-driven pipelines with Pub/Sub and a Google Cloud cost analysis that cut the bill by 8.5%."],
      ],
      process: [
        ["Discovery", "You tell me how things work today, where they get stuck and who will use the system. That tells us what to build first."],
        ["A small first version", "We define the smallest version that is already useful, with its screens and data, and start there."],
        ["Short iterations", "Every one or two weeks you see progress on a staging link and we adjust it with real use."],
        ["Going live", "It ships on your domain and your accounts, with the code and documentation so you don’t depend on me."],
      ],
      stack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Go", "PostgreSQL", "Supabase", "Google Cloud", "Docker"],
      faq: [
        ["Why custom instead of an existing tool?", "If an existing tool solves your problem, I’ll tell you. Custom pays off when your process is what sets you apart, or when you’re paying for several tools that don’t talk to each other."],
        ["Who maintains it afterwards?", "I can keep maintaining it on a monthly basis, or hand it over documented so someone else can take it."],
        ["Do you work with clients outside Argentina?", "Yes, remotely and in English. I’m based in Buenos Aires (GMT-3), which overlaps well with US and European working hours."],
        ["How long does it take?", "It depends on scope. That’s why we start with the smallest useful version and build on something that already works."],
        ["How much does it cost?", "After the first call and discovery I send you a quote for that first version."],
      ],
    },
  },
  {
    id: "landings",
    es: {
      slug: "/servicios/landing-pages/",
      name: "Landing pages y sitios web",
      title: "Diseño y desarrollo de landing pages · Freelance | Matías Granzella",
      description:
        "Diseño y desarrollo landing pages y sitios web rápidos, pensados para el celular y para que te escriban. Con SEO local y WhatsApp. Desarrollador web freelance en Buenos Aires.",
      h1: "Landing pages y sitios web que traen consultas",
      lede:
        "Una web rápida, que se vea bien en el celular y esté pensada para que te escriban. Desde cero o rediseñando la que ya tenés.",
      useCases: [
        ["Diseño propio", "Pensado para tu negocio y para quien te busca, sin una plantilla que se parece a otras mil."],
        ["Contacto a un toque", "WhatsApp con mensaje precargado, teléfono o formulario, siempre a mano, sobre todo en el celular."],
        ["SEO desde el día uno", "Títulos, datos estructurados, sitemap y la ficha de Google Maps conectada, para que te encuentren en tu zona."],
        ["Rápida y tuya", "Carga rápido, queda en tu dominio y no depende de plugins que se rompen."],
      ],
      proof: [
        ["GV Convertidores", "El sitio de un taller de Villa Crespo que hace más de 40 años repara convertidores de torque. Le habla a mecánicos, con WhatsApp y teléfono siempre visibles y SEO local para Buenos Aires."],
        ["3gen Padel", "Un rediseño que hice por mi cuenta del sitio de una academia de pádel en Palermo, como concepto."],
        ["Este sitio", "Lo diseñé y lo programé yo, sin plantilla."],
      ],
      process: [
        ["Charla", "A quién le habla tu web, qué querés que haga la gente cuando entra y qué te diferencia."],
        ["Diseño y textos", "Te muestro una propuesta con los textos reales y la ajustamos juntos."],
        ["Desarrollo y SEO", "La programo, la pruebo en celulares y dejo armado todo lo que Google necesita para indexarla."],
        ["Publicación", "Queda en tu dominio, dada de alta en Google Search Console y con tu ficha de Google Maps enlazada."],
      ],
      stack: ["HTML / CSS", "Next.js", "SEO técnico", "Google Search Console", "GitHub Pages", "Vercel"],
      faq: [
        ["¿Usás WordPress o Wix?", "No. Hago el sitio con código: carga más rápido, no depende de plugins y no paga una suscripción por plantilla."],
        ["¿Puedo cambiar los textos después?", "Los cambios chicos te los hago yo. Si necesitás editar seguido, lo armamos para que lo puedas hacer vos."],
        ["¿Me va a aparecer en Google?", "La dejo lista para que Google la indexe y te encuentre en tu zona. Nadie serio te puede prometer el primer puesto, pero sí que no te falte nada técnico."],
        ["¿Cuánto cuesta?", "Depende de cuántas secciones y páginas tenga. Después de la primera charla te paso un presupuesto."],
      ],
    },
    en: {
      slug: "/en/services/landing-pages/",
      name: "Landing pages and websites",
      title: "Landing Page Design & Development · Freelance Web Developer | Matías Granzella",
      description:
        "I design and build fast landing pages and websites, made for mobile and made to get you inquiries. With technical SEO built in. Freelance web developer, remote from Argentina.",
      h1: "Landing pages and websites that bring in leads",
      lede:
        "A fast website that looks right on a phone and is built to get people to reach out. From scratch, or redesigning the one you have.",
      useCases: [
        ["Original design", "Made for your business and the people looking for it, not a template that looks like a thousand others."],
        ["One-tap contact", "WhatsApp with a prefilled message, phone or a form, always within reach, especially on mobile."],
        ["SEO from day one", "Titles, structured data, sitemap and your Google Business Profile connected, so people nearby can find you."],
        ["Fast, and yours", "Loads fast, lives on your domain and doesn’t depend on plugins that break."],
      ],
      proof: [
        ["GV Convertidores", "The site for a Buenos Aires workshop that has repaired torque converters for over 40 years. It speaks to mechanics, with WhatsApp and phone always visible and local SEO for Buenos Aires."],
        ["3gen Padel", "A self-initiated concept redesign of a padel academy’s website in Buenos Aires."],
        ["This site", "I designed and built it myself, no template."],
      ],
      process: [
        ["Call", "Who your site speaks to, what you want visitors to do and what sets you apart."],
        ["Design and copy", "I show you a proposal with the real copy and we refine it together."],
        ["Build and SEO", "I build it, test it on phones and set up everything Google needs to index it."],
        ["Launch", "It goes live on your domain, registered in Google Search Console and linked to your Google Business Profile."],
      ],
      stack: ["HTML / CSS", "Next.js", "Technical SEO", "Google Search Console", "GitHub Pages", "Vercel"],
      faq: [
        ["Do you use WordPress or Wix?", "No. I build the site in code: it loads faster, doesn’t depend on plugins and doesn’t need a template subscription."],
        ["Can I change the copy later?", "I handle small changes. If you need to edit often, we set it up so you can do it yourself."],
        ["Will it show up on Google?", "I leave it ready for Google to index and for people nearby to find. Nobody serious can promise you the top spot, but nothing technical will be missing."],
        ["Do you work with clients outside Argentina?", "Yes, remotely and in English. I’m based in Buenos Aires (GMT-3), which overlaps well with US and European working hours."],
        ["How much does it cost?", "It depends on how many sections and pages it has. After the first call I send you a quote."],
      ],
    },
  },
];
