const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    const user = {
        name: 'kaio',
        username: 'vinicius',
    }


    res.render('home', {user:user})
})

app.listen(3000, () => {
    console.log('rodando tudo certinho!')
})