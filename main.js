const mostrarProductos = async () => {
    const contenedorProductos = document.getElementById('producto-contenedor');

    const productos = await obtenerProd();

    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `<div class="card" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">Descripción:  ${producto.desc}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id=boton${producto.id}>Comprar<br>${producto.nombre}</button>
                            </div>
                        </div>`
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', () => {
            carritoIndex(producto.id)
            swal(`Se agregó ${producto.nombre} al carrito`)
        })

    })
}
mostrarProductos();
