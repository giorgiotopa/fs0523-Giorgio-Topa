"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Abbigliamento {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    // Metodo per ottenere il saldo del capo
    getsaldocapo() {
        return this.saldo;
    }
    // Metodo per ottenere il costo totale del capo
    getacquistocapo() {
        return this.prezzoivainclusa;
    }
}
function call() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield fetch('Abbigliamento.json');
        let abiti = yield res.json();
        abiti.forEach(tipo => {
            let capo = new Abbigliamento(tipo.id, tipo.codprod, tipo.collezione, tipo.capo, tipo.modello, tipo.quantita, tipo.colore, tipo.prezzoivaesclusa, tipo.prezzoivainclusa, tipo.disponibile, tipo.saldo);
            console.log('Saldo ' + capo.capo + ' : ' + capo.getsaldocapo());
            console.log('Costo totale ' + capo.capo + ' : ' + capo.getacquistocapo());
            ;
        });
        console.log(abiti);
        return abiti;
    });
}
call();
