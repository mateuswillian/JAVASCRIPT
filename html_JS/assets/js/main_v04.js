function alteraTexto (classe) {
    let elementos = document.getElementsByClassName(classe)

    for (let i = 0; i< elementos.length; i++){
        elementos[i].innerHTML = 'texto alterado com sucesso!' // innerHTML insere no html
    }
}

function alteraTexto2 (tag) {
    let tags = document.getElementsByTagName(tag)

    for (i = 0; i < tags.length; i++){
        tags[i].innerHTML = 'Texto da TAG Alterado com sucesso!'
    }
}

function alteraNome () {
    document.getElementsByName('nome')[0].value = 'Mateus Willian'
}