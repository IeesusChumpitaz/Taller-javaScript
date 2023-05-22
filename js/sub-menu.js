/* variables globales */
const botonTaller1 = document.querySelector(".boton-encendido");
const botonTaller3 = document.querySelector(".boton-stats");
const navDespegable1 = document.querySelector(".nav__despegable");
const navDespegable3 = document.querySelector(".nav__despegable-stats");
const sectionCuadrado = document.getElementById("section-cuadrado");
const sectionTriangulo = document.getElementById("section-triangulo");
const sectionCirculo = document.getElementById("section-circulo");
const linkCuadrado = document.querySelector(".link-cuadrado");
const linkTriangulo = document.querySelector(".link-triangulo");
const linkCirculo = document.querySelector(".link-circulo");

/* others */

sectionTriangulo.style.display = "none";
sectionCirculo.style.display = "none";

/* escuchador de eventos */
botonTaller1.addEventListener("click", openListElements);
botonTaller3.addEventListener("click", openListElementsStats);
linkCuadrado.addEventListener("click", openSectionCuadrado);
linkTriangulo.addEventListener("click", openSectionTriangulo);
linkCirculo.addEventListener("click", openSectionCirculo);

/* funciones */
function openListElements() {
  navDespegable1.classList.toggle("active");
}
function openListElementsStats() {
  navDespegable3.classList.toggle("active");
}
function openSectionCuadrado() {
  /* escondemos las sections */
  sectionTriangulo.style.display = "none";
  sectionCirculo.style.display = "none";
  /* abrimos la seccion cuadrado */
  sectionCuadrado.style.display = "grid";
}
function openSectionTriangulo() {
  /* escondemos las sections */
  sectionCuadrado.style.display = "none";
  sectionCirculo.style.display = "none";
  /* abrimos la seccion triangulo */
  sectionTriangulo.style.display = "grid";
}
function openSectionCirculo() {
  /* escondemos las sections */
  sectionTriangulo.style.display = "none";
  sectionCuadrado.style.display = "none";
  /* abrimos la seccion circulo */
  sectionCirculo.style.display = "grid";
}
