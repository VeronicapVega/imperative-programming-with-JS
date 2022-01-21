/*Observen estos ejemplos y piensen qué devuelve cada uno:
!true  = false
!false = true 
3. !!false = false
4. !!true = true
5. !1 = false
6. !!1 = true
7. !0 = error
8. !!0 = true
9. !!"" = NaN
10.let x = 5 ;
let y = 9;
a. x < 10 && x!==5 =false
b. x>9 || x===5 = true
c. !(x===y) = true

Sin probar en la consola, piensen qué devolverá cada una de estas expresiones, ¿sontrue o false?
1. let x=10 
let y ="a"
y==="b" || x >= 10 = true
2. let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y) = false
3. let str = ""
let msj = "jaja!"
let esGracioso = "false"
!((str || msj) && esGracioso)

/*Crear el código JS que exprese los siguientes enunciados:
1. Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura
debe ser mayor a 1,30 m.*/
function montañaRusa (edad, altura) {
    if (edad>= 12 && altura>=1.30){
        return "Puede subir a la montaña rusa"
    }else{
        return "No puede subir a la montaña rusa"
    }
}

console.log(montañaRusa(12, 1.30))

/*2. Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos
debe usar el flash.*/
function usarFlash (luz, movimiento){
    if (luz === false || movimiento === true){
        return "Debe utilizar flash"
    }
}
console.log(usarFlash(false, true))

/*3. Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones
parciales, o si obtiene un 4 en el examen final.*/
function pasaDeNivel (parcial1, parcial2, final){
    if ((parcial1>7 && parcial2>7) || final > 4){
        return "Pasa de nivel"
    }else{
        return "No pasa de nivel"
    }

}
console.log(pasaDeNivel(7, 7, 3))

/*4. Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus
prácticas de piano y lo hizo de memoria.*/

function dejamosVerTv (tarea, piano, memoria){
    if (tarea === true && piano ===  true && memoria === true){
        return "Lo dejamos ver la TV"
    }else{
        return "No lo dejamos ver la TV"
    }
}
console.log(dejamosVerTv(true, true, false))


