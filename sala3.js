// --- SALA 3: Clases, herencia, privados, estáticos y módulos ---

// Importamos las clases del archivo clases.js
import { Cerradura, CerraduraDigital } from "./clases.js";

// Creamos la cerradura de la bóveda con código "2049"
var boveda = new CerraduraDigital("BOVEDA-01", "2049");

function mostrar(texto) {
    var linea = document.createElement("div");
    linea.className = "pista";
    linea.textContent = "> " + texto;
    document.getElementById("pistas").appendChild(linea);
}

function verSistema() {
    mostrar(boveda.info());                              // método heredado
    mostrar("Total cerraduras: " + Cerradura.getTotal()); // método estático
    mostrar("Intentos fallidos: " + boveda.getFallos());
}

function verAcertijo() {
    mostrar("Acertijo: año de nacimiento del creador de Linux + 80");
}

function verPista() {
    mostrar("Pista: Linus Torvalds nació en 1969");
    mostrar("1969 + 80 = ?");
}

function intentar() {
    var input = document.getElementById("codigo").value;
    var resultado = document.getElementById("resultado");

    if (boveda.abrir(input)) {
        resultado.className = "exito";
        resultado.textContent = "✅ ¡Escapaste! Enhorabuena.";
        setTimeout(function() { location.href = "final.html"; }, 1500);
    } else {
        resultado.className = "error";
        resultado.textContent = "❌ Incorrecto. Fallos: " + boveda.getFallos();
    }
}

// Necesario con módulos: los botones del HTML no ven las funciones directamente
window.verSistema = verSistema;
window.verAcertijo = verAcertijo;
window.verPista = verPista;
window.intentar = intentar;
