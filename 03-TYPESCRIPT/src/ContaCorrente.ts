import Conta from "./Conta";

export default class ContaCorrente extends Conta {
  constructor(
    numero: string,
    private _limite: number
  ) {
    super(numero);
  }

  public sacar(valor: number): void {
    if (this.calcularSaldo() - valor < 0) {
      throw new Error("Conta com saldo insuficiente!");
    }

    super.sacar(valor)
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

  public transferir(conta: Conta, valor: number): void {
    if (this.calcularSaldo() - valor < 0) {
      throw new Error("Conta com saldo insuficiente!");
    }

    this.sacar(valor);
    conta.depositar(valor);
  }

  public get limite(): number { return this._limite; }
  public set limite(v: number) { this._limite = v; }
}
