// criar uma função de forma literal
function func01 () { return 'Função 01'}

// armazenar uma função em uma variavel
const func02 = function () { return 'Função 02'}

// armazenar uma função em um array

const meuArray = [function(a, b) { return a + b}, func01, func02 ]

console.log(meuArray[0] (4, 7))
console.log(meuArray[1] ())
console.log(meuArray[2] ())

// armazenar uma função em atributo  de objeto

const obj = {}
obj.falar = function() { return 'opa, to aq'}

console.log(obj.falar())
 

// função com paramentro de uma função
function run(func03) {
    func03()
}

run(function(){console.log('executando....')})


function calculaSalario(funcoes, valor) {
    funcoes(valor)
}

calculaSalario (function(valor) {
    let imposto = valor * 0.03
    let valorComImposto = valor - imposto
    console.log(valorComImposto)
}, 1200)

calculaSalario (function(valor) {
    let imposto = valor * 0.05
    let valorComImposto = valor - imposto
    console.log(valorComImposto)
}, 1500)


function calculadora () {
    return function (a, b) {
        console.log(a + b)
    }
}
calculadora ()(5, 4)



function valores (a, b, c, d, e, f) {
    console.log(a + b)
    console.log(c - d)
    console.log(e * f)
}

valores(5, 3, 67, 98, 23, 12)


/*
function run1 (umaString) {
    let novaString = umaString
    console.log(novaString)
}

run1('junior')


function qualquerCoisa (minhaString) {
    let 
}
*/

// aula01.16

// Retornos são opcionais

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`valor acima do permitido: ${area} m2`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area(5, 5))
