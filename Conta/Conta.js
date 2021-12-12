import { Cliente } from "../Cliente.js"

// Classe abstrata
export class Conta {
    constructor(cliente, agencia, saldoInicial) {
        if (this.constructor == Conta) {
            throw new TypeError('Essa é uma classe abstrata e não deve ser instanciada.')
        }
        this._cliente = cliente
        this._agencia = agencia
        this._saldo = saldoInicial
    }

    get tipo() {
        return this._tipo
    }

    get cliente() {
        return this._cliente
    }

    set cliente(valor) {
        if (valor instanceof Cliente) {
            this._cliente = valor
        } else {
            throw new TypeError('Cliente inválido!')
        }
    }

    get agencia() {
        return this._agencia
    }

    get saldo() {
        return this._saldo
    }

    _sacar(valor, taxa) {
        const valorASacar = valor * taxa

        if (valorASacar > this._saldo) return 0

        this._saldo -= valorASacar
        return valor
    }

    sacar(valor) {
        throw new Error('Método abstrato')
    }

    depositar(valor) {
        if (valor < 100) return 0

        this._saldo += valor
        return valor
    }

    _transferir(valor, contaATransferir, taxa) {
        const valorTransferido = this.sacar(valor, taxa)
        contaATransferir.depositar(valorTransferido)
    }

    transferir(valor, contaATransferir, taxa) {

    }
}