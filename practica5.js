// Práctica Unidad 5. Sala 1. Eventos de ratón
// Funcionalidad: Coordenadas y detección de objeto

let sala = document.getElementById("sala");
let objeto = document.getElementById("objeto");
let info = document.getElementById("info");

// Evento raton 1 - mousemove con coordenadas
sala.addEventListener("mousemove", (e) => {
    let rect = sala.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    info.textContent = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});

// Evento raton 2 - click con tamaño elemento
objeto.addEventListener("click", (e) => {
    console.log(`Tamaño objeto: ${objeto.offsetWidth} x ${objeto.offsetHeight}`);
    alert("Objeto encontrado!");
    objeto.style.display = "none";
});

// Práctica Unidad 5. Entrega Parcial 1
// Funcionalidad: Delegación de eventos para el inventario

const contenedor = document.getElementById("contenedor");
const lista = document.getElementById("lista");

contenedor.addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
        const nombre = e.target.getAttribute("data-nombre");
        
        const item = document.createElement("p");
        item.textContent = "- " + nombre;
        lista.appendChild(item);
        
        e.target.remove();
    }
});

// Práctica Unidad 5. Entrega Parcial 1
// Funcionalidad: Gestión de la propagación (stopPropagation)

const puerta = document.getElementById("puerta");
const cerradura = document.getElementById("cerradura");

puerta.addEventListener("click", () => {
    alert("Puerta cerrada");
});

cerradura.addEventListener("click", (e) => {
    e.stopPropagation(); // Detenemos la burbuja hacia la puerta
    alert("Necesitas una llave");
});

// Práctica Unidad 5. Entrega Parcial 1
// Funcionalidad: Validación de teclado (Solo números)

let inputCodigo = document.getElementById("codigo");

inputCodigo.addEventListener("keydown", function(e) {
    const esNumero = e.key >= "0" && e.key <= "9";
    const teclas = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
    
    if (!esNumero && !teclas.includes(e.key)) {
        e.preventDefault(); // Bloqueamos cualquier tecla que no sea un número o control
    }
});
