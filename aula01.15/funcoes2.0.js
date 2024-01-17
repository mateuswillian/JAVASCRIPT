// // criar uma função de forma literal
// function func01 () { return 'Função 01'}

// // armazenar uma função em uma variavel
// const func02 = function () { return 'Função 02'}

// // armazenar uma função em um array

// const meuArray = [function(a, b) { return a + b}, func01, func02 ]

// console.log(meuArray[0] (4, 7))
// console.log(meuArray[1] ())
// console.log(meuArray[2] ())

// // armazenar uma função em atributo  de objeto

// const obj = {}
// obj.falar = function() { return 'opa, to aq'}

// console.log(obj.falar())
 

// // função com paramentro de uma função
// function run(func03) {
//     func03()
// }

// run(function(){console.log('executando....')})


// function calculaSalario(funcoes, valor) {
//     funcoes(valor)
// }

// calculaSalario (function(valor) {
//     let imposto = valor * 0.03
//     let valorComImposto = valor - imposto
//     console.log(valorComImposto)
// }, 1200)

// calculaSalario (function(valor) {
//     let imposto = valor * 0.05
//     let valorComImposto = valor - imposto
//     console.log(valorComImposto)
// }, 1500)


// function calculadora () {
//     return function (a, b) {
//         console.log(a + b)
//     }
// }
// calculadora ()(5, 4)



// function valores (a, b, c, d, e, f) {
//     console.log(a + b)
//     console.log(c - d)
//     console.log(e * f)
// }

// valores(5, 3, 67, 98, 23, 12)

// /*
// function run1 (umaString) {
//     let novaString = umaString
//     console.log(novaString)
// }

// run1('junior')

// function qualquerCoisa (minhaString) {
//     let 
// }
// */

// // aula01.16

// // Retornos são opcionais

// function area(largura, altura) {
//     const area = largura * altura
//     if (area > 20) {
//         console.log(`valor acima do permitido: ${area} m2`)
//     } else {
//         return area
//     }
// }

// console.log(area(2, 2))
// console.log(area(2))
// console.log(area(5, 5))

// Parametros variaveis nas funções JS
// arguments é uma lista criada automaticamente com os valores passados para uma função sem Parametros. obs toda vida que trabalha com arguments ele passa os objetos.
// function soma () {
//     let soma  = 0 
//     for (i in arguments) { 
//         soma += arguments[i]
//     }
//     return {soma, arguments} // return precisa da chaves para passar mais de um valor.
// }

// console.log(soma())
// console.log(soma(1))
// console.log(soma(1, 5))
// console.log(soma(1, 5, 9))
// console.log(soma(1, 5, 9, 6, 5, 9, 8))
// console.log(soma('mateus' ,' willian'))

//funções com parametros e com valores padrões
// estrutura antes de es2015
function multiplicacao (a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a * b * c
}
console.log(multiplicacao())

// valor padrao do es2015
function multiplicacao2015 (a = 1, b = 1, c = 1){
    return a * b * c
}
console.log(multiplicacao2015())
console.log(multiplicacao2015(2))
console.log(multiplicacao2015(4, 6))
console.log(multiplicacao2015(8, 10, 12))
