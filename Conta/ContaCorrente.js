import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta {
    constructor(cliente, agencia) {
        super(cliente, agencia, 0)
    }

    sacar(valor) {
        const taxa = 1.1
        return this._sacar(valor, taxa)
    }
}