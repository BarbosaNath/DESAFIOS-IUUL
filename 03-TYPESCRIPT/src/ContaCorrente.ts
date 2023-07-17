import {Conta, Debito} from "./Conta";

export default abstract class ContaCorrente extends Conta {
  constructor(
    numero: string,
    private _limite: number
  ) {
    super(numero)
  }

  public sacar(valor: number): void {
    if (this.calcularSaldo() - valor >= 0){
      this.debitos.push(new Debito(valor))
    }
  }

  public calcularSaldo(): number {
    let saldo: number = 0;
    for (let i = 0; i < this.creditos.length; i++) {
      saldo += this.creditos[i].valor;
    }

    for (let i = 0; i < this.debitos.length; i++) {
      saldo -= this.debitos[i].valor;
    }

    saldo += this._limite;

    return saldo;
  }

  public get saldo(): number {return this.calcularSaldo()}
  public get limite(): number { return this._limite; }
  public set limite(v: number) { this._limite = v; }
}
