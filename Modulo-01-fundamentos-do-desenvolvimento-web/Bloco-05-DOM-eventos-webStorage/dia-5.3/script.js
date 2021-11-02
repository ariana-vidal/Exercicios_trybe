function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
//   // Escreva seu código abaixo.
//   // exercicio 1
 function criandoDias() {
   const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const dias = document.querySelector('#days');
    
    for (let index = 0; index < dezDaysList.length; index += 1){
        const listaDias = document.createElement('li');
        if (dezDaysList[index] === 24 || dezDaysList[index] === 31){
        listaDias.classList.add('holiday')
        
      }else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18){
        listaDias.classList.add('friday')
      }else if(dezDaysList[index] === 25){
        listaDias.classList.add('holiday')
        listaDias.classList.add('friday')
      }
        listaDias.innerText = dezDaysList[index];
        listaDias.classList.add('day')
        dias.appendChild(listaDias)
      };
      
    };
    
    criandoDias();
    
    // exercicio 2
    
    function criandoBotao(param) {
      const paiButton = document.querySelector('.buttons-container');
      const botao = document.createElement('button');
      botao.id = 'btn-holiday';
      botao.innerHTML = param;
      paiButton.appendChild(botao);
       
    } ;
    criandoBotao('Feriados');
    
    
//     // exercicio 3

function colorirHolidays() {
  let selecionaBotao = document.querySelector('#btn-holiday');
  let selecionaHolidays = document.querySelectorAll('.holiday');
  let colorir = 'rgb(238, 238, 238)';
  let descolorir = 'white';
  
  selecionaBotao.addEventListener('click', function() {
    
    for (let index2 = 0; index2 < selecionaHolidays.length; index2 += 1){
       if (selecionaHolidays[index2].style.backgroundColor === descolorir){
         selecionaHolidays[index2].style.backgroundColor = colorir;
        }else{
          selecionaHolidays[index2].style.backgroundColor = descolorir;
          };
         
        
    };

  });
      
};
    colorirHolidays();
    