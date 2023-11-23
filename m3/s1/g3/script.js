// Scrivere un programma utilizzando la programmazione ad oggetti che calcoli le tasse che dovranno sostenere i singoli lavoratori autonomi
// al fine di verificare il reddito annuo netto di ognuno a secondo del proprio reddito annuo lordo, tasse, cod redditività.
// Il programma utilizza classi astratte e non astratte. 
// Dati Proprietà: codredd: number; redditoannuolordo:number tasseinps:number tasseirpef:number 
// Metodi: getUtileTasse:number getTasseInps:number getTasseIrpef:number getRedditoAnnuoNetto:number
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Definizione della classe astratta
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    // Metodo astratto per ottenere l'utile tasse
    LavoratoreAutonomo.prototype.getUtileTasse = function () {
        throw new Error("Il metodo getUtileTasse deve essere implementato nelle sottoclassi.");
    };
    // Metodo per ottenere le tasse INPS
    LavoratoreAutonomo.prototype.getTasseInps = function () {
        return this.tasseinps;
    };
    // Metodo per ottenere le tasse IRPEF
    LavoratoreAutonomo.prototype.getTasseIrpef = function () {
        return this.tasseirpef;
    };
    // Metodo per calcolare il reddito annuo netto
    LavoratoreAutonomo.prototype.getRedditoAnnuoNetto = function () {
        var utileTasse = this.getUtileTasse();
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef - this.getUtileTasse();
    };
    return LavoratoreAutonomo;
}());
// Implementazione di una sottoclasse
var LavoratoreAutonomoImplementazione = /** @class */ (function (_super) {
    __extends(LavoratoreAutonomoImplementazione, _super);
    function LavoratoreAutonomoImplementazione(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef, _altroDato) {
        var _this = _super.call(this, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) || this;
        _this.altroDato = _altroDato;
        return _this;
    }
    // Implementazione del metodo astratto
    LavoratoreAutonomoImplementazione.prototype.getUtileTasse = function () {
        // Calcola l'utile tasse in base a qualche logica specifica
        return this.altroDato * 0.1;
    };
    return LavoratoreAutonomoImplementazione;
}(LavoratoreAutonomo));
// Esempio di utilizzo
var lavoratore = new LavoratoreAutonomoImplementazione(1, 50000, 5000, 10000, 2000);
console.log("Reddito Annuo Netto:", lavoratore.getRedditoAnnuoNetto());
