/*
    Entre 0 - 11 - Bom dia
    Entre 12 - 17 - Boa tarde
    18 - 23 - Boa noite
*/

// if pode ser usado sozinho
// sempre que utilizo else, preciso de um if antes
// posso ter vários else ifs na checagem

const hora = -1

if (hora < 12)
{
    console.log('Bom dia')
}

else if (hora >= 12 && hora <= 17)
{
    console.log('Boa tarde')
}

else if(hora >= 18 && hora <= 23)
{
    console.log('Boa noite')
}

else 
{
    console.log('Hora inválida')
}