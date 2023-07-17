export abstract class Conta {
  // Segundo o UML, apenas a ContaCorrente tem Limite
  constructor(
    private readonly _numero: string,
    private _creditos: Credito[] = [],
    private _debitos: Debito[] = [],
  ) { }

  public depositar(valor: number): void {
    this._creditos.push(new Credito(valor))
  }

  public sacar(valor: number): void {
    this._debitos.push(new Debito(valor))
  }

  public get numero(): string { return this._numero; }
  public get creditos(): Credito[] { return this._creditos; }
  public get debitos(): Debito[] { return this._debitos; }

}


// Classes auxiliares para transferência bancária

export class Credito {
  private readonly _data: Date;

  constructor(
    private readonly _valor: number
  ) {
    this._data = new Date();
  }

  public get valor(): number { return this._valor; }
  public get data(): Date { return this._data; }

}

export class Debito {
  private readonly _data: Date;

  constructor(
    private readonly _valor: number
  ) {
    this._data = new Date();
  }

  public get valor(): number { return this._valor; }
  public get data(): Date { return this._data; }
}
