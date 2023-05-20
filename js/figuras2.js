//JS DEL TALLER-FUNCIONES

// FUNCIONES DE FORMULAS - CUADRADO

//PERIMETRO-CUADRADO
function perimetroCuadrado(lado) {
  return lado * 4;
}
//AREA-CUADRADO
function areaCuadrado(lado) {
  return lado * lado;
}

// FUNCIONES DE FORMULAS - TRIANGULO

//PERIMETRO-TRIANGULO
function perimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}
//AREA-TRIANGULO
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//FUNCIONES DE FORMULAS - CIRCULO

// PI , Math - es una herramienta que vamos a tener en JV automaticamente, tienen varias herramientas
const PI = Math.PI;

//DIAMETRO-CIRCULO
function diametroCirculo(radio) {
  return radio * 2;
}
//CIRCUNFERENCIA-CIRCULO
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//AREA-CIRCULO
function areaCirculo(radio) {
  return radio * radio * PI;
}

//INTERACION CON EL HTML DEL MAIN CUADRADO

//INGRESAR-LADOS-CUADRADO

function ingresar__ladosCuadrado() {
  const inputLados = document.getElementById("input__lados--cuadrados");
  const value = inputLados.value;
  alert("Bien echo!");
  return value;
}
//CALCULAR-PERIMETRO-CUADRADO

function calcular__perimetroCuadrado() {
  const lados = ingresar__ladosCuadrado();

  const perimetro = perimetroCuadrado(lados);

  alert("El perimetro del cuadro es de " + perimetro + " cm");
}
//CALCULAR-AREA-CUADRADO

function calcular__areaCuadrado() {
  const lados = ingresar__ladosCuadrado();

  const area = areaCuadrado(lados);

  alert("El area del cuadro es de " + area + " cm");
}

//INTERACIION CON EL HTML DEL MAIN TRIANGULO

// INGRESAR-LADOS-triangulo

function ingresar__ladostriangulo() {
  const inputLadoA = document.getElementById("input__ladoA--triangulo");
  const valueladoA = Number(inputLadoA.value);
  console.log(valueladoA);
  const inputLadoB = document.getElementById("input__ladoB--triangulo");
  const valueladoB = Number(inputLadoB.value);
  console.log(valueladoB);
  const inputLadoC = document.getElementById("input__ladoC--triangulo");
  const valueladoC = Number(inputLadoC.value);
  console.log(valueladoC);

  if (valueladoA >= 1 && valueladoB >= 1 && valueladoC >= 1) {
    alert("Bien hecho!!");
  } else {
    alert(
      "porfavor ingresa  primero el tamaño del lado A , el lado B y despues el tamaño de la base del triangulo para continuar.."
    );
    console.log("Error!");
  }
}

//CALCULAR-PERIMETRO-triangulo

function ingresar__perimetroTriangulo() {
  const inputLadoA1 = Number(
    document.getElementById("input__ladoA--triangulo").value
  );
  const inputLadoB2 = Number(
    document.getElementById("input__ladoB--triangulo").value
  );
  const inputLadoC3 = Number(
    document.getElementById("input__ladoC--triangulo").value
  );
  const perimetro = perimetroTriangulo(inputLadoA1, inputLadoB2, inputLadoC3);

  alert("el perimetro del triangulo es " + perimetro + " cm");
  console.log(perimetro);
}

//CALCULAR-AREA-TRIANGULO

function calcular__areaTriangulo() {
  const inputbase1 = Number(
    document.getElementById("input__ladoC--triangulo").value
  );
  const valueAltura = Number(
    document.getElementById("input__altura--triangulo").value
  );

  if (inputbase1 >= 1 && valueAltura >= 1) {
    const area = areaTriangulo(inputbase1, valueAltura);

    alert("el area del triangulo es " + area + " cm");
    console.log(area);
  } else if (inputbase1 >= 1 && valueAltura <= 0) {
    alert(
      "porfavor  ingresa un valor mayor a 0   para que  puedas calcular el area del triangulo.."
    );
    console.log("Error!");
  } else {
    alert(
      "porfavor ingresa  primero la  base  y despues la altura  para que  puedas calcular el area del triangulo .."
    );
    console.log("Error!");
  }
}

//INTERACIION CON EL HTML DEL MAIN CIRCULO

//CALCULAR DIAMETRO-CIRCULO

function calcular__diametroCirculo() {
  const inputRadio = Number(
    document.getElementById("input__radioCirculo").value
  );
  console.log(inputRadio);

  if (inputRadio >= 1) {
    const diametro = diametroCirculo(inputRadio);

    alert("el diametro del circulo es de" + diametro + " cm");
    console.log(diametro);
  } else {
    alert(
      "porfavor ingresa el radio del circulo para calcular el diametro del circulo  .."
    );
    console.log("Error!");
  }
}

//CALCULAR CIRCUNFERENCIA-CIRCULO

function calcular__circunferenciaCirculo() {
  const inputRadio = Number(
    document.getElementById("input__radioCirculo").value
  );
  console.log(inputRadio);

  if (inputRadio >= 1) {
    const circunferencia = perimetroCirculo(inputRadio);

    alert("la circunferencia del circulo es de " + circunferencia + " cm");
    console.log(circunferencia);
  } else {
    alert(
      "porfavor ingresa el radio del circulo para calcular el diametro del circulo  .."
    );
    console.log("Error!");
  }
}

//CALCULAR EL AREA-CIRCULO
function calcular__areaCirculo() {
  const inputRadio = Number(
    document.getElementById("input__radioCirculo").value
  );
  console.log(inputRadio);

  if (inputRadio >= 1) {
    const area = areaCirculo(inputRadio);

    alert("el area del circulo es " + area + " cm");
    console.log(area);
  } else {
    alert(
      "porfavor ingresa  primero el radio del cirtculo para que  puedas calcular el area del circulo .."
    );
    console.log("Error!");
  }
}
