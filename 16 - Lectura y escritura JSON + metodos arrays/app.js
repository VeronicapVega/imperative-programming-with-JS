//Como primer paso necesitarás requerir él módulo lecturaEscritura y asignarlo a una variable para poder utilizar sus funcionalidades, 
//además de hacer la lectura del archivo departamentos.json
const archivos = require("./lecturaEscritura")
const arrayDepartamentos = archivos.leerJson("departamentos")

//console.log(arrayDepartamentos);

//Crear un objeto literal, que podemos llamar inmobiliaria, será nuestra representación de la inmobiliaria (valga la redundancia) 
//con su datos (propiedades) y sus funcionalidades (métodos).
const inmobiliaria = {
    //Agregar una propiedad llamada departamentos que contenga él arrayDepartamentos obtenido en el punto anterior. 
    departamentos: arrayDepartamentos,
    //Agregar un método buscarPorId que permita buscar un departamento en función de su id. Este método recibirá por parámetro un number que 
    //representa el id del departamento a buscar. En caso de encontrar un departamento con él id buscado, devolverá el objeto literal que lo representa.
    //En caso contrario devolverá undefinded
    buscarPorId: function(id){
        return this.departamentos.find(departamento => departamento.id === id)
    },
    //Agregar un método departamentosNoDisponibles que permite filtrar departamentos cuando su propiedad disponible sea igual a false, esto quiere 
    //decir que están alquilados. Este método devolverá un array con todos los departamentos que cumplan la condición mencionada en caso de no encontrar 
    // ningún departamento que cumpla con la condición, devolverá un array vacío
    departamentosNoDisponibles: function(){
        return this.departamentos.filter(depto => depto.disponible === false)
     },
    //Agregar un método departamentosDisponibles que permite filtrar departamentos cuando su propiedad disponible sea igual a true.
    //Este método devolverá un array con todos los departamentos que cumplan la condición mencionada en caso de no encontrar ningún	 
    //que cumpla con la condición, devolverá un array vacío
    departamentosDisponibles: function(){
        return this.departamentos.filter(depto => depto.disponible === true)
    },
    //Agregar un método filtrarPorAmbientes que permite filtrar departamentos, siempre y cuando su propiedad ambientes sea mayor o igual a una cantidad 
    //enviada como argumento. Este método recibirá por parámetro un number que represente la cantidad de  ambientes mínimo.
    //Este método devolverá un array con todos los departamentos que cumplan con la condición mencionada.
    //En caso de no encontrar ningún departamento que cumpla con la condición, devolverá un array vacío.
    filtrarPorAmbientes: function(ambientesMinimo){
        return this.departamentos.filter(deptos => deptos.ambientes >= ambientesMinimo)
    },
    //Agregar un método filtrarPorPrecio que permite filtrar departamentos, siempre y cuando su propiedad precioAlquiler sea menor o igual a el precio 
    //enviado como argumento. Este método recibirá por parámetro un number que represente él precioAlquiler máximo.
    //Este método devolverá un array con todos los departamentos que cumplan con la condición mencionada.
    //En caso de no encontrar ningún departamento que cumpla con la condición, devolverá un array vacío.
    //Este método debe usar departamentosDisponibles, para buscar incluir solamente aquellos departamentos que estén disponibles.
    filtrarPorPrecio: function(precio){
        return this.departamentosDisponibles().filter(deptos => deptos.precioAlquiler <= precio)
    },
    //Agregar un método rebajarPrecioAlquiler que modifique él valor de precioAlquiler de los departamentos No Alquilados.
    //Este método debe usar departamentosDisponibles, para buscar incluir solamente aquellos departamentos que estén disponibles, es decir, 
    //que no estén Alquilados. Este método recibirá por parámetro un number que represente él porcentaje que se desea rebajar a los departamentos 
    //no alquilados por ejemplo un 3%. Este método devolverá un array con todos los departamentos que sufrieron la modificación del precioAlquiler.
    //Este método debe realizar una persistencia de información, para esto utilizaremos él método escribirJson de nuestro objeto requerido en él primero punto.
    rebajarPrecioAlquiler: function(porcentaje){
        this.departamentosDisponibles().map(depto => depto.precioAlquiler = depto.precioAlquiler - (porcentaje * depto.precioAlquiler/100))
        return this.departamentosDisponibles()
    },
    //Agregar un método calcularRecaudación que calcule él valor que se depositará en caja tomando en cuenta él precioAlquiler de los departamentos 
    //alquilados. Este método devolverá un valor que represente la recaudación total. Este método debe usar departamentosNoDisponibles 
    //para buscar incluir solamente aquellos departamentos que estén no disponibles, es decir, Alquilados.
    calcularRecaudacion: function(){
        let recaudacion = this.departamentosNoDisponibles().reduce((suma, depto) => suma + depto.precioAlquiler ,0)
        return recaudacion
    },
    //Agregar un método ordenarPorPrecio que ordene los departamentos de menor a mayor según su precio. El método recibirá como parámetro un array de 
    //departamentos. Este método devolverá un array con todos los departamentos ordenados por precio.
    ordenarPorPrecio: function(deptos){
        let deptosOdenados = deptos.sort((a,b) => a.precioAlquiler - b.precioAlquiler)
        return deptosOdenados
    }

}
//console.log(inmobiliaria.buscarPorId(19));
//console.log(inmobiliaria.departamentosNoDisponibles());
//console.log(inmobiliaria.departamentosDisponibles());
//console.log(inmobiliaria.filtrarPorAmbientes(3));
//console.log(inmobiliaria.filtrarPorPrecio(40000));
//console.log(inmobiliaria.rebajarPrecioAlquiler(50));
//console.log(inmobiliaria.calcularRecaudacion());
console.log(inmobiliaria.ordenarPorPrecio(arrayDepartamentos));


