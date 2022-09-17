const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Outra coisa qualquer.',
    descricao: 'Outra descrição'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e))

exports. paginaInicial = (req, res, next) => {
    res.render('index')
    next()
}

exports.trataPost = (req, res, next) => {
    res.send(`Olá! Seja bem-vindo(a) ${req.body.cliente}`)
}