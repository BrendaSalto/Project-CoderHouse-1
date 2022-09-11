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

    function seleccionarTipo() {
        let  tipoDeAcolchadosId;

        do{
            tipoDeAcolchadosId = prompt("¿Qué tipo de acolchado deseas comprar? : \n1) Infantiles\n2) Adolescentes\n3) Adultos")
        }while( tipoDeAcolchadosId != 1 &&  tipoDeAcolchadosId !=2 &&  tipoDeAcolchadosId !=3)

        switch(tipoDeAcolchadosId){
            case "1":
            return "Infantiles";
            case "2":
            return "Adolescentes";
            case "3":
            return "Adultos";
        }
    }

    function validarPrecio(tipo) {
        if(tipo === "Infantiles"){
            return 500;
        }else if(tipo === "Adolescentes"){
            return 700;
        }else if(tipo === "Adultos"){
            return 900
        }
}

    function cobrarAcolchado (tipo,precio){
    alert("Usted eligió : "+tipo.toUpperCase()+".\n\n\nEl precio del acolchado es de $"+precio+" (+ el costo de envío de $200 para compras menores a $700.-)");

    let pago = prompt("¿Con cuánto abona?");

    if(precio < pago ){
        alert("Su vuelto es $"+(pago - precio))
    }
    else if(precio == pago){
        alert("Está pagando exacto ¡Muchas gracias!");
    }else{
        alert("Su pago no es suficiente");
            do{
                pago = prompt("Debe ingresar un monto igual o mayor al valor de su compra")
                }
                while(precio > pago);
    }
    }

    let tipoAcolchado =  seleccionarTipo();
    let precioAcolchado = validarPrecio(tipoAcolchado);
    cobrarAcolchado(tipoAcolchado,precioAcolchado)

    function envio() {
        if (precioAcolchado >= 700) {
            alert("El costo del envío es gratuito.\n\n¡QUE DISFRUTE SU COMPRA!");
        } else {
            alert("El costo del envío es de $200. Deberá abonarlo al recibir el producto.\n\n¡Muchas gracias por su compra!");
        }
    }
    envio();