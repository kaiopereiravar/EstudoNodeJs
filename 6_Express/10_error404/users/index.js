const express = require(`express`)
const router = express.Router()
const path = require('path')

//const path = require('path')
const basePath = path.join(__dirname, '../templates')//para acessar no diretorio atual essa pasta

router.get(`/add`, (req,res) =>{
    res.sendFile(`${basePath}/userForm.html`)
})

router.post(`/save`, (req,res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name}, e ele tem ${age} anos de idade!`)

    res.sendFile(`${basePath}/userForm.html`)
})

router.get('/:id', (req, resp) => {
    const id = req.params.id

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    resp.sendFile(`${basePath}/users.html`)
})

module.exports = router
