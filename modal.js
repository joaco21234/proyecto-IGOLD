
const infoBtns = document.querySelectorAll('.info-btn');
const modal = document.getElementById('modal-info');
const contenidoInfo = document.getElementById('contenido-info');
const cerrarModal = document.getElementById('cerrar-modal');

// Datos simulados
const productosInfo = {
    1: {
    nombre: "iPhone XS",
    descripcion: "Pantalla Super Retina OLED de 5.8, Face ID, chip A12 Bionic, y cámara dual con modo retrato. Diseño elegante en acero inoxidable y vidrio.",
    precio: 310
},
    2: {
    nombre: "iPhone 8",
    descripcion: "Pantalla Retina HD de 4.7, chip A11 Bionic, diseño clásico con botón Home y Touch ID. Ideal para quienes buscan rendimiento en tamaño compacto.",
    precio: 250
},
    3: {
    nombre: "iPhone 15",
    descripcion: "Innovación accesible. Pantalla OLED de 6.1 con Dynamic Island, cámara principal de 48 MP, chip A16 Bionic y puerto USB-C. Ligero, potente y con el nuevo diseño en aluminio reciclado. Perfecto para el día a día con estilo.",
    precio: 2400
},
    4: {
    nombre: "iPhone 8 plus",
    descripcion: "Elegancia clásica con potencia sólida. Pantalla Retina HD de 5.5, chip A11 Bionic. Diseño de vidrio con carga inalámbrica. Ideal para quienes quieren rendimiento y botón Home con Touch ID.",
    precio: 290
},
    5: {
    nombre: "iPhone 14 plus",
    descripcion: "Igual que el iPhone 14, pero con pantalla más grande de 6.7 y batería de larga duración. Perfecto para ver contenido y jugar.",
    precio: 1400
},
    6: {
    nombre: "iPhone 14",
    descripcion: "Pantalla OLED de 6.1, chip A15 Bionic, gran mejora en cámara con modo Acción y Photonic Engine. Diseño resistente y moderno.",
    precio: 1400
},
    7: {
    nombre: "iPhone 11",
    descripcion: "Pantalla Liquid Retina de 6.1, chip A13 Bionic y cámara dual con ultra gran angular. Uno de los modelos más populares por su equilibrio calidad-precio.",
    precio: 500
},
    8: {
    nombre: "iPhone 12 pro",
    descripcion: "Diseño de bordes planos, pantalla OLED de 6.1, chip A14 Bionic y cámaras avanzadas con LiDAR para retratos nocturnos. 5G incluido.",
    precio: 750
},
    9: {
    nombre: "iPhone 11 pro",
    descripcion: "Pantalla OLED de 5.8, triple cámara profesional, acabado premium en vidrio mate y chip A13 Bionic. Potente y elegante.",
    precio: 600
},
    10: {
    nombre: "iPhone 13 pro",
    descripcion: "Mejora todo: chip A15 Bionic, pantalla ProMotion a 120 Hz, mejor autonomía y cámaras top con modo Cinemático. Para usuarios exigentes.",
    precio: 1500
},
    11: {
    nombre: "Airpods pro (1gen)",
    descripcion: "Cancelación activa de ruido ANCModo Transparencia para escuchar el entornoAjuste personalizado con puntas de siliconaChip H1 para conexión rápida y eficienteResistencia al sudor y agua (IPX4)Audio espacial con seguimiento dinámico de cabeza",
    precio: 120
},
    12: {
    nombre: "Airpods pro (2gen)",
    descripcion: "Mejor cancelación de ruido, chip H2, modo transparencia adaptativo y mayor batería. Estuche con altavoz, carga MagSafe y controles táctiles personalizados.",
    precio: 199
},
    13: {
    nombre: "Airpods 3",
    descripcion: " Diseño sin puntas de silicona, audio espacial, resistencia IPX4 y hasta 6 horas de batería. Estuche compatible con carga MagSafe y chip H1.",
    precio: 215
},
    14: {
    nombre: "Airpods 4",
    descripcion: "Pantalla OLED de 6.1, Dynamic Island, chip A17 Pro y cámaras avanzadas. Diseño premium en titanio.",
    precio: 380
},
    15: {
    nombre: "Cargador iphone (tradicional)",
    descripcion: "Adaptador USB-A estándar con potencia variable (5W o 12W) y carga por cable Lightning.",
    precio: 55
},
    16: {
    nombre: "Cargador iphone c",
    descripcion: "Adaptador USB-C que permite carga rápida con Power Delivery, compatible con cables Lightning a USB-C para iPhones recientes.",
    precio: 70
},
    17: {
    nombre: "Cargador iphone c-c",
    descripcion: "Cable USB-C a USB-C, no común para iPhones, más usado en iPads Pro o dispositivos USB-C.",
    precio: 80
},
    18: {
    nombre: "Cargador magsafe",
    descripcion: "Carga inalámbrica magnética para iPhone 12 en adelante con hasta 15W, alinea automáticamente y funciona con fundas MagSafe.",
    precio: 119
},
}

infoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    const producto = productosInfo[id];

    if (producto) {
        contenidoInfo.innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>${producto.descripcion}</p>
        <p><strong>Precio:</strong> $${producto.precio}</p>
    `;
    modal.classList.remove('hidden');
        }
    });
});

cerrarModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

