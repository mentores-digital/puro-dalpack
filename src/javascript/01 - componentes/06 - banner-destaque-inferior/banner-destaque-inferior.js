const criarBannerDestaqueInferior = (urlImagemBannerDestaque, textoMenor, textoMaior, textoBotao) => {
    // 1 CRIAR CONTEINER
    const bannerDestaqueInferiorContainer = document.createElement("a");
    bannerDestaqueInferiorContainer.href = '/ofertas'
    bannerDestaqueInferiorContainer.classList.add("banner-destaque-inferior");
    // 2 CRIAR IMAGEM
    const imagemBannerDestaqueInferior = document.createElement("img");
    imagemBannerDestaqueInferior.classList.add("imagem-destaque-inferior");
    imagemBannerDestaqueInferior.src = urlImagemBannerDestaque;
    imagemBannerDestaqueInferior.alt = "banner destaque inferior";
    // 2 CRIAR DIV PARA TEXTO
    // const divTextos = document.createElement("div");
    // divTextos.classList.add("div-banner-inferior");
    // // 3 CRIAR PARAGRAFO
    // const paragrafo = document.createElement("p");
    // paragrafo.classList.add("paragrafo-banner-inferior");
    // paragrafo.innerHTML = textoMenor;
    // // 3 CRIAR STRONG
    // const strong = document.createElement("strong");
    // strong.classList.add("strong-banner-inferior");
    // strong.innerHTML = textoMaior;
    // // APPENDS 3->2
    // divTextos.append(paragrafo);
    // divTextos.append(strong);
    // // 2 CRIAR BOTAO
    // const botao = document.createElement("button");
    // botao.classList.add("botao-banner-inferior");
    // botao.textContent = textoBotao;



    // APPEND 2->1
    bannerDestaqueInferiorContainer.append(imagemBannerDestaqueInferior);
    // bannerDestaqueInferiorContainer.append(divTextos);
    // bannerDestaqueInferiorContainer.append(botao);


    return bannerDestaqueInferiorContainer;
}

