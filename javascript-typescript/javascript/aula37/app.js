const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Henrique'
}

for(let i in pessoa)
{
    console.log(i)
}

// For clássico geralmente com iteráveis (array ou strings)
// For in retorna o índice ou chave (strings, array ou objetos)
// For off retorna o valor em si (iteráveis, arrays ou strings)

/*const nome = ['Luiz', 'Henrique'];


for(let valor of nome)
{
    console.log(valor)
}

console.log('####')

nome.forEach(function (el, i, array) {
    console.log(el, i, array)
})*/