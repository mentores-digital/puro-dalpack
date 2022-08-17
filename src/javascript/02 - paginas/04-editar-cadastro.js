window.addEventListener("load", () => {
  "strict";
  try {
    if (paginaEditarMinhaConta() || paginaEditarEndereco()) {
      addLinkLogout();
    } else {
      removaSeExistir(null);
    }
  } catch (erro) {
    console.log(`Erro encontrado -> ${erro}`);
  }
});
