window.addEventListener("load", () => {
  "strict";
  try {
    if (window.location.pathname == "/pagina/politica-de-privacidade.html") {
      const divBanner = document.createElement("div");
      divBanner.id = "banner-seguranca-e-privacidade";
      const bannerImagem = document.createElement("img");
      bannerImagem.src = segurancaEPrivacidadeBanner;
      bannerImagem.alt = "Banner trocas e devolucoes";
      divBanner.append(bannerImagem);
      divBanner.append(document.querySelector("#breadcrumbs"));
      // divBanner.append(document.querySelector("h1.titulo.cor-secundaria"));
      const destinoBanner = document.querySelector("#corpo");
      destinoBanner.prepend(divBanner);
    }
  } catch (erro) {
    console.log(`Erro encontrado na página de segurança e privacidade -> ${erro}`);
  }
});
