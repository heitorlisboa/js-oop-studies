import { Cliente } from './Cliente.js'
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './Funcionario/SistemaAutenticacao.js'

const diretor = new Diretor('Rodrigo', 10000, 12345678900)
diretor.cadastrarSenha('123456789')
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456789')

const gerente = new Gerente('Ricardo', 5000, 12345678901)
gerente.cadastrarSenha('123')
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123')

const cliente = new Cliente('Lais', 12345678902)
cliente.cadastrarSenha('456')
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456')


console.log(diretorEstaLogado)
console.log(gerenteEstaLogado)
console.log(clienteEstaLogado)
