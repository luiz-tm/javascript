class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: false,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }   

    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length)  === this.cpfLimpo
    }

    static geraDigito(cpfParcial) {
        let total = 0;
        let reverso = cpfParcial.length + 1;

        for(let numerico of cpfParcial) {
            total += reverso * Number(numerico)
            reverso--;
        }

        const digito = 11 - (total % 11);

        return digito <= 9 ? String(digito) : '0'
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfParcial);
        const digito2 = ValidaCPF.geraDigito(cpfParcial + digito1);

        this.novoCPF = cpfParcial + digito1 + digito2;
    }

    valida() {
        if(!this.cpfLimpo)
            return false;
        
        if(typeof this.cpfLimpo !== 'string')
            return false;
        
        if(this.cpfLimpo.length !== 11)
            return false;
        
        if(this.éSequência())
            return false;
        
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo
    }
}

const validaCPF = new ValidaCPF('070.987.720-03');

if(validaCPF.valida()) {
    console.log('CPF válido.')
} else {
    console.log('CPF inválido.')
}