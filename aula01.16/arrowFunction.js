// função literal anonima
let dobro = function(a) {
    return 2 * a
}

console.log(dobro(200))

// arrow function padrao
dobro = (a) => {
    return 2 * a
}
console.log(dobro(600))

// arrow function com retorno implicito
dobro = a => 2 * a 
console.log(dobro(Math.PI))

let ola = function () {
    return 'ola'
}

ola = () => {
    return 'ola' // forma PADRAO
}

ola = () => 'ola' // forma de retorno implicitp

ola = _ => 'ola'

console.log(ola())

 //ATV - Funções
 //01. crie um codigo utilizando função que leia um array de 12 elementos e mostre-os

 const array12Elementos = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6] 

 function elemento (){
    for (let i = 0; i < array12Elementos.length; i++){
        console.log(array12Elementos[i])
    }
 }


elemento(array12Elementos)
