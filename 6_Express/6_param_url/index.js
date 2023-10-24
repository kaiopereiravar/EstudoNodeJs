const express = require('express')
const app = express()
const port = 3001 

const path = require('path')
const basePath = path.join(__dirname, 'templates')//para acessar no diretorio atual essa pasta

app.get('/users/:id', (req, resp) => {
    const id = req.params.id

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    resp.sendFile(`${basePath}/index.html`)
})

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => { //mensagem ao rodar a aplicação
    console.log(`App rodando na porta${port}`)
})