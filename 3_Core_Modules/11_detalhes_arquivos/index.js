const fs = require(`fs`)
const stats  = require("fs/promises")


fs.stat(`novoarquivo.txt`, (err, stats) => {//temos informaçoes de tamanho, data de criaçao, etc.. referente ao arquivo(stats)
    if(err){
        console.log(err)
        return
    }

    console.log(stats.isFile())
    console.log(stats.isDirectory())
    console.log(stats.isSymbolicLink())
    console.log(stats.ctime)
    console.log(stats.size)
})