const criarBoxCadastrarEndereco = () => {
  let boxCadastrarNovoEndereco = document.createElement("div");
  boxCadastrarNovoEndereco.classList.add("acao-editar");
  return boxCadastrarNovoEndereco;
};

window.addEventListener("load", () => {
  "strict";

  try {
    if (paginaConta()) {
      // Adicionar classe ao body da página para não dar conflito com outras páginas
      adicionarClasseAoBody("pagina-minha-conta");

      // Muda posição do botão "Cadastrar novo endereço"
      let destinoCadastrarNovoEndereco = document.querySelector(
        ".caixa-dados.outros-enderecos fieldset"
      );
      destinoCadastrarNovoEndereco.append(criarBoxCadastrarEndereco());

      // Muda botaoCadastrarNovoEndereco
      const botaoEndereco = document.querySelector(botaoCadastrarEndereco);
      const destinoBotao = document.querySelector(".span12 .acao-editar");
      destinoBotao.append(botaoEndereco);

      addLinkLogout();
    }
  } catch (error) {
    console.log(`Erro encontrado -> ${error}`);
  }
});
