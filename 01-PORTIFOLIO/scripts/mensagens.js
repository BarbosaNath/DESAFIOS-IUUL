function makeMessageCard(objetoMensagem) {
  return `<div class="card m-2 text-center">
  <h5 class="card-header">
    Mensagem de ${objetoMensagem.nome} ${objetoMensagem.sobrenome}
  </h5>

  <div class="card-body">
    <div class="card-text">${objetoMensagem.mensagem}</div>
  </div>

  <div class="card-footer small text-secondary">
<i class="bi bi-telephone-fill"></i> ${objetoMensagem.telefone} </br> <i class="bi bi-envelope-fill"></i> ${objetoMensagem.email}
  </div>
</div>
`;
}

var mensagens = JSON.parse(localStorage.getItem("mensagens"));

var mainDiv = document.querySelector("#main-section");

mensagens.forEach((mensagem) => {
  let card = document.createElement("div");
  card.classList = "col";

  card.innerHTML = makeMessageCard(mensagem);
  mainDiv.appendChild(card);
});
