export default abstract class Conta{
  constructor(
    private readonly _numero:string
  ){}

  abstract depositar(valor: number): void;
  abstract sacar(valor: number): void;

  public get numero () : string { return this._numero; }
}

class Credito {
  constructor(private _valor: number) {}
  public get valor() : number  { return this._valor; }
  public set valor(v : number) { this._valor = v; }

}

class Debito {
  constructor(private _valor: number) {}
  public get valor() : number  { return this._valor; }
  public set valor(v : number) { this._valor = v; }
}
