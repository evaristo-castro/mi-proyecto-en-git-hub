
function validar(evento){
    // hay que evitar que se refresque la pagina con preventEvent
 evento.preventDefault();
 const miNombre = document.getElementById('idnombre').value ;
 const miApellido = document.getElementById('idapellido').value ;
 const miCorreo = document.getElementById('idcorreo').value ;
 const miMensaje = document.getElementById('idmensaje').value ;
 const miFecha = document.getElementById('idfecha').value ;

 const miMensajeInvalido = document.getElementById('mensajeinvalido');
 const miObjeto = new Formulario (miNombre, miApellido,miCorreo,miMensaje,miFecha, miMensajeInvalido);

miObjeto.validarNombres();
miObjeto.validarApellido();
miObjeto.validarCorreo();
miObjeto.validarmensaje();
miObjeto.validarfecha();

console.log("evento", evento);
}



