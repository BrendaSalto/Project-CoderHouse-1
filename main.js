    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");

    function saludar(){
        while(nombre === "" || !isNaN(nombre) || apellido=== "" || !isNaN(apellido)){
            nombre = prompt("Por favor ingrese su nombre");
            apellido = prompt("Por favor ingrese su apellido");
        }
        alert("Hola "+nombre.toUpperCase()+" "+apellido.toUpperCase()+" bienvenido/a a SalAcolchados");
    }
    saludar()

    class Acolchado {
        constructor (id, tipoDeAcolchados, precioDeAcolchado){
            this.id = id,
            this.tipo = tipoDeAcolchados,
            this.precio = Number(precioDeAcolchado)
      }
    };

    const arrayAcolchados = [];
    const tipo1 = new Acolchado(1, "Infantiles", 500);
    const tipo2 = new Acolchado(2, "Adolescentes", 700);
    const tipo3 = new Acolchado(3, "Adultos", 900);

    arrayAcolchados.push(tipo1,tipo2,tipo3);

    const ordenarMenorMayor = () => {
        arrayAcolchados.sort((a,b) => a.precio - b.precio);
        mostrarListaOrdenada();
    }
    const ordenarMayorMenor = () => {
        arrayAcolchados.sort((a,b) => b.precio - a.precio);
        mostrarListaOrdenada();
    }
    const mostrarListaOrdenada = () => {
        const array = [];
        arrayAcolchados.forEach(acolchado => array.push(acolchado.tipo+" $"+acolchado.precio));
        alert("Lista de precios: "+"\n"+array.join("\n"));
    }

    const seleccionarTipo = () => {
        let otroTipoDeAcolchado = false;
        let productoTipo = 0;
        let cantidadAcolchados = 0;
        let total = 0;

        do {
            productoTipo = prompt ("¿Qué tipo de acolchado deseas comprar? : \n1) Infantiles\n2) Adolescentes\n3) Adultos");
            console.log("El tipo de producto elegido es: "+productoTipo+" (1:Infantiles - 2:Adolescentes - 3:Adultos)");

            productoCantidad = parseInt(prompt("¿Cuántos deseas comprar?"));
            console.log("La cantidad elegida fue de: "+productoCantidad);

            while (Number.isNaN(productoCantidad)){
                productoCantidad = parseInt(prompt("¿Cuántos deseas comprar?"));
            };

            const acolchados = arrayAcolchados.find( acolchados => acolchados.id == productoTipo);
            console.log(arrayAcolchados);

            if (acolchados) {
                total += acolchados.precio * productoCantidad;
            } else {
                alert ("El tipo de acolchado ingresado no se encuentra.")
            }
            
            otroProducto=confirm(nombre.toUpperCase()+" ¿Querés seguir comprando?");
        } while(otroProducto);
        
        obtenerDescuento(total);
};


const obtenerDescuento = (total) => {
    if (total >= 5000) {
        total = total * 0.80;
        alert('¡Tenes un descuento del 20%!');
    }
    obtenerPrecioDeEnvio(total);
};


const obtenerPrecioDeEnvio = (total) => {
   // let pago = parseInt(prompt("¿Con cuánto abonas?")); --> para desarrollar, todavía no lo pude implementar
    let confirmacion = confirm('¿Queres envío a domicilio?');
    if (confirmacion && total >= 2000 /*&& total <= pago*/) {
        alert("Tenes envío gratis. El total de tu compra es: $"+total+".-");
        //alert("Tu vuelto es:"+pago-total+".-");
        alert("¡QUE DISFRUTES TU COMPRA!");
    } else if (confirmacion && total < 2000 && total !== 0 /*&& total<pago*/) {
        total = total + 800;
        alert('El envío cuesta $800. El total de tu compra es: $'+total+".-");
        alert("¡QUE DISFRUTES TU COMPRA!");
    } else {
        alert('Deberá retirarlo en el local. El total de la compra es: $'+total+".-");
        alert("¡QUE DISFRUTES TU COMPRA!");
    }
}

const comprar = () => {
    if (confirm(nombre.toUpperCase()+' ¿Querés ordenar la lista de productos del más barato al más caro?')) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
    seleccionarTipo();
};

comprar();
