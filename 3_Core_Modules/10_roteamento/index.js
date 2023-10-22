const http = require('http')//importando biblioteca
const fs = require('fs')//Ele permite a leitura, gravação, exclusão e manipulação de arquivos e diretórios.
const url= require('url')

const port = 3001

const server = http.createServer((req, res) => {//res = response //req = request
    const q = url.parse(req.url, true)
    const fileName = q.pathname.substring(1)

    if(fileName.includes('html')){//so vai entrar no if, se estiver incluso o html
        if(fs.existsSync(fileName)){
            fs.readFile(fileName, function(err,data){//para ler os arquivos
                res.writeHead(200, {'Content-Type':'text/html'})
                res.write(data)
                return res.end()
            })
        }
    }
    else{
        fs.readFile('404.html', function(err,data){//para ler os arquivos
            res.writeHead(404, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }
    

    
})

server.listen(port, () => {//resposta quando o servidor rodar
    console.log(`Servidor rodando a porta ${port}`)
})