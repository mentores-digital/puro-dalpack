const criarTituloMeusPedidos = () => {
  // Insere o título da Página
  let tituloPagina = document.createElement("h3");
  tituloPagina.classList.add("titulo");
  tituloPagina.textContent = "Meus Pedidos";
  return tituloPagina;
};

window.addEventListener("load", () => {
  "strict";

  try {
    if (paginaPedidoListar()) {
      document
        .querySelector(".pagina-pedido-listar .abas-conteudo")
        .prepend(criarTituloMeusPedidos());

      addLinkLogout();
    }
  } catch (erro) {
    console.log(`Erro encontrado -> ${erro}`);
  }
});
