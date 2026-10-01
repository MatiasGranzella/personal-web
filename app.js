/* ============================================================================
   LÓGICA — renderiza el contenido de data.js y maneja las interacciones.
   Normalmente no necesitás tocar esto. Editá data.js.
   ========================================================================== */
(function () {
  /* ---- Idioma: ?lang=en, o el último elegido. Español por defecto. ---- */
  const deepMerge = (base, over) => {
    if (Array.isArray(base) && Array.isArray(over)) return base.map((b, i) => (i in over ? deepMerge(b, over[i]) : b));
    if (base && over && typeof base === "object" && typeof over === "object" && !Array.isArray(base)) {
      const out = { ...base };
      Object.keys(over).forEach((k) => { out[k] = k in base ? deepMerge(base[k], over[k]) : over[k]; });
      return out;
    }
    return over === undefined ? base : over;
  };
  let lang = "es";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    lang = q || localStorage.getItem("lang") || "es";
  } catch (e) {}
  if (lang !== "en" || !window.PROFILE_EN) lang = "es";
  const D = lang === "en" ? deepMerge(window.PROFILE, window.PROFILE_EN) : window.PROFILE;
  const U = D.ui;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.lang = lang;
  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  // "linkedin" en data.js apunta al link principal de LinkedIn
  const resolve = (href) => (href === "linkedin" ? D.linkedin : href || "#");
  const setLink = (a, href) => {
    a.href = resolve(href);
    if (a.href.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  };

  /* ---- Íconos (SVG de línea, un solo trazo) ---- */
  const ICONS = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    external: '<path d="M7 17 17 7M8 7h9v9"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    x: '<path d="M4 4h4.5L20 20h-4.5zM20 4l-6.6 7.2M4 20l6.6-7.2"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    import: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
    currency: '<path d="M4 8h13l-3-3M20 16H7l3 3"/>',
    chart: '<path d="M4 20V4M4 20h16M8 15l4-4 3 3 5-6"/>',
    assistant: '<path d="M12 3l1.8 4.6L18.5 9l-4.7 1.6L12 15l-1.8-4.4L5.5 9l4.7-1.4z"/><path d="M18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    cards: '<rect x="3" y="6" width="11" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
    formation: '<circle cx="12" cy="5" r="1.6"/><circle cx="6" cy="11" r="1.6"/><circle cx="18" cy="11" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M10 17h4"/>',
    whistle: '<circle cx="9" cy="14" r="5"/><path d="M13 11l8-4v4l-7 2M9 14h.01"/>',
  };
  const icon = (name, extra) =>
    `<svg class="i${extra ? " " + extra : ""}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ---- Color de acento + meta ---- */
  // Solo en modo claro: el modo oscuro usa su propia variante más luminosa
  if (D.accent) {
    const st = document.createElement("style");
    st.textContent = `:root:not([data-theme="dark"]){--accent:${D.accent};--accent-ink:${D.accent};--accent-strong:${D.accent};--accent-display:${D.accent};--closing-bg:${D.accent}}`;
    document.head.appendChild(st);
  }
  document.title = D.meta.siteTitle;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute("content", D.meta.siteDescription);

  /* ---- NAV ---- */
  $("navHandle").textContent = D.hero.handle || D.hero.name;
  document.querySelector(".skip").textContent = U.skip;
  document.querySelectorAll("[data-nav]").forEach((a) => (a.textContent = U.nav[a.dataset.nav]));
  $("navCta").textContent = U.navCta;
  document.querySelector(".stack").setAttribute("aria-label", U.stackAria);
  const langBtn = $("langToggle");
  langBtn.textContent = U.switchTo;
  langBtn.setAttribute("aria-label", U.switchLabel);
  langBtn.addEventListener("click", () => {
    const next = lang === "en" ? "es" : "en";
    try { localStorage.setItem("lang", next); } catch (e) {}
    const url = new URL(location.href);
    url.searchParams.delete("lang");
    location.href = url.pathname + url.search + location.hash;
  });
  setLink($("navCta"), "linkedin");

  /* ---- HERO ---- */
  if (D.hero.photo) {
    $("heroPhoto").src = D.hero.photo;
  }
  // La última línea del título va en verde
  const tl = D.hero.title.split("\n");
  const last = tl.pop();
  $("heroTitle").textContent = tl.length ? tl.join("\n") + "\n" : "";
  $("heroTitle").appendChild(el("span", "hero__accent")).textContent = last;
  $("heroSub").textContent = D.hero.subtitle;

  const ctas = $("heroCtas");
  D.hero.ctas.forEach((c) => {
    const a = setLink(el("a", "btn " + (c.primary ? "btn--primary" : "btn--ghost")), c.href);
    a.innerHTML = c.label + (c.primary ? "" : icon("arrow", "i--arrow"));
    ctas.appendChild(a);
  });

  if (D.hero.availability) {
    $("heroStatus").innerHTML =
      `<span class="status-dot" aria-hidden="true"></span><span>${D.hero.availability}` +
      (D.hero.location ? `<span class="hero__loc"> · ${D.hero.location}</span>` : "") + "</span>";
  }

  /* ---- STACK (cinta; la lista se duplica para el loop continuo) ---- */
  $("stackLabel").textContent = D.stack.label;
  const fillTrack = (track, items, render) =>
    [false, true].forEach((dupe) =>
      items.forEach((t) => {
        const li = render(t);
        if (dupe) li.setAttribute("aria-hidden", "true");
        track.appendChild(li);
      })
    );
  fillTrack($("stackTrack"), D.stack.items, (t) => {
    const li = el("li", "stack__item");
    const name = t.name || t;
    if (t.logo) {
      const logo = el("span", "stack__logo" + (t.logoOnly ? " stack__logo--wide" : ""));
      logo.style.setProperty("--logo", `url("assets/stack/${t.logo}.svg")`);
      logo.setAttribute("aria-hidden", "true");
      li.appendChild(logo);
    } else {
      // Sin logo público: monograma con la inicial, del mismo tamaño que los logos
      const mono = el("span", "stack__mono", name[0].toUpperCase());
      mono.setAttribute("aria-hidden", "true");
      li.appendChild(mono);
    }
    if (t.logoOnly) li.setAttribute("aria-label", name);
    else li.appendChild(document.createTextNode(name));
    return li;
  });
  fillTrack($("capsTrack"), D.stack.capabilities || [], (t) => el("li", "stack__cap", t));

  /* ---- SERVICIOS ---- */
  const S = D.services;
  $("servicesTitle").textContent = S.title;
  $("servicesIntro").textContent = S.intro;
  S.items.forEach((s) => {
    const li = el("li", "service");
    li.innerHTML = `
      <h3 class="service__title">${s.title}</h3>
      <div>
        <p class="service__text">${s.text}</p>
        <div class="service__tags">${(s.tags || []).map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
      <div class="service__proof">
        <div class="service__proof-value${/\d/.test(s.proofValue) ? "" : " service__proof-value--word"}">${s.proofValue}</div>
        <p class="service__proof-text">${s.proof}</p>
      </div>`;
    $("servicesList").appendChild(li);
  });

  /* ---- PROYECTOS ---- */
  const P = D.projects;
  $("projectsTitle").textContent = P.title;
  $("projectsIntro").textContent = P.intro || "";

  const MOCKUPS = {
    // Pantalla de la app Vesty
    vesty: (m) => `
      <div class="phone" role="img" aria-label="${U.vestyAria}"><div class="phone__screen">
        <div class="app__top"><span class="app__hi">${m.greeting}</span><img class="app__logo" src="assets/vesty-logo.png" alt="" width="26" height="26" /></div>
        <div class="app__label">${m.balanceLabel}</div>
        <div class="app__value">${m.balanceValue}</div>
        <span class="app__change">${m.change}</span>
        <svg class="app__chart" viewBox="0 0 240 64" preserveAspectRatio="none" aria-hidden="true">
          <defs><linearGradient id="vfill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#3CCBCE" stop-opacity=".35"/><stop offset="1" stop-color="#3CCBCE" stop-opacity="0"/>
          </linearGradient></defs>
          <path class="area" d="M0 52 L24 48 L48 50 L72 40 L96 43 L120 32 L144 36 L168 24 L192 27 L216 14 L240 8 L240 64 L0 64 Z"/>
          <path d="M0 52 L24 48 L48 50 L72 40 L96 43 L120 32 L144 36 L168 24 L192 27 L216 14 L240 8"/>
        </svg>
        <div class="app__score">
          <div class="app__score-num">${m.score}</div>
          <div><strong>${m.scoreLabel}</strong><span>${U.vestyScoreHint}</span></div>
        </div>
        <div class="app__holdings">
          ${(m.holdings || []).map((h) => `
            <div class="app__holding"><b>${h.name}</b><em>${h.value}</em><div class="app__bar"><i style="width:${h.pct}%"></i></div></div>`).join("")}
        </div>
      </div></div>`,
    // Carta de jugador de Millo Manager
    millo: (m) => `
      <div class="pcard" role="img" aria-label="${U.milloAria}">
        <div class="pcard__top">
          <div><div class="pcard__rating">${m.rating}</div><div class="pcard__pos">${m.position}</div></div>
          <span class="pcard__rarity">${m.rarity}</span>
        </div>
        <div class="pcard__crest" aria-hidden="true">${m.photo ? `<img src="${m.photo}" alt="" width="128" height="128" loading="lazy" />` : '<span class="pcard__sash"></span>'}</div>
        <div class="pcard__name">${m.name}</div>
        <div class="pcard__years">${m.years}</div>
        <div class="pcard__stats">
          ${(m.stats || []).map(([k, v]) => `<div><b>${v}</b><span>${k}</span></div>`).join("")}
        </div>
      </div>`,
  };

  P.items.forEach((p) => {
    const art = el("article", `product product--${p.kind}`);
    art.id = p.kind;
    const mark = p.logo ? `<img class="product__mark" src="${p.logo}" alt="" width="44" height="44" loading="lazy" />` : "";
    const logo = p.kind === "millo"
      ? `<span class="product__logo">${mark}Millo <em>Manager.</em></span>`
      : `<span class="product__logo">${mark}${p.title}.</span>`;
    art.innerHTML = `
      <div class="product__copy">
        <h3 class="product__pitch">${logo} <span>${p.pitch}</span></h3>
        <p class="product__desc">${p.description}</p>
        ${p.problem ? `<p class="product__problem"><s>${p.problem.before}</s>${icon("arrow")}<span>${p.problem.after}</span></p>` : ""}
        <ul class="product__features">
          ${p.features.map((f) => `<li class="feature">${icon(f.icon)}<span class="feature__title">${f.title}</span><span class="feature__text">${f.text}</span></li>`).join("")}
        </ul>
        <div class="product__ctas"></div>
        ${p.trust ? `<p class="product__trust">${icon("lock")}<span>${p.trust}</span></p>` : ""}
      </div>
      <div class="product__visual">
        ${(MOCKUPS[p.kind] || (() => ""))(p.mockup || {})}
        ${p.mockup && p.mockup.caption ? `<p class="product__caption">${p.mockup.caption}</p>` : ""}
      </div>`;
    const ctas = art.querySelector(".product__ctas");
    if (p.cta) {
      const a = setLink(el("a", "btn btn--primary"), p.cta.href);
      a.innerHTML = p.cta.label + icon("external");
      ctas.appendChild(a);
    }
    if (p.secondary) {
      const a = setLink(el("a", "btn btn--ghost"), p.secondary.href);
      a.textContent = p.secondary.label;
      ctas.appendChild(a);
    }
    $("projectsList").appendChild(art);
  });

  if (P.others && P.others.length) {
    $("otherProjectsTitle").textContent = P.othersTitle;
    P.others.forEach((it) => {
      const li = el("li", it.preview ? "post post--preview" : "post");
      const a = setLink(el("a"), it.href);
      // Preview: captura de la página completa que se desplaza sola dentro de una ventana
      const preview = it.preview
        ? `<span class="site-preview" aria-hidden="true"><span class="site-preview__bar"><i></i><i></i><i></i></span><span class="site-preview__screen"><img src="${it.preview}" alt="" width="720" height="2952" loading="lazy" /></span></span>`
        : "";
      a.innerHTML = `<span class="post__type">${it.type || ""}</span><span class="post__title">${it.title}${it.text ? `<span class="post__note">${it.text}</span>` : ""}</span>${preview}${icon("external")}`;
      li.appendChild(a);
      $("otherProjectsList").appendChild(li);
    });
  } else {
    $("otherProjectsTitle").style.display = "none";
    $("otherProjectsList").style.display = "none";
  }

  /* ---- EXPERIENCIA (agrupa roles consecutivos de la misma empresa) ---- */
  const E = D.experience;
  $("expTitle").textContent = E.title;
  $("expAbout").textContent = E.about || "";
  const groups = [];
  E.items.forEach((it) => {
    const last = groups[groups.length - 1];
    if (last && last.company === it.company) last.roles.push(it);
    else groups.push({ company: it.company, roles: [it] });
  });
  const span = (roles) => {
    const start = roles[roles.length - 1].period.split("—")[0].trim();
    const end = roles[0].period.split("—").pop().trim();
    return start === end ? start : `${start} — ${end}`;
  };
  groups.forEach((g) => {
    const row = el("div", "cv__row");
    const multi = g.roles.length > 1;
    row.innerHTML = `
      <div>
        <div class="cv__org">${g.company}</div>
        <div class="cv__org-meta">${span(g.roles)}${multi ? ` · ${g.roles.length} ${U.roles}` : ""}</div>
      </div>
      <div class="cv__roles${multi ? " cv__roles--track" : ""}">
        ${g.roles.map((r) => `
          <div class="cv__role${r.current ? " cv__role--now" : ""}">
            <div class="cv__role-title">${r.role}${r.current ? `<span class="cv__now">${U.current}</span>` : ""}</div>
            ${multi ? `<div class="cv__period">${r.period}</div>` : ""}
            <p class="cv__desc">${r.description}</p>
          </div>`).join("")}
      </div>`;
    $("cvList").appendChild(row);
  });

  /* ---- FORMACIÓN ---- */
  const Ed = D.education;
  if (Ed && Ed.items && Ed.items.length) {
    $("eduTitle").textContent = Ed.title;
    const list = $("eduList");
    Ed.items.forEach((e) => {
      const row = el("div", "cv__row");
      row.innerHTML = `
        <div><div class="cv__org-meta">${e.period}</div></div>
        <div class="cv__role"><div class="cv__role-title">${e.degree}</div><p class="cv__desc">${e.school}</p></div>`;
      list.appendChild(row);
    });
    (Ed.extra || []).forEach((x) => {
      const row = el("div", "cv__row");
      row.innerHTML = `
        <div><div class="cv__label">${x.label}</div></div>
        <div class="cv__role"><p class="cv__desc">${x.text}</p></div>`;
      list.appendChild(row);
    });
  } else {
    $("eduTitle").style.display = "none";
  }

  /* ---- CONTENIDO ---- */
  const C = D.content;
  if (C && C.items && C.items.length) {
    $("contentTitle").textContent = C.title;
    C.items.forEach((it) => {
      const li = el("li", "post");
      const a = setLink(el("a"), it.href);
      a.innerHTML = `<span class="post__type">${it.type || ""}</span><span class="post__title">${it.title}</span>${icon("external")}`;
      li.appendChild(a);
      $("contentList").appendChild(li);
    });
    const cc = $("contentCta");
    if (C.cta) { setLink(cc, C.cta.href); cc.innerHTML = C.cta.label + icon("external"); }
    else cc.style.display = "none";
  } else {
    $("contenido").style.display = "none";
  }

  /* ---- CIERRE ---- */
  const K = D.contact;
  $("contactTitle").textContent = K.title;
  $("contactText").textContent = K.text;
  const kc = $("contactCtas");
  if (K.cta) {
    const a = setLink(el("a", "btn btn--primary"), K.cta.href);
    a.innerHTML = icon("linkedin") + K.cta.label;
    kc.appendChild(a);
  }
  (K.socials || []).forEach((s) => {
    const a = setLink(el("a", "btn btn--ghost"), s.href);
    a.innerHTML = (s.icon ? icon(s.icon) : "") + s.label;
    kc.appendChild(a);
  });
  $("contactPersonal").textContent = K.personal || "";

  /* ---- FOOTER ---- */
  const F = D.footer || {};
  $("footerName").textContent = D.hero.name;
  $("footerMade").textContent = [F.made, `© ${new Date().getFullYear()}`].filter(Boolean).join(" · ");
  const fl = $("footerLinks");
  [{ label: "LinkedIn", href: "linkedin" }, ...(K.socials || []), ...P.items.map((p) => ({ label: p.title, href: p.cta && p.cta.href }))]
    .filter((l) => l.href)
    .forEach((l) => { const a = setLink(el("a"), l.href); a.textContent = l.label; fl.appendChild(a); });
  const cv = $("footerCv");
  if (F.cv && F.cv.href) { cv.href = F.cv.href; cv.innerHTML = icon("download") + F.cv.label; }
  else cv.remove();
  const top = $("footerTop");
  if (F.top) { top.innerHTML = F.top + icon("up"); top.addEventListener("click", (e) => { e.preventDefault(); scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }); }); }
  else top.remove();

  /* ========================= INTERACCIONES ============================== */

  const finePointer = matchMedia("(pointer: fine)").matches;

  // Aparición al hacer scroll (escalonada dentro de cada grupo)
  if (!reduced && "IntersectionObserver" in window) {
    document.documentElement.classList.add("motion");
    const groups = [
      ".section__head", ".services > .service", ".projects > .product",
      "#cvList > .cv__row", "#eduList > .cv__row", ".posts > .post", ".closing",
    ];
    groups.forEach((sel) =>
      document.querySelectorAll(sel).forEach((n, i) => {
        n.setAttribute("data-reveal", "");
        n.style.setProperty("--d", Math.min(i, 5) * 0.08 + "s");
      })
    );
    document.querySelectorAll(".cv__roles").forEach((t) =>
      t.querySelectorAll(".cv__role").forEach((r, i) => r.style.setProperty("--i", i))
    );
    // Cada rol entra por su cuenta cuando llega a la pantalla
    const roleIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        roleIO.unobserve(e.target);
      });
    }, { threshold: 0.3, rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll(".cv__role").forEach((r) => roleIO.observe(r));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        e.target.querySelectorAll(".cv__roles--track").forEach((t) => t.classList.add("is-in"));
        io.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));

    // Cifras que cuentan hacia arriba (81%, 8,5%, 2…)
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        countIO.unobserve(e.target);
        const node = e.target;
        const raw = node.textContent;
        const m = raw.match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/);
        if (!m) return;
        const sep = m[2].includes(",") ? "," : ".";
        const decimals = (m[2].split(/[.,]/)[1] || "").length;
        const target = parseFloat(m[2].replace(",", "."));
        const t0 = performance.now(), dur = 1400;
        const tick = (t) => {
          const k = Math.min(1, (t - t0) / dur);
          const v = target * (1 - Math.pow(1 - k, 4));
          node.textContent = m[1] + v.toFixed(decimals).replace(".", sep) + m[3];
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.6 });
    document.querySelectorAll(".service__proof-value:not(.service__proof-value--word)").forEach((n) => countIO.observe(n));
  }

  // Inclinación 3D siguiendo el mouse (foto del hero y mockups de proyectos)
  const tilt = (surface, target, max) => {
    surface.addEventListener("pointermove", (e) => {
      const r = surface.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      surface.style.setProperty("--mx", x * 100 + "%");
      surface.style.setProperty("--my", y * 100 + "%");
      target.style.setProperty("--ry", (x - 0.5) * max + "deg");
      target.style.setProperty("--rx", (0.5 - y) * max + "deg");
      target.classList.add("is-tilting");
    });
    surface.addEventListener("pointerleave", () => {
      target.classList.remove("is-tilting");
      target.style.setProperty("--rx", "0deg");
      target.style.setProperty("--ry", "0deg");
    });
  };
  if (!reduced && finePointer) {
    const photo = document.querySelector(".hero__photo");
    tilt(photo, photo, 14);
    document.querySelectorAll(".product").forEach((p) => tilt(p, p, 12));
  }

  // Barra de progreso + link activo en el menú
  const progress = $("progress");
  const navLinks = [...document.querySelectorAll("[data-nav]")];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute("href")));
  const tracks = [...document.querySelectorAll(".cv__roles--track")];
  const onScrollFx = () => {
    // Línea verde del recorrido: se llena hasta la altura de lectura (60% de la pantalla)
    const mark = innerHeight * 0.6;
    tracks.forEach((t) => {
      const r = t.getBoundingClientRect();
      t.style.setProperty("--fill", Math.max(0, Math.min(1, (mark - r.top) / r.height)).toFixed(3));
      t.querySelectorAll(".cv__role").forEach((role) =>
        role.classList.toggle("is-passed", role.getBoundingClientRect().top + 8 < mark)
      );
    });
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.setProperty("--p", h > 0 ? scrollY / h : 0);
    let active = -1;
    sections.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * 0.4) active = i; });
    navLinks.forEach((a, i) => a.classList.toggle("is-active", i === active));
  };
  window.addEventListener("scroll", onScrollFx, { passive: true });
  onScrollFx();

  // Nav: borde al scrollear
  const nav = $("nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 24);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Tema (recuerda la preferencia)
  const toggle = $("themeToggle");
  const root = document.documentElement;
  const syncLabel = () =>
    toggle.setAttribute("aria-label", root.getAttribute("data-theme") === "dark" ? U.themeToLight : U.themeToDark);
  syncLabel();
  toggle.addEventListener("click", () => {
    const dark = root.getAttribute("data-theme") !== "dark";
    if (dark) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
    syncLabel();
  });
})();
