// --- Módulo con las clases de la sala 3 ---

// Clase base
export class Cerradura {
    static #total = 0;     // estático y privado: cuenta cuántas cerraduras se crean
    #fallos = 0;           // privado: cuenta intentos fallidos

    constructor(id) {
        this.id = id;
        Cerradura.#total++;
    }

    static getTotal() {
        return Cerradura.#total;
    }

    añadirFallo() {
        this.#fallos++;
    }

    getFallos() {
        return this.#fallos;
    }

    info() {
        return "Cerradura ID: " + this.id;
    }
}

// Clase hija: hereda de Cerradura
export class CerraduraDigital extends Cerradura {
    #codigo;   // privado: el código secreto

    constructor(id, codigo) {
        super(id);   // llama al constructor del padre
        this.#codigo = codigo;
    }

    abrir(intento) {
        if (intento === this.#codigo) {
            return true;
        }
        this.añadirFallo();   // método heredado del padre
        return false;
    }
}
