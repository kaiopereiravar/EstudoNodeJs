const express = require('express')
const app = express()
const port = 3001 

const path = require('path')
const basePath = path.join(__dirname, 'templates')//para acessar no diretorio atual essa pasta

const checkAuth = function(req, res, next){
    req.authStatus = true

    if(req.authStatus){
        console.log(`Está logado pode continuar!!`)
        next()
    }
    else{
        console.log(`Náo esta logado, faça o login para continuar!`)
        next()
    }
}

app.use(checkAuth)

app.get('/home', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})


app.listen(port, () => { //mensagem ao rodar a aplicação
    console.log(`App rodando na porta${port}`)
})