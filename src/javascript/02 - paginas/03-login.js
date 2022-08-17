const criarBoxImagemLogin = (urlImagem) => {
  // Insere imagem no corpo da página
  let imagemLoginBox = document.createElement("div");
  let imagemLogin = document.createElement("img");
  imagemLogin.src = urlImagem;
  imagemLogin.classList.add("imagem-login");
  imagemLoginBox.classList.add("box-imagem-login");
  imagemLoginBox.append(imagemLogin);

  return imagemLoginBox;
};

const criarBoxPrimeiroAcesso = () => {
  // 1 CRIAR CONTEINER
  const primeiroAcessoConteiner = document.createElement("div");
  primeiroAcessoConteiner.classList.add("box-primeiro-acesso");
  // 2 CRIAR PARAGRAFO
  const pPrimeiroAcesso = document.createElement("p");
  pPrimeiroAcesso.classList.add("primeiro-acesso");
  // 3 CRIAR STRONG
  const strongPrimeiroAcesso = document.createElement("strong");
  strongPrimeiroAcesso.textContent = "Primeiro acesso?";
  // APPEND 3->2
  pPrimeiroAcesso.append(strongPrimeiroAcesso);

  // 2 CRIAR PARAGRAFO
  const pFacaSeuCadastro = document.createElement("p");
  pFacaSeuCadastro.classList.add("faca-seu-cadastro");
  pFacaSeuCadastro.textContent = "Faça aqui o seu cadastro";

  // APPEND 2->1
  primeiroAcessoConteiner.append(pPrimeiroAcesso);
  primeiroAcessoConteiner.append(pFacaSeuCadastro);

  return primeiroAcessoConteiner;
};

try {
  if (paginaLogin()) {
    // APPEND BOX PRIMEIRO ACESSO
    let destinoBoxPrimeiroAcesso = document.querySelector(
      ".cadastro-logar > .span6:last-child fieldset legend"
    );
    destinoBoxPrimeiroAcesso.after(criarBoxPrimeiroAcesso());
    // CRIAR BoxImagem
    document.querySelector("#corpo .cadastro-logar").append(
      criarBoxImagemLogin(
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // INSERIR DADOS AQUI
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        imagemDireita
      )
    );
    // Reposiciona Esqueceu sua senha
    let recuperarSenha = document.querySelector(".recuperar-senha");
    document.querySelector("#id_senha").after(recuperarSenha);
  }
} catch (error) {
  console.log(`Erro encontrado -> ${error}`);
}
