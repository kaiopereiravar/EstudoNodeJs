const fs = require(`fs`)

if(!fs.existsSync('./minhapasta')){
    console.log('Náo existe')
}

fs.mkdirSync('minhapasta')//usado para criar pastas ou diretorios

if(fs.existsSync('./minhapasta')){
    console.log('existe')
}
