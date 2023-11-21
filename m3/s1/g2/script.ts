class SonAccount {
    
    balanceInit:number
        constructor() {
          this.balanceInit = 0;
        }
      
        deposit(amount:number) {
          this.balanceInit += amount;
        }
      
        withDraw(amount:number) {
          if (amount <= this.balanceInit) {
            this.balanceInit -= amount;
          } else {
            console.log("Fondi insufficienti per il prelievo.");
          }
        }
}

class MotherAccount extends SonAccount {
    addInterest() {
        this.balanceInit += this.balanceInit * 0.1; // Aggiunge l'interesse del 10%
      }
};


const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();

console.log(sonAccount);
console.log(motherAccount);

sonAccount.deposit(100);
motherAccount.deposit(200);

console.log(sonAccount);
console.log(motherAccount);

sonAccount.withDraw(150);
motherAccount.withDraw(150);

console.log(sonAccount);
console.log(motherAccount);

motherAccount.addInterest();

console.log(motherAccount);








