const express = require('express')
const app = express()
const port = 3000 

const path = require('path')
const basePath = path.join(__dirname, 'templates')//para acessar no diretorio atual essa pasta

app.listen(port, () => { //mensagem ao rodar a aplicação
    console.log(`App rodando na porta${port}`)
})

app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})


