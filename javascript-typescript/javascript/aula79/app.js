const pessoaPrototype = {
    falar() {
        console.log(`${this.nome} está falando.`)
    },

    comer() {
        console.log(`${this.nome} está comendo.`)
    },

    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

function criaPessoa(nome, sobrenome) {

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    })
}

const p1 = criaPessoa('Luiz', 'Henrique')
const p2 = criaPessoa('Maria', 'A.')
console.log(p2)