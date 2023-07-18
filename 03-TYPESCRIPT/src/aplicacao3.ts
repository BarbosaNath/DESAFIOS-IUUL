import Cliente from "./Cliente";
import ContaCorrente from "./ContaCorrente";

const cliente: Cliente = new Cliente(
  "123.123.123-12",
  "Claudio Júnior",
  "(88) 99999-9999",
);

cliente.adicionarConta(new ContaCorrente("123456789", 2000));

for (let i = 0; i < 3; i++) cliente.contas[0].depositar(100);

cliente.contas[0].sacar(50);

console.log((cliente.contas[0] as ContaCorrente).calcularSaldo());
