/*Partimos de un objeto ya creado con una propiedad departamentos, la cual será nuestra base de datos, en función de ello deberemos realizar las siguientes características de nuestra app:
1)Agregar un método departamentosDisponibles que permita consultar disponibilidad, es decir, que devuelva una lista de los departamentos disponibles.
Resultado esperado: un array con los departamentos disponibles únicamente.
2)Agregar un método buscarPorId que permita buscar el departamento en función de su identificador.
-Este método debe devolver un departamento en caso de encontrar el identificador.
Resultado esperado: un objeto, es decir, un único departamento que coincida con el id ingresado por parámetro.
3)Agregar un método buscarPorPrecio que permita filtrar los departamentos disponibles, siempre y cuando el precio sea menor o igual al precio enviado como argumento. 
-Este método debe usar departamentosDiponibles.
-Este método debe devolver una lista de departamentos.
Resultado esperado: un array con departamentos que sean menores al	precio indicado por parámetro.
4)Agregar un método precioConImpuesto que permita realizar un incremento del precioAlquiler a todos los departamentos, tanto disponibles como no disponibles, según un porcentaje que se envía como argumento al momento de la invocación del método. 
ejemplo : PrecioConImpuesto(10), deberá incrementar el precioAlquiler de Todos los departamentos un 10%
Resultado esperado: un array de departamentos con la propiedad precioAlquiler con el impuesto sumado;
5)Agregar un método buscarMenorPrecio que retorne al departamento con el menor precio de alquiler.
-El método no recibe ningún parámetro.
Deberá iterar sobre los departamentos y retornar al departamento con el menor valor en su propiedad precioAlquiler.
6)Agregar un método alquilerPromedio que permita consultar el promedio de precio de alquiler de los departamentos disponibles
-El método debe reutilizar departamentosDisponibles.
Debe retornar un mensaje indicando el promedio de alquiler calculado.
7)Agregar un método que permita alquilar un departamento. 
Este método recibe por parámetro el id del departamento y actualiza la propiedad del departamento en false.
retorna un mensaje: “departamento con id: {{2}} está alquilado”
Resultado esperado: que quede actualizada la propiedad de departamentos de la inmobiliaria, donde el departamento que alquilo no está disponible.
8)Agregar un método filtrarPetFriendly que permita filtrar los departamentos que admiten mascotas.
retorna un array con los departamentos que aceptan mascotas
9)Agregar un método rebajasPorNoAlquiler que realice un descuento del 10% a los que no estén alquilados. 
retorna un array con departamentos disponibles con el precio de alquiler rebajado en un 10%.
10)Agregar un método buscarPorPropietarios que permita filtrar los departamentos según su propietario.
Recibe como parámetro un string con el nombre de un propietario
Este método debe devolver una lista de departamentos que tengan como propietario al nombre que pasamos por parámetro. Puede ser único propietario o en conjunto.
*/

const inmobiliaria = {
    departamentos: [
      {
        id: 1,
        propietarios: "Luis Perez",
        cantidadHabitacion: 2,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 2395.8,
      },
      {
        id: 2,
        propietarios: "Luis Perez y María Martinez",
        cantidadHabitacion: 1,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 1765,
      },
      {
        id: 3,
        propietarios: "Laura García",
        cantidadHabitacion: 2,
        disponible: false,
        aceptaMascotas: false,
        cantidadPersonas: 4,
        precioAlquiler: 3993,
      },
      {
        id: 4,
        propietarios: "Julieta Tols",
        cantidadHabitacion: 1,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 1996.5,
      },
      {
        id: 5,
        propietarios: "Julieta Tols y Pablo Groming",
        cantidadHabitacion: 1,
        disponible: false,
        aceptaMascotas: false,
        cantidadPersonas: 1,
        precioAlquiler: 11979,
      },
      {
        id: 6,
        propietarios: "Pablo Groming",
        cantidadHabitacion: 2,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 3,
        precioAlquiler: 4658.5,
      },
      {
        id: 7,
        propietarios: "Luis Perez",
        cantidadHabitacion: 2,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 3,
        precioAlquiler: 3327.5,
      },
      {
        id: 8,
        propietarios: "Julieta Tols",
        cantidadHabitacion: 3,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986,
      },
      {
        id: 9,
        propietarios: "Julieta Tols y Laura García",
        cantidadHabitacion: 3,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986,
      },
      {
        id: 10,
        propietarios: "Julieta Tols y Laura García",
        cantidadHabitacion: 3,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986,
      },
      {
        id: 11,
        propietarios: "Luis Perez",
        cantidadHabitacion: 3,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986,
      },
      {
        id: 12,
        propietarios: "Juan Pablo Martinez",
        cantidadHabitacion: 3,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 4,
        precioAlquiler: 7986,
      },
      {
        id: 13,
        propietarios: "Juan Pablo Martinez",
        cantidadHabitacion: 2,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 2000,
      },
      {
        id: 14,
        propietarios: "Juan Pablo Martinez",
        cantidadHabitacion: 1,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 2,
        precioAlquiler: 3993,
      },
      {
        id: 15,
        propietarios: "Martín Gutierrez y José Torres",
        cantidadHabitacion: 0,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 798.6,
      },
      {
        id: 16,
        propietarios: "Martín Gutierrez y José Torres",
        cantidadHabitacion: 0,
        disponible: false,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 798.6,
      },
      {
        id: 17,
        propietarios: "Martín Gutierrez y José Torres",
        cantidadHabitacion: 0,
        disponible: true,
        aceptaMascotas: true,
        cantidadPersonas: 1,
        precioAlquiler: 665.5,
      },
    ],

  departamentosDisponibles: function () {
    let disponibles = [];
    for (let i = 0; i < this.departamentos.length; i++) {
      if (this.departamentos[i].disponible === true) {
        disponibles.push(this.departamentos[i]);
      }
    }
    return disponibles;
  },

  buscarPorId: function (id) {
    for (let i = 0; i < this.departamentos.length; i++) {
      if (id === this.departamentos[i].id) {
        return this.departamentos[i];
      }
    }
  },

  buscarPorPrecio: function (precio) {
    let disponibles = this.departamentosDisponibles();
    let filtrados = [];
    for (let i = 0; i < disponibles.length; i++) {
      if (disponibles[i].precioAlquiler <= precio) {
        filtrados.push(disponibles[i]);
      }
    }
    return filtrados;
  },

  precioConImpuesto: function (porcentaje) {
    let factor = porcentaje / 100 + 1;
    for (let i = 0; i < this.departamentos.length; i++) {
      this.departamentos[i].precioAlquiler = Number(
        (this.departamentos[i].precioAlquiler * factor).toFixed(2)
      );
    }
    return this.departamentos;
  },
  buscarMenorPrecio: function(){
      let precioMenor = this.departamentos[0]
      for(let i=0; i<this.departamentos.length; i++ ){
          if(precioMenor.precioAlquiler > this.departamentos[i].precioAlquiler){
              precioMenor = this.departamentos[i]
          }
      }
      return precioMenor
  },
  alquilerPromedio: function(){
      let disponibles = this.departamentosDisponibles()
      let promedio = 0
      for(let i = 0; i < disponibles.length; i++){
          promedio = promedio + disponibles[i].precioAlquiler
      }
      promedio = promedio / disponibles.length
      return `El promedio de alquiler es ${promedio}`
  },
  alquilarDepartamento: function(id){
      let buscarDepto = this.buscarPorId(id)
      buscarDepto.disponible = false
      return `Departamento con id ${buscarDepto.id} está alquilado`
  },
  filtrarPetFriendly: function(){
      deptoPetFriendly = []
      for(let i = 0; i<this.departamentos.length; i++){
          if(this.departamentos[i].aceptaMascotas === true){
              deptoPetFriendly.push(this.departamentos[i]) 
          }
      }
      return deptoPetFriendly
  },
  rebajasPorNoAlquiler: function() {
      let deptosRebajados = []
      let deptosDisponibles = this.departamentosDisponibles()
      for(let i = 0; i < deptosDisponibles.length; i++){
          deptosDisponibles[i].precioAlquiler = deptosDisponibles[i].precioAlquiler - (10 * deptosDisponibles[i].precioAlquiler / 100)
          deptosRebajados.push(deptosDisponibles[i])
      }
      return deptosRebajados
  },
  buscarPorPropietarios: function(propietario){
      let propietarioDeDptos = []
    for(let i = 0; i < this.departamentos.length; i++){
        if(this.departamentos[i].propietarios.indexOf(propietario) != -1){
            propietarioDeDptos.push(this.departamentos[i])
        }
    }
    return propietarioDeDptos

  }

};
/*console.log(inmobiliaria.departamentosDisponibles())
console.log(inmobiliaria.buscarPorId(5))
console.log(inmobiliaria.buscarPorPrecio(5000))
console.log(inmobiliaria.precioConImpuesto(20))
console.log(inmobiliaria.buscarMenorPrecio())
console.log(inmobiliaria.alquilerPromedio())
console.log(inmobiliaria.alquilarDepartamento(14))
console.log(inmobiliaria.filtrarPetFriendly())
console.log(inmobiliaria.rebajasPorNoAlquiler())*/
console.log(inmobiliaria.buscarPorPropietarios("Luis Perez"))