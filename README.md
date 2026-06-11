# Web de marca personal — Matías Granzella

Sitio de perfil interactivo (estilo LinkedIn pero con más onda) para "venderte"
y promocionar tu app **Vesty**. Sin build, sin dependencias: HTML/CSS/JS puro.

## 🚀 Ver la web localmente

Opción rápida: hacé **doble clic en `index.html`** y se abre en el navegador.

Opción recomendada (para que carguen bien las fuentes/animaciones):

```bash
cd profile-web
python3 -m http.server 8000
# abrí http://localhost:8000
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
Ya está hecha en `assets/og-image.png` (tu nombre, rol y foto, con la marca de Vesty).

**Para que la preview funcione al compartir, hacé 1 cosa después de publicar:**
abrí `index.html` y reemplazá `https://tu-dominio.com` por tu URL real (ej:
`https://matiasgranzella.netlify.app`) en las **4 líneas marcadas con `← cambiá esto`**.
LinkedIn necesita la URL **absoluta** de la imagen, por eso este paso.

> Tip: si actualizaste la imagen, LinkedIn cachea la vieja. Limpiá el caché en
> el [Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/).

**¿Querés regenerar la imagen** (porque cambiaste la foto o el texto)? Editá
`og-image.html` y corré:
```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --disable-gpu --force-device-scale-factor=2 --window-size=1200,630 \
  --virtual-time-budget=3000 --screenshot="assets/og-image.png" \
  "file://$(pwd)/og-image.html"
```

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

## 📁 Archivos

| Archivo       | Qué es                                            |
|---------------|---------------------------------------------------|
| `data.js`     | **Tu contenido** — lo único que editás seguido.   |
| `index.html`  | Estructura de la página.                           |
| `styles.css`  | Diseño y animaciones.                              |
| `app.js`      | Render + interacciones (no hace falta tocar).     |
| `assets/`     | Tu foto, imagen de preview, etc.                  |
