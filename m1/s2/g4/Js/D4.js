/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    return l1 * l2
}

let arearettangolo = area(5, 6)

console.log("L'area del rettangolo è " + arearettangolo);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
    if (a != b) {
        return a + b;
    } else {
        return 3 * (a + b)
    }
}

console.log("il valore di crazySum è " + crazySum(5, 2));
console.log("il valore di crazySum con gli stessi valori è " + crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(a, b = 19) {
    if (a < b) {
        return a - b
    } else {
        return 3 * (a - b)
    }
}


console.log("crazyDiff con valore minore di 19 : " + crazyDiff(10));
console.log("crazyDiff con valore superiore di 19 : " + crazyDiff(20));


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if (n > 20 && n <= 100) {
        return true
    } else if (n == 400) {
        return true
    } else {
        return false
    }
}

console.log(boundary(450));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let stringa = " benvenuti in questo esercizio"
let stringa2 = " EPICODE: benvenuti in questo esercizio"


function epify(a) {
    if (a.startsWith("EPICODE")) {
        return a

    } else {
        return "EPICODE" + a
    }
}


console.log(epify(stringa));
console.log(epify(stringa2));



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


function check3and7(a) {
    if (a % 3 == 0 || a % 7 == 0) {
        return true
    } else {
        return false
    }
}


console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(148));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let parametro = "EPICODE"



function reverseString(str) {
    return str.split('').reverse().join('')
}


console.log(reverseString(parametro));




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

let str = 'rendimi la prima lettera di ogni parola maiuscola';


function upperFirst(a) {
    array = a.split(' ');
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
    }
    return a = array.join(' ')
}

console.log(upperFirst(str));





/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/


let primoeultimo = "Eliminazione"

function cutString(a) {
    return a.slice(1, length - 1)
}

console.log(cutString(primoeultimo));


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    let casuali = []
    for (let i = 0; i < n; i++) {
    casuali.push(Math.floor(Math.random() * 10))
    }
    return casuali
}


console.log(giveMeRandom(3));

console.log(giveMeRandom(15));


