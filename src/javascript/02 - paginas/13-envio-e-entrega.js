window.addEventListener('load', () => {
    'strict'
    try {
        if (window.location.pathname == '/pagina/envio-e-entrega.html') {
            const divBanner = document.createElement("div");
            divBanner.id = "banner-envio-e-entrega";
            const bannerImagem = document.createElement("img");
            bannerImagem.src = "https://cdn.awsli.com.br/1596/1596032/arquivos/Imagem-envio@2x.jpg";
            bannerImagem.alt = "Banner envio e entrega";
            divBanner.append(bannerImagem);
            divBanner.append(document.querySelector("#breadcrumbs"));
            divBanner.append(document.querySelector("h1.titulo.cor-secundaria"));
            const destinoBanner = document.querySelector("#corpo");
            destinoBanner.prepend(divBanner);
        }
    } catch (e) {
        console.log(`Erro encontrado envio e entrega -> ${e.message}`);
    }
});