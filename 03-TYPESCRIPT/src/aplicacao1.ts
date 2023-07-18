import Funcionario from "./Funcionario";

var gerente: Funcionario = new Funcionario(
  "123.123.123-12",
  "Claudio Júnior",
  "(88) 99999-9999",
  5500
);

var atendente: Funcionario = new Funcionario(
  "321.321.321-32",
  "Charles Emmanuel",
  "(88) 98888-8888",
  1500
);

gerente.adicionarCargo("gerente");
atendente.adicionarCargo("atendente");
