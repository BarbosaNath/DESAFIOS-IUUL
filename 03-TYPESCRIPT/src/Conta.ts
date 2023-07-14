export default abstract class Conta{
  constructor(
    private readonly _numero:string
  ){}

  abstract depositar(valor: number): void;
  abstract sacar(valor: number): void;

  public get numero () : string { return this._numero; }
}
