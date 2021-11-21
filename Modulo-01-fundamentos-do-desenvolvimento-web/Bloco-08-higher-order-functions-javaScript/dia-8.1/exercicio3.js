const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const respostaFinal = (right, student, checaResposta) =>{
    let nota = 0;
for (let index = 0; index < right.length; index += 1){
    const rightReturn = checaResposta(right[index], student[index]);
    nota += rightReturn;
}
return nota;
};

console.log(respostaFinal(RIGHT_ANSWERS, STUDENT_ANSWERS,(right, student) =>{
    if (right === student){
        return 1;
    } else if(right !== student){
        return -0.5;
    } else {
        return 0;
    }
}));




