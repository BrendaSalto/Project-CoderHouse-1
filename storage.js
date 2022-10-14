const guardarCarritoStorage =  (carritoDeCompras) => {
    localStorage.setItem('carrito', JSON.stringify(carritoDeCompras));
};
const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'));
    return carritoStorage; //return para poder usar esta funcion en cualquier parte
};

if  (localStorage.getItem('carrito')) {
    const carrito = obtenerCarritoStorage();
    pintarCarrito(carrito);
}