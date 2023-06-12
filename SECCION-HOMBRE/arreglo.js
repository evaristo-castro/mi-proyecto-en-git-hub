// ARREGLO
const infoProductos = [
        {
            titulo: 'Rolex',
            imagen: '/Image/hombres/reloj/uno.PNG',
            costo:'400000',
            boton: 'button',
            cantidad: 5
        },
        {
            titulo: 'casio',
            imagen: '/Image/hombres/reloj/dos.PNG',
            costo: '$3.000.000',
            boton:'ver mas',
            cantidad: 1
        },
        {
            titulo: 'Monday',
            imagen: '/Image/hombres/reloj/tres.PNG',
            costo: '$2.000.000',
            boton:'ver mas',
            cantidad: 1
        },
        {
            titulo: 'QQ',
            imagen: '/Image/hombres/reloj/cuatro.PNG',
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

        // Asignar una clase al elemento

        tarjeta.className = 'card bg-body text-center text-black w-25';
        tarjetaHeader.className = 'card-header';
        titulo.className ='card-title';
        imagen.className = 'clase-img';
        costo.className = 'clase-costo';
        //asignar valores a los elementos
        titulo.textContent = producto.titulo;
        imagen.src=producto.imagen;
        costo.textContent=producto.costo;
        boton.boton =producto.boton;
        cantidad.textContent =producto.cantidad;

        // agregar elementos  a la tarjeta
        tarjetaHeader.appendChild(titulo);
        tarjeta.appendChild(tarjetaHeader);
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(costo);
        tarjeta.appendChild(boton);
        tarjeta.appendChild(cantidad);


        // agregar la tarjeta al contenedor
        cardDos.appendChild(tarjeta);

}
)
