const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    const items = ["Item a","Item b","Item c",]

    res.render('dashboard',{items})
})

// app.get('/', (req, res) => {
//     const user = {
//         name: 'kaio',
//         username: 'vinicius',
//     }

//     const auth = true

//     const approved = false

//     res.render('home', {user:user, auth, approved})
// })

app.listen(3000, () => {
    console.log('rodando tudo certinho!')
})