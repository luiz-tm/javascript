const express = require('express')
const app = express();

// http://meusite.com/

app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `)
})

app.post('/', (request, response) => {
    response.send('Recebi o formulário')
})

app.get('/contato', (request, response) => {
    response.send('Obrigado por entrar em contato com a gente!')
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})