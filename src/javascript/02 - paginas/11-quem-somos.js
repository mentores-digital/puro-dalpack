window.addEventListener("load", () => {
  "strict";
  try {
    if (window.location.pathname == "/pagina/quem-somos.html") {
      const divBanner = document.createElement("div");
      divBanner.id = "banner-sobre-nos";
      const bannerImagem = document.createElement("img");
      bannerImagem.src = quemSomosBanner;
      bannerImagem.alt = "Banner sobre nos";
      divBanner.append(bannerImagem);
      divBanner.append(document.querySelector("#breadcrumbs"));
      divBanner.append(document.querySelector("h1.titulo.cor-secundaria"));
      const destinoBanner = document.querySelector("#corpo");
      destinoBanner.prepend(divBanner);

      //   APPEND DESTAQUE INFERIOR
      const caixaSombreada = document.querySelector(".caixa-sombreada");
      //   caixaSombreada.after(
      // criarBannerDestaqueInferior()
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Inserir dados aqui
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //   bannerDestaqueInferior,
      //   textoBannerDestaqueInferior,
      //   porcentBannerDestaqueInferior,
      //   ctaBannerDestaqueInferior
      //   );
    }
  } catch (erro) {
    console.log(`Erro encontrado -> ${erro}`);
  }
});
