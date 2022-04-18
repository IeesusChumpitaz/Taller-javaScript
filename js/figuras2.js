// CUADRADO

function perimetroCuadrado(lado){
    return  lado * 4;
} 

function areaCuadrado(lado){
    return lado*lado;
} 

// TRIANGULO

function perimetroTriangulo(lado1,lado2,base){
    return  lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
   return (base * altura) / 2;
}  

//CIRCULOS

function diametroCirculo(radio){
   return radio * 2;
} 

// PI
//Math es una herramienta que vamos a tener en JV automaticamente, tienen varias herramientas

const PI = Math.PI;

console.log("PI es: " + PI);


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

function areaCirculo(radio){
    return (radio * radio) * PI;
}  