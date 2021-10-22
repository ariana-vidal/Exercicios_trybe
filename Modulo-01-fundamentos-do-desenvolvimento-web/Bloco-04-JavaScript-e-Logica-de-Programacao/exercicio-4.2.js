//* exercicio 1 (imprimindo o conteudo do array)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index +=1){
    console.log(numbers[index]);
}

//* exercicio 2 (imprimindo a soma do conteudo do array)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index +=1){
    soma += numbers[index];
}
    console.log(soma);

//* exercicio 3  (imprimindo a media aritimetica do array)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index +=1){
    soma += numbers[index];
}
let valorFinal = soma / numbers.length;
    console.log(valorFinal);

//* exercicio 4 (verificando se a media é maior que 20)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let index = 0; index < numbers.length; index +=1){
    soma += numbers[index];
}
let valorFinal = soma / numbers.length;
    
if (valorFinal > 20){
    console.log('valor maior que 20');
}else{
    console.log('valor menor ou igual a 20')
}

//* exercicio 5 (descobrindo qual o maior valor que tem dentro do array)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorN = numbers[0];
for (let index = 1; index < numbers.length; index += 1){
    if (maiorN < numbers[index]){
        maiorN = numbers[index];
    }
}
    console.log('o maior número é:' + maiorN);

//* exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;
for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 2 >= 1){
        impares += 1;
    }
    
}
    console.log('a quantidade de números ímpares é:' + impares);

//* exercicio 7 (descobrindo o menor numero de array)
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorN = numbers[0];
for (let index = 1; index < numbers.length; index += 1){
    if (menorN > numbers[index]){
        menorN = numbers[index];
    }
}
    console.log('o menor número é:' + menorN);

//* exercicio 8 (criando um array que vai de 1 a 25)
let sequencia = [];
for (let index = 1; index <= 25; index +=1 ){
    sequencia[index] = index;
}
    console.log(sequencia);

//* exercicio 9 (multiplicando cada elemento de um array por 2)
let sequencia = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

for (let index = 0; index < sequencia.length; index +=1){
    console.log(sequencia[index] * 2);
}
   

