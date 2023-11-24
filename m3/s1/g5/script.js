"use strict";
class Smartphone {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.3;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Credito residuo: ${this.carica} euro`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        if (this.carica >= min * this.costoMinuto) {
            this.carica -= min * this.costoMinuto;
            this.numeroChiamate++;
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
