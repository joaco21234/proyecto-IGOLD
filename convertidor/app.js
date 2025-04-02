
document.getElementById("formCanje").addEventListener("submit", function(event) {
    event.preventDefault(); // evitar enviar el formulario
    
    // obtener los valores del formulario
    const modelo = document.getElementById("modelo").value;
    const estado = document.getElementById("estado").value;
    const accesorios = document.getElementById("accesorios").value;
    
    // logica para calcular el valor del canje
    let valorBase;
    
    // definir valores base segun el modelo de iphone
    switch (modelo) {
        case "iphone12":
            valorBase = 500;
            break;
        case "iphone13":
            valorBase = 600;
            break;
        case "iphone14":
            valorBase = 700;
            break;
        case "iphoneX":
            valorBase = 300;
            break;
        case "iphoneSE":
            valorBase = 250;
            break;
        default:
            valorBase = 0;
            break;
    }

    // ajuste del valor segun el estado
    let ajusteEstado;
    switch (estado) {
        case "nuevo":
            ajusteEstado = 1.2; // +20% si esta nuevo
            break;
        case "bueno":
            ajusteEstado = 1.1; // +10% si esta en buen estado
            break;
        case "regular":
            ajusteEstado = 0.8; // -20% si esta en estado regular
            break;
        case "dañado":
            ajusteEstado = 0.5; // -50% si esta dañado
            break;
        default:
            ajusteEstado = 1;
            break;
    }
    
    // ajuste si incluye accesorios
    let ajusteAccesorios = (accesorios === "si") ? 1.1 : 1; // +10% si incluye accesorios
    
    // calcular el valor total del canje
    const valorCanje = valorBase * ajusteEstado * ajusteAccesorios;
    
    // mostrar el resultado
    document.getElementById("resultado").innerHTML = `El valor estimado de tu dispositivo es: $${valorCanje.toFixed(2)} USD`;
});
