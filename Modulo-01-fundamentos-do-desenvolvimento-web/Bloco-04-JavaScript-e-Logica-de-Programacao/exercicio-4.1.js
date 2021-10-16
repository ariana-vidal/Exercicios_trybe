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
    console.log('peça inexistente')
}

//* exercicio 7
const grade = 50;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

//* exercicio 8
const n1 = 10;
const n2 = 17;
const n3 = 30;

if (n1 && n2 || n3 / 2){
    console.log('true')
}else{
    console.log('false')
}

//* exercicio 9
const n1 = 10;
const n2 = 17;
const n3 = 30;

if (n1 % 2 !== 0 || n2 % 2 !== 0 || n3 % 2 !== 0){
    console.log('true')
}else{
    console.log('false')
}

//* exercicio 10
const valorCusto = 12;
const valorVenda = 22;
const quantidade = 1000;
const lucro = valorVenda - valorCusto;

console.log(lucro * quantidade)

//* exercicio 11
const salarioBruto = 3500.00;
let inss;
let impostoRenda;

if (salarioBruto <= 1556.94) {
    inss = salarioBruto * 0.008;
}else if(salarioBruto <= 2594.92) {
    inss = salarioBruto * 0.009;
}else if (salarioBruto <= 5189.82) {
    inss= salarioBruto * 0.11;
}else{
    inss = 570.88;
}

const salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98){
    impostoRenda = 0;
}else if (salarioBase <= 2826.65){
    impostoRenda = (salarioBase * 0.075) - 142.80;
}else if (salarioBase <= 3751.05){
    impostoRenda = (salarioBase * 0.15) - 354.80;
}else if (salarioBase <= 4664.68){
    impostoRenda = (salarioBase * 0,225) - 636,13;
}else if (salarioBase > 4664.68){
    impostoRenda = (salarioBase * 0.275) - 869.36;
}

console.log("Salário:" + (salarioBase - impostoRenda));