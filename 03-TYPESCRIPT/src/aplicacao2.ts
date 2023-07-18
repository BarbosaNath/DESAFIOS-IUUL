import Cliente from "./Cliente";
import Endereco from "./Endereco";

const cliente: Cliente = new Cliente(
  "123.123.123-12",
  "Claudio Júnior",
  "(88) 99999-9999"
);

cliente.adicionarEndereco(
  new Endereco(
    "63200-000",
    "Rua Jhonatan da Nova Geração",
    "139 B",
    "APTO. 3",
    "Caririaçu",
    "Ceará"
  )
);

cliente.adicionarEndereco(
  new Endereco(
    "63200-000",
    "Rua Jhonatan da Nova Geração",
    "139 C",
    "APTO. 2",
    "Caririaçu",
    "Ceará"
  )
);

cliente.adicionarEndereco(
  new Endereco(
    "63200-000",
    "Rua Olavo de Carvalho",
    "120",
    "Ao lado do mercadinho Ojuara",
    "Caririaçu",
    "Ceará"
  )
);

cliente.listarEnderecos();
