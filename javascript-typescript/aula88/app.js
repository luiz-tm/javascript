function rand(min = 0, max = 3) {
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

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand(0, 3))
        console.log(fase1)
    
        const fase2 = await esperaAi('Fase 2', rand(0, 3))
        console.log(fase2)
    
        const fase3 = await esperaAi('Fase 3', rand(0, 3))
        console.log(fase3)
    
        console.log('Terminamos na fase:', fase3)
    } catch(e) {
        console.log(e)
    }
}
executa();

// pending -> pendente
// fullfilled -> resolvida
// rejected -> rejeitada