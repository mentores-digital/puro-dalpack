window.addEventListener('load', () => {
    'strict'
    try {
        if (window.location.pathname == '/pagina/uso-e-conservacao.html') {
            const divBanner = document.createElement("div");
            divBanner.id = "banner-troca-e-devolucoes";
            const bannerImagem = document.createElement("img");
            bannerImagem.src = "https://cdn.awsli.com.br/2289/2289041/arquivos/uso e cons.jpg";
            bannerImagem.alt = "Uso e Conservação";
            divBanner.append(bannerImagem);
            divBanner.append(document.querySelector("#breadcrumbs"));
            divBanner.append(document.querySelector("h1.titulo.cor-secundaria"));
            const destinoBanner = document.querySelector("#corpo");
            destinoBanner.prepend(divBanner);
        }

    } catch (e) {
        console.log(`Erro encontrado -> ${e.message}`);
    }
});