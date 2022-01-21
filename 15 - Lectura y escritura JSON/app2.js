const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

//A - Utilizar un método de array que retorne los primeros 5 profesionales del arrayProfesionales. No debe modificar el array original. Guardar el
//    resultado de este método en una variable primerosCincoProfesionales, luego hacer la impresión de la misma.
let primerosCincoProfesionales = arrayProfesionales.slice(0,5);
//console.log(primerosCincoProfesionales);

//B - Utilizar un método de array que permita reemplazar el profesional con ID 14 por un nuevoProfesional. Es decir, se modificará el arrayProfesionales.
//    Luego, imprimirlo para verificar el cambio.
const nuevoProfesional =  
    {identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50}
    arrayProfesionales.splice(14, 1, nuevoProfesional)
//console.log(arrayProfesionales);

//C - Necesitamos un método para ordenar el arrayProfesionales según la propiedad honorarioConsulta de menor a mayor. 
//    Mostrar el array ordenado.
arrayProfesionales.sort((a,b) => a.honorarioConsulta - b.honorarioConsulta)
console.log(arrayProfesionales);