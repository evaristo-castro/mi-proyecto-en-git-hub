// se crea la clase buscador
class Buscador{
       // crear el construcctor q recibe los datos   
    constructor(datos){
        this.informacion = datos;

       }
    // se crea un metodo 
    buscar(busquedaUsuario){
           const resultado = this.informacion.filter(info => info.titulo.toLowerCase().includes(busquedaUsuario.toLowerCase()) )
      
         return resultado ;
           
   
    }
    
}


