let altura = 0
let largura = 0

function tamanhoDoPalco () {
     altura = window.innerHeight
     largura = window.innerWidth

     //console.log(altura, largura)
}

tamanhoDoPalco()

function imgRandomica () {

    //Remove mosquito
    if ( document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()
        }

    let posicaox = Math.floor (Math.random() * largura) - 90
    let posicaoy = Math.floor (Math.random() * altura) - 90
    
    //console.log(posicaox, posicaoy)

    posicaox =  posicaox < 0 ? 0 : posicaox
    posicaoy =  posicaoy < 0 ? 0 : posicaoy
    
    let mosquito = document.createElement('img')
    mosquito.src = './assets/images/mosca.png'
    mosquito.className = tamanhoRandomico() + ' ' + ladoAleatorio()

// random da posição
    mosquito.style.left = posicaox + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoRandomico () {
    let classe = Math.floor (Math.random() * 3)

    switch(classe) {
        case 0: return 'mosquito1'
        case 1: return 'mosquito2'
        case 2: return 'mosquito3'
    }
}

function ladoAleatorio () {
    let classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0: return 'ladoA'
        case 1: return 'ladoB'
    }
}