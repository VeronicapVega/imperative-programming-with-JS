const fs = require('fs')
let autosJSON = fs.readFileSync("./autos.json", "UTF-8")
let leerAutosJSON = JSON.parse(autosJSON)

let carrera = {
    //Agregar una propiedad llamada autos que contenga los autos obtenidos en el archivo JSON.
    autos: leerAutosJSON,
    //Agregar una propiedad llamada autosPorTanda que contenga el valor 6. Este valor representará la cantidad máxima de autos por tanda.
    autosPorTanda: 6,
    //Agregar un método autosHabilitados, que retorne todos los autos habilitados, es decir, aquellos que no estén sancionados.
    //Este método no recibirá ningún parámetro.
    //Este método devolverá un array con los autos que estén habilitados para correr.
    autosHabilitados: function(){
        return this.autos.filter(auto => auto.sancionado === false)
    },
    //Agregar un método listarAutos que reciba como parámetro un array de autos e imprima por consola la siguiente información:El nombre piloto, 
    //La placa o patente del auto, La velocidad, El peso del auto, El estado del piloto
    listarAutos: function(array){
        array.forEach(auto => console.log(`Piloto: ${auto.piloto}, patente: ${auto.patente}, velocidad: ${auto.velocidad}, peso en kg: ${auto.peso}, estado: ${auto.sancionado ? 'sancionado' : 'habilitado'}.`))
    },
    //Agregar un método buscarPorPatente que permita buscar el auto en función de su patente. Este método recibirá por parámetro un string que represente 
    //la patente a buscar. En caso de encontrar un auto con la patente buscada, devolverá el objeto literal que lo representa.
    //En caso contrario devolverá undefined
    buscarPorPatente: function(patente){
        return this.autos.find(auto => auto.patente === patente)
    },
    /*Agregar un método filtrarPorCilindrada que permite filtrar los autos habilitados, siempre y cuando su propiedad cilindrada sea menor o igual
    a la cilindrada enviada como argumento. Este método recibirá por parámetro un number que represente la cilindrada máxima a buscar.
    Este método devolverá un array con todos los autos que cumplan con la condición mencionada. En caso de no encontrar ningún auto, devolverá un array vacío.
    Este método debe usar autosHabilitados, para buscar incluir solamente aquellos autos que estén habilitados. */
    filtrarPorCilindrada: function(cilindrada){
        return this.autosHabilitados().filter(auto => auto.cilindrada <= cilindrada)
    },
    /*Agregar un método ordenarPorVelocidad que ordene todos los autos de menor a mayor según su velocidad. Este método devolverá un array con todos los 
    autos ordenados por velocidad.*/
    ordenarPorVelocidad: function(){
        return this.autos.sort((a,b) => a.velocidad - b.velocidad)
    },
    //Agregar un método habilitarVehiculo que permita habilitar un vehículo en función de su patente y guardar los cambios en el archivo JSON.
    //Este método recibirá por parámetro un string que represente la patente a buscar. En caso de encontrar un auto con la patente buscada:
    //Cambiará el valor de la propiedad sancionado a false.
    //Escribirá los cambios en el archivo JSON que contiene los vehículos.
    //Devolverá el auto modificado
    //En caso contrario devolverá undefined
    habilitarVehiculo: function(patente){
       let auto = this.buscarPorPatente(patente)
       if(auto){
           auto.sancionado = false
       }
       return auto
    },
    //Agregar un método generarTanda que permita retornar un array de autos, que cumplan con las siguientes condiciones:
    //Su cilindrada sea menor o igual al valor enviado como argumento.
    //Su peso sea menor o igual a un valor enviado como argumento.
    //La cantidad devuelta sea como máximo la expresada en la propiedad autosPorTanda.
    generarTanda: function(cilindrada, peso) {
        let filtradosPorCilindrada = this.filtrarPorCilindrada(cilindrada)
        let filtradosPorPeso = filtradosPorCilindrada.filter(autos => autos.peso <= peso)
        let tanda = filtradosPorPeso.slice(0, this.autosPorTanda)
        return tanda
    },
    //Agregar un método llamado pesoPromedio, que me permita saber cual es el peso promedio de los vehículos que componen la tanda:
    //El método deberá reutilizar generarTanda
    //Deberá retornar un mensaje indicando el peso promedio de los autos.
    pesoPromedio: function(cilindrada, peso){
        let pesoTotal = this.generarTanda(cilindrada, peso).reduce((acum, auto) => acum + auto.peso, 0)
        let promedio = pesoTotal / this.generarTanda(cilindrada, peso).length
        return `El peso promedio de la tanda es de ${promedio} kg`
    },
    //Agregar un método listarPodio, que calcule el podio en función del puntaje de los pilotos y muestre el resultado por consola.
    //El método recibirá como parámetro un array de autos. Los mismos deberán ser generados con generarTanda.
    //El método ordenará por puntaje los autos recibidos.
    //El método imprimirá por consola los tres primeros puestos.
    listarPodio: function(tanda){
        let tandaOrdenada = tanda.sort((a, b) => b.puntaje - a.puntaje)
        return `Primer puesto: ${tandaOrdenada[0].piloto} con ${tandaOrdenada[0].puntaje} puntos. Segundo puesto: ${tandaOrdenada[1].piloto} con ${tandaOrdenada[1].puntaje} puntos. Tercer puesto: ${tandaOrdenada[2].piloto} con ${tandaOrdenada[2].puntaje} puntos.`
    } 


}

//console.log(carrera.autos);
//console.log(carrera.autosHabilitados());
//carrera.listarAutos(leerAutosJSON)
//console.log(carrera.buscarPorPatente("JQK433"));
//console.log(carrera.filtrarPorCilindrada(1500));
//console.log(carrera.ordenarPorVelocidad());
//console.log(carrera.habilitarVehiculo("ODS523"));
//console.log(carrera.generarTanda(1500, 2000));
//console.log(carrera.pesoPromedio(1500, 2000));
console.log(carrera.listarPodio(carrera.generarTanda(1500, 2000)));

//https://drive.google.com/file/d/1RgyRmy99t-HWSLPS1yuOvVajzhkuZzek/view

//FALTA EL PUNTO DE habilitarVehiculo !!!! (EL QUE TENGO QUE PASAR A JSON)