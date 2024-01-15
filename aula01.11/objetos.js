/* o que são estrutura de objetos no JS?

parametros: {}
Estrutura do objetos: chave: valor,

*/

let meuObjeto = {}

 meuObjeto = {
    nome: 'mateus',
    Sobrenome: 'willian',
    Idade: 23,
    Profissao: 'operador de caixa e dev front-end'
}
console.table(meuObjeto) // imprime o OBJETO completo
console.log(meuObjeto.nome) // imprime só um valor especifico do OBJETO
console.log(meuObjeto['Profissao']) // imprime só um valor especifico do OBJETO
console.log(Object.values (meuObjeto)) // imprime os valores do OBJETO
console.log(Object.keys (meuObjeto)) // imprime as chaves do OBJETO

delete meuObjeto.Profissao
delete meuObjeto.Sobrenome

console.log(meuObjeto)

meuObjeto['profissao'] = 'Super Mega Master Senior Ultra Giga Tom Operador de caixa e Front-End'

console.log(meuObjeto)