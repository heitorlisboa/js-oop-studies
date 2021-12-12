export class SistemaAutenticacao {
    static login(objeto, senha) {
        if (this.ehAutenticavel(objeto)) {
            return objeto.autenticar(senha)
        }

        return false
    }

    static ehAutenticavel(objeto) {
        return 'autenticar' in objeto
        && objeto.autenticar instanceof Function
    }
}