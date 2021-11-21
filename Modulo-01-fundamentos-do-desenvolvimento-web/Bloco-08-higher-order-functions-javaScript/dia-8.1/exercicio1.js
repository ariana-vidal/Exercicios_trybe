const newEmployees = (nonoF) => {
    const employees = {
        id1: novoF('Pedro Gerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: novoF('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: novoF('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const novoF = (nomeCompleto) => {
    const newEmail = nomeCompleto.toLowerCase().replace(' ', '_');
    return { nome: nomeCompleto, email: '${newEmail}@betrybe.com'};
};
console.log(newEmployees(novoF));

