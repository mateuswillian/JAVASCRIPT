function soma(a,b){
    console.log(a + b)
}

soma(2, 4)
soma(3, 5)
soma(4, 6)
soma(5, 7)
soma('66', '97')
soma(23, 456)
soma('mateus', 'willian')



function deMaior(idade){
    if (idade >= 18){
        console.log('voce é maior de idade')
    }else {
        console.log('voce é menor de idade')
    }
}

const prompt = require ('prompt-sync')()
let idade = Number (prompt('Informe sua idade: '))
deMaior(idade)

idade = Number (prompt('Informe sua idade: '))
deMaior(idade)

idade = Number (prompt('Informe sua idade: '))
deMaior(idade)

idade = Number (prompt('Informe sua idade: '))
deMaior(idade)

idade = Number (prompt('Informe sua idade: '))
deMaior(idade)

