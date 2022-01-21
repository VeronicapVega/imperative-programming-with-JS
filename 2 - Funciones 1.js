/* https://github.com/makeitrealcamp/js-foundation
Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir en la consola debes utilizar el método console.log(). */

const prompt = require('prompt-sync')();

let frase = prompt ("Ingrese una frase: ");
console.log(frase);

/*Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!". */

let nombre = prompt ("Ingrese su nombre: ");
console.log("Hola " + nombre + "!");

/* Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.*/

let numero1 = prompt ("Ingrese un numero: ");
let numero2 = prompt ("Ingrese otro numero: ");

function sumar (a,b){
    return a + b
}
console.log(sumar(Number(numero1),Number(numero2)))

/* Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999, el programa debe imprimir en la consola: */

let anioNacimiento = prompt("Ingrese su año de nacimiento: ");
let edad = 2021 - anioNacimiento
console.log("Tienes " + edad + " años")

/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".
Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola la frase "Tu BMI es 20.061728395061728". */
let peso = prompt("Ingrese su peso: ");
let altura = prompt ("Ingrese su altura: ");
function imc(c,d){
    return c / (d*d)
}
console.log("Tu BMI es " + imc(Number(peso),Number(altura)));