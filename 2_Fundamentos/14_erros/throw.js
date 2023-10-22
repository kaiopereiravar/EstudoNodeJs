const numberTest = "10"

if(!Number.isInteger(numberTest)){//se o numero for inteiro
    throw new Error("O valor de não é um numero inteiro!!!")
}

console.log("Continuando codigo!!!")