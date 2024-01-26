function cumprimento (text) {
    return(`Olá, ${text}!`)
}
const prompt = require('prompt-sync') ()
let nome = (prompt('informe seu nome: '))
const saudacao = cumprimento(nome)
console.log(saudacao)
