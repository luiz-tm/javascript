
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

function Pessoa2(noe, sobrenome)
{
    this.nome = noe;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Luiz', 'Henrique')
const p2 = new Pessoa2('Luiz', 'Henrique')


p1.falar();
p2.falar()