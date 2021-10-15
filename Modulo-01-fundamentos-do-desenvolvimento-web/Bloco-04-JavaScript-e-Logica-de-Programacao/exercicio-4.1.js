//* exercicio 1
const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//* exercicio 2
const n1 = 15;
const n2 = 7;

if (n1 > n2) {
console.log(n1)
}else{
    console.log(n2)
}

//* exercicio 3
const nu1 = 4;
const nu2 = 7;
const nu3 = 1;

if (nu1 > nu2 && nu1 > nu3) {
    console.log(nu1)
}else if (nu2 > nu1 && nu2 > nu3) {
    console.log(nu2)
}else{
    console.log(nu3)
}

//* exercicio 4
const valor = -1;
if (valor > 0) {
    console.log("positive")
}else if (valor === 0) {
    console.log("zero")
}else{
    console.log("negative")
}

//* exercicio 5
const anguloA = 80;
const anguloB = 70;
const anguloC = 30;

if (anguloA + anguloB + anguloC === 180){
    console.log(true)
}else{
    console.log(false)
}

//* exercicio 6
let nomePeca = "torre";
let movimentos = 'pra frente, pra trás, direita e esquerda';

if (nomePeca === "torre"){
    console.log(movimentos)
}else{
    console.log(peça inexistente)
}