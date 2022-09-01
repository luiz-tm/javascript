function Produto(nome, preco)
{
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(valor) {
    this.preco = this.preco - (this.preco * (valor / 100))
}

Produto.prototype.aumento = function(valor) {
    this.preco = this.preco + (this.preco * (valor / 100))
}

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype)

console.log(p2)

p1.aumento(100)
console.log(p1)