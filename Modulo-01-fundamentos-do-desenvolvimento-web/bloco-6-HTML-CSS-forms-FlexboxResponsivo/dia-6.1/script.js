

    const estados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
    
    const selecine = document.querySelector('select');

    
    for (let index = 0; index < estados.length; index += 1){
        const opcoes = document.createElement('option');
        opcoes.innerText = estados[index]
        console.log(opcoes)
        selecine.appendChild(opcoes)
    }


