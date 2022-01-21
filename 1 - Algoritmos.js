/*EJERCICIOS DE https://pseint.site/
 1) Hacer un programa que ingrese por teclado un número total de segundos y que luego pueda mostrar la cantidad de horas, minutos y segundos que existen en el valor ingresado.
Lo que necesitamos saber es cuantos segundos tienes una hora (3600) y cuantos segundos tiene un minuto (60), para de esa manera dividir la cantidad de segundos y obtener las horas 
y minutos existentes.

Ejemplo : Proceso principal para calcular horas minutos y segundos:
SEGUNDOS = 3600 // Valor asignado de ejemplo.
HORAS = (SEGUNDOS / 3600) // 1 hora.
MINUTOS = (SEGUNDOS / 60) // 60 minutos.
*/
function CantidadHMS(numero){
    let segundos = numero;
    let horas = numero / 3600;
    let minutos = numero / 60;
    console.log("El numero ingresado tiene " + segundos + " segundos, " + horas +" horas, y " + minutos +" minutos.");
}

CantidadHMS(7200)

/*
2) Ingresar un monto en dinero y calcula, cuántas personas pueden ingresar al cine, teniendo en cuenta que la entrada general esta $15 por persona.
Este es un ejercicio básico dónde dividimos el monto dado entre el valor de la entrada, de esa manera conocemos la cantidad de entradas existentes.

Ejemplo : Proceso principal de como calcular la comprar de las entradas :
MONTO = $45
ENTRADAS = MONTO / $15
*/
function cuantasPersonas (dinero) {
    let entradas = dinero / 15;
    console.log("Pueden ingresar "+ entradas + " personas al cine.");
}
cuantasPersonas(600)

/*
3) Hacer un algoritmo dónde una persona recibe un préstamo de $100.00 de un banco y desea saber cuánto pagará de interés, si el banco le cobra una tasa del 2% mensual.
 Ingresar el número de meses por teclado.
ANÁLISIS :

Lo primero es conocer la cantidad de meses y multiplicarlo por 0.02 que viene a ser el 2% de préstamo de cada mes, a ese monto se le multiplica los $1000 dólares, obteniendo así el interés a pagar.

Calcular el interés de un préstamo recibido:
MONTO = $1000
MESES = 2
INTERESES = (MONTO * (MESES * 0.02))
*/
function cuantoPago(meses){
    let monto = 1000
    let intereses = (monto * (meses * 0.02))
    console.log ("Pagará $"+intereses+" de intereses.")
}

cuantoPago(15)