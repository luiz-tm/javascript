/*

// Escreva uma função que recebe 2 números e retorne o maior deles.

const bigger = (x,y) => x > y ? x : y;

console.log(bigger(10,17))

*/

/*
// Escreva uma função ePaisagem que recebe dois argumentos, largua e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (x, y) => x > y;

console.log(ePaisagem(1080,1920))
*/

/*
    Escreva uma função que recebe um número e
    retorne o seguinte:
    Número é divísivel por 3 = Fizz
    Número é divisível por 5 = Buzz
    Número é divisível por 3 e 5 = FizzBuzz
    Número não é divisível por 3 e 5 = Retorna o próprio número
    Checar se o número é realmente um número
    Use a função com números de 0 a 100.
*/

function fizzBuzz(numero)
{
    if(isNaN(numero))
        return console.log('Não é um número')

    if((numero % 3) == 0 && (numero % 5) == 0) 
        return 'FizzBuzz';
    else if((numero % 3) == 0)
        return 'Fizz'
    else if((numero % 5) == 0)
        return 'Buzz'
    else 
        return numero;
}

for(let i = 0; i <= 100; i++)
{
    console.log(i, fizzBuzz(i))
}