
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser.
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/
/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* - La stringa è un datatype in Javascript caratterizzato dalla presenza di apici o di virgolette all'inizio ed alla fine della sua dichiarazione, esso può contenere uno o più valori alfanumerici.
   - Il dato numero è un dato numerico, si differenzia dalla stringa poichè non vi sono apici all'inizio e alla fine della sua dichiarazione e perchè può contenere solo valori numerici
   - Il dato boleano è un dato il quale accetta solo il ritorno di due valiri: true o false
   - Null è una parola chiave che indica l'assenza intenzionale di un oggetto. In risposta ad una logica boleana indica una condizione "false"
   - Undefined è un dato che ci indica l'assenza di un valore ad una variabile
   */

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
var pippo = 'Giorgio';

console.log(pippo);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

var pippo = "Topa"
console.log(pippo);

const cognome = "Topa"
console.log(cognome);

/* se assegno un altro valore alla costante "const" la console log mi restituisce 
il seguente errore: D1.js:51 Uncaught SyntaxError: Identifier 'cognome' has already been declared (at D1.js:51:7)
*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"

console.log(name1==name2);

console.log(name1==name2.toLowerCase());