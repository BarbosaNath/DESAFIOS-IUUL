import Funcionario from "./Funcionario";

const gerente: Funcionario = new Funcionario(
  "123.123.123-12",
  "Claudio Júnior",
  "(88) 99999-9999",
  5500
);

const atendente: Funcionario = new Funcionario(
  "321.321.321-32",
  "Charles Emmanuel",
  "(88) 98888-8888",
  1500
);

gerente.adicionarCargo("gerente");
atendente.adicionarCargo("atendente");
