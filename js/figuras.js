// Código del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;

console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

// Código del triángulo
console.group("Triangulos");

const ladoTriangulo1 = 6;

const ladoTriangulo2 = 6;

const baseTriangulo = 4;

console.log(
  "Los lados del triángulo miden: " +
    ladoTriangulo1 +
    " cm, " +
    ladoTriangulo2 +
    " cm y " +
    baseTriangulo +
    " cm"
);

const alturaTriangulo = 5.5;

console.log("La altura del triangulo es de : " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triangulo es de: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("El area del triangulo es de: " + areaTriangulo + " cm^2");

console.groupEnd();

// Código del Circulo
console.group("Circulos");

// Radio

const radioCirculo = 4;

console.log("El radio del circulo es: " + radioCirculo + " cm");

// Diametro

const diametroCirculo = radioCirculo * 2;

console.log("El diametro del circulo es: " + diametroCirculo + " cm");

// PI
//Math es una herramienta que vamos a tener en JV automaticamente, tienen varias herramientas

const PI = Math.PI;

console.log("PI es: " + PI);

// Circunferencia

const perimetroCirculo = diametroCirculo * PI;

console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

// Área

const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El area del circulo es: " + areaCirculo + " cm^2");

console.groupEnd();
