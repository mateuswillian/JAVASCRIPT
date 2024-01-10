// crie um codigo com as principais funcionalidades do menu inicial de um game
// new Game , Load Game , Settings , Quit

const prompt = require ('prompt-sync')()

const options = Number (prompt ("Escolha: 1 ( New Game) , 2 (Load Game) , 3(Settings) , 4(Quit) "))

switch (options) {
    case 1:
        console.log('Bem vindo ao novo jogo')
        break
    case 2:
        console.log('Aguarde um pouco, jogo em andamento...')
        break
    case 3:
        console.log('Controle / som / dicas / voltar ao jogo')
        break
    case 4:
        console.log('Bem vindo ao jogo. Você deseja: Continuar / novo jogo')
        break
}