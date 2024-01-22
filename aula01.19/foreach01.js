const repetentes = ['felipe', 'logam', 'Zidany']
repetentes.forEach(function(nome) {
    console.log(`eu ${nome} sou repetente.`)
}) 

repetentes.forEach(nome => console.log(nome))

const exibirRepetentes = repetentes => console.log(`Exibir ${repetentes}`)
repetentes.forEach(exibirRepetentes)
