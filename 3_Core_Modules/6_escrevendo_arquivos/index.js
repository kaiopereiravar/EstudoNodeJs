const http = require('http')//importando biblioteca
const fs = require('fs')//Ele permite a leitura, gravação, exclusão e manipulação de arquivos e diretórios.
const port = 3001

const server = http.createServer((req, res) => {//res = response //req = request
    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', function(err,data){//para ler os arquivos
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }
    else{
        fs.writeFile('arquivo.txt', name, function(err, data){//quero escrever em um arquivo quando cair
            res.writeHead(302, {
               Location: '/' 
            })

            return res.end()
        })
    }

    
})

server.listen(port, () => {//resposta quando o servidor rodar
    console.log(`Servidor rodando a porta ${port}`)
})