// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // pode apagar ou ser alterada

        get: function() {
            return estoque;
        },

        set: function(valor) {
            if(typeof valor !== 'number')
                return console.log('Bad value')

            estoque = valor;
        }

    })
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            nome = valor;
        }
    }
}

const p2 = criaProduto('Camiseta')
console.log(p2.nome)
