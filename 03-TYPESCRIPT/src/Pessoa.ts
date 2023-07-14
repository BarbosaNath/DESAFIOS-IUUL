export abstract class Pessoa {
  private readonly _cpf;
  private _nome;
  private _telefone;

  constructor(cpf:string, nome:string, telefone:string) {
    this._cpf = cpf;
    this._nome = nome;
    this._telefone = telefone;
  }

  public get CPF() : string  { return this._cpf; }

  public get nome() : string  { return this._nome; }
  public set nome(v : string) { this._nome = v; }

  public get telefone() : string  { return this._telefone; }
  public set telefone(v : string) { this._telefone = v; }
}
