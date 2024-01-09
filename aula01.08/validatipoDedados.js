const prompt = require ('prompt-sync')()

let nome = prompt ('digite seu nome: ' )
let idade = prompt ('digite sua idade: ' )
let t = true

console.log (typeof nome)
console.log (typeof parseInt (idade))
console.log (typeof t)