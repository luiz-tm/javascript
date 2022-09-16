exports.paginaInicial = (req, res, next) => {
    res.render('index')
    next()
}

exports.trataPost = (req, res, next) => {
    res.send(`Olá! Seja bem-vindo(a) ${req.body.cliente}`)
}