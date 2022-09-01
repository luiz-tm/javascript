

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(cpfLimpo.length !== 11) return false;

    ValidaCPF.prototype.criaDigito = function(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        
    }

    return true;
}

const cpf = new ValidaCPF('705.484.450-52')
cpf.valida();