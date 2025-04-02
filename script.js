

// productos
const productos = [
    { id: 1, nombre: 'iphone 8', precio: 250 },
    { id: 2, nombre: 'iphone 11', precio: 500 },
    { id: 3, nombre: 'iphone 12', precio: 700 },
    { id: 4, nombre: 'iphone 13', precio: 1100 },
];

let carrito = []
let total = 0;

// funcion para mostrar los productos y seleccionar 
function mostrarProductos() {
    let mensaje = "Elige un producto para agregar al carrito:\n";
    productos.forEach(producto => {
        mensaje += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    });
    mensaje += "0. Finalizar compra";

    let seleccion = parseInt(prompt(mensaje));

    if (isNaN(seleccion)) {
        alert("Por favor, ingresa numeros validos.");
        return mostrarProductos();
    }

    switch (seleccion) {
        case 0:
            return finalizarCompra();
        case 1:
        case 2:
        case 3:
        case 4:
            return agregarAlCarrito(seleccion);
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            alert("Producto no disponible por el momento.");
            return mostrarProductos();
        default:
            alert("Producto no encontrado.");
            return mostrarProductos();
    }
}

// funcion para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    carrito.push(producto);
    total += producto.precio;
    alert(`${producto.nombre} a sido agregado a tu carrito. Total: $${total}`);
    mostrarProductos();
}

// funcion para finalizar la compra 
function finalizarCompra() {
    let resumen = carrito.length > 0 ? "Tu compra a sido completada:\n" : "No agregaste ningun producto.";
    carrito.forEach(producto => {
        resumen += `${producto.nombre} - $${producto.precio}\n`;
    });
    resumen += `Total a pagar: $${total}`;
    alert(resumen);

    seguirComprando()
}

//funcion para seguir comprando 
function seguirComprando() {
    let respuesta = prompt("¿Queres seguir comprando? (si/no)").toLowerCase();
    if (respuesta === "si") {
        mostrarProductos();
    } else if (respuesta === "no") {
        alert("Gracias por tu compra!");
    } else {
        alert("Respuesta no valida. Por favor, responde 'si' o 'no'.");
        seguirComprando();
    }
}

mostrarProductos();