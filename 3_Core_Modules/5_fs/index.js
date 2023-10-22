const http = require('http')//importando biblioteca
const fs = require('fs')//Ele permite a leitura, gravação, exclusão e manipulação de arquivos e diretórios.

const port = 3001

const server = http.createServer((req, res) => {//res = response //req = request
    fs.readFile('mensagem.html', function(err,data){//para ler os arquivos

        res.writeHead(200, {'Content-Type':'text/hmtl'})
        res.write(data)
        return res.end()
    })
})

server.listen(port, () => {//resposta quando o servidor rodar
    console.log(`Servidor rodando a porta ${port}`)
})