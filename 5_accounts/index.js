//modulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//modulos internos
const fs = require('fs')
const { Console } = require('console')

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
            else if (action == 'Depositar') {
                deposit()
                console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
            }
            else if (action == 'Consultar saldo') {
                getAccountBalance()
            }
            else if (action == 'Sacar') {
                Withdraw()
            }
            else if (action == 'Sair') {
                process.exit()
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

function deposit() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName']

            //verify if account exists
            if (!checkAccount(accountName)) {
                return deposit()
            }

            inquirer.prompt([
                {
                    name: 'amount',
                    message: 'Quanto você deseja depositar?'
                }
            ])
                .then((answer) => {
                    const amount = answer['amount']

                    //add an amount
                    addAmount(accountName, amount)
                    operation()
                })
                .catch(err => console.log(err))
        })
        .catch(err => console.log(err))
}

function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta conta não existe!'))
        return false
    }
    return true
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })

    return JSON.parse(accountJSON)
}

function addAmount(accountName, amount) {
    const accountData = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente mais tarde!'))
        return deposit()
    }

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function (err) {
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta`))
}

//show account balance
function getAccountBalance() {
    inquirer
        .prompt([
            {
                name: 'accountName',
                message: 'Qual o nome da sua conta?',
            },
        ])

        .then((answer) => {
            const accountName = answer['accountName']

            //verify if account exist
            if (!checkAccount(accountName)) {
                return getAccountBalance()
            }

            const accountData = getAccount(accountName)
            console.log(
                chalk.bgBlue.black(
                    `Olá, o saldo da sua conta é de R$${accountData.balance}`,
                )
            )
            operation()
        })
        .catch(err => console.log(err))
}

//Withdraw an amount from user account
function Withdraw() {
    inquirer
    .prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua conta?'
        }
    ])
        .then((answer) => {
            const accountName = answer['accountName']

            if (!checkAccount(accountName)) {
                return Withdraw()
            }

            inquirer.prompt([
                {
                    name: 'amount',
                    message: 'Quanto você deseja sacar?'
                }
            ])
            .then((answer) => {
                const amount = answer['amount']

                removeAmount(accountName, amount)
            })
            .catch(err => {console.log(err)})
        })
        .catch(err => console.log(err))
}

function removeAmount(accountName, amount){
    const accountData = getAccount(accountName) 
    const valueAccount = getAccountBalance()

    if(!amount){
        console.log(
            chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!')
        )

        return Withdraw()
    }

    if(accountData.balance < amount){
        console.log(chalk.bgRed.black(`Opah, não foi possivel realizar a requisição, saldo insuficiente aí hein! na sua conta possui apenas ${accountData.balance}`))
        return operation()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err){
            console.log(err)
        },
    )

    console.log(chalk.green(`Foi realizado um saque de R$${amount} da sua conta!`))
    return operation()
}