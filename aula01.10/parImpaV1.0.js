// crie um codigo que solicite 10 números para o usuario e ao final informe quantos forem pares e quantos forem impares.

const prompt= require ('prompt-sync')()

let numPares = 0
let numImpares = 0

for(i=0; i<10; i++){
    const numDigitado = Number (prompt('informe um numero: '))
    if (numDigitado % 2 === 0){
        numPares++
    }else{
        numImpares++
    }
}

console.log(`voçê digitou ${numPares} numeros PARE(S) e ${numImpares} numeros IMPARE(S) `)  