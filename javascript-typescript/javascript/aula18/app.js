function criarPessoa (nome, sobrenome, idade)
{
    return {nome,sobrenome,idade};
}

const pessoa1 = criarPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criarPessoa('Maria', 'Oliveira', 55);
const pessoa3 = criarPessoa('João', 'Miranda', 23);
console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(pessoa3.nome)