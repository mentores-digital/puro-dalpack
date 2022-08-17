window.addEventListener("load", () => {
  "strict";
  try {
    if (paginaAlterarSenha()) {
      // Adiciona classe no body para identificar a página minha conta
      adicionarClasseAoBody("pagina-alterar-senha");
      removeTodasAsClasses(".acao-editar > div");

      //Adiciona Fazer Logout ao menu lateral do usuário
      addLinkLogout();
    }
  } catch (erro) {
    console.log(`Erro encontrado -> ${erro}`);
  }
});
