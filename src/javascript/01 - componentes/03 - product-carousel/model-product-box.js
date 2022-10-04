const criarModelProductBox = (textoSmallPreco, textoBotaoCTA) => {

    // 1 CRIAR ARTICLE
    const articleProductBox = document.createElement("article");
    articleProductBox.classList.add("product-box");
    articleProductBox.id = "model-product-box";
    // 2 CRIAR LINK
    const linkProductBox = document.createElement("a");
    linkProductBox.href = "";
    // 3 CRIAR SPAN BANDEIRAS-PRODUTO
    const spanBandeirasProduto = document.createElement("span");
    spanBandeirasProduto.classList.add("bandeiras-produto");
    // 3 CRIAR SPAN BOOKMARKS
    const spanBookmarks = document.createElement("span");
    spanBookmarks.classList.add("bookmarks");
    // 3 CRIAR FIGURE
    const figure = document.createElement("figure");
    // 4 CRIAR IMAGEM COVER
    const imagemFigureCover = document.createElement("img");
    imagemFigureCover.src = "";
    imagemFigureCover.classList.add("cover");
    imagemFigureCover.alt = "";
    // 4 CRIAR IMAGEM HOVER
    const imagemFigureHover = document.createElement("img");
    imagemFigureHover.src = "";
    imagemFigureHover.classList.add("hover");
    imagemFigureHover.alt = "";
    // APPEND 4 -> 3
    figure.append(imagemFigureCover);
    figure.append(imagemFigureHover);

    // 2 DIV TITULO
    const divTitulo = document.createElement("div");
    divTitulo.classList.add("product-title");
    // 3 Div stars
    const divStars = document.createElement("div");
    divStars.classList.add("stars");
    // 3 h2 titulo do produto
    const h2Titulo = document.createElement("h2");
    h2Titulo.classList.add("cor-secundaria");
    h2Titulo.textContent = "Título do produto";
    // 3 -> 2 APPENDS
    divTitulo.append(divStars);
    divTitulo.append(h2Titulo);

    // 2 PRODUCT PRICE 
    const productPriceDiv = document.createElement("div");
    productPriceDiv.classList.add("product-price");
    // 3 SPAN CONTEINER
    const spanConteiner = document.createElement("span");
    // 4 small preço from do produto
    const pPrecoFromProduto = document.createElement("p");
    pPrecoFromProduto.classList.add("product-original");
    pPrecoFromProduto.textContent = "";
    // 4 h2 preço do produto
    const h2PrecoProduto = document.createElement("h2");
    h2PrecoProduto.textContent = "";
    // 4 criar small
    const smallPrecoProduto = document.createElement("small");
    smallPrecoProduto.textContent = textoSmallPreco;
    // 4 criar strong preco a vista
    const strongPrecoAVista = document.createElement("strong");
    strongPrecoAVista.classList.add("preco-a-vista");
    // Appends 4 -> 3
    spanConteiner.append(pPrecoFromProduto);
    spanConteiner.append(h2PrecoProduto);
    spanConteiner.append(smallPrecoProduto);
    spanConteiner.append(strongPrecoAVista);
    // 3 SPAN 2 CONTEINER
    const spanConteiner2 = document.createElement("span");
    // spanConteiner2.classList.add("show-product");
    // spanConteiner2.innerHTML = "Veja mais";
    // APPENDS 3 -> 2
    productPriceDiv.append(spanConteiner);
    // productPriceDiv.append(spanConteiner2);

    linkProductBox.append(spanBandeirasProduto);
    linkProductBox.append(spanBookmarks);
    linkProductBox.append(figure);
    linkProductBox.append(divTitulo);
    linkProductBox.append(productPriceDiv);

    articleProductBox.append(linkProductBox);

    return articleProductBox;
}