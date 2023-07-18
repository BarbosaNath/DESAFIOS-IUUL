import Conta from "./Conta";

export default class ContaPoupanca extends Conta {
  constructor(
    numero: string,
  ) {
    super(numero);
  }

  public calcularSaldo(): number {
    let saldo: number = 0;
    for (let i = 0; i < this.creditos.length; i++) {
      saldo += this.creditos[i].valor;
    }

    for (let i = 0; i < this.debitos.length; i++) {
      saldo -= this.debitos[i].valor;
    }

    return saldo;
  }
}
