/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();

console.log(pets);


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();

console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let redfish = pets.slice(0, 1);

pets.shift();
pets.push(redfish.join());


console.log(pets);




/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]


for (let i = 0; i < cars.length; i++) {
  cars[i]['licensePlate'] = (cars[i].brand[0]) + (cars[i].brand[1]) + ('00') + (cars[i].model[0]) + (cars[i].model[1]);
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let newcar = {
  brand: 'Fiat',
  model: 'Punto',
  color: 'gray',
  trims: ['base', 'Mj'],
  licensePlate: 'Fi00Pu',
}

cars.push(newcar);
console.log(cars);


for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}


console.log(cars);




/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.slice(0, 1));

}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] == 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }

}


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]


let x = 0

while (x <= numericArray.length - 5) {

  console.log(numericArray[x]);
  x++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

let numbersArray = []

for (let i = 0; i < charactersArray.length; i++) {

  switch (charactersArray[i]) {
    case 'a':
      numbersArray.push(1)
      break;

    case 'b':
      numbersArray.push(2)
      break;

    case 'c':
      numbersArray.push(3)
      break; 
      
    case 'd':
      numbersArray.push(4)
      break; 
      
    case 'e':
      numbersArray.push(5)
      break;
      
    case 'f':
      numbersArray.push(6)
      break; 
      
    case 'g':
      numbersArray.push(7)
      break; 
      
    case 'h':
      numbersArray.push(8)
      break; 
      
    case 'i':
      numbersArray.push(9)
      break; 
      
    case 'j':
      numbersArray.push(10)
      break; 
      
    case 'k':
      numbersArray.push(11)
      break;
      
    case 'l':
      numbersArray.push(12)
      break; 
      
    case 'm':
      numbersArray.push(13)
      break; 
      
    case 'n':
      numbersArray.push(14)
      break; 
      
    case 'o':
      numbersArray.push(15)
      break; 
      
    case 'p':
      numbersArray.push(16)
      break; 
      
    case 'q':
      numbersArray.push(17)
      break; 
      
    case 'r':
      numbersArray.push(18)
      break; 
      
    case 's':
      numbersArray.push(19)
      break; 
      
    case 't':
      numbersArray.push(20)
      break; 
      
    case 'u':
      numbersArray.push(21)
      break; 
      
    case 'v':
      numbersArray.push(22)
      break; 
      
    case 'w':
      numbersArray.push(23)
      break; 
      
    case 'x':
      numbersArray.push(24)
      break; 
      
    case 'y':
      numbersArray.push(25)
      break; 
      
    case 'z':
      numbersArray.push(26)
      break; 
      
      default:
        console.log('Not letter, not number');
      break;
  }
}

console.log(charactersArray);
console.log(numbersArray);

