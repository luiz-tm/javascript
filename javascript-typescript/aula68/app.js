
// Retorne a soma do dobro de todos os pares

// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const pares = numeros.filter((valor) => valor % 2 === 0)
const dobro = pares.map((valor) => valor*2)
const soma = dobro.reduce((acumulador, valor) => acumulador += valor)

console.log(soma)