const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))

//serve para decompor uma url que passamos para o método parse
//sendo assim, podemos resgatar partes da url como: host, path, search, query e etc...

