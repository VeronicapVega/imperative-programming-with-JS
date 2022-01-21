// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Veronica Vega";
const { table } = require("console");
/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const jsonHelper = require("./jsonHelper")
const arrayRecetas = jsonHelper.leerJson("recetas")
// A
let restaurante = { 
// B
recetas: arrayRecetas,
// C
buscarPorNombre: function (comida){
    return this.recetas.find(receta => receta.nombre === comida)
},
// D
filtrarPorTiempo: function(tiempoMaximo){
    return this.recetas.filter(receta => receta.tiempo <= tiempoMaximo)
},
// E
ordenarPorDificultad: function(){
    return this.recetas.sort((recetaA, recetaB) => recetaB.dificultad - recetaA.dificultad)
},
// F
duracionPromedio: function(){
    let sumatoria = this.recetas.reduce((acum, receta) => acum + receta.tiempo, 0)
    return `La duración promedio de todas las recetas es de ${(sumatoria/this.recetas.length).toFixed(2)} minutos`
},
// G
IncrementarPrecio: function (comida){
    let comidaABuscar = this.buscarPorNombre(comida)
    if(comidaABuscar){
        comidaABuscar.precio = comidaABuscar.precio + (3*comidaABuscar.precio/100)
        jsonHelper.escribirJson("recetas", this.recetas)
    }
    return comidaABuscar
}

}




/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre }]); // NO MODIFICAR NADA DE ESTA LINEA
console.table(restaurante.recetas)

console.log("---------- ↧ .C. Buscar ↧ ----------");
// Ejecución aquí:
console.log(restaurante.buscarPorNombre("Fajitas veganas"));

console.log("---------- ↧ .D. Filtrar ↧ ----------");
// Ejecución aquí:
console.table(restaurante.filtrarPorTiempo(30));

console.log("---------- ↧ .E. Ordenar ↧ ----------");
// Ejecución aquí:
console.table(restaurante.ordenarPorDificultad());

console.log("---------- ↧ .F. Total ↧ ----------");
// Ejecución aquí:
console.log(restaurante.duracionPromedio());

console.log("---------- ↧ .G. Modificar ↧ ----------");
// Ejecución aquí:
console.log(restaurante.IncrementarPrecio("Pastel de remolacha salado"));
