function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        bbtnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.clickBotoes();
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        clearDisplay() {
            this.display.value = '';
        },

        realizaConta()
        {
            let conta = this.display.value;

            try {
                conta = eval(conta)

                if(!conta)
                    return alert('Conta inválida.')

                this.display.value = conta;
            } catch(e) {
                return alert('Conta inválida.')
            }
        },

        clickBotoes() {
            document.addEventListener('click', (e) => {
                if(e.target.classList.contains('btn-num'))
                {
                    this.btnParaDisplay(e.target.innerText);
                }

                else if(e.target.classList.contains('btn-clear'))
                {
                    this.clearDisplay()
                }

                else if(e.target.classList.contains('btn-del'))
                {
                    this.apagaUm();
                }

                else if(e.target.classList.contains('btn-eq'))
                {
                    this.realizaConta();
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    }
}

const calculadora = criaCalculadora();
calculadora.inicia()