const bookstore = {
    libros: [
      {
        titulo: "Los Dias del Venado",
        autor: "Liliana Bodoc",
        editorial: "Debolsillo",
        fechaPublicacion: 2018,
        stock: 76,
        precio: 1399,
      },
      {
        titulo: "Los Dias de la Sombra",
        autor: "Liliana Bodoc",
        editorial: "Debolsillo",
        fechaPublicacion: 2018,
        stock: 29,
        precio: 1399,
      },
      {
        titulo: "Los Dias del Fuego",
        autor: "Liliana Bodoc",
        editorial: "Debolsillo",
        fechaPublicacion: 2018,
        stock: 65,
        precio: 1650,
      },
      {
        titulo: "El Silmarillion",
        autor: "J.r.r. Tolkien",
        editorial: "Minotauro",
        fechaPublicacion: 2010,
        stock: 7,
        precio: 2550,
      },
      {
        titulo: "Trilogia El Señor De Los Anillos",
        autor: "J.r.r. Tolkien",
        editorial: "Minotauro",
        fechaPublicacion: 2002,
        stock: 10,
        precio: 7770,
      },
      {
        titulo: "El Resplandor",
        autor: "Stephen King",
        editorial: "Debolsillo",
        fechaPublicacion: 2012,
        stock: 51,
        precio: 2599,
      },
      {
        titulo: "Doctor Sueño",
        autor: "Stephen King",
        editorial: "Debolsillo",
        fechaPublicacion: 2016,
        stock: 42,
        precio: 2599,
      },
      {
        titulo: "La Sombra",
        autor: "John Katzenbach",
        editorial: "Ediciones B",
        fechaPublicacion: 1995,
        stock: 85,
        precio: 2149,
      },
      {
        titulo: "Primera Persona Del Singular",
        autor: "Haruki Murakami",
        editorial: "Tusquets",
        fechaPublicacion: 2021,
        stock: 60,
        precio: 1790,
      },
      {
        titulo: "Fuego y Sangre",
        autor: "George r.r. Martin",
        editorial: "Plaza & Janes",
        fechaPublicacion: 2018,
        stock: 78,
        precio: 4449,
      },
    ],
    buscarPorTitulo: function(titulo){
        for(let i = 0; i < this.libros.length; i++){
            if(this.libros[i].titulo === titulo){
                return this.libros[i]
            }
        }
    },
    buscarPorAutor: function(autor){
        let librosDelAutor = []
        for(let i = 0; i < this.libros.length; i++){
            if(this.libros[i].autor === autor){
                librosDelAutor.push(this.libros[i])
            }
        }
        return librosDelAutor
    },
    filtrarPorPrecio: function(precio){
        let precioLibros = []
        for(let i = 0; i < this.libros.length; i++){
            if(this.libros[i].precio <= precio){
                precioLibros.push(this.libros[i])
            }
        }
        return precioLibros
    },
    modificarStock: function(titulo, cantStock){
        let tituloBuscado = this.buscarPorTitulo(titulo)
        tituloBuscado.stock = cantStock
        return tituloBuscado
    },
    precioPromedio: function(){
        let promedio = 0
        let sumatoria = 0
        for(let i = 0; i<this.libros.length; i++){
            sumatoria = sumatoria + this.libros[i].precio
        }
        promedio = sumatoria / this.libros.length
        return `El precio promedio de cada libro es de: $${promedio}`
    }


  };
  












  /***********************************/
  /*   ↧ Ejecución de consignas ↧    */
  /***********************************/
  //A
  //console.log(bookstore.buscarPorTitulo("Fuego y Sangre"))
  //console.log(bookstore.buscarPorTitulo("Doctor Sueño"))
  //B
  //console.log(bookstore.buscarPorAutor("Stephen King"))
  //console.log(bookstore.buscarPorAutor("Liliana Bodoc"))
  //C
  //console.log(bookstore.filtrarPorPrecio(2000))
  //console.log(bookstore.filtrarPorPrecio(4000))
  //D
  //console.log(bookstore.modificarStock("Fuego y Sangre", 20))
  //console.log(bookstore.modificarStock("Trilogia El Señor De Los Anillos", 60))
  //E
  console.log(bookstore.precioPromedio())
