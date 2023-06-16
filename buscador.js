function fBuscador(){
            //vincular input a la variable infoInput con ID, buscar, con .value se obtiene el valor
            
            const infoInput = document.getElementById('buscar').value;
          
                    const datos = [
                             { link: '/SECCION-HOMBRE/hombre.html', 
                             titulo:'Hombres'
                             },
                             { link:'/CONTACTO/contacto.html', 
                             titulo:'Contacto'
                             }
                    ]
                // instancia de la clase y se envia los datos del arreglo
                const buscador = new Buscador(datos);
                // ejecutamos el metodo  y enviamos lo del input para comparar con filter
                const resultados = buscador.buscar(infoInput);
            
              
              
            //mostrarInformacion(resultados);
            redireccion(resultados); 
    
}

// crear una funcion para mostrar en la web 


function mostrarInformacion(informacion){
     // accedemos al div que muestra informacion 
     const divMostrarInfo = document.getElementById('mostrarinfo');
     for( let i = 0 ; i<informacion.length; i++){
           const objeto = informacion[i];
           const link = document.createElement('a');
           link.textContent =objeto.titulo;
           link.href = objeto.link;
            
           divMostrarInfo.appendChild(link);
           
     }

      
}
function redireccion(paso){
  for( let i = 0 ; i<paso.length; i++){
    const objeto = paso[i];
         
    console.log(objeto);
   window.location.href = objeto.link; 
}
   


}
// buscar con enter en input
// Obtén una referencia al elemento input
const input = document.querySelector('#buscar');

// Agrega el event listener para el evento "keydown"
input.addEventListener('keydown', function(event) {
  // Verifica si la tecla presionada es "Enter"
  if (event.keyCode === 13) {
    // Realiza las acciones que deseas realizar
    fBuscador();
  }
});







