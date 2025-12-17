// BLOQUE 1: Configuración y Datos
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

        // BLOQUE 2: Seguridad (Symbol)
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

        // BLOQUE 3: Tarjeta base
        let tarjetaBase = {
            usuario: "Invitado",
            permisos: { puertas: false }
        };

        // BLOQUE 4: Evento y Hackeo
        document.getElementById('btnHackear').addEventListener('click', function() {
            try {
                // Clonamos 
                let tarjetaClonada = structuredClone(tarjetaBase);

                // Modificamos el clon
                tarjetaClonada.usuario = "Hacker";
                
                // INYECTAMOS LA LLAVE
                tarjetaClonada[id] = data.sala1.clave_secreta;

                log("<br>--- Hackeando sistema... ---");
                
                // BLOQUE 5: Validación y Redirección (LO QUE FALTABA)
                if (sistemaSeguridad.validarAcceso(tarjetaClonada)) {
            
                    log("<h3 style='color:green'>¡ACCESO CONCEDIDO!</h3>");
                    log("Redirigiendo a la Sala 2 en 1 segundos...");

                    // Redirección
                    setTimeout(function() {
                        window.location.href = '../sala2/sala2.html';
                    }, 1000);

                } else {
                    log("<h3 style='color:red'>Acceso Denegado.</h3>");
                }

            } catch (err) {
                log("Error en el hackeo: " + err.message);
            }
        });

    } catch (error) {
        console.error(error);
        log("Error crítico: " + error.message);
    }
}

iniciarSala1();