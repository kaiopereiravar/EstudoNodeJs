const http = require('http')//importando biblioteca
// const url = require('url')

const port = 3001

const server = http.createServer((req, res) => {//res = response //req = request
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name //pegando o parametro name da query

    res.statusCode = 200
    res.setHeader('Contenty-Type', 'text/html')
    
    if(!name){
        res.end(
            '<h1>Preencha o seu nome:</h1> <form method="GET"> <input type="text" name="name"/> <input type="submit" name="Enviar"/> </form>'
        )
    }
    else{
        res.end(`<h1> Seja bem vindo ${name}!</h1>`)
    }
})

server.listen(port, () => {//resposta quando o servidor rodar
    console.log(`Servidor rodando a porta ${port}`)
})