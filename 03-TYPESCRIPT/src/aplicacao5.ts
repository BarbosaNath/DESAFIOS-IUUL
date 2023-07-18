import Cliente from "./Cliente";
import ContaCorrente from "./ContaCorrente";

const cliente1: Cliente = new Cliente(
  "123.123.123-12",
  "Claudio Júnior",
  "(88) 99999-9999",
);

const conta1: ContaCorrente = new ContaCorrente("123456789", 100);
cliente1.adicionarConta(conta1);
conta1.depositar(300);


const cliente2: Cliente = new Cliente(
  "321.321.321-32",
  "Charles Emmanuel",
  "(88) 98888-8888",
);

const conta2: ContaCorrente = new ContaCorrente("987654321", 100);
cliente2.adicionarConta(conta2);
conta2.depositar(100);


conta1.transferir(conta2, 1000);


console.log(
  `O saldo da conta corrente do cliente ${
    cliente1.nome
  } é igual a: R$ ${conta1.calcularSaldo()}`,
);
console.log(
  `O saldo da conta poupanca do cliente ${
    cliente2.nome
  } é igual a: R$ ${conta2.calcularSaldo()}`,
);
