/*La tarea consiste en enfrentar estas votaciones comparando a[0] con b[0], a[1] con
b[1] y a[2] con b[2].

Si a[i] > b[i], entonces, Alicia recibe 1 punto.
Si a[i] < b[i], entonces, Bob recibe 1 punto.
Si a[i] === b[i], ninguna persona recibe un punto.

Los puntos de comparación son los puntos totales que ganó una persona. ¡Ojo! No los
votos, sino los puntos ganados en cada etapa.
Ejemplo:
const alicia = [23, 67, 32];
const bob = [12, 67, 43];
puntosAlicia = 1
puntosBob = 1
*/

const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanador(a, b) {
    let puntosA = 0
    let puntosB= 0
    for (let i = 0; i<a.length; i++){
        if (a[i]>b[i]){
            puntosA ++
        }else if (a[i]<b[i]){
            puntosB ++
        }

        }
        if (puntosA > puntosB){
            return `primer`
        }else if (puntosA < puntosB){
            return `segundo`
        }

    }
    console.log("El ganador es: " + encontrarGanador(alicia, bob) + " participante");
    


/*
Crea la función digitalHouse() la cual recibirá 2 números como parámetros. La función
deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los
siguientes criterios:
● Si el número a imprimir es múltiplo del primer parámetro que se ingresó,
deberá mostrar el string “Digital” en lugar del número.
● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá
mostrar el string “House” en su lugar.
● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el
string “Digital House” en lugar del número. 
*/

function digitalHouse (num1, num2){
    for (let i=1; i<=100; i++){
        if((i%num1 == 0) && (i%num2 == 0)){
            console.log("Digital House")
        }else if (i%num1 === 0){
            console.log("Digital")
        }else if (i%num2 === 0){
            console.log("House")
        }else{
            console.log(i)
        }



    }

}
digitalHouse(4, 8)