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


        // ----------------------------------------------------
        // BLOQUE 2: MAP Y SET 
        // ----------------------------------------------------

        // Creamos el Map: Actúa como diccionario (Clave -> Valor)
        // Recibe el array 'traductor' (ej: [["Ag", 1]...])
        const mapaTraduccion = new Map(traductor);

        // Creamos el Set: Elimina duplicados automáticamente
        // Recibe el array 'pistas_sucias' con elementos repetidos
        const setElementos = new Set(pistas_sucias);

        // ----------------------------------------------------
        // BLOQUE 3: CONVERSIÓN A ARRAYS
        // ----------------------------------------------------

        // 1. Usamos el operador Spread (...) para convertir el Set en Array
        // Esto nos permite tener la lista limpia lista para filtrar
        const arrayLimpio = [...setElementos];

        log(`Elementos únicos detectados: ${arrayLimpio.join(", ")}`);

        // 2. Usamos Array.from() para sacar las claves del Map
        // Esto sirve para mostrar al usuario qué elementos existen en la tabla
        const clavesPosibles = Array.from(mapaTraduccion.keys());

        log(`<br>Tabla periódica disponible: ${clavesPosibles}`);

        // ----------------------------------------------------
        // BLOQUE 4: MÉTODOS DE ARRAY (LÓGICA DEL ENIGMA)
        // ----------------------------------------------------

        // A. Filter: Eliminamos palabras como "impureza" o "suciedad"
        // Solo pasan los elementos que existen (.has) en nuestro Map
        const elementosValidos = arrayLimpio.filter(item => mapaTraduccion.has(item));

        // B. Map: Traducimos de Elemento ("Ag") a Número (1)
        // Usamos .get() del Map para obtener el valor
        const numeros = elementosValidos.map(item => mapaTraduccion.get(item));

        // C. Join: Unimos los números en un solo texto (String)
        // [1, 3, 7, 9] se convierte en "1379"
        const codigoFinal = numeros.join('');

        console.log("Solución (Debug):", codigoFinal);

    }
}