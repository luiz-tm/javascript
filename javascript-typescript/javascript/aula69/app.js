const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

let acumulador = 0;

a1.forEach((valor, indice) => {
    acumulador += valor;
})

console.log(acumulador)