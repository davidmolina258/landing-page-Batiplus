/**/

console.log("Funciona");
((d) => {
  const $btnHambuguer = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnHambuguer.addEventListener("click", (e) => {
    $btnHambuguer.firstElementChild.classList.toggle("cerrar-btn");
    $btnHambuguer.lastElementChild.classList.toggle("cerrar-btn");
    $menu.classList.toggle("is-active");

    d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;
      $btnHambuguer.firstElementChild.classList.remove("cerrar-btn");
      $btnHambuguer.lastElementChild.classList.add("cerrar-btn");
      $menu.classList.remove("is-active");
    });
  });
})(document);
