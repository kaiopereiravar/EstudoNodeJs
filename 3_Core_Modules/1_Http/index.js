const http = require('http')//importando biblioteca
const port = 3001

const server = http.createServer((req, res) => {//res = response //req = request
    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    res.end("<h1>Olá, este é minha primeira aplicação em node</h1>")
})

server.listen(port, () => {//resposta quando o servidor rodar
    console.log(`Servidor rodando a porta ${port}`)
})