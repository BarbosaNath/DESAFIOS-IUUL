import IUsuario from "./IUsuario";
import Pessoa from "./Pessoa";

export default class Funcionario extends Pessoa implements IUsuario {

  constructor(
    _cpf: string,
    _nome: string,
    _telefone: string,
    private _salario: number,
    private _cargos: Cargo[] = [],
  ) {
    super(_cpf, _nome, _telefone)
  }

  autenticar(): boolean {
    return true;
  }

  public adicionarCargo(cargo: string): void {
    this._cargos.push(new Cargo(cargo));
  }

  public removerCargo(cargo: string): void {
    var index: number = -1;

    for (let i = 0; i < this._cargos.length; i++) {
      if (cargo.toUpperCase() === this._cargos[i].nome.toUpperCase()) {
        index = i;
        break;
      }
    }

    if (index > -1) {
      this._cargos.splice(index, 1);
    }
  }

  public mostrarCargos() {
    for (let cargo of this._cargos) {
      console.log(cargo);
    }
  }

  public get salario(): number { return this._salario; }
  public get cargo(): Cargo[] { return this._cargos; }
}


class Cargo {
  constructor(private _nome: string) { }

  public get nome(): string { return this._nome; }
  public set nome(v: string) { this._nome = v; }
}
