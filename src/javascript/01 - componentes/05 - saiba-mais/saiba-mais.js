// CRIAR SECAO SAIBA MAIS
const criarSecaoSaibaMais = (textoH2, textoParagrafo, textoBotao, urlImagem) => {
    // CRIAR CONTEINER
    const secaoSaibaMaisConteiner = document.createElement("div");
    secaoSaibaMaisConteiner.id = "secao-saiba-mais";

    // CRIAR CONTEINER INFO
    const secaoSaibaMaisInfoConteiner = document.createElement("div");
    // CRIAR H2
    const secaoSaibaMaisInfoH2 = document.createElement("h2");
    secaoSaibaMaisInfoH2.innerHTML = textoH2;
    // CRIAR PARAGRAFO
    const secaoSaibaMaisInfoParagrafo = document.createElement("p");
    secaoSaibaMaisInfoParagrafo.innerHTML = textoParagrafo;
    // CRIAR BOTAO
    const linkBotao = document.createElement("a");
    linkBotao.href = "/pagina/quem-somos.html";
    const secaoSaibaMaisInfoBotao = document.createElement("button");
    secaoSaibaMaisInfoBotao.innerHTML = textoBotao;
    linkBotao.append(secaoSaibaMaisInfoBotao);
    // APPENDS CONTEINER INFO
    secaoSaibaMaisInfoConteiner.append(secaoSaibaMaisInfoH2);
    secaoSaibaMaisInfoConteiner.append(secaoSaibaMaisInfoParagrafo);
    secaoSaibaMaisInfoConteiner.append(linkBotao);

    // CRIAR DIV 2 DO CONTEINER MAIOR
    const secaoSaibaMaisImagemConteiner = document.createElement("div");
    // CRIAR IMAGEM
    const secaoSaibaMaisImagem = document.createElement("img");
    secaoSaibaMaisImagem.alt = "imagem saiba mais";
    secaoSaibaMaisImagem.src = urlImagem;
    // APPEND IMAGEM
    secaoSaibaMaisImagemConteiner.append(secaoSaibaMaisImagem);

    // APPENDS NO CONTEINER MAIOR
    secaoSaibaMaisConteiner.append(secaoSaibaMaisInfoConteiner);
    secaoSaibaMaisConteiner.append(secaoSaibaMaisImagemConteiner);


    return secaoSaibaMaisConteiner;
}

