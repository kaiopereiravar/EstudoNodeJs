const fs = require(`fs`)


const newAFile = `kainho2.txt`
const oldFile = `arquivo.txt`

fs.rename(oldFile, newAFile, function(err){
    if(err){
        console.log(`Não foi possivel renomear o aquivo!!!`)
        return
    }

    console.log(`O arquivo ${oldFile} foi renomeado com sucesso!!!`)
})