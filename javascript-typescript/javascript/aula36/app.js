
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Morais',
    idade: 30
}

for(let i in pessoa)
{
    console.log(i, pessoa[i]);
}