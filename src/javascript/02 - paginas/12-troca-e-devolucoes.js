window.addEventListener("load", () => {
  "strict";
  try {
    if (
      window.location.pathname == "/pagina/politica-de-trocas-e-devolucoes.html"
    ) {
      const divBanner = document.createElement("div");
      divBanner.id = "banner-troca-e-devolucoes";
      const bannerImagem = document.createElement("img");
      bannerImagem.src =
        "https://cdn.awsli.com.br/1595/1595002/arquivos/banner-trocas-e-devolucoes-desktop.png";
      bannerImagem.alt = "Banner trocas e devolucoes";
      divBanner.append(bannerImagem);
      divBanner.append(document.querySelector("#breadcrumbs"));
      divBanner.append(document.querySelector("h1.titulo.cor-secundaria"));
      const destinoBanner = document.querySelector("#corpo");
      destinoBanner.prepend(divBanner);
    }
  } catch (erro) {
    console.log(`Erro encontrado -> ${erro}`);
  }
});
