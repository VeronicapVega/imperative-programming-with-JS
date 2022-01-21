/*Crear una función que convierta pulgadas en centímetros. Es decir, recibe por parámetro pulgadas y retorna su equivalente en centímetros. */
function pulgadasaCentimentros (pulgadas) {
    return pulgadas * 2.54
}

/* Crear una función que recibe un string y lo convierte en una URL. Ejemplo: “pepito” es devuelto como “http://www.pepito.com”. */

function url(texto) {
    return "http://www." + texto + ".com";
}
console.log(url("pepito"))

/*Crear una función que recibe un string y devuelve la misma frase, pero con admiración. */

function fraseConAdmiracion(frase){
    return frase + "!"
}
console.log(fraseConAdmiracion("hola"))

/*Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos. */

function edadPerros (edad) {
    return edad * 7
}
console.log(edadPerros(10))

/* Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. Considera que tu mes de trabajo tiene 40 horas. */

function valorTrabajo (sueldo) {
    return sueldo / 40
}
console.log(valorTrabajo(100000))

/* Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores. */

function calculadorIMC(altura, peso){
    return peso / (altura*altura)
}
console.log(calculadorIMC(1.8, 65))

/*Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne. Pista: investigá qué hace el método de strings: toUpperCase()*/

function enMayuscula (texto){
    console.log(texto.toUpperCase())
}
enMayuscula("holaa")
/*Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof. 
Crear una función a la que le pasamos el radio de un círculo y nos devuelve la circunferencia. Pista: investigá si el objeto Math tiene entre sus propiedades el número pi.*/
