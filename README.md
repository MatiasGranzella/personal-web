# Web de marca personal — Matías Granzella

Sitio de perfil interactivo (estilo LinkedIn pero con más onda) para "venderte"
y promocionar tu app **Vesty**. Sin build, sin dependencias: HTML/CSS/JS puro.

## 🚀 Ver la web localmente

Las rutas son absolutas (`/assets/...`, `/en/`), así que hay que servirla (doble clic en `index.html` ya no anda):

```bash
python3 -m http.server 8000
# abrí http://localhost:8000 (español) o http://localhost:8000/en/ (inglés)
```

## ✏️ Cómo editar tu contenido

**Editás un solo archivo: `data.js`.** Ahí está TODO tu contenido en español,
bien comentado. Cambiás textos, links y datos, guardás, y recargás la página.

Cosas a reemplazar (buscá los `[corchetes]` y la palabra `PLACEHOLDER`):
- **Tu experiencia laboral** real (sección `experience`).
- **Skills** y sus niveles (sección `skills`).
- **Links de Vesty**: App Store, Google Play, sitio web (sección `vesty.links`).
- **Sobre mí**: completá tu profesión, hobbies, etc.
- **Color de acento**: campo `accent` al final (probá distintos colores).

### Tu foto
Poné la imagen en `assets/` (ej: `assets/foto.jpg`) y en `data.js` cambiá
`hero.photo: "assets/foto.jpg"`. Si lo dejás vacío, se muestran tus iniciales.

### Imagen para compartir en LinkedIn / X (preview)
La imagen actual es `assets/og-image-v6.png` (1200x630), generada desde `og-image.html`.
Para cambiarla, editá `og-image.html`, generala con un nombre nuevo (v7, v8…) usando el
comando que está en el comentario de ese archivo, y actualizá las meta `og:image` y
`twitter:image` de `index.html`. El nombre nuevo evita que LinkedIn muestre la vieja.

> Tip: después de publicar, pegá la URL en el
> [Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/) para refrescar la preview.

## 🌐 Publicar (gratis) y compartir en LinkedIn

Cualquiera de estas te da un link público para pegar en tu perfil/post:

### Netlify (lo más fácil)
1. Entrá a https://app.netlify.com/drop
2. Arrastrá la carpeta `profile-web` entera.
3. Te da una URL al instante (podés personalizarla en Site settings).

### Vercel
1. Subí esta carpeta a un repo de GitHub.
2. En https://vercel.com importás el repo → Deploy. Sin configuración.

### GitHub Pages
1. Subí la carpeta a un repo.
2. Settings → Pages → Branch `main` / carpeta raíz → Save.

## 🔎 SEO: páginas de servicios, home en inglés y sitemap

Las páginas de servicios (`/servicios/...` y `/en/services/...`), la home en inglés (`en/index.html`),
el `sitemap.xml` y el título y la descripción de la home **se generan** con:

```bash
node scripts/build.mjs
```

- El contenido de los servicios está en `scripts/servicios.mjs` (español e inglés).
- El título y la descripción de la home, en `HOME` de `scripts/build.mjs`.
- Corré el script **cada vez que cambies `index.html` o `scripts/servicios.mjs`** y commiteá lo generado.
- `robots.txt` y `llms.txt` (para buscadores con IA) se editan a mano.

## 📁 Archivos

| Archivo       | Qué es                                            |
|---------------|---------------------------------------------------|
| `data.js`     | **Tu contenido** — lo único que editás seguido.   |
| `index.html`  | Estructura de la página.                           |
| `styles.css`  | Diseño y animaciones.                              |
| `app.js`      | Render + interacciones (no hace falta tocar).     |
| `assets/`     | Tu foto, imagen de preview, etc.                  |
| `scripts/`    | Generador de las páginas estáticas (ver SEO).     |
| `page.js`     | Tema y nav de las páginas de servicios.           |
| `servicios/`, `en/` | Generadas por `scripts/build.mjs`, no editar. |
