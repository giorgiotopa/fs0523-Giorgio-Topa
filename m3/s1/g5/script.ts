interface Sim {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
  
    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
  }


  class Smartphone implements Sim {
    carica: number = 0;
    numeroChiamate: number = 0;
    costoMinuto: number = 0.3;
  
    ricarica(euro: number): void {
      this.carica += euro;
    }
  
    numero404(): string {
      return `Credito residuo: ${this.carica} euro`;
    }
  
    getNumeroChiamate(): number {
      return this.numeroChiamate;
    }
  
    chiamata(min: number): void {
      if (this.carica >= min * this.costoMinuto) {
        this.carica -= min * this.costoMinuto;
        this.numeroChiamate++;
      }
    }
  
    azzeraChiamate(): void {
      this.numeroChiamate = 0;
    }
  }

  