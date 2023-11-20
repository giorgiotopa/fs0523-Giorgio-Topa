const numeroCasuale:number = Math.floor(Math.random() * 100) + 1;

console.log(numeroCasuale);

const numero1:number = Math.abs(50);
const numero2:number = Math.abs(40);


const differenzanum1:number = numeroCasuale - numero1;
const differenzanum2:number = numeroCasuale - numero2;

console.log(differenzanum1);
console.log(differenzanum2);

if (numeroCasuale === numero1 && numeroCasuale === numero2){
    console.log('Entrambi i numeri sono uguali al numero Casuale');    
}else if (numeroCasuale === numero1) {
    console.log('Il primo numero è uguale al numero Casuale');
}else if (numeroCasuale === numero2) {
    console.log('Il secondo numero è uguale al numero Casuale');
}else if (differenzanum1 > differenzanum2) {
    console.log('Il secondo numero si è avvicinato di più al numero Casuale');    
}else if (differenzanum1 < differenzanum2) {
    console.log('Il primo numero si è avvicinato di più al numero Casuale');
}else if (differenzanum1 === differenzanum2) {
    console.log('I due numeri sono ugualmente vicini al numero Casuale');
}