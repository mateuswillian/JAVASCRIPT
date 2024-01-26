const prompt = require('prompt-sync')()
let idade = Number(prompt('informe sua idade: '))
 
 function recebeIdade () {
    let converteIdadeEmAnos = idade * 365 
    console.log(converteIdadeEmAnos)
 }

 recebeIdade()


