// Definimos una clase"
class Libro {
    // Constructor para inicializar propiedades

    constructor(titulo, autor, genero, leido) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.leido =leido;
    }

    marcarLeido(){
        this.leido = true
        console.log("ha sido leido")
    }

    marcarNoLeido(){
        this.leido = false
        console.log("ha sido leido")
    }
   
    informacion() { 
        const estadoLeido = this.leido ? "Sí" : "No";
        console.log ( `Tiutlo: ${this.titulo}, Autor: ${this.autor}, Genero: ${this.genero}, Leido: ${estadoLeido}`)
    }
 }
    const libro1 = new Libro("Habitos atomicos", "James Clear", "autoayuda");
    const libro2 = new Libro("El arte de perderse", "Rebecca Solnit", "ficcion");

    libro1.marcarLeido();
    libro1.informacion();
    libro2.informacion();
    