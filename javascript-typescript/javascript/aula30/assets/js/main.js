const getWeekDay = (diaSem) =>
{
    const weekDay = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    return weekDay[diaSem];
}

const getMonthName = (mes) =>
{
    const monthName = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return monthName[mes];
}

const fixNumber = (num) => num >= 10 ? num : `0${num}`

const App = () => 
{
    const resultado = document.querySelector('.container > h1')

    const date = new Date();

    resultado.innerHTML = `${getWeekDay(date.getDay())}, ${date.getDate()} de ${getMonthName(date.getMonth())} de ${date.getFullYear()} ${fixNumber(date.getHours())}:${fixNumber(date.getMinutes())}`
}

App()