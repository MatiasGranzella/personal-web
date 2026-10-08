# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- Recruiters, hiring managers and founders evaluating Matías as a senior AI engineer / AI Lead (the "CV" reader).
- Companies and founders looking for a freelance builder of LLM applications, data platforms or AI-powered MVPs (the prospective client).
Both arrive mostly from LinkedIn and X, often on mobile, and decide in under a minute whether to reach out.

## Product Purpose
Personal site of Matías Granzella: works as an online CV and as the entry point for freelance work. Success = a qualified person reaches out via LinkedIn.

## Positioning
Headline identity: **Backend & AI Engineer** (AI Lead at Ualá is the proof, not the label). Two audiences, two framings:
- **Freelance offer (top of page, "Qué puedo armarte"):** a ladder from simplest to most complete. 1) landing page or site redesign (proof: GV Convertidores, client; 3gen Padel, concept), 2) complete custom system with its own backend (proof: Vesty and Millo Manager in production), 3) AI integrations and chatbots for internal processes or customer-facing (proof: 81% accuracy on Ualá's CX chatbot). Each service links to its proof section. Data platforms are no longer sold as a service.
- **Corporate experience (timeline):** framed as Backend/AI in production; 6 years at Ualá from BI → Analytics Eng → Data Platform → leading generative AI, so he builds the whole system, not just the prompt. The 8,5% GCP saving lives in the role description.

## Operating Context
Static site (index.html + styles.css + app.js), all content edited in `data.js` (Spanish in `PROFILE`, English overrides in `PROFILE_EN`), deployed on GitHub Pages at matiasgranzella.com. Bilingual ES (es-AR, default) / EN with a toggle. Downloadable ATS-format CV (ES/EN) generated from `cv/cv.html`; the public CV omits the email, a private copy with email lives in gitignored `cv/private/`.

## Capabilities and Constraints
- Primary contact channel: LinkedIn. No public email (spam), no WhatsApp, no booking link.
- Content must stay editable from `data.js`.
- Undecided: freelance pricing (never shown), formal service packages.

## Brand Commitments
- Brand green: forest #1F5F4A (buttons, H1 accent, favicon, OG image), chosen by the user over the earlier bright #0F9D6F.
- Vesty keeps its own brand (teal #3CCBCE / purple #715DF2, official logo `assets/vesty-logo.png`) inside its card.
- Millo Manager keeps its own brand (red #e2332b / gold #b8862b, Barlow Condensed, official logo `assets/millo-logo.png`) inside its card.
- Profile photo: `assets/foto_perfil.jpeg`, shown as a tilted card in the hero (the owner rejected the photo as a faded background behind the name).
- Visual direction: relaxed and light (warm cream ground, lots of air, one grotesk family), with a giant name and a tilted photo card in the hero and an alternating timeline for experience. The owner rejects anything that reads "AI-made": no serif/grotesk mix, no rounded boxes around text, no centered green CTA card.
- Vesty is a web app: always shown in a browser window, never a phone.
- Company logos for the experience timeline live in `assets/companies/` (Ualá symbol cropped from its official horizontal logo, Data IQ app icon, IBM from Simple Icons).

## Evidence on Hand
Real: metrics and roles in `data.js`, 3gen Padel Academy redesign (self-initiated concept, not a client job), Vesty (vestyapp.io), Millo Manager (millomanager.com.ar, player-card photo `assets/millo-francescoli.jpg` from the game), 3 content links (LinkedIn post, DataTalk en Ualá, blog "Así nace Vesty"), education (UBA, UTDT).
Absent — must not be fabricated: client testimonials, client logos, prices, freelance case studies, Vesty user numbers.

## Product Principles
1. Proof over adjectives: every claim is anchored to a real metric, role or shipped product.
2. One clear action: reach out on LinkedIn.
3. Read like a senior engineer's CV, not a template.
4. Owner-editable: content lives in `data.js`.
