/* variables globales */

/* aside */
const botonTaller1 = document.querySelector(".boton-encendido");
const botonTaller3 = document.querySelector(".boton-stats");
const navDespegable1 = document.querySelector(".nav__despegable");
const navDespegable3 = document.querySelector(".nav__despegable-stats");
const linkCuadrado = document.querySelector(".link-cuadrado");
const linkTriangulo = document.querySelector(".link-triangulo");
const linkCirculo = document.querySelector(".link-circulo");
/* main */
const sectionCuadrado = document.getElementById("section-cuadrado");
const sectionTriangulo = document.getElementById("section-triangulo");
const sectionCirculo = document.getElementById("section-circulo");
const nameSection = document.getElementById("name-section");
const textSection = document.getElementById("text-section");
/* main-cuadrado */
const ladoCuadrado = document.getElementById("input__lados--cuadrados");
const buttonLadoCuadrado = document.querySelector(".button__lados");
const containerInputLadoCuadrado = document.querySelector(".container__input");
const labelLadoCuadrado = document.querySelector(".instruccions__lados");
const buttonPerimetroCuadrado = document.querySelector(".button__perimetro");
const containerInputPerimetroCuadrado = document.querySelector(
  ".container__inputPerimetro"
);
const labelPerimetroCuadrado = document.querySelector(
  ".instruccions__perimetro"
);
const buttonAreaCuadrado = document.querySelector(".button__area");
const containerInputAreaCuadrado = document.querySelector(
  ".container__inputArea"
);
const labelAreaCuadrado = document.querySelector(".instruccions__area");
/* main-triangulo */
/* others */
sectionTriangulo.style.display = "none";
sectionCirculo.style.display = "none";

/* escuchador de eventos aside*/
botonTaller1.addEventListener("click", openListElements);
botonTaller3.addEventListener("click", openListElementsStats);
linkCuadrado.addEventListener("click", openSectionCuadrado);
linkTriangulo.addEventListener("click", openSectionTriangulo);
linkCirculo.addEventListener("click", openSectionCirculo);
/* escuchador de eventos main*/
buttonLadoCuadrado.addEventListener("click", ingresarLadoCuadrado);
buttonPerimetroCuadrado.addEventListener("click", calcularpPerimetroCuadrado);
buttonAreaCuadrado.addEventListener("click", calcularAreaCuadrado);

/* funciones aside*/
function openListElements() {
  navDespegable1.classList.toggle("active");
}
function openListElementsStats() {
  navDespegable3.classList.toggle("active");
}
/* funciones main */
function openSectionCuadrado() {
  /* escondemos las sections */
  sectionTriangulo.style.display = "none";
  sectionCirculo.style.display = "none";
  /* abrimos la seccion cuadrado */
  sectionCuadrado.style.display = "grid";
  nameSection.textContent = "cuadrado";
  textSection.textContent = "el perimetro";
}
function openSectionTriangulo() {
  /* escondemos las sections */
  sectionCuadrado.style.display = "none";
  sectionCirculo.style.display = "none";
  /* abrimos la seccion triangulo */
  sectionTriangulo.style.display = "grid";
  nameSection.textContent = "triangulo";
  textSection.textContent = "el perimetro";
}
function openSectionCirculo() {
  /* escondemos las sections */
  sectionTriangulo.style.display = "none";
  sectionCuadrado.style.display = "none";
  /* abrimos la seccion circulo */
  sectionCirculo.style.display = "grid";
  nameSection.textContent = "circulo";
  textSection.textContent = "la circunferencia";
}
/* funciones main-cuadrado */
function ingresarLadoCuadrado() {
  containerInputLadoCuadrado.classList.add("oculto");

  let inputLadoCuadrado = ladoCuadrado.value;
  labelLadoCuadrado.innerHTML = `los lados  miden <span class="textcm">${inputLadoCuadrado} cm.</span>`;
}
function calcularpPerimetroCuadrado() {
  containerInputPerimetroCuadrado.classList.add("oculto");

  let perimetro = ladoCuadrado.value * 4;
  labelPerimetroCuadrado.innerHTML = `el perimetro del cuadrado mide <span class="textcm">${perimetro} cm.</span>`;
}
function calcularAreaCuadrado() {
  containerInputAreaCuadrado.classList.add("oculto");

  let area = ladoCuadrado.value * ladoCuadrado.value;
  labelAreaCuadrado.innerHTML = `el area mide <span clas="textcm">${area} cm.</span>`;
}
