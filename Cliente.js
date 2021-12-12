export class Cliente {
    constructor(nome, cpf) {
        this.nome = nome
        this.cpf = cpf
        this._senha = cpf
    }

    get cpf() {
        return self._cpf
    }

    set cpf(valor) {
        this._cpf = valor
    }

    cadastrarSenha(senha) {
        this._senha = senha
    }

    autenticar(senha) {
        return this._senha == senha
    }
}