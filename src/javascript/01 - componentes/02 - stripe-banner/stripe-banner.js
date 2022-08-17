// Cria stripe banner
const criarStripeBanner = (
    [urlImagemUm, paragrafoUm, strongUm],
    [urlImagemDois, paragrafoDois, strongDois],
    [urlImagemTres, paragrafoTres, strongTres],
    [urlImagemQuatro, paragrafoQuatro, strongQuatro]) => {

    // Criar stripe conteiner
    const stripeBannerConteiner = document.createElement("div");
    stripeBannerConteiner.id = "stripe-banner";

    // Adicionar divmobile 1
    const divMobile1 = document.createElement("div");
    divMobile1.id = "div-mobile-1";
    // Criar primeiro elemento conteiner
    const elementoUmStripeBannerConteiner = document.createElement("div");
    // Criar imagem elemento um
    const imagemElementoUmStripeBanner = document.createElement("img");
    imagemElementoUmStripeBanner.src = urlImagemUm;
    imagemElementoUmStripeBanner.alt = `${paragrafoUm}${strongUm}`;
    // Criar divs conteiner para os textos
    const elementoUmTextoConteiner = document.createElement("div");
    // Criar paragrafo elemento um
    const paragrafoElementoUmStripe = document.createElement("p");
    paragrafoElementoUmStripe.innerHTML = paragrafoUm;
    // Criar strong elemento um
    const strongElementoUmStripe = document.createElement("strong");
    strongElementoUmStripe.innerHTML = strongUm;
    elementoUmTextoConteiner.append(paragrafoElementoUmStripe);
    elementoUmTextoConteiner.append(strongElementoUmStripe);
    // Appends Elemento UM
    elementoUmStripeBannerConteiner.append(imagemElementoUmStripeBanner);
    elementoUmStripeBannerConteiner.append(elementoUmTextoConteiner);
    divMobile1.append(elementoUmStripeBannerConteiner);
    /* 
    Criar segundo elemento conteiner
    */
    const elementoDoisStripeBannerConteiner = document.createElement("div");
    // Criar imagem elemento um
    const imagemElementoDoisStripeBanner = document.createElement("img");
    imagemElementoDoisStripeBanner.src = urlImagemDois;
    imagemElementoDoisStripeBanner.alt = `${paragrafoDois}${strongDois}`;
    // Criar divs conteiner para os textos
    const elementoDoisTextoConteiner = document.createElement("div");
    // Criar paragrafo elemento um
    const paragrafoElementoDoisStripe = document.createElement("p");
    paragrafoElementoDoisStripe.innerHTML = paragrafoDois;
    // Criar strong elemento um
    const strongElementoDoisStripe = document.createElement("strong");
    strongElementoDoisStripe.innerHTML = strongDois;
    // Appends
    elementoDoisTextoConteiner.append(paragrafoElementoDoisStripe);
    elementoDoisTextoConteiner.append(strongElementoDoisStripe);
    // Appends Elemento Dois
    elementoDoisStripeBannerConteiner.append(imagemElementoDoisStripeBanner);
    elementoDoisStripeBannerConteiner.append(elementoDoisTextoConteiner);
    divMobile1.append(elementoDoisStripeBannerConteiner);

    // Adicionar divmobile 2
    const divMobile2 = document.createElement("div");
    divMobile2.id = "div-mobile-2";
    /* 
    Criar terceiro elemento conteiner
    */
    const elementoTresStripeBannerConteiner = document.createElement("div");
    // Criar imagem elemento um
    const imagemElementoTresStripeBanner = document.createElement("img");
    imagemElementoTresStripeBanner.src = urlImagemTres;
    imagemElementoTresStripeBanner.alt = `${paragrafoTres}${strongTres}`;
    // Criar divs conteiner para os textos
    const elementoTresTextoConteiner = document.createElement("div");
    // Criar paragrafo elemento um
    const paragrafoElementoTresStripe = document.createElement("p");
    paragrafoElementoTresStripe.innerHTML = paragrafoTres;
    // Criar strong elemento um
    const strongElementoTresStripe = document.createElement("strong");
    strongElementoTresStripe.innerHTML = strongTres;
    // Appends
    elementoTresTextoConteiner.append(paragrafoElementoTresStripe);
    elementoTresTextoConteiner.append(strongElementoTresStripe);
    // Appends Elemento Dois
    elementoTresStripeBannerConteiner.append(imagemElementoTresStripeBanner);
    elementoTresStripeBannerConteiner.append(elementoTresTextoConteiner);
    divMobile2.append(elementoTresStripeBannerConteiner);
    /* 
    Criar quarto elemento conteiner
    */
    const elementoQuatroStripeBannerConteiner = document.createElement("div");
    // Criar imagem elemento um
    const imagemElementoQuatroStripeBanner = document.createElement("img");
    imagemElementoQuatroStripeBanner.src = urlImagemQuatro;
    imagemElementoQuatroStripeBanner.alt = `${paragrafoQuatro}${strongQuatro}`;
    // Criar divs conteiner para os textos
    const elementoQuatroTextoConteiner = document.createElement("div");
    // Criar paragrafo elemento um
    const paragrafoElementoQuatroStripe = document.createElement("p");
    paragrafoElementoQuatroStripe.innerHTML = paragrafoQuatro;
    // Criar strong elemento um
    const strongElementoQuatroStripe = document.createElement("strong");
    strongElementoQuatroStripe.innerHTML = strongQuatro;
    // Appends
    elementoQuatroTextoConteiner.append(paragrafoElementoQuatroStripe);
    elementoQuatroTextoConteiner.append(strongElementoQuatroStripe);
    // Appends Elemento Dois
    elementoQuatroStripeBannerConteiner.append(imagemElementoQuatroStripeBanner);
    elementoQuatroStripeBannerConteiner.append(elementoQuatroTextoConteiner);
    divMobile2.append(elementoQuatroStripeBannerConteiner);

    // Append todos os elementos no container principal
    stripeBannerConteiner.append(divMobile1);
    stripeBannerConteiner.append(divMobile2);

    return stripeBannerConteiner;
}