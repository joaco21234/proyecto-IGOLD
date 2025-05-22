let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // gaurdar el carrito en localStorage
}

const cartBtn = document.querySelector('#cart-btn');
const cartPanel = document.querySelector('#cart-panel');
const closeCart = document.querySelector('#close-cart');
const checkoutBtn = document.querySelector('#checkout-btn');
const cartItems = document.querySelector('#cart-items');
const cartTotal = document.querySelector('#cart-total');
const clearCartBtn = document.querySelector('#clear-cart-btn');

function actualizarCarrito() {
    cartItems.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.textContent = `${item.nombre} (${item.cantidad}) - $${item.precio * item.cantidad}`;
        cartItems.appendChild(div);
        total += item.precio * item.cantidad;
    });

    cartTotal.textContent = `Total: $${total}`;
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


//mostrar el carrito
cartBtn.addEventListener('click', () => {
    actualizarCarrito();
    cartPanel.classList.add('show');
});

//borrar carrito
clearCartBtn.addEventListener('click', () => {
    if (carrito.length >= 1) {
        carrito = [];
        actualizarCarrito();
Swal.fire({
    icon: 'warning',
    title: 'Carrito eliminado',
    timer: 1300,
    showConfirmButton: false
});

} else {
Swal.fire({
    icon: 'info',
    title: 'El carrito está vacío',
    timer: 1300,
    showConfirmButton: false
});

    }
});

//cerrar
closeCart.addEventListener('click', () => {
    cartPanel.classList.remove('show');
});

//agregar productos desde cards
document.querySelectorAll('.agregar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const nombre = btn.getAttribute('data-nombre');
        const precio = parseFloat(btn.getAttribute('data-precio'));
        agregarAlCarrito(nombre, precio);
    });
});

function agregarAlCarrito(nombre, precio) {
    const productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    actualizarCarrito();
Swal.fire({
    icon: 'success',
    title: 'Producto agregado',
    text: `${nombre} se agregó al carrito`,
    timer: 1500,
    showConfirmButton: false
});

}


//finalizar compra
checkoutBtn.addEventListener('click', () => {
    const mensajeCompra = document.getElementById('mensaje-compra');

    if (carrito.length === 0) {
        Swal.fire({
    icon: 'info',
    title: 'Agrega productos al carrito',
    text: 'No puedes finalizar la compra sin productos',
    timer: 2700,
    showConfirmButton: false
});
;
        return;
    }

    let mensaje = 'Gracias por tu compra 😎<br><br>Productos comprados:<br>';
    Swal.fire({
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/190/190411.png',
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: 'Custom image',
    title: 'Compra realizada',
    timer: 2700,
    showConfirmButton: false
});
carrito.forEach(item => {
    mensaje += `- ${item.nombre} (${item.cantidad}) - $${item.precio * item.cantidad}<br>`;
});


    let totalCompra = carrito.reduce((acc, item) => acc + item.precio, 0);
    mensaje += `<br><strong>Total: $${totalCompra} USD</strong>`;

    mensajeCompra.innerHTML = mensaje;
    localStorage.setItem('resumenCompra', mensaje);
    localStorage.setItem('totalCompra', totalCompra);

    carrito = [];
    actualizarCarrito();
    localStorage.removeItem('carrito');

    document.getElementById('volver-a-comprar').style.display = 'inline-block';
    document.getElementById('volver-a-comprar').addEventListener('click', () => {
        document.getElementById('mensaje-compra').innerHTML = '';
        document.getElementById('volver-a-comprar').style.display = 'none';
    });
});

