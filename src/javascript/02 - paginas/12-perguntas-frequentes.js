window.addEventListener('load', () => {
    'strict'
    try {
        if (window.location.pathname == '/pagina/perguntas-frequentes.html') {
            const divBanner = document.createElement("div");
            divBanner.id = "banner-perguntas-frequentes";
            const bannerImagem = document.createElement("img");
            bannerImagem.src = perguntasFrequentesBanner;
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