let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]

/*2. Más tarde, de producción dieron el aviso de que las películas deberían estar
todas en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().*/
function aMayuscula(array){
    for (let i = 0; i < array.length; i++ ) {
        console.log(array[i].toUpperCase())
    }
}
console.log(aMayuscula(peliculas))


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
function pasarPelis (array1, array2){
    for (let i =0; i <array2.length; i++){
        array1.push(array2[i].toUpperCase())
    }
    return array1
}
console.log(pasarPelis(peliculas, animadas))

/* Durante el proceso, uno de los desarrolladores advierte que el último elemento
del array de películas animadas es un videojuego. Ahora tenés que editar el
código y modificarlo de manera que puedas eliminar ese último elemento antes
de migrar el contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/

let noEsPeli = peliculas.pop()
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
    for (let i = 0; i < calificacion1.length; i++){
        if (calificacion1[i] === calificacion2[i]){
            console.log(  `Las calificaciones de ${peliculas[i]} son iguales` )
        }else {
            console.log( `Las calificaciones de ${peliculas[i]} no son iguales`)
        }
    }
}
console.log(comparacion(asiaScores, euroScores))

