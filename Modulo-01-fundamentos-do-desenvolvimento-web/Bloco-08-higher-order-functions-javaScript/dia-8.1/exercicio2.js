const numAleat = () => Math.floor(Math.random() * 6);
  
const fncao1 = (numero1, numero2) =>{
    if (numero1 === numero2){
       return 'Parabéns voce ganhou!!'
   } else {
       return 'Tente novamente.'
   }
}

console.log(fncao1(5, numAleat()));
