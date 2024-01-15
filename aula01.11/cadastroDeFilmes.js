//crie um codigo que faça o cadastro de filmes, voçê deve ter as seguintes chaves: nomeDoFilme, duração,genero

//obs: voçê deve cadastrar pelo menos dois generos por filmes em um novo objetor com as chaves id e nomeDoGenero.

const prompt = require ('prompt-sync')()

const cadFilmes = {
    
}

while(true) {
    const nomeDoFilme = prompt('informe o nome do filme: ')
        cadFilmes.nomeDoFilme = nomeDoFilme

    const duracao = Number(prompt('informe a duração do Filme: '))
        cadFilmes.duracao = duracao
    
    const genero = 

    

    const saida= prompt('Digite CADASTRAR para cadastrar o filme: ')
        if(saida.toLowerCase() === 'CADASTRAR'){
            console.log('fim do cadastro')
            break
        }
    
}