const express = require('express')
const app = express()
const port = 3001 

//ler o body
app.use(
    express.urlencoded({
        extended: true
    }),
)
app.use(express.json())

const path = require('path')
const basePath = path.join(__dirname, 'templates')//para acessar no diretorio atual essa pasta


app.get('/', (req, resp) => {
    resp.sendFile(`${basePath}/index.html`)
})


app.get(`/users/add`, (req,res) =>{
    res.sendFile(`${basePath}/userForm.html`)
})
app.post(`/users/save`, (req,res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name}, e ele tem ${age} anos de idade!`)

    res.sendFile(`${basePath}/userForm.html`)
})

app.get('/users/:id', (req, resp) => {
    const id = req.params.id

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    resp.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => { //mensagem ao rodar a aplicação
    console.log(`App rodando na porta${port}`)
})