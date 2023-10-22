const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('Durante')
})

eventEmitter.on('opahTeste', () => {
    console.log('Muito depois')
})

console.log('Antes')

eventEmitter.emit('start')//para alterar  ordem de execução

console.log('Depois')

eventEmitter.emit('opahTeste')