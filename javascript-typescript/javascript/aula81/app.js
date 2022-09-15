class Pessoa {
    constructor(nome, sobrenome)
    {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ')
        this.nome  = valor.shift();
        this.sobrenome = valor.join(' ')
        console.log(valor)
        console.log(this.nome, this.sobrenome)
    }
}

const p1 = new Pessoa('Luiz', 'Henrique')
p1.nomeCompleto = 'Pedro Mattos Oliveira'
//console.log(p1.nomeCompleto)