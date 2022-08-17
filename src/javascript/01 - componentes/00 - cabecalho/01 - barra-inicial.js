const criarConteudoBarraInicial = (textoSlogan, urlImagemSlogan) => {

    // Adiciona texto na barra inicial
    const slogan = document.createElement("p");
    slogan.classList.add("slogan");
    slogan.innerHTML = textoSlogan;

    // Adiciona imagem na barra inicial
    const imagemSlogan = document.createElement("img");
    imagemSlogan.classList.add("imagemSlogan");
    imagemSlogan.src = urlImagemSlogan;
    imagemSlogan.alt = "imagem-slogan";

    // Seleciona barra inicial e adiciona elementos
    let barraInicialContainer = document.createElement("div");
    barraInicialContainer.classList.add("barra-inicial-container");
    barraInicialContainer.append(slogan);
    // barraInicialContainer.append(imagemSlogan);

    return barraInicialContainer;
}

// BACKUP DE LOGICA DE IMPLEMENTAÇÃO, INSERIR NAS PÁGINAS
window.addEventListener('load', () => {
    'strict'
    try {
        removerTudo(".barra-inicial .conteiner");
        removerTudo(".atalhos-mobile");
    } catch (error) {
        console.log(`Erro encontrado -> ${error}`);
    }
});