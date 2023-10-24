const express = require('express')
const app = express()
const port = 3000 

app.listen(port, () => { //mensagem ao rodar a aplicação
    console.log(`App rodando na porta${port}`)
})

app.get('/', (req, resp) => {
    resp.send('Ola mundo')
})

