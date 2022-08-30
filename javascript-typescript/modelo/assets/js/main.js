const res = document.querySelector('.resultado')

const Result = (imc) =>
{
    let result;

    if(imc < 18.5) { result = 'Abaixo do peso'; }
    else if(imc >= 18.5 && imc <= 24.9) { result = 'Peso normal'; }
    else if(imc >= 25 && imc <= 29.9) { result = 'Sobrepeso'; }
    else if(imc >= 30 && imc <= 34.9) { result = 'Obesidade grau 1'; }
    else if(imc >= 35 && imc <= 39.9) { result = 'Obesidade grau 2'; }
    else if(imc >= 40) { result = 'Obesidade grau 3'; }
    res.innerHTML = `Seu IMC é: ${imc.toFixed(2)}\tResultado: ${result}`;
}

const calcularIMC = (peso, altura) => (peso/altura**2)

const App = () =>
{
    const sendButton = document.querySelector('#send-button')

    sendButton.addEventListener('click', (event) => {
        event.preventDefault();

        const pesoInput = document.querySelector('#input-teste-1')
        const alturaInput = document.querySelector('#input-teste-2')
        const peso = Number(pesoInput.value.replace(',', '.'))
        const altura = Number(alturaInput.value.replace(',', '.'))

        if(!Number(peso) || !Number(altura))
        {
            res.style.background = 'var(--color-error)';
            res.innerHTML = `Não foi digitado um número na altura ou peso.`
        }
        else 
        {
            res.style.background = 'var(--primary-color-lighter)';
            const imc = calcularIMC(peso,altura)
            Result(imc)     
        }
    })
}

App()