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

  listarEnderecos(): void {
    for (let endereco of this._enderecos) {
      console.log(endereco);
    }
  }

  autenticar(): boolean {
    return true;
  }

  public get enderecos() : Endereco[] { return this._enderecos }
  public get contas() : Endereco[] { return this._enderecos }
}
