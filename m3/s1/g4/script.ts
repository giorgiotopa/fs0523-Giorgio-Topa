
class Abbigliamento{

    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number

    constructor(_id:number, _codprod:number, _collezione:string, _capo:string, _modello:number, _quantita:number, _colore:string, _prezzoivaesclusa:number, _prezzoivainclusa:number, _disponibile:string, _saldo:number) {
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
  type abiti = {
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number
}
  async function call():Promise<abiti[]>{
    let res:Response = await fetch('Abbigliamento.json');
    let abiti:abiti[] = await res.json()

    abiti.forEach(tipo=>{
        let capo = new Abbigliamento(
            tipo.id,
            tipo.codprod,
            tipo.collezione,
            tipo.capo,
            tipo.modello,
            tipo.quantita,
            tipo.colore,
            tipo.prezzoivaesclusa,
            tipo.prezzoivainclusa,
            tipo.disponibile,
            tipo.saldo
        );
        console.log('Saldo ' + capo.capo + ' : ' + capo.getsaldocapo());
        console.log('Costo totale ' + capo.capo + ' : ' + capo.getacquistocapo());;         
    })
    console.log(abiti);
    
    return abiti;
}
call();








  