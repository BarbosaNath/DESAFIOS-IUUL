import Cliente from "./Cliente";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

const cliente1: Cliente = new Cliente(
  "123.123.123-12",
  "Claudio Júnior",
  "(88) 99999-9999",
);

const contacorrente: ContaCorrente = new ContaCorrente("123456789", 2000);
cliente1.adicionarConta(contacorrente);
contacorrente.depositar(1000);

const cliente2: Cliente = new Cliente(
  "321.321.321-32",
  "Charles Emmanuel",
  "(88) 98888-8888",
);

const contapoupanca: ContaPoupanca = new ContaPoupanca("987654321");
cliente2.adicionarConta(contapoupanca);
contapoupanca.depositar(1000);

contacorrente.transferir(contapoupanca, 500);

console.log(`O saldo da conta corrente do cliente ${cliente1.nome} é igual a: R$ ${contacorrente.calcularSaldo()}`);
console.log(`O saldo da conta poupanca do cliente ${cliente2.nome} é igual a: R$ ${contapoupanca.calcularSaldo()}`);
