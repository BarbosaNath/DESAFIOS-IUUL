export default abstract class Conta {
  private _saldo: number;

  constructor(
    private readonly _numero: string,
    private _limite: number,
    private _creditos: Credito[] = [],
    private _debitos: Debito[] = [],
  ) {
    this._saldo = 0;
  }

  public depositar(valor: number): void {
    this._saldo += valor;
    this._creditos.push(new Credito(valor))
  }

  public sacar(valor: number): void {
    this._saldo -= valor;
    this._debitos.push(new Debito(valor))
  }

  public get numero(): string { return this._numero; }
  public get saldo () : number { return this._saldo; }

  public get limite(): number { return this._limite; }
  public set limite(v: number) { this._limite = v; }

}


// Classes auxiliares para transferência bancária

class Credito {
  private readonly _data: Date;

  constructor(
    private readonly _valor: number
  ) {
    this._data = new Date();
  }

  public get valor(): number { return this._valor; }
  public get data(): Date { return this._data; }

}

class Debito {
  private readonly _data: Date;

  constructor(
    private readonly _valor: number
  ) {
    this._data = new Date();
  }

  public get valor(): number { return this._valor; }
  public get data(): Date { return this._data; }
}
