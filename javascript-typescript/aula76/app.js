// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material, lápis

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;

};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

function Caneca(nome, preco, material) {
    Produto.call(this, nome, preco)
    this.material = material;
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Genérico', 111)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Café', 10, 'Porcelana')

console.log(camiseta)
console.log(produto)
console.log(caneca)