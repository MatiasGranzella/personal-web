/* ============================================================================
   LÓGICA — renderiza el contenido de data.js y maneja las interacciones.
   Normalmente no necesitás tocar esto. Editá data.js.
   ========================================================================== */
(function () {
  const D = window.PROFILE;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const initials = (name) =>
    name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  /* ---- Color de acento + meta ---- */
  if (D.accent) {
    const hex = D.accent.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const root = document.documentElement.style;
    root.setProperty("--accent", D.accent);
    root.setProperty("--accent-soft", `rgba(${r},${g},${b},0.12)`);
    root.setProperty("--accent-line", `rgba(${r},${g},${b},0.28)`);
  }
  document.title = D.meta.siteTitle;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", D.meta.siteDescription);

  /* ---- NAV ---- */
  $("navBrand").textContent = initials(D.hero.name);

  /* ---- HERO ---- */
  $("heroBadge").textContent = D.hero.headline + (D.hero.location ? " · " + D.hero.location : "");
  $("heroName").textContent = D.hero.name;
  $("heroTagline").textContent = D.hero.tagline;
  $("heroIntro").textContent = D.hero.intro;

  const ctas = $("heroCtas");
  D.hero.ctas.forEach((c) => {
    const a = el("a", "btn " + (c.primary ? "btn--primary" : "btn--ghost"));
    a.href = c.href;
    a.textContent = c.label;
    ctas.appendChild(a);
  });

  const stats = $("heroStats");
  D.hero.stats.forEach((s) => {
    const wrap = el("div", "hero__stat");
    wrap.appendChild(el("div", "hero__stat-value", s.value));
    wrap.appendChild(el("div", "hero__stat-label", s.label));
    stats.appendChild(wrap);
  });

  const avatar = $("heroAvatar");
  if (D.hero.photo) {
    const img = el("img");
    img.src = D.hero.photo;
    img.alt = D.hero.name;
    avatar.appendChild(img);
  } else {
    avatar.textContent = initials(D.hero.name);
  }

  /* ---- ABOUT ---- */
  $("aboutTitle").textContent = D.about.title;
  const aboutText = $("aboutText");
  D.about.paragraphs.forEach((p) => aboutText.appendChild(el("p", null, p)));
  const aboutTags = $("aboutTags");
  D.about.highlights.forEach((t) => aboutTags.appendChild(el("span", "about__tag", t)));

  /* ---- BANDA DE MÉTRICAS ---- */
  if (D.metrics && D.metrics.items && D.metrics.items.length) {
    const mg = $("metricsGrid");
    D.metrics.items.forEach((it, i) => {
      const item = el("div", "metric reveal");
      item.style.transitionDelay = i * 0.08 + "s";
      item.innerHTML = `<div class="metric__value">${it.value}</div><div class="metric__label">${it.label}</div>`;
      mg.appendChild(item);
    });
  } else {
    const mb = $("metrics");
    if (mb) mb.style.display = "none";
  }

  /* ---- VESTY ---- */
  const V = D.vesty;
  $("vestyTitle").textContent = V.title;
  $("vestySubtitle").textContent = V.subtitle;
  $("vestyPitch").textContent = V.pitch;
  $("vestyDesc").textContent = V.description;

  // Problema → solución
  if (V.problem) {
    $("vestyProblem").innerHTML = `
      <div class="vesty__problem-card vesty__problem-card--before">${V.problem.before}</div>
      <div class="vesty__problem-arrow">→</div>
      <div class="vesty__problem-card vesty__problem-card--after">${V.problem.after}</div>`;
  }

  const feats = $("vestyFeatures");
  V.features.forEach((f, i) => {
    const card = el("div", "vesty__feature");
    card.style.transitionDelay = i * 0.08 + "s";
    card.innerHTML = `
      <div class="vesty__feature-icon">${f.icon}</div>
      <div>
        <div class="vesty__feature-title">${f.title}</div>
        <div class="vesty__feature-text">${f.text}</div>
      </div>`;
    feats.appendChild(card);
  });

  // Trust + CTA
  if (V.trust) $("vestyTrust").textContent = V.trust;
  const vCta = $("vestyCta");
  if (V.cta && V.cta.href) {
    vCta.textContent = V.cta.label;
    vCta.href = V.cta.href;
    if (V.cta.href.startsWith("http")) { vCta.target = "_blank"; vCta.rel = "noopener"; }
  } else {
    vCta.style.display = "none";
  }

  const vLinks = $("vestyLinks");
  V.links.forEach((l) => {
    const a = el("a", "vesty__link");
    a.href = l.href;
    if (l.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    a.innerHTML = (l.icon ? l.icon + " " : "") + l.label;
    vLinks.appendChild(a);
  });

  // Phone screen — réplica simplificada de la app Vesty
  const m = V.mockup;
  $("phoneScreen").innerHTML = `
    <div class="app__greeting">${m.greeting}</div>
    <div class="app__card">
      <div class="app__card-label">${m.balanceLabel}</div>
      <div class="app__card-value">${m.balanceValue}</div>
      <span class="app__card-change">${m.change}</span>
    </div>
    <div class="app__score">
      <div class="app__ring" id="appRing" data-deg="${(m.score || 0) * 3.6}">
        <div class="app__ring-inner">${m.score || ""}</div>
      </div>
      <div class="app__score-meta">
        <strong>${m.scoreLabel || "Score"}</strong>
        <span>Valuación · crecimiento · salud</span>
      </div>
    </div>
    <div class="app__rows">
      ${["📈", "🪙", "🏦"].map(
        (ic) => `<div class="app__row"><div class="app__dot">${ic}</div>
        <div class="app__row-text"><div class="app__row-line"></div><div class="app__row-line app__row-line--sm"></div></div></div>`
      ).join("")}
    </div>
    <div class="app__brand">${m.appName}</div>`;

  /* ---- EXPERIENCIA ---- */
  $("expTitle").textContent = D.experience.title;
  const tl = $("timeline");
  D.experience.items.forEach((it, i) => {
    const item = el("div", "timeline__item reveal" + (it.current ? " timeline__item--current" : ""));
    item.style.transitionDelay = i * 0.06 + "s";
    item.innerHTML = `
      <div class="timeline__dot"></div>
      <div class="timeline__period">${it.period}</div>
      <div class="timeline__role-line">
        <span class="timeline__role">${it.role}</span>
        <span class="timeline__company">${it.company}</span>
      </div>
      <p class="timeline__desc">${it.description}</p>`;
    tl.appendChild(item);
  });

  /* ---- EDUCACIÓN ---- */
  if (D.education && D.education.items && D.education.items.length) {
    $("eduTitle").textContent = D.education.title;
    const eduList = $("eduList");
    D.education.items.forEach((e, i) => {
      const item = el("div", "edu__item reveal");
      item.style.transitionDelay = i * 0.06 + "s";
      item.innerHTML = `
        <div class="edu__period">${e.period}</div>
        <div class="edu__degree">${e.degree}</div>
        <div class="edu__school">${e.school}</div>`;
      eduList.appendChild(item);
    });

    // Chips: idiomas + certificaciones
    const chips = $("eduChips");
    [D.education.languages, D.education.certifications].forEach((grp) => {
      if (!grp || !grp.items || !grp.items.length) return;
      const block = el("div", "edu__chip-group");
      block.appendChild(el("span", "edu__chip-label", grp.label));
      const row = el("div", "edu__chip-row");
      grp.items.forEach((t) => row.appendChild(el("span", "edu__chip", t)));
      block.appendChild(row);
      chips.appendChild(block);
    });
  } else {
    const edu = $("edu");
    if (edu) edu.style.display = "none";
  }

  /* ---- INTERESES ---- */
  if (D.interests && D.interests.items && D.interests.items.length) {
    $("interestsTitle").textContent = D.interests.title;
    $("interestsIntro").textContent = D.interests.intro || "";
    const ig = $("interestsGrid");
    D.interests.items.forEach((it, i) => {
      const card = el("div", "interest reveal");
      card.style.transitionDelay = i * 0.05 + "s";
      card.innerHTML = `
        <div class="interest__icon">${it.icon}</div>
        <div class="interest__label">${it.label}</div>
        <div class="interest__text">${it.text || ""}</div>`;
      ig.appendChild(card);
    });
  } else {
    const sec = $("intereses");
    if (sec) sec.style.display = "none";
  }

  /* ---- SKILLS ---- */
  $("skillsTitle").textContent = D.skills.title;
  const grid = $("skills-grid");
  D.skills.groups.forEach((g, gi) => {
    const group = el("div", "skill-group reveal");
    group.style.transitionDelay = gi * 0.08 + "s";
    let html = `<div class="skill-group__title">${g.category}</div>`;
    g.items.forEach((s) => {
      html += `<div class="skill">
        <div class="skill__head"><span class="skill__name">${s.name}</span><span class="skill__pct">${s.level}%</span></div>
        <div class="skill__bar"><div class="skill__fill" data-level="${s.level}"></div></div>
      </div>`;
    });
    group.innerHTML = html;
    grid.appendChild(group);
  });

  /* ---- STACK ---- */
  if (D.stack && D.stack.groups && D.stack.groups.length) {
    $("stackTitle").textContent = D.stack.title;
    const sg = $("stackGroups");
    D.stack.groups.forEach((g, gi) => {
      const block = el("div", "stack__group reveal");
      block.style.transitionDelay = gi * 0.05 + "s";
      const pills = g.items.map((t) => `<span class="stack__pill">${t}</span>`).join("");
      block.innerHTML = `<div class="stack__group-title">${g.category}</div><div class="stack__pills">${pills}</div>`;
      sg.appendChild(block);
    });
  } else {
    const st = $("stack");
    if (st) st.style.display = "none";
  }

  /* ---- CONTENIDO ---- */
  if (D.content && D.content.items && D.content.items.length) {
    $("contentTitle").textContent = D.content.title;
    $("contentIntro").textContent = D.content.intro || "";
    const cl = $("contentList");
    D.content.items.forEach((it, i) => {
      const a = el("a", "content-item reveal");
      a.href = it.href || "#";
      if (a.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
      a.style.transitionDelay = i * 0.06 + "s";
      a.innerHTML = `
        <span class="content-item__type">${it.type || ""}</span>
        <span class="content-item__title">${it.title}</span>
        ${it.date ? `<span class="content-item__date">${it.date}</span>` : ""}
        <span class="content-item__arrow">→</span>`;
      cl.appendChild(a);
    });
    const cc = $("contentCta");
    if (D.content.cta && D.content.cta.href) {
      cc.textContent = D.content.cta.label;
      cc.href = D.content.cta.href;
      if (D.content.cta.href.startsWith("http")) { cc.target = "_blank"; cc.rel = "noopener"; }
    } else { cc.style.display = "none"; }
  } else {
    const cs = $("contenido");
    if (cs) cs.style.display = "none";
  }

  /* ---- CONTACTO ---- */
  $("contactTitle").textContent = D.contact.title;
  $("contactText").textContent = D.contact.text;
  const email = $("contactEmail");
  if (D.contact.email) {
    email.textContent = D.contact.email;
    email.href = "mailto:" + D.contact.email;
  } else {
    email.style.display = "none";
  }
  const cta = $("contactCta");
  if (D.contact.cta && D.contact.cta.href) {
    cta.textContent = D.contact.cta.label;
    cta.href = D.contact.cta.href;
    if (D.contact.cta.href.startsWith("http")) { cta.target = "_blank"; cta.rel = "noopener"; }
  } else {
    cta.style.display = "none";
  }
  const socials = $("contactSocials");
  D.contact.socials.forEach((s) => {
    const a = el("a", "contact__social");
    a.href = s.href;
    if (s.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    a.innerHTML = `<span class="contact__social-icon">${s.icon}</span>${s.label}`;
    socials.appendChild(a);
  });

  /* ---- FOOTER ---- */
  $("footerName").textContent = D.hero.name;
  $("footerYear").textContent = new Date().getFullYear();

  /* ========================= INTERACCIONES ============================== */

  // Nav scroll state
  const nav = $("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));

  // Animate vesty features + phone bars + skill bars when in view
  const animIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll(".vesty__feature").forEach((f) => f.classList.add("is-visible"));
        e.target.querySelectorAll(".skill__fill").forEach((f) => (f.style.width = f.dataset.level + "%"));
        const ring = e.target.querySelector(".app__ring");
        if (ring) ring.style.setProperty("--deg", ring.dataset.deg + "deg");
        animIO.unobserve(e.target);
      });
    },
    { threshold: 0.2 }
  );
  ["vesty", "skills"].forEach((id) => { const s = $(id); if (s) animIO.observe(s); });

  // Cursor glow
  const glow = document.querySelector(".cursor-glow");
  if (window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      glow.style.opacity = "1";
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  }

  // Parallax orbs
  const orbs = document.querySelectorAll(".hero__orb");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    orbs.forEach((o, i) => (o.style.transform = `translateY(${y * (i ? 0.08 : 0.15)}px)`));
  }, { passive: true });

  // Theme toggle (recuerda preferencia)
  const toggle = $("themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });
})();
