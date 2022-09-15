// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)


const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const total = numeros.reduce((acc, valor, indice, array) => {
    acc += valor;
    return acc;
}, 0)

//console.log(total)

/*const pares = numeros.filter((valor) => valor % 2 === 0)
console.log(pares)

const dobro = numeros.map((obj) => obj * 2)
console.log(dobro)*/

const pessoas = [ 
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 63 },
    { nome: 'Wallace', idade: 47 },
]

const maisVelho = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
}, 0)

console.log(maisVelho)