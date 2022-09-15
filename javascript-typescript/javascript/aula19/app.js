/*
    Primitivos (imutáveis) - string, number, boolean, underfined, null (bigint, symbol)

    Referência (mutável) - Arrays, object, function
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}
const b = {...a};

a.nome = 'João';
console.log(b)
