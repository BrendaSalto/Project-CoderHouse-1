const carritoDeCompras = []

const carritoIndex = (productoId) => {

    const contenedorCarrito = document.getElementById('carrito-contenedor');

    const renderProductoCarrito = () => {
        let producto = productos.find(producto => producto.id == productoId);
        carritoDeCompras.push(producto);

        producto.cantidad = 1;

        let div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button onclick id="eliminar(${producto.id})"class="boton-eliminar">Eliminar ${producto.nombre}</button>`;

        contenedorCarrito.appendChild(div)
    }
    renderProductoCarrito()
    guardarCarritoStorage(carritoDeCompras);
};
const pintarCarrito = (carrito) => {
    const contenedorCarrito = document.getElementById('carrito-contenedor');

    carrito.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                        <button onclick id="eliminar${producto.id} value='${producto.Id}' class="boton-eliminar">Eliminar ${producto.nombre}</button>`;
        contenedorCarrito.appendChild(div)
    });
};
const boton = document.getElementById("vaciarCarrito");
boton.addEventListener('click', () => {
    carritoDeCompras.remove();
})