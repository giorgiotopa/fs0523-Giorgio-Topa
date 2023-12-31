/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 10
let y = 7

if ( x > y){
  console.log( x + " è il numero più grande");
} else if (y > x){
  console.log( y + "è il numero più grande");
} else {
  console.log(" i numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

x = 7

if ( x != 5){
  console.log("not equal");
}else{
  console.log("is equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

x = 55

if ( x % 5 === 0) {
console.log("divisibile per 5");  
} else {
  console.log("non divisibile");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

x = 10
y = 18

if (x == 8 || y ==8 || x + y == 8 || x - y ==8 || y - x ==8) {
  console.log("vero");
} else { 
  console.log("falso");  
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 75
let spedizione = 10
let carrello = totalShoppingCart

if (totalShoppingCart < 50) {
carrello += spedizione;
console.log( "il prezzo da pagare è " + carrello);
} else {
  carrello = totalShoppingCart;
  console.log("il prezzo da pagare è " + carrello);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart2 = 49
let promozione = totalShoppingCart2 * 0.8
let spedizione2 = 10
let carrello2 = promozione

if (totalShoppingCart2 < 50) {
  carrello2+= spedizione2;
  console.log("il prezzo da pagare è " + carrello2 );
} else {
  console.log("il prezzo da pagare è " + carrello2);
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let z = 5
let z1 = 41
let z2 = 300

if ( z >= z1) {
if (z1 >= z2) {
  console.log(z, z1, z2);
} else if ( z >= z2){
  console.log(z, z2, z1);
} else {
  console.log( z2, z, z1);
} 
} else if ( z1 >= z2){
  if (z >= z2) {
    console.log( z1, z, z2);
  } else {
    console.log(z1, z2, z );
  }
} else {
  console.log( z2, z1, z);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let verifica = "controllo"

if (typeof verifica == "number") {
  console.log(verifica + " è un numero");
} else {
  console.log(verifica + "non è un numero");
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

x = 9

if (x %2 === 0) {
  console.log(x + " è un numero pari");
} else {
  console.log(x + " è un numero dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
  if ( val < 5 ) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = []
array.push(1)
array.push(2)
array.push(3)
array.push(4)
array.push(5)
array.push(6)
array.push(7)
array.push(8)
array.push(9)
array.push(10)

console.log(array);


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[9] = 100

console.log(array);
