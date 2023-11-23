// Scrivere un programma utilizzando la programmazione ad oggetti che calcoli le tasse che dovranno sostenere i singoli lavoratori autonomi
// al fine di verificare il reddito annuo netto di ognuno a secondo del proprio reddito annuo lordo, tasse, cod redditività.
// Il programma utilizza classi astratte e non astratte. 
// Dati Proprietà: codredd: number; redditoannuolordo:number tasseinps:number tasseirpef:number 
// Metodi: getUtileTasse:number getTasseInps:number getTasseIrpef:number getRedditoAnnuoNetto:number

// Definizione della classe astratta
abstract class LavoratoreAutonomo {
    codredd:number;
    redditoannuolordo:number;
    tasseinps:number;
    tasseirpef:number;
    constructor(_codredd:number, _redditoannuolordo:number, _tasseinps:number, _tasseirpef:number) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }

    // Metodo astratto per ottenere l'utile tasse
    getUtileTasse():number {
        throw new Error("Il metodo getUtileTasse deve essere implementato nelle sottoclassi.");
    }

    // Metodo per ottenere le tasse INPS
    getTasseInps() {
        return this.tasseinps;
    }

    // Metodo per ottenere le tasse IRPEF
    getTasseIrpef() {
        return this.tasseirpef;
    }

    // Metodo per calcolare il reddito annuo netto
    getRedditoAnnuoNetto() {
        const utileTasse = this.getUtileTasse();
        return this.redditoannuolordo - this.tasseinps - this.tasseirpef - this.getUtileTasse();
    }
}

// Implementazione di una sottoclasse
class LavoratoreAutonomoImplementazione extends LavoratoreAutonomo {
    altroDato:number;
    constructor(_codredd:number, _redditoannuolordo:number, _tasseinps:number, _tasseirpef:number, _altroDato:number) {
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef);
        this.altroDato = _altroDato;
    }

    // Implementazione del metodo astratto
    getUtileTasse() {
        // Calcola l'utile tasse in base a qualche logica specifica
        return this.altroDato * 0.1;
    }
}

// Esempio di utilizzo
const lavoratore = new LavoratoreAutonomoImplementazione(1, 50000, 5000, 10000, 2000);

console.log("Reddito Annuo Netto:", lavoratore.getRedditoAnnuoNetto());
