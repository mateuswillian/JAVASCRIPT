// crie um codigo que informe o dia da semana atraves de numero.

const prompt = require('prompt-sync')()

const numero= Number (prompt ('informe qual o numero deseja informação: '))

//1 a 7

 /* também está certo 
 if (numero == 1) {
     console.log('domingo')
 } else if (numero == 2) {
     console.log('segunda-feira')
 } else if (numero == 3) {
     console.log('terça-feira')
 } else if (numero == 4) {
     console.log('quarta-feira')
 } else if (numero == 5) {
     console.log('quinta-feira')
 } else if (numero == 6) {
     console.log('sexta-feira')
 } else if (numero == 7) {
     console.log('sabado')
 } else {
     console.log('não é um dia da semana')
 }
 */

 switch (numero) {
    case 1:
        console.log('domingo')
        break
    case 2:
        console.log('segunda-feira')
        break
    case 3:
        console.log('terça-feira')
        break
    case 4:
         console.log('quarta-feira')
         break
    case 5:
        console.log('quinta-feira')
        break
    case 6:
        console.log('sexta-feira')
        break
    case 7:
        console.log('sabado')
        break
 }