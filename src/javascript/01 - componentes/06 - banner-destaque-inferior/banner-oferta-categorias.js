// const criarBannerDestaqueCategoria = (urlImagemBannerDestaque) => {
//   // 1 CRIAR CONTEINER
//   const bannerDestaqueInferiorCont = document.createElement("div");
//   bannerDestaqueInferiorCont.classList.add("banner-destaque-inferior");
//   // 2 CRIAR IMAGEM
//   const imagemBannerDestaqueInf = document.createElement("img");
//   imagemBannerDestaqueInf.classList.add("imagem-destaque-inferior");
//   imagemBannerDestaqueInf.src = urlImagemBannerDestaque;
//   imagemBannerDestaqueInf.alt = "banner destaque inferior ca";

//   // // 2 CRIAR DIV PARA TEXTO
//   // const divTextos = document.createElement("div");
//   // divTextos.classList.add("div-banner-inferior");
//   // // 3 CRIAR PARAGRAFO
//   // const paragrafo = document.createElement("p");
//   // paragrafo.classList.add("paragrafo-banner-inferior");
//   // paragrafo.innerHTML = textoMenor;
//   // // 3 CRIAR STRONG
//   // const strong = document.createElement("strong");
//   // strong.classList.add("strong-banner-inferior");
//   // strong.innerHTML = textoMaior;
//   // APPENDS 3->2

//   // divTextos.append(paragrafo);
//   // divTextos.append(strong);
//   // 2 CRIAR BOTAO

//   // const botao = document.createElement("button");
//   // botao.classList.add("botao-banner-inferior");
//   // botao.textContent = textoBotao;

//   // APPEND 2->1
//   bannerDestaqueInferiorCont.append(imagemBannerDestaqueInf);

//   return bannerDestaqueInferiorCont;
// };

// const containerImagem = document.querySelector(
//   ".pagina-categoria #listagemProdutos"
// );

// containerImagem.after(criarBannerDestaqueInferior(bannerDestaqueInferior));
