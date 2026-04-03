// --- SALA 1: Objetos, Symbol y clonación ---

// Creamos un Symbol. Es una clave única e invisible en bucles normales.
const claveSimbolo = Symbol("codigo_secreto");

// Objeto principal con:
// - propiedades normales
// - objeto anidado (ubicacion)
// - una función (getInfo)
// - una propiedad con Symbol como clave (el código)
const objeto = {
    nombre: "Caja fuerte",
    color: "gris",
    ubicacion: {
        planta: 3,
        sala: "B"
    },
    getInfo: function() {
        return "Planta " + this.ubicacion.planta + ", sala " + this.ubicacion.sala;
    },
    [claveSimbolo]: "ALFA-7"   // ← este es el código secreto
};

// Copia superficial con Object.assign (no copia símbolos ni objetos anidados en profundidad)
const copia = Object.assign({}, objeto);

// Función para mostrar texto en pantalla
function mostrar(texto) {
    var linea = document.createElement("div");
    linea.className = "pista";
    linea.textContent = "> " + texto;
    document.getElementById("pistas").appendChild(linea);
}

function pista1() { mostrar("Nombre: " + objeto.nombre); }
function pista2() { mostrar("Ubicación: planta " + objeto.ubicacion.planta + ", sala " + objeto.ubicacion.sala); }
function pista3() { mostrar("Función: " + objeto.getInfo()); }
function pista4() { mostrar("Dato oculto (Symbol): " + objeto[claveSimbolo]); }
function pista5() {
    mostrar("Copia con Object.assign: nombre = " + copia.nombre);
    mostrar("La copia NO tiene el símbolo: " + (copia[claveSimbolo] === undefined ? "correcto, es undefined" : "tiene el símbolo"));
}

function comprobar() {
    var input = document.getElementById("codigo").value;
    var resultado = document.getElementById("resultado");

    // try-catch: controla errores (requisito de la práctica)
    try {
        if (input === "") throw new Error("El campo está vacío");

        if (input === objeto[claveSimbolo]) {
            resultado.className = "exito";
            resultado.textContent = "✅ ¡Correcto! Pasando a sala 2...";
            setTimeout(function() { location.href = "sala2.html"; }, 1500);
        } else {
            resultado.className = "error";
            resultado.textContent = "❌ Código incorrecto";
        }
    } catch (e) {
        resultado.className = "error";
        resultado.textContent = "⚠️ " + e.message;
    }
}
