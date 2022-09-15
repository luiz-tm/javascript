/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg, tem 1.80m de altura e seu IMC é de 25.929281219
Luiz Otávio nasceu em 1980
*/

const nome = "Luiz Henrique";
const sobrenome = "Teixeira de Morais";
const idade = 18;
const peso = 54;
const altura = 1.72;
let imc; // peso / (altura*altura)
let anoNascimento = 2004;
imc = (peso/(altura**2))

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura}m de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
