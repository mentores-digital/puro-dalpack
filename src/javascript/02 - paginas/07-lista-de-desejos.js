window.addEventListener("load", () => {
  "strict";
  try {
    if (paginaListaDesejos()) {
      addLinkLogout();
    } else {
      removaSeExistir(null);
    }
  } catch (erro) {
    console.log(`Erro encontrado -> ${erro}`);
  }
});
