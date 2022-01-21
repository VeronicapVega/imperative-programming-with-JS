const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR

/*******************************/
/* Desarrollo de las consignas */
/*******************************/
//B Agregar una propiedad llamada peliculas en la que asignarás las películas obtenidas a partir del método leer del objeto requerido como módulo (jsonHelper.js), el cual debes requerir como cualquier módulo, al comienzo del archivo, como hemos visto en las prácticas previas.
const jsonHelper = require("./jsonHelper")
let arrayPeliculas = jsonHelper.leerJson("peliculas")
//A Crear un objeto literal que represente la aplicación. El objeto será la representación de nuestro sistema de gestión de películas, podemos llamarlo gestionDePeliculas y contendrá todas las propiedades y métodos necesarios.
let gestionDePeliculas = { 
//C Agregar un método listarPelículas que reciba como parámetro un array de películas y los imprima por consola. Este método deberá imprimir por consola un mensaje con el siguiente formato:
//{titulo}, de {director}. Duración: {duración} minutos, {genero}, ({calificación} / 10 en IMDB) EJEMPLO: The Mist, de Frank Darabont. Duración: 126 minutos, Horror, (7.1 / 10 en IMDB).
//Importante: Este método listarPeliculas deberá ser invocado en cada ejecución de todos aquellos métodos que retornan un array de películas. Digamos que reemplazan al console.log() para hacer más agradable el muestreo de datos. Resultado esperado al ejecutar el método: un mensaje por consola por cada película con el formato indicado. 
listarPeliculas: function(array){
    array.forEach(pelicula => console.log(`${pelicula.titulo}, de ${pelicula.director}. Duración: ${pelicula.duración} minutos, ${pelicula.genero}, (${pelicula.calificación} / 10 en IMDB)`));
},

//D Agregar un método buscarPorId que permita buscar una película en función de su identificador.
//Este método recibirá por parámetro un valor de tipo Number que representa el id a buscar.
//En caso de encontrar una película con el id buscado, devolverá el objeto literal que la representa.
//En caso contrario devolverá undefined
buscarPorId: function(idBuscar){
    return arrayPeliculas.find(pelicula => pelicula.id === idBuscar)
},

//E Agregar un método peliculasPorGenero, que retorne todas las películas de determinado género, es decir, aquellas que tengan la propiedad genero igual al parámetro recibido.
//Este método recibirá como parámetro un valor de tipo String con el género que se desea.
//Este método debe recorrer el listado de películas completo para filtrar.
//Este método devolverá un array con las películas que sean del género ingresado.
peliculasPorGenero: function(genero){
    return arrayPeliculas.filter(pelicula => pelicula.genero === genero)
},

//F Agregar un método filtrarPorCalificacion que permita filtrar las películas que tengan una calificación que esté entre el mínimo y máximo enviado.
//Este método recibirá por parámetro dos valores de tipo Number que representan la calificación mínima y máxima a buscar.
//Este método devolverá un array con todas las películas que tengan calificación mayor o igual al primer parámetro y menor o igual al segundo parámetro.
//En caso de no encontrar ninguna película, devolverá un array vacío.
filtrarPorCalificacion: function(minima, maxima){
    let pelisCalificadas = arrayPeliculas.filter(pelicula => pelicula.calificacionIMDB >= minima && pelicula.calificacionIMDB <= maxima)
    return pelisCalificadas
},

//G Agregar un método ordenarPorDuracion que permita ordenar todas las películas de mayor a menor según su duración.
//El método no recibirá ningún parámetro. 
//Este método devolverá un array con todas las películas ordenadas por su duración de mayor a menor.
ordenarPorDuracion: function(){
    return arrayPeliculas.sort((peliculaA, peliculaB) => peliculaB.duracion - peliculaA.duracion)
},

//H Agregar un método duracionPromedio que permita calcular la duración promedio en minutos de las películas.
//Este método no recibirá ningún parámetro.
//Este método devolverá un string con el siguiente formato: "El promedio de duración de las películas es de: {promedio} minutos"
duracionPromedio: function(){
    let sumatoria = arrayPeliculas.reduce((acum, pelicula) => acum + pelicula.duracion, 0)
    return `El promedio de duración de las películas es de: ${sumatoria/arrayPeliculas.length} minutos`
},

//I Agregar un método modificarGeneroPorId que permita cambiar el género de una película en función de su id y guardar los cambios en el archivo JSON.
//Importante: el método de escritura modifica el archivo JSON original, te recomendamos tener una copia a mano por si algo sale mal y necesitás restaurar el archivo.
//Este método recibirá por parámetro un valor de tipo Number que representa el id a buscar
//Además recibirá por parámetro un valor de tipo String que representa el nuevo género que se le asigne a dicha película.
//Este método utilizará el método buscarPorId
//En caso de encontrar una película con el id buscado: Cambiará el valor de la propiedad genero con aquel recibido por parámetro. Escribirá los cambios en el archivo JSON que contiene las películas.
//En caso contrario devolverá undefined
//Para verificar que el guardado fue correcto, en la sección de ejecuciones de este punto, debes volver a invocar el método que busca por id y que se muestre en consola que dicha película fue modificada correctamente y guardada correctamente en el json actualizándolo.
//Importante: el método que te damos para escribir el archivo JSON reemplaza todo el archivo, así que le vas a tener que pasar el array completo de películas y no solo el elemento modificado
modificarGeneroPorId: function(idABuscar, generoNuevo){
    let peliculaAModificar = this.buscarPorId(idABuscar)
    if (peliculaAModificar){
        peliculaAModificar.genero = generoNuevo
        jsonHelper.escribirJson("peliculas", arrayPeliculas)
    }
    return peliculaAModificar
}




}
/******************************/
/* Ejecución de las consignas */
/******************************/
console.table(arrayPeliculas);
console.log(v, "\n" + oo + " .C. Listar");
// Ejecución aquí
console.log(gestionDePeliculas.listarPeliculas(arrayPeliculas));

console.log(v, oo + " .D. Buscar");
// Ejecución aquí
console.log(gestionDePeliculas.buscarPorId(5));

console.log(v, oo + " .E. Filtrar 1");
// Ejecución aquí
console.log(gestionDePeliculas.peliculasPorGenero("Aventura"));

console.log(v, oo + " .F. Filtrar 2");
// Ejecución aquí
console.table(gestionDePeliculas.filtrarPorCalificacion(6, 7));

console.log(v, oo + " .G. Ordenar");
// Ejecución aquí
console.table(gestionDePeliculas.ordenarPorDuracion());

console.log(v, oo + " .H. Duracion");
// Ejecución aquí
console.log(gestionDePeliculas.duracionPromedio());

console.log(v, oo + " .I. Modificar Propiedad");
// Ejecución aquí
console.table(gestionDePeliculas.modificarGeneroPorId(10, "Horror"))