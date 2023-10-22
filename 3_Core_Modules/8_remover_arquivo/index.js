const fs = require(`fs`)

fs.unlink(`arquivo.txt`, function(err){//quero deletar um arquivo(unlink)
    if(err){
        console.log(err)
        return
    }
    else{
        console.log(`aruivo removido!`)
    }
})