export default class Endereco {
  constructor(
    private readonly _cep: string,
    private readonly _logradouro: string,
    private readonly _numero: string,
    private readonly _complemento: string,
    private readonly _cidade: string,
    private readonly _uf: string,
  ) { }

  public get cep(): string { return this._cep; }
  public get logradouro(): string { return this._logradouro; }
  public get numero(): string { return this._numero; }
  public get complemento(): string { return this._complemento; }
  public get cidade(): string { return this._cidade; }
  public get uf(): string { return this._uf; }
}
