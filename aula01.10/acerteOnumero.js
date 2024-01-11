// crie um game para que o usuario ficar tentando acertar o numero oculto. quando ele acertar o game deve finalizar e informar a quantidade de tentativas.

const prompt = require ('prompt-sync')()

const numOculto = 23
let qltdTentativa = 0
while (true) {
   const n = Number(prompt('informe um numero : '))
   qltdTentativa++
   if (numOculto===n){
        console.log (`parabéns você acertou e teve ${qltdTentativa} tentativa(s)`)
        break
   }
   if (numOculto > n) {
        console.log(`o seu numero ${n} é MENOR que o numero oculto. tente novamente `)
   } else {
    console.log (`O seu numero ${n} É MAIOR que o numero oculto. tente novamente`)
   }
}