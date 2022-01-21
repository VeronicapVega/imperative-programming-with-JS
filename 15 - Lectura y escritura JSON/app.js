const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A - Utilizar un método de array que permita recorrer todo el arrayProfesionales proporcionado en el archivo app.js. 
//    En cada iteración realizaremos la impresión de dos propiedades de cada objeto en cuestión: nombre - especialidad.
arrayProfesionales.forEach(profesional => console.log(profesional.nombre + " - " + profesional.especialidad)) 

//B - Utilizar un método de array que permita recorrer todo el arrayProfesionales y modificar de cada uno la propiedad honorarioConsulta, 
//    incrementado el valor de la misma en un 5%. Luego imprimir el arrayProfesionales para ver la modificación realizada.
arrayProfesionales.forEach(function(profesional){
    profesional.honorarioConsulta = profesional.honorarioConsulta + (profesional.honorarioConsulta * 0.05)
})
console.log(arrayProfesionales)

//C - Utilizar un método de array que permita recorrer todo el array de profesionales y retornar profesionales deshabilitados. 
//    Es decir, filtrar por la propiedad estaHabilitado cuando esta sea false. 
//    Guardar el retorno de este filtro en una variable profesionalesDeshabilitados e imprimirla para verificar los objetos filtrados.
let profesionalesDeshabilitados = arrayProfesionales.filter(profesional => profesional.estaHabilitado === false)
console.log(profesionalesDeshabilitados);

//D -  Utilizar un método de array que permita recorrer todo el array de profesionales y retornar profesionales habilitados. 
//     Es decir, filtrar por la propiedad estaHabilitado cuando esta sea true. 
//     Guardar el retorno de este filtro en una variable profesionalesHabilitados e imprimirla para verificar los objetos filtrados.
let profesionalesHabilitados = arrayProfesionales.filter(profesional => profesional.estaHabilitado === true)
console.log(profesionalesHabilitados);

//E - Utilizar un método de array que permita recorrer todo el array de profesionales y retornar profesionales cuya especialidad sea “Arquitecto”. 
//    Es decir, filtrar por la propiedad especialidad cuando esta sea igual  a “Arquitecto”. 
//    Guardar el retorno de este filtro en una variable arquitectos e imprimirla para verificar los objetos filtrados.
let arquitectos = arrayProfesionales.filter(profesional => profesional.especialidad === "Arquitecto")
console.log(arquitectos);  

//F - Utilizar un método de array que permita recorrer todo el array y modificar de cada uno la propiedad estaHabilitado a true. 
//    Se recomienda utilizar la variable obtenida en el punto C, es decir la variable profesionalesDeshabilitados. 
//    Imprimir el resultado de este método.
profesionalesDeshabilitados.forEach(profesional => profesional.estaHabilitado = true)
console.log(profesionalesDeshabilitados);

//G - Necesitamos obtener un valor que nos indique la cantidad de consultas atendidas por todos los profesionales. 
//    Para ello utilizaremos un método de array que nos facilite esto. Asignamos el retorno de este método en una variable llamada cantidadTotalConsultas, 
//    luego debemos imprimirla.
let cantidadTotalConsultas = arrayProfesionales.reduce(function(total, profesional){
    return total = total + profesional.cantidadConsultas
},0)
console.log(cantidadTotalConsultas);

//H - Utilizar un método de array que nos permita retornar un nuevo array de objetos literales únicamente con las propiedades nombre, especialidad y 
//    recaudación que será el resultado de multiplicar las propiedades cantidadConsulta * honorarioConsulta. 
//    Asignar el retorno de este método a una variable arrayRecaudacion e imprimirla. 
let arrayRecaudacion = arrayProfesionales.map(function (profesional){
    return {
        nombre: profesional.nombre,
        especialidad: profesional.especialidad,
        recaudacion: profesional.cantidadConsultas * profesional.honorarioConsulta
    }
})
console.log(arrayRecaudacion);
