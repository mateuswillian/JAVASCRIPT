/*
 fazer uma estrutura que calcule a media das 03 notas do aluno e informe se o mesmo, passou de ano ou vai repetir 
 */

 const prompt = require ('prompt-sync')()

const nota1 = prompt ( 'qual sua primeira nota? ')
const nota2 = prompt ( 'qual sua segunda nota? ')
const nota3 = prompt ( 'qual sua terceira nota? ')

const media = ( parseInt(nota1) + parseInt(nota2) + parseInt(nota3) ) / 3
console.log(media)

if ( media >= 7  ) {
    console.log ('você foi aprovado')
}else {
    console.log ( 'reprovado' )
}