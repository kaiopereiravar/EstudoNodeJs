//modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//modulos internos
const fs = require('fs')

operation()

function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair'],
        },
    ])
        .then((answer) => {
            const action = answer['action']

            if (action === 'Criar conta') {
                createAccount()
            }
        })
        .catch((err) => {
            console.log(err)
        })
}
//Create a account

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    buildAcount()
}

function buildAcount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite o nome para a sua conta'
        },
    ])
        .then(answer => {
            const accountName = answer['accountName']
            console.info(`O nome escolhido por você foi: ${accountName}`)

            if (!fs.existsSync('accounts')) {
                fs.mkdirSync('accounts')
            }
            if (fs.existsSync(`accounts/${accountName}.json`)) {
                console.log(
                    chalk.bgRed.black(`Essa conta já existe, escolha outro nome!`),
                )
                buildAcount()
                return
            }

            fs.writeFileSync(`accounts/${accountName}.json`,
                `{"balance": 0}`,
                function (err) {
                    console.log(err)
                })

            console.log('Parabéns, a sua conta foi criada com sucesso!')
            operation()
        })
        .catch(err => console.log(err))
}