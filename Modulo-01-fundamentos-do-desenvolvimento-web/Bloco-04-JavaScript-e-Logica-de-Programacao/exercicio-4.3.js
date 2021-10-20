//* exercicio 1 quadrado

let linha = 4;
let coluna = '';
let simbolo = '*';

for (let index = 0; index < linha; index += 1){
    coluna = coluna + simbolo;
}
    

for (let index = 0; index < linha; index += 1){
    console.log(coluna);
}
//* resulado
//****
//****
//****
//****

// exercicio 2 triangulo
let base = 5;
let coluna = '';
let simbolo = '*';

for (let index = 0; index < base; index += 1){
    console.log(coluna);
    coluna = coluna + simbolo;
}    
//* resultado
//*
//**
//***
//****

//* exercicio 3 Agora inverta o lado do triângulo
let base = 5;
let coluna = '';
let simbolo = '*';
let posicao = base;


for (let index = 0; index < base; index += 1){
    for (let index2 = 0; index2 <= base; index2 += 1) {
        if (index2 < posicao) {
          coluna = coluna + ' ';
        }else{
            coluna = coluna + simbolo;
        }
    
    }   
    console.log(coluna);
    coluna = '';
    posicao -= 1;
}    

//* exercicio 4