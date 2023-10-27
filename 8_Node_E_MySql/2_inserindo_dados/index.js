const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(express.json())


const hbs = exphbs.create({//codigo do chatGPT
    defaultLayout: 'main', // main é o nome do arquivo de layout
  });

app.engine('handlebars', hbs.engine)//"hbs.engine" é um codigo do chat gpt
app.set('view engine', 'handlebars')

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook',(req,res) => {
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`
    conn.query(sql, function(err){
        if(err){
            console.log(err)
        }

        res.redirect('/')
    })

})

const conn = mysql.createConnection({ //string de conexão com o banco
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql2'
})
conn.connect(function(err){// conexão com o banco de dados
    if(err){
        console.log(`O erro da função é: ${err}`)
    }

    console.log('conectou com o MySql!')
    app.listen(3000)
})