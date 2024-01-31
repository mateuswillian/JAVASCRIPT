class Atividades{
    constructor (titulo, descricao, ano, mes, dia, hora) {
        this.titulo = titulo
        this.descricao = descricao
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.hora = hora
    }

    validarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == '' || this[i] == null) {
                return false
            }
        }
        return true
    }
}

class bd {
    constructor() {
        let id = localStorage.getItem('id')

        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1
    }

    gravar(a) {
        let id = this.getProximoId()
        localStorage.setItem(id, JSON.stringify(a))
        localStorage.setItem('id', id)

    }

    recuperarTodosRegistros() {
        let atividades = Array () 
        let id = localStorage.getItem('id')

        for (i = 1; i <= id; i++) {
            let atividade = JSON.parse(localStorage.getItem(i))

            if(atividade == null) {
                continue
            }

            atividade.id = i
            atividades.push (atividade)
        }

        return atividades
    }
}

let bd = new Bd ()

function cadastraAtividades () {

    let titulo = document.getElementById('titulo')
    let descricao = document.getElementById('descricao')
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let hora = document.getElementById('hora')

    

}