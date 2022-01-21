/*El tech leader del equipo necesita conocer la estructura de datos del nuevo proyecto.
Para esto, deberás:
1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente. */

let peliculas = ['star wars','totoro','rocky','pulp fiction','la vida es bella']
console.log(peliculas[4]);

/*2. Más tarde, de producción dieron el aviso de que las películas deberían estar
todas en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().*/

function letrasMayusculas (array) {
    console.log(array[0].toUpperCase())
    console.log(array[1].toUpperCase())
    console.log(array[2].toUpperCase())
    console.log(array[3].toUpperCase())
    console.log(array[4].toUpperCase())

}
console.log(letrasMayusculas(peliculas))

/*Mientras trabajabas en el feature anterior, se dio el aviso de que también hay
que crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como
parámetros, para poder agregar los elementos contenidos en el segundo array
dentro del primero, y así retornar un solo array con todas las películas como
sus elementos.
Importante: las películas animadas también deberían convertirse a
mayúsculas.*/
let animadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function pasarPelis(arrays1, arrays2){
    arrays1.push(arrays2[0])
    arrays1.push(arrays2[1])
    arrays1.push(arrays2[2])
    arrays1.push(arrays2[3])
    arrays1.push(arrays2[4])
    letrasMayusculas(arrays1)
    console.log(arrays1[5].toUpperCase())
    console.log(arrays1[6].toUpperCase())
    console.log(arrays1[7].toUpperCase())
    console.log(arrays1[8].toUpperCase())
    console.log(arrays1[9].toUpperCase())
}
console.log(pasarPelis(peliculas, animadas))

/* Durante el proceso, uno de los desarrolladores advierte que el último elemento
del array de películas animadas es un videojuego. Ahora tenés que editar el
código y modificarlo de manera que puedas eliminar ese último elemento antes
de migrar el contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/
let noespeli = peliculas.pop()
console.log(peliculas)

/* Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son
iguales o diferentes. Te confirman que están en el orden adecuado y que solo
traen valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden
en orden al del array resultante de combinar películas con películas animadas.
Es decir, el primer elemento del array de películas general corresponde al
primer elemento de asiaScores y al primer elemento de euroScores, y así
sucesivamente.*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparacion (calificacion1, calificacion2){
    if (calificacion1[0] === calificacion2[0]){
        console.log(  `Las calificaciones de ${peliculas[0]} son iguales` )
    }else {
        console.log( `Las calificaciones de ${peliculas[0]} no son iguales`)
    }
    if (calificacion1[1] === calificacion2[1]){
        console.log(  `Las calificaciones de ${peliculas[1]} son iguales` )
    }else {
        console.log( `Las calificaciones de ${peliculas[1]} no son iguales`)
    }
    if (calificacion1[2] === calificacion2[2]){
        console.log(  `Las calificaciones de ${peliculas[2]} son iguales` )
    }else {
        console.log( `Las calificaciones de ${peliculas[2]} no son iguales`)
    }   
    if (calificacion1[3] === calificacion2[3]){
        console.log(  `Las calificaciones de ${peliculas[3]} son iguales` )
    }else {
        console.log( `Las calificaciones de ${peliculas[3]} no son iguales`)
    }
    if (calificacion1[4] === calificacion2[4]){
        console.log(  `Las calificaciones de ${peliculas[4]} son iguales` )
    }else {
        console.log( `Las calificaciones de ${peliculas[4]} no son iguales`)
    }
    if (calificacion1[5] === calificacion2[5]){
        console.log(  `Las calificaciones de ${peliculas[5]} son iguales` )
    }else {
        console.log( `Las calificaciones de ${peliculas[5]} no son iguales`)
    }
    if (calificacion1[6] === calificacion2[6]){
        console.log(  `Las calificaciones de ${peliculas[6]} son iguales` )
    }else {
        console.log( `Las calificaciones de ${peliculas[6]} no son iguales`)
    }
    if (calificacion1[7] === calificacion2[7]){
        console.log(  `Las calificaciones de ${peliculas[7]} son iguales` )
    }else {
        console.log( `Las calificaciones de ${peliculas[7]} no son iguales`)
    }
    if (calificacion1[8] === calificacion2[8]){
        console.log(  `Las calificaciones de ${peliculas[8]} son iguales` )
    }else {
        console.log( `Las calificaciones de ${peliculas[8]} no son iguales`)
    }

}
console.log(comparacion(asiaScores, euroScores))

