// BLOQUE 1: Simulación y Carga de Datos
let output = document.getElementById("output");

function log(msg) {
    output.innerHTML += msg + "<br>";
}

function iniciarSala2() {
    try {
        // 1. Simulamos la respuesta del servidor (JSON String)
        const jsonRespuesta = `
        {
            "sala2": {
                "instrucciones": "Limpia duplicados y traduce los elementos.",
                "pistas_sucias": ["Ag", "Fe", "Au", "Impureza", "Cu", "Fe", "Ag", "Suciedad", "Au"],
                "traductor": [
                    ["Ag", 1], ["Au", 7], ["Cu", 9], ["Fe", 3]
                ]
            }
        }`;

        // 2. Convertimos el texto JSON a un Objeto JS utilizable
        const data = JSON.parse(jsonRespuesta);

        // 3. Desestructuración: Sacamos las propiedades directamente a variables
        const { instrucciones, pistas_sucias, traductor } = data.sala2;

        log(`Instrucciones: ${instrucciones}<br>`);
    }
}