// Factory function
// Constructor function (função construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor)

        },

        fala(assunto) 
        {
            return `${this.nome} está ${assunto}.`
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / ( this.altura ** 2)
            return indice.toFixed(2)
        }

    }
}


const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80)
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala('falando sobre NADA'))