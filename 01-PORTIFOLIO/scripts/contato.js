const form = document.querySelector("#contato-formulario");
const formNome = document.querySelector("#contato-nome");
const formSobrenome = document.querySelector("#contato-sobrenome");
const formTelefone = document.querySelector("#contato-telefone");
const formEmail = document.querySelector("#contato-email");
const formMensagem = document.querySelector("#contato-mensagem");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (form.checkValidity()) {
    let respostaForm = {
      nome: formNome.value,
      sobrenome: formSobrenome.value,
      telefone: formTelefone.value,
      email: formEmail.value,
      mensagem: formMensagem.value,
    };

    let mensagensJSON = localStorage.getItem("mensagens");
    var mensagens = mensagensJSON !== null ? JSON.parse(mensagensJSON) : [];
    mensagens.push(respostaForm);

    localStorage.setItem("mensagens", JSON.stringify(mensagens));
  }

  form.classList.add("was-validated");
});
