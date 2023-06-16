// ARREGLO
const infoProductos = [
        {
            titulo: 'Invicta',
            imagen: '/Image/hombres/reloj/invicta.png',
            costo:'400000',
            boton: 'Ver mas',
            cantidad: 5
        },
        {
            titulo: 'victorino',
            imagen: '/Image/hombres/reloj/victorino.PNG',
            costo: '$3.000.000',
            boton:'ver mas',
            cantidad: 1
        },
        {
            titulo: 'Tissot',
            imagen: '/Image/hombres/reloj/tissot.PNG',
            costo: '$2.000.000',
            boton:'ver mas',
            cantidad: 1
        },
        {
            titulo: 'Tissop',
            imagen: '/Image/hombres/reloj/tissot2.PNG',
            costo: '$3.000.000',
            boton:'ver mas',
            cantidad: 1
        }

];


let cardDos = document.getElementById("carddos")


infoProductos.forEach(function(producto)
        {
        console.log(producto);
        //crear los elementos
        
        var tarjeta = document.createElement('div');
        var titulo = document.createElement('h2');
        var imagen = document.createElement('img');
        var costo = document.createElement('p');
        var boton = document.createElement('button');
        var cantidad = document.createElement('p');

        var tarjetaHeader = document.createElement('div');
        var tarjetabody = document.createElement('div');
        var tarjetafooter = document.createElement('div');


        // Asignar una clase al elemento
       
        tarjeta.className = 'card bg-body text-center text-black w-25';
        tarjetaHeader.className = 'card-header';
        tarjetabody.className = 'card-body';
        tarjetafooter.className ='card-footer';

        titulo.className ='card-title';
        imagen.className = 'clase-img';
        costo.className = 'clase-costo';
        boton.className='btn btn-outline-primary';
        //asignar valores a los elementos
        titulo.textContent = producto.titulo;
        imagen.src=producto.imagen;
        costo.textContent=producto.costo;
        boton.textContent =producto.boton;
        cantidad.textContent =producto.cantidad;

        // agregar elementos  a la tarjeta
        tarjetaHeader.appendChild(titulo);
        tarjetabody.appendChild(imagen);
        tarjetabody.appendChild(costo);
        tarjetafooter.appendChild(boton);

        tarjeta.appendChild(tarjetaHeader);
        tarjeta.appendChild(tarjetabody);
        tarjeta.appendChild(tarjetafooter);

        
         
        
        


        // agregar la tarjeta al contenedor
        cardDos.appendChild(tarjeta);

}
)
