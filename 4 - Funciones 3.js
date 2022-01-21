/* Crear un archivo calculadora.js que contendrá las distintas operaciones a realizar de nuestra calculadora.
Crear una función sumar, esta deberá recibir dos parámetros y retornar la suma de los mismos.
Crear una función restar, la cual deberá recibir dos parámetros y retornar la resta del primero menos el segundo.
Crear una función multiplicar, la misma deberá recibir dos parámetros y retornar el resultado de su multiplicación
Crear una función dividir, la cual recibirá dos parámetros y retorna el resultado de la división del primero sobre el segundo. */

function sumar (a, b) {
    return a + b
}
console.log("El resultado de la suma es: " + sumar(4, 5))

function restar (c, d) {
    return c - d
}
console.log("El resultado de la resta es: " + restar(6, 8))

function multiplicar (e, f) {
    return e*f
}
console.log("El resultado de la multiplicación es: " + multiplicar(5, 9))

function dividir (g, h) {
    return g / h
}
console.log("El resultado de la división es: " + dividir(2, 0))


/* En el archivo calculadora.js —debajo de nuestras 4 funciones hechas con anterioridad— creá un console.log en el cual vas a poner un string para indicar que debajo de él comenzarás a probar las funciones. Por ejemplo:
console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)
Ejecutar la función que permite sumar y la función que permite restar pasando como argumentos dos números cualesquiera. Mostrar en consola los resultados.
Ejecutar la función que permite multiplicar pasando como argumentos dos números cualesquiera. Mostrar en consola el resultado.
Ejecutar la función que permite dividir pasando como argumentos dos números cualesquiera. Mostrar en consola el resultado.
Ejecutar la función que permite dividir pasando ahora, como uno de los dos argumentos, el número cero. Mostrar en consola el resultado. 
el resultado de dividir por 0 nos da INFINITY

Crear una función que se llame cuadradoDeUnNumero, la cual recibe un número como parámetro y deberá retornar ese número elevado al cuadrado.
Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()*/
function cuadradoDeUnNumero (numero) {
    return multiplicar(numero, numero)
}
console.log(cuadradoDeUnNumero(2))

/*Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio de 3 números, que serán ingresados por parámetro.
Importante: promedioDeTresNumeros() deberá utilizar algunas funciones previamente creadas de nuestra calculadora. */
function promedioDeTresNumeros(numero1, numero2, numero3) {
    let suma = sumar(numero1, numero2)
    suma = suma + numero3
    let promedio = dividir(suma, 3)
    return promedio
}
console.log(promedioDeTresNumeros(9, 9, 9))


/*Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente creadas de nuestra calculadora. */
function calcularPorcentaje(total, porcentaje) {
    let parcial = multiplicar(porcentaje, total)
    let parcial2 = dividir(parcial, 100)
    return parcial2
}
console.log(calcularPorcentaje(300, 15))

/*Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá retornar el porcentaje del primero con respecto al segundo.
Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de 200.*/
function GeneradorDePorcentaje(num1, num2){
    let multiplicacion = multiplicar(num1, 100)
    let division = dividir(multiplicacion, num2)
    return division
}
console.log(GeneradorDePorcentaje(2, 200))

