const express = require('express')
const app = express()
const port = 3001 

const path = require('path')

const users = require('./users')

//ler o body
app.use(
    express.urlencoded({
        extended: true
    }),
)
app.use(express.json())

//Arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')//para acessar no diretorio atual essa pasta

app.use('/users', users)

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => { //mensagem ao rodar a aplicação
    console.log(`App rodando na porta ${port}`)
})