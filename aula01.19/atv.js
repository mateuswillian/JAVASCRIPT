// Faça um algoritmo que calcule o fatorial de um numero. Use arrowFunction

const prompt= require ('prompt-sync')()

// const calculoFatorial = (num) => {
//     let resultado = 1

//     for(let i=1; i <= num; i++){
//         resultado *= i
//     }
//     return resultado
// } 

// const numero = Number(prompt('Informe um numero: '))
// const resultadoFinal = calculoFatorial(numero)

// console.log(`O fatorial de ${numero} é ${resultadoFinal}`)

//Crie um codigo que informe como, quantas e quais cedulas são necessarias para entregar um valor determinado.
  //cedulas: 2, 5, 10, 20, 50, 100, 200



 const entregarCedulas = (valor) => {
         const cedulas = [200, 100, 50, 20, 10, 5, 2 ]
         const resultadoCD = []

cedulas.forEach((cedula) => {
                 const qtd = Math.floor(valor / cedula)
                 if (qtd > 0) {
                    resultadoCD.push({cedula: cedula, qtd: qtd})
                    valor -= qtd * cedula
                }
            })
            return resultadoCD
        }
        
        const sacar = Number(prompt('Informe o valor a ser sacado: '))
        const cedulasNecessarias = entregarCedulas(sacar)
        
        cedulasNecessarias.forEach((item) => {
            console.log(`${item.qtd} cedula(s) de R$${item.cedula}`)
        })