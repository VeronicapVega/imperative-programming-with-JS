/* 
● Si la edad es negativa, que se muestre en la consola este mensaje: "Error, edad
inválida. Por favor ingrese un número válido."
Importante: No se deberá mostrar ningún otro mensaje.
● Si tiene 21 años, además de darle la bienvenida, felicitarlo por haber llegado a
la mayoría de edad.
● Si su edad es impar decile en cualquiera de los mensajes: "¿Sabías que tu edad
es impar?".
*/
let edad = 21;

if (edad < 0) {
  console.log("Error, edad inválida");
} else {
  if (edad < 18) {
    console.log("No puede pasar al bar.");
  } else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  } else if (edad === 21) {
    console.log("¡Felicidades! Tienes 21 años");
  } else {
    console.log("Puede pasar al bar y tomar alcohol.");
  }
  if (edad !== 0) {
    console.log("¿Sabías que tu edad es impar?");
  }
}

/*totalAPagar()
Declarar una función llamada totalAPagar() que reciba como parametros, vehiculo y
litrosConsumidos.
A continuación, defina y realice los cálculos para obtener el total a pagar, teniendo en
cuenta las siguientes consideraciones.
● Si el vehículo es “coche”, el precio por litro es de $86,
● Si es “moto” ha de ser $70.
● Si es “autobús” ha de ser $55.
● Si los litros consumidos están entre 0 y 25 se ha de añadir $50 al total a pagar.
● Si los litros consumidos es mayor a 25 se ha de añadir $25 al total a pagar.*/

function totalAPagar(vehiculo, litrosConsumidos){
  if(litrosConsumidos > 0 && litrosConsumidos <= 25){
    if(vehiculo == "coche"){
       return litrosConsumidos * 86 + 50
    }else if (vehiculo=="moto"){
      return litrosConsumidos * 70 + 50
    }else{
      return litrosConsumidos * 55 + 50
    }

  }else{
    if(vehiculo == "coche"){
      return litrosConsumidos * 86 + 25
   }else if (vehiculo=="moto"){
     return litrosConsumidos * 70 + 25
   }else{
     return litrosConsumidos * 55 + 25
   }
  }
}
console.log(totalAPagar("coche", 10))
console.log(totalAPagar("moto", 40))
console.log(totalAPagar("autobus", 26))


/*Local de sándwiches
Necesitamos armar el sistema para un local de venta de sandwiches. Los clientes
eligen el sandwich base que tiene un precio, y por cada seleccion siguiente se le suma
el valor de su seleccion al precio, por ej, un sadwich base vegetariano con un precio x,
despues selecciona pan negro con un precio y, por lo que su total a pagar seria x+y, y
asi sucecivamente con el resto de los ingredientes.
Como es un local que ya tenía un sistema previo, ellos ya tienen toda la interfaz
donde el usuario elige cada ingrediente, lo que nos facilita el trabajo, ya que nosotros
recibiremos los datos de la siguiente manera:
Nos llega un string indicando el tipo de sándwich base. los mismos tienen un valor
base diferente por cada selección:
● Pollo = $150 (“pollo”)
● Carne = $200 (“carne”)
● Vegetariano (verduras asadas) = $100 (“veggie”)
Luego de eso el sistema les pregunta qué tipo de pan querrán, tienen para elegir
entre otras 3 opciones, por lo que recibiremos también otro string con el tipo de pan
deseado:
● Blanco c/orégano y parmesano = $50 (“blanco”)
● Negro c/avena = $60 (“negro”)
● Sin gluten = $75 (“s/gluten”)
Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes
adicionales:
● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos, es decir true o
false, dependiendo de si aceptan o no cada uno de los adicionales (nos llegan un total
de 6 valores booleanos, uno por cada adicional).
Nuestro trabajo es crear una función que reciba estos 8 parámetros (un string para el
sandwich base, uno para el pan, y los 6 booleanos de los adicionales). La función
deberá consultar primero que tipo de sándwich base se seleccionó, luego el tipo de
pan, y por último deberá verificar que adicionales se seleccionaron. Por último deberá
retornar el valor numérico del total a pagar del cliente.*/

function pedidoSandwich (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
  let total = 0
  switch (base) {
    case "pollo":
      total = 150;
      break;
    case "carne":
      total = 200;
      break;
    case "veggie":
      total = 100;
      break;
  }

  switch (pan) {
    case "blanco":
      total = total + 50;
      break;
    case "negro":
      total = total + 60;
      break;
    case "s/gluten":
      total = total + 75;
      break;
    }
  if (queso == true){
    total = total + 20
  }
  if (tomate == true){
    total = total + 15
  }
  if (lechuga == true){
    total = total + 10
  }
  if (cebolla == true){
    total = total + 15
  }
  if (mayonesa == true){
    total = total + 5
  }
  if (mostaza == true){
    total = total + 5
  }
  return total
}

console.log(pedidoSandwich("veggie", "negro", true, false, true, false, true, true))