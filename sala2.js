// --- SALA 2: Arrays, Map, Set, spread y desestructuración ---

// Array de pistas
var pistas = [
    { id: 1, tipo: "visual",   texto: "El cuadro tiene 4 lados",     valor: 4 },
    { id: 2, tipo: "auditiva", texto: "El reloj suena 2 veces",       valor: 2 },
    { id: 3, tipo: "visual",   texto: "Hay 8 cajones",                valor: 8 },
    { id: 4, tipo: "olfativa", texto: "3 frascos de reactivo",        valor: 3 },
    { id: 5, tipo: "visual",   texto: "6 cristales en la ventana",    valor: 6 }
];

// Spread: añadimos una pista extra sin tocar el array original
var extra = { id: 6, tipo: "tactil", texto: "5 botones en el panel", valor: 5 };
var todasPistas = [...pistas, extra];

// Map: guardar pistas por su id (clave → valor)
var mapa = new Map();
pistas.forEach(function(p) { mapa.set(p.id, p.texto); });

// Set: tipos únicos de pistas (no se repiten)
var tipos = new Set(pistas.map(function(p) { return p.tipo; }));

// ---- funciones de los botones ----

function mostrar(texto) {
    var linea = document.createElement("div");
    linea.className = "pista";
    linea.textContent = "> " + texto;
    document.getElementById("pistas").appendChild(linea);
}

function limpiar() { document.getElementById("pistas").innerHTML = ""; }

function verTodas() {
    limpiar();
    // map() transforma cada pista en texto
    var textos = todasPistas.map(function(p) { return "[" + p.tipo + "] " + p.texto; });
    textos.forEach(function(t) { mostrar(t); });
    mostrar("Tipos únicos (Set): " + [...tipos].join(", "));
}

function soloVisuales() {
    limpiar();
    // filter() devuelve solo las pistas de tipo visual
    var visuales = pistas.filter(function(p) { return p.tipo === "visual"; });
    visuales.forEach(function(p) {
        // desestructuración: sacamos texto y valor del objeto
        var { texto, valor } = p;
        mostrar(texto + " → valor: " + valor);
    });
}

function verMapa() {
    limpiar();
    // Array.from convierte las claves del Map a un array
    var ids = Array.from(mapa.keys());
    mostrar("IDs en el mapa: " + ids.join(", "));
    mostrar("Pista nº3: " + mapa.get(3));
}

function calcular() {
    limpiar();
    var visuales = pistas.filter(function(p) { return p.tipo === "visual"; });
    var valores = visuales.map(function(p) { return p.valor; });
    // reduce() suma todos los valores
    var suma = valores.reduce(function(acc, v) { return acc + v; }, 0);
    mostrar("Valores visuales: " + valores.join(" + "));
    mostrar("Suma = " + suma + " ← esa es la clave");
}

function comprobar() {
    var input = document.getElementById("clave").value;
    var resultado = document.getElementById("resultado");

    // Calculamos la clave: suma de pistas visuales (4+8+6 = 18)
    var visuales = pistas.filter(function(p) { return p.tipo === "visual"; });
    var claveCorrecta = String(visuales.reduce(function(acc, p) { return acc + p.valor; }, 0));

    if (input === claveCorrecta) {
        resultado.className = "exito";
        resultado.textContent = "✅ ¡Correcto! Pasando a sala 3...";
        setTimeout(function() { location.href = "sala3.html"; }, 1500);
    } else {
        resultado.className = "error";
        resultado.textContent = "❌ Clave incorrecta";
    }
}
