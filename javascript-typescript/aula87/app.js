function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') 
            return reject('Bad value.')

        setTimeout(() => {

            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo)
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject
/*const promises = [
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1,5)),
    esperaAi('Promise 3', rand(1,5)),
    esperaAi(1000, 1000),
];*/

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache.')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then((dadosPagina) => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERRO:', e))