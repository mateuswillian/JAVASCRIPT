// this é uma palavra reservada que faz referencia ao PAI de um elemento. quando o this é utilizado fora de ua funçã ou objeto, seu PAI será o elemento do contexto GLOBAL.

function aluno (nomeAluno, notaAluno) {
    this.nomeAluno = nomeAluno
    this.notaAluno = notaAluno

    notaAluno = notaAluno * 3
    this.notaAluno = this.notaAluno * 7

    console.log(this.nomeAluno)
    console.log(notaAluno)
    console.log(this.notaAluno)

    this.dadosAnonimos = function () {
        setTimeout ( // setTimeout é um break de tempo
            function() {
                console.log(this.nomeAluno)
                console.log(this.notaAluno)
            }, 3000)
    }
    
    // para nao perder a associação com o pai use o arrow function
    this.dadosArrow = function () {
        setTimeout ( () => {
                console.log(this.nomeAluno)
                console.log(this.notaAluno)
            }, 3000)
    }
}


const aluno1 = new aluno('willian', 7.0) 
aluno1.dadosAnonimos()
aluno1.dadosArrow()
