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
