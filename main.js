    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");

    function saludar(){
        alert("Hola "+nombre.toUpperCase()+" "+apellido.toUpperCase()+" bienvenido/a a SalAcolchados");
        while(nombre === "" || apellido=== ""){
            nombre = prompt("Por favor ingrese su nombre");
            apellido = prompt("Por favor ingrese su apellido");
        }
    }
    saludar()

    class Acolchado {
        constructor (id, tipoDeAcolchados, precioDeAcolchado){
            this.id = id,
            this.tipo = tipoDeAcolchados,
            this.precio = Number(precioDeAcolchado)
      }
    };

    //genero un array vacio
    const arrayAcolchados = [];

    //creo los productos
    const tipo1 = new Acolchado(1, "Infantiles", 500);
    const tipo2 = new Acolchado(2, "Adolescentes", 700);
    const tipo3 = new Acolchado(3, "Adultos", 900);

    //genero un nuevo array con los productos
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
            console.log("El tipo de producto elegido es: "+productoTipo+" (1:Infantiles - 2:Adolescentes - 3:Adultos)"); //imprimo para ver qué almacena

            productoCantidad = parseInt(prompt("¿Cuántos deseas comprar?"));
            console.log("La cantidad elegida fue de: "+productoCantidad); //imprimo en consola para ver qué va almacenando

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
            
            otroProducto=confirm(nombre+" ¿Querés seguir comprando?");
        } while(otroProducto);
        
        obtenerDescuento(total);

};

const obtenerDescuento = (total) => {
    if (total >= 5000) {
        total = total * 0.80;
        alert('Tenes un descuento del 20%!');
    }
    obtenerPrecioDeEnvio(total);
};

const obtenerPrecioDeEnvio = (total) => {
    let confirmacion = confirm('¿Queres envío a domicilio?');
    if (confirmacion && total >= 2000) {
        alert('Tenes envío gratis. El total de tu compra es: $'+total+".-");
        alert("¡QUE DISFRUTES TU COMPRA!");
    } else if (confirmacion && total < 2000 && total !== 0) {
        total = total + 800;
        alert('El envío cuesta $800. El total de tu compra es: $'+total+".-");
        alert("¡QUE DISFRUTES TU COMPRA!");
    } else {
        alert('El total de la compra es: $'+total+".-");
        alert("¡QUE DISFRUTES TU COMPRA!");
    }
}

const comprar = () => {
    if (confirm(nombre+' ¿Querés ordenar la lista de productos del más barato al más caro?')) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
    seleccionarTipo();
};

comprar();

//     function seleccionarTipo() {
//         let  tipoDeAcolchadosId;

//         do{
//             tipoDeAcolchadosId = prompt("¿Qué tipo de acolchado deseas comprar? : \n1) Infantiles\n2) Adolescentes\n3) Adultos")
        
//         }while( tipoDeAcolchadosId != 1 &&  tipoDeAcolchadosId !=2 &&  tipoDeAcolchadosId !=3)

//         switch(tipoDeAcolchadosId){
//             case "1":
//             return "Infantiles";
//             case "2":
//             return "Adolescentes";
//             case "3":
//             return "Adultos";
//         }
//     }

//     function validarPrecio(tipo) {
//         if(tipo === "Infantiles"){
//             return 500;
//         }else if(tipo === "Adolescentes"){
//             return 700;
//         }else if(tipo === "Adultos"){
//             return 900
//         }
// }

//     function cobrarAcolchado (tipo,precio){
//     alert("Usted eligió : "+tipo.toUpperCase()+".\n\n\nEl precio del acolchado es de $"+precio+" (+ el costo de envío de $200 para compras menores a $700.-)");

//     let pago = prompt("¿Con cuánto abona?");

//     if(precio < pago ){
//         alert("Su vuelto es $"+(pago - precio))
//     }
//     else if(precio == pago){
//         alert("Está pagando exacto ¡Muchas gracias!");
//     }else{
//         alert("Su pago no es suficiente");
//             do{
//                 pago = prompt("Debe ingresar un monto igual o mayor al valor de su compra")
//                 }
//                 while(precio > pago);
//     }
//     }

//     let tipoAcolchado =  seleccionarTipo();
//     let precioAcolchado = validarPrecio(tipoAcolchado);
//     cobrarAcolchado(tipoAcolchado,precioAcolchado)

//     function envio() {
//         if (precioAcolchado >= 700) {
//             alert("El costo del envío es gratuito.\n\n¡QUE DISFRUTE SU COMPRA!");
//         } else {
//             alert("El costo del envío es de $200. Deberá abonarlo al recibir el producto.\n\n¡Muchas gracias por su compra!");
//         }
//     }
//     envio();