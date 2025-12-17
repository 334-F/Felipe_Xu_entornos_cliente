//BLOQUE 1:
let output = document.getElementById("output");

function log(msg) {
    output.innerHTML += msg + "<br>";
}

function iniciarSala1() {
    try {
        // Datos simulados (JSON String)
        const jsonRespuesta = `
        {
            "sala1": {
                "titulo": "Sala 1: Control de Acceso",
                "descripcion": "El sistema requiere una tarjeta con firma digital 'ADMIN_KEY' oculta.",
                "clave_secreta": "1234-SECRET"
            }
        }`;

        const data = JSON.parse(jsonRespuesta);

        log(`<h3>${data.sala1.titulo}</h3>`);
        log(data.sala1.descripcion);

        //BLOQUE 2:

        // 1. SYMBOL
        const id = Symbol("ADMIN_KEY");

        // 2. OBJETO SISTEMA
        let sistemaSeguridad = {
            id: "SYS-001",
            [id]: data.sala1.clave_secreta, // Propiedad Symbol privada

            validarAcceso(tarjeta) {
                // Comprobamos si la tarjeta tiene el Symbol correcto
                return tarjeta[id] === this[id];
            }
        };
        //BLOQUE 3: Tarjeta base
        let tarjetaBase = {
            usuario: "Invitado",
            permisos: { puertas: false }
        };
    }
}