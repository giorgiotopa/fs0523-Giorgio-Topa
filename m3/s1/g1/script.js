var numeroCasuale = Math.floor(Math.random() * 100) + 1;
console.log(numeroCasuale);
var numero1 = Math.abs(50);
var numero2 = Math.abs(40);
var differenzanum1 = numeroCasuale - numero1;
var differenzanum2 = numeroCasuale - numero2;
console.log(differenzanum1);
console.log(differenzanum2);
if (numeroCasuale === numero1 && numeroCasuale === numero2) {
    console.log('Entrambi i numeri sono uguali al numero Casuale');
}
else if (numeroCasuale === numero1) {
    console.log('Il primo numero è uguale al numero Casuale');
}
else if (numeroCasuale === numero2) {
    console.log('Il secondo numero è uguale al numero Casuale');
}
else if (differenzanum1 > differenzanum2) {
    console.log('Il secondo numero si è avvicinato di più al numero Casuale');
}
else if (differenzanum1 < differenzanum2) {
    console.log('Il primo numero si è avvicinato di più al numero Casuale');
}
else if (differenzanum1 === differenzanum2) {
    console.log('I due numeri sono ugualmente vicini al numero Casuale');
}
