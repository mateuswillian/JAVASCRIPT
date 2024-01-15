// let meuObjeto = {
//     Nome: 'sousa',
//     Nome: 'santos'
// }

// meuObjeto.Nome =  'santos'

// console.log(meuObjeto, )

// crie um codigo que implemente um cadastro de estutante, utilizando objetos.

const prompt = require('prompt-sync')()

let estudante = {}

while(true){
    const nomeEstudante = prompt('informe o nome do estudante: ')
    estudante.nomeEstudante= nomeEstudante

    const sobrenomeEstudante = prompt('informe o sobrenome do estudante: ')
    estudante.sobrenomeEstudante= sobrenomeEstudante

    const idade = Number (prompt('informe a idade do estudante: '))
    estudante.idade= idade

    const serie = Number (prompt('informe a serie do estudante: '))
    estudante.serie = serie

    const turno = prompt('informe o turno do estudante: ')
    estudante.turno = turno

    const saida= prompt('Digite S para SAIR: ')

    if(saida.toLowerCase() === 's'){
        console.log('fim do cadastro')
        break
    }

}

console.table(estudante)