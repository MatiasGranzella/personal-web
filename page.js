/* Páginas estáticas (servicios): tema claro/oscuro y borde de la nav al scrollear.
   El contenido ya viene en el HTML; esto es solo comportamiento. */
(function () {
  var root = document.documentElement;
  var en = root.lang === "en";
  var toggle = document.getElementById("themeToggle");
  var label = function () {
    var dark = root.getAttribute("data-theme") === "dark";
    toggle.setAttribute("aria-label", en
      ? (dark ? "Switch to light mode" : "Switch to dark mode")
      : (dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"));
  };
  label();
  toggle.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") !== "dark";
    if (dark) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
    label();
  });

  var nav = document.getElementById("nav");
  var onScroll = function () { nav.classList.toggle("is-scrolled", window.scrollY > 24); };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
