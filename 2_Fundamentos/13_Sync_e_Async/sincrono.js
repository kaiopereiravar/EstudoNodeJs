const fs = require('fs')

console.log('inicio')

fs.writeFileSync('arquivo.txt','oi')//ele cria um .txt escrito oi 

console.log('fim')

//o codigo espera ser totalmente executado para prosseguir