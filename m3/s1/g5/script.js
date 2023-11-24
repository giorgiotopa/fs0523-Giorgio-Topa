"use strict";
// Interfaccia Sim
//   Classe Smartphone
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
        return `Credito residuo: ${this.carica} €`;
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
// Istanze Smartphone
const smartphone1 = new Smartphone();
const smartphone2 = new Smartphone();
const smartphone3 = new Smartphone();
smartphone1.ricarica(30);
smartphone2.ricarica(50);
smartphone3.ricarica(20);
smartphone1.chiamata(10);
smartphone2.chiamata(5);
smartphone3.chiamata(20);
smartphone3.chiamata(30);
smartphone3.chiamata(30); // Nel console log questa chiamata non apparirà perchè il costo della stessa è superiore al credito residuo
console.log("Smartphone 1:");
console.log(smartphone1.numero404());
console.log(`Numero di chiamate effettuate: ${smartphone1.getNumeroChiamate()}`);
console.log("\nSmartphone 2:");
console.log(smartphone2.numero404());
console.log(`Numero di chiamate effettuate: ${smartphone2.getNumeroChiamate()}`);
console.log("\nSmartphone 3:");
console.log(smartphone3.numero404());
console.log(`Numero di chiamate effettuate: ${smartphone3.getNumeroChiamate()}`);
smartphone1.azzeraChiamate();
smartphone2.azzeraChiamate();
smartphone3.azzeraChiamate();
console.log("\nDopo l'azzeramento delle chiamate:");
console.log(`Numero di chiamate smartphone 1: ${smartphone1.getNumeroChiamate()}`);
console.log(`Numero di chiamate smartphone 2: ${smartphone2.getNumeroChiamate()}`);
console.log(`Numero di chiamate smartphone 3: ${smartphone3.getNumeroChiamate()}`);
class Iphone extends Smartphone {
    constructor() {
        super(...arguments);
        this.registroChiamate = [];
    }
    chiamata(min) {
        if (this.carica >= min * this.costoMinuto) {
            this.carica -= min * this.costoMinuto;
            this.numeroChiamate++;
            const nuovaChiamata = {
                id: this.numeroChiamate,
                durata: min,
                dataOra: new Date(),
            };
            this.registroChiamate.push(nuovaChiamata);
        }
    }
    mostraRegistroChiamate() {
        console.log("\nRegistro delle chiamate:");
        this.registroChiamate.forEach((chiamata) => {
            console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata} minuti, Data e Ora: ${chiamata.dataOra}`);
        });
    }
    filtraChiamatePerDataOra(dataEOra) {
        const chiamateFiltrate = this.registroChiamate.filter((chiamata) => {
            return chiamata.dataOra.getHours() === dataEOra.getHours(); // il confronto corretto che tenesse conto dell'intera data e non soltanto dell'ora sarebbe sato con il metodo getTime(), ma la precisione del valore era tale da rendere troppo complesso il confronto con una data fortina dall'esterno. 
        });
        console.log(`\nChiamate effettuate in data e ora ${dataEOra}:`);
        chiamateFiltrate.forEach((chiamata) => {
            console.log(`ID: ${chiamata.id}, Durata: ${chiamata.durata} minuti, Data e Ora: ${chiamata.dataOra}`);
        });
    }
}
const iphone = new Iphone();
iphone.ricarica(30);
iphone.chiamata(5);
iphone.chiamata(8);
console.log("\nIphone:");
console.log(iphone.numero404());
console.log(`Numero di chiamate effettuate: ${iphone.getNumeroChiamate()}`);
iphone.mostraRegistroChiamate();
iphone.filtraChiamatePerDataOra(new Date());
iphone.azzeraChiamate();
console.log(`\nNumero di chiamate dopo azzeramento: ${iphone.getNumeroChiamate()}`);
