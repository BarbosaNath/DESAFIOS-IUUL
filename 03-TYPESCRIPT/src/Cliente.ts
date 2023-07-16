import Conta from "./Conta";
import Endereco from "./Endereco";
import IUsuario from "./IUsuario";
import Pessoa from "./Pessoa";

export default class Cliente extends Pessoa implements IUsuario {
  constructor(
    _cpf: string,
    _nome: string,
    _telefone: string,
    private _vip: boolean = false,
    private _enderecos: Endereco[] = [],
    private _contas: Conta[] = [],
  ) {
    super(_cpf, _nome, _telefone)
  }

  public listarEnderecos(): void {
    for (let endereco of this._enderecos) {
      console.log(endereco);
    }
  }

  public autenticar(): boolean {
    return true;
  }

  public adicionarEndereco(endereco:Endereco): void{
    this._enderecos.push(endereco);
  }

  public removerEndereco(enderecoIndex:number): void{
    this._enderecos.splice(enderecoIndex, 1)
  }

  public get enderecos() : Endereco[] { return this._enderecos }
  public get contas() : Endereco[] { return this._enderecos }
}
