class Formulario{

constructor(nombres, apellido, email,mensaje, fecha, mensajeSpan){
    this.name = nombres ;
    this.apelli = apellido ;
    this.correo = email ;
    this.mensaj = mensaje ;
    this.fecha = fecha ;
    this.mensajSpan = mensajeSpan ;
    
    
}

validarNombres =() =>{
    
        
          const nombresRegex = /^[a-zA-Z\s']+$/;
        if(!this.name.match(nombresRegex)){
          //alert("nombre invalido");
          this.mensajSpan.textContent = "Favor Introdusca bien su nombre";
          
        }
        console.log('valido');

}
validarApellido =() =>{
        const apellidoRegex = /^[a-zA-Z\s']+$/;
        if(!this.apelli.match(apellidoRegex)){
        //alert("apellido invalido");
        this.mensajSpan.textContent = "Favor Introdusca bien su Apellido";
      }
}

validarCorreo =() =>{
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!this.correo.match(correoRegex)){
        alert("correo invalido");
        miMensajeInvalido.textContent = "Favor Introdusca bien su correo";
  }
}
validarmensaje =() =>{
        const mensajeRegex = /^[a-zA-Z0-9\s.,!?'"-]+$/;
        if(!this.mensaj.match(mensajeRegex)){
        alert("mensaje invalido");
        miMensajeInvalido.textContent = "Favor Introdusca bien su Mesaje";
  }
}
validarfecha =(cadena) =>{
        const fechaRegex = /^[a-zA-Z0-9\s.,!?'"-]+$/;
        if(!this.fecha.match(fechaRegex)){
        alert("Fecha invalida");
        miMensajeInvalido.textContent = "Favor Introdusca bien su Fecha";
      }
}



}