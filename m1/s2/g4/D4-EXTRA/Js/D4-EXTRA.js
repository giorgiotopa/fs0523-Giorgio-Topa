// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/


function giveMeRandom(n) {
    let casuali = []
    for (let i = 0; i < n; i++) {
        casuali.push(Math.floor(Math.random() * 10))
    }
    return casuali
}

function checkArray(n) {
    let somma = 0

    for (let i = 0; i < n.length; i++) {
        if (n[i] > 5) {
            console.log(n[i] + " è maggiore di 5");
            somma += n[i];
        } else if (n[i] == 5) {
            console.log(n[i] + " è uguale a 5");
        } else {
            console.log(n[i] + " è minore di 5");
        }
    }
    console.log(somma + " è il risultato della somma dei numeri maggiori di 5");
}

checkArray(giveMeRandom(1));



/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [
    {
        price: 1,
        name: 'Penna',
        id: '4586',
        quantity: 10,
    },
    {
        price: 300,
        name: 'Cellulare',
        id: '6891',
        quantity: 1,
    },
    {
        price: 0.50,
        name: 'Quaderno',
        id: '7635',
        quantity: 5,
    },
]
console.log(shoppingCart);

function shoppingCartTotal() {
    let totalpay = 0
    shoppingCart.forEach(element => {

        totalpay += (element.price * element.quantity)

    });
    return totalpay
}
console.log( "Totale da Pagare: $" + shoppingCartTotal());



/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

let newobj = {
    price: 700,
    name: 'Tablet',
    id: '6891',
    quantity: 1,
}

function addToShoppingCart(array, obj) {
    return array.push(obj)
}

console.log(addToShoppingCart(shoppingCart, newobj));
console.log(shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(array) {
    let moreexpensive = shoppingCart[0];
    for (const obj of array) {
        if (obj.price > moreexpensive.price) {
            moreexpensive = obj
        }
    }
    return moreexpensive
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(array) {
    let latestshop = array.pop()
    return latestshop
}

console.log(latestShoppingCart(shoppingCart));


/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/


function loopUntil(n) {
    let count = 0;
    while (count < 3) {
        let random = Math.floor(Math.random() * 10);
        console.log('Numero Casuale : ' + random);

        if (random > n) {
            count++;
        } else {
            count = 0;
        }
    }
}

loopUntil(2);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const myArray = [1, 2, '3', 4, 'five', 6];

function average(array) {
    
    let sum = 0;
    let count = 0;

    for (const n of array) {
        if (typeof array[n] === 'number' && !isNaN(array[n])) {
           sum += array[n];
           count ++;
        }
    }
    return sum/count
}

console.log('La media del mio array è ' + average(myArray)); 


/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

let stringArray = ["gatto", "cane", "elefante", "scoiattolo", "leone"];

function longest(array) {
    let longstring = array[0];

    array.forEach(string => {
        if ( longstring < string) {
           longstring = string 
        }
    });
    return longstring
}

console.log("La stringa più lunga è " + longest(stringArray));


/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/
function isEmailNotSpam(emailContent) {

    let contentUpperCase = emailContent.toUpperCase();
  
    if (contentUpperCase.includes("SPAM") || contentUpperCase.includes("SCAM")) {
      return false;
    }
  
    return true; 
  }
  
let emailContent1 = "Ciao! Questo è un'email normale.";
let emailContent2 = "Hai vinto un milione di euro! Controlla ora! (SCAM)";
let isNotSpam1 = isEmailNotSpam(emailContent1);
let isNotSpam2 = isEmailNotSpam(emailContent2);
  
  console.log("Email 1 non è spam:", isNotSpam1); 
  console.log("Email 2 non è spam:", isNotSpam2); 
  

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

function giorniPassatiDaData(data) {

    let dataCorrente = new Date();  

    let differenzaInMilliseconds = dataCorrente - data;

    let millisecondiInUnGiorno = 24 * 60 * 60 * 1000;
    let giorniPassati = Math.floor(differenzaInMilliseconds / millisecondiInUnGiorno);
  
    return giorniPassati;
  }
  
  let dataFornita = new Date("2023-10-1");
  let giorniTrascorsi = giorniPassatiDaData(dataFornita);
  console.log("Giorni passati:", giorniTrascorsi);

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/



function matrixGenerator(x, y) {
    let matrix = [];
  
    for (let i = 0; i < y; i++) {
      const row = [];
      for (let j = 0; j < x; j++) {
        
        const value = `${i}${j}`;
        row.push(value);
      }
      matrix.push(row);
    }
  
    return matrix;
  }
  
 
  let x = 5;
  let y = 3;
  let result = matrixGenerator(x, y);
  console.log(result);