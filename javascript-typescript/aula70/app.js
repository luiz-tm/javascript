// Factory functions / Constructor functions

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this)
}

// {} <- this
const p1 = new Pessoa('Luiz', 'Henrique');
const p2 = new Pessoa('Maria', 'Henrique');

console.log(p1)
console.log(p2)