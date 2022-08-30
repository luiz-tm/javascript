function Calculadora() {
    this.display = document.querySelector('.display')


    this.addNumDisplay = (el) => this.display.value += el.innerText;
    this.inicia = () => this.clicks(); 
    this.clear = () => this.display.value = ''
    this.del = () => this.display.value = this.display.value.slice(0, -1);


    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);
            
            if(!conta)
                return alert('Conta inválida')
            
            this.display.value = conta;
            
        } catch(e) {
            return alert('Conta inválida')
        }
    }

    this.clicks = () => {
        document.addEventListener('click', (event) => 
        {
            const el = event.target;

            if(el.classList.contains('btn-num')) this.addNumDisplay(el)

            else if(el.classList.contains('btn-clear')) this.clear();

            else if(el.classList.contains('btn-del')) this.del();

            else if(el.classList.contains('btn-eq')) this.realizaConta() 
        })
    }
}

const calculadora = new Calculadora();
calculadora.inicia();