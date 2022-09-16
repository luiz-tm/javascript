const express = require('express')
const app = express();

app.use(express.urlencoded( { extended: true } ))

// http://facebook.com/profiles/12345?campanha=googleads

app.get('/', (request, response) => {
    response.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `)
})

app.get('/testes/:idUsuarios?', (request, response) => {
    console.log(request.params)
    response.send(request.params)
})

app.post('/', (request, response) => {
    response.send(`O que você me enviou foi: ${request.body.nome}, que legal!`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})