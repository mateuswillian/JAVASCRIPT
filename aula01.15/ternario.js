/* operadores do ternario: ? e o : 

IF normal
  let meuBoleano = false

  if (meuBoleano) {
     console.log('É verdade')
  } else {
      console.log('É falso')
 }

  if ternario
  meuBoleano ? console.log('É verdade') : console.log('É falso')
*/

//const prompt = require('prompt-sync')()

// let vendas = 3000
// if (vendas >= 2500) {
//     console.log('voçê vai receber sua gradificacao')
// } else {
//     console.log('voçê não vai receber a gratificação')
// }

/*let vendas = 1200
const gratificacao = vendas >= 2500 ? 'voçê vai receber sua gratificação' : 'Voçê NÂO vai receber sua gratificação'

console.log(gratificacao)
*/

// let nota = 9.0
// const resultado = nota >= 7.0 ? 'Aprovado' : nota <  5.0 ? 'Reprovado' : 'recuperação'
// console.log(resultado)

const prompt = require('prompt-sync')()

const nome = prompt('informe seu nome: ').toLowerCase()

const funcao = nome === 'paulo' ? 'professor' : nome === 'aline' ? 'aluna' : nome === 'mateus' ? 'aluno' : 'não identificado'

console.log(funcao)