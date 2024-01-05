const prompt = require ('prompt-sync')()

const idade = prompt ('qual sua idade? ')

if ( idade >= 18 && idade < 60) {
    console.log ('você é adulto')
} else if (idade > 0 && idade < 12 ) {
    console.log ('você é criaça')
} else if (idade >= 12 && idade <= 17 ) {
    console.log ('você é adolecente')
} else if (idade >= 60 ) {
    console.log ('você é idoso')
} else {
    console.log ('Impossivel identificar sua faixa')
}
