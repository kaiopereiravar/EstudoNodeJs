const path = require(`path`)//conseguimos extrair informaçoes sobre arquivos e caminhos

const customPath = "/relatorios/kaio/relatorio1.pdf"

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))