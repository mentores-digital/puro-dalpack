// CRIAR BANNER DESTAQUES DESKTOP
const criarBannerDestaquesDesktop = (
  urlElementoUm,
  urlElementoDois,
  urlElementoTres,
  urlElementoQuatro,
  titleElementoUm,
  titleElementoDois,
  titleElementoTres,
  titleElementoQuatro,
  textoBtnElementoUm,
  textoBtnElementoDois,
  textoBtnElementoTres,
  textoBtnElementoQuatro,
  linkBtnElementoUm,
  linkBtnElementoDois,
  linkBtnElementoTres,
  linkBtnElementoQuatro
) => {
  // CRIAR CONTEINER
  const bannerDestaqueDesktopConteiner = document.createElement("div");
  bannerDestaqueDesktopConteiner.id = "banner-destaques";

  // CRIAR PRIMEIRO ELEMENTO
  // -> criar conteiner
  const conteinerUmBannerDestaques = document.createElement("a");
  conteinerUmBannerDestaques.classList.add("destaques-banners");
  // conteinerUmBannerDestaques.href = "/categoria/bonecas-e-acessorios.html";

  // -> criar titulo e btn
  const divBannerUm = document.createElement("div");
  const titleBannerUm = document.createElement("h4");
  const linkTextoBannerUm = document.createElement("a");

  divBannerUm.classList.add("destaques-banners-text");
  titleBannerUm.classList.add("destaques-banners-title");

  if (titleElementoUm.length > 0) {
    titleBannerUm.innerText = titleElementoUm;
    divBannerUm.append(titleBannerUm);
  }

  if (textoBtnElementoUm.length > 0) {
    linkTextoBannerUm.classList.add("destaques-banners-btn");
    linkTextoBannerUm.innerText = textoBtnElementoUm;
    linkTextoBannerUm.href = linkBtnElementoUm;
    divBannerUm.append(linkTextoBannerUm);
  }

  // -> criar imagem um
  const imagemUmBannerDestaques = document.createElement("img");
  imagemUmBannerDestaques.src = urlElementoUm;
  // -> append imagem no conteiner e texto
  conteinerUmBannerDestaques.append(imagemUmBannerDestaques);
  conteinerUmBannerDestaques.append(divBannerUm);

  // CRIAR SEGUNDO ELEMENTO
  // -> criar conteiner
  const conteinerDoisBannerDestaques = document.createElement("a");
  conteinerDoisBannerDestaques.classList.add("destaques-banners");
  // conteinerDoisBannerDestaques.href = "/categoria/decoracao.html";

  // -> criar titulo e btn
  const divBannerDois = document.createElement("div");
  const titleBannerDois = document.createElement("h4");
  const linkTextoBannerDois = document.createElement("a");

  divBannerDois.classList.add("destaques-banners-text");
  titleBannerDois.classList.add("destaques-banners-title");

  if (titleElementoDois.length > 0) {
    titleBannerDois.innerText = titleElementoDois;
    divBannerDois.append(titleBannerDois);
  }

  if (textoBtnElementoDois.length > 0) {
    linkTextoBannerDois.classList.add("destaques-banners-btn");
    linkTextoBannerDois.innerText = textoBtnElementoDois;
    linkTextoBannerDois.href = linkBtnElementoDois;
    divBannerDois.append(linkTextoBannerDois);
  }

  // -> criar imagem
  const imagemDoisBannerDestaques = document.createElement("img");
  imagemDoisBannerDestaques.src = urlElementoDois;
  // -> append imagem no conteiner
  conteinerDoisBannerDestaques.append(imagemDoisBannerDestaques);
  conteinerDoisBannerDestaques.append(divBannerDois);

  // CRIAR TERCEIRO ELEMENTO
  // -> criar conteiner
  const conteinerTresBannerDestaques = document.createElement("a");
  conteinerTresBannerDestaques.classList.add("destaques-banners");
  // conteinerTresBannerDestaques.href = "/jogos-de-tabuleiro";

  // -> criar titulo e btn
  const divBannerTres = document.createElement("div");
  const titleBannerTres = document.createElement("h4");
  const linkTextoBannerTres = document.createElement("a");

  divBannerTres.classList.add("destaques-banners-text");
  titleBannerTres.classList.add("destaques-banners-title");

  if (titleElementoTres.length > 0) {
    titleBannerTres.innerText = titleElementoTres;
    divBannerTres.append(titleBannerTres);
  }

  if (textoBtnElementoTres.length > 0) {
    linkTextoBannerTres.classList.add("destaques-banners-btn");
    linkTextoBannerTres.innerText = textoBtnElementoTres;
    linkTextoBannerTres.href = linkBtnElementoTres;
    divBannerTres.append(linkTextoBannerTres);
  }

  // -> criar imagem
  const imagemTresBannerDestaques = document.createElement("img");
  imagemTresBannerDestaques.src = urlElementoTres;
  // -> append imagem no conteiner
  conteinerTresBannerDestaques.append(imagemTresBannerDestaques);
  conteinerTresBannerDestaques.append(divBannerTres);

  // CRIAR QUARTO ELEMENTO
  // -> criar conteiner
  const conteinerQuatroBannerDestaques = document.createElement("a");
  conteinerQuatroBannerDestaques.classList.add("destaques-banners");
  // conteinerQuatroBannerDestaques.href = "/arte-papelaria-e-armarinho";

  // -> criar titulo e btn
  const divBannerQuatro = document.createElement("div");
  const titleBannerQuatro = document.createElement("h4");
  const linkTextoBannerQuatro = document.createElement("a");

  divBannerQuatro.classList.add("destaques-banners-text");
  titleBannerQuatro.classList.add("destaques-banners-title");

  if (titleElementoQuatro.length > 0) {
    titleBannerQuatro.innerText = titleElementoQuatro;
    divBannerQuatro.append(titleBannerQuatro);
  }

  if (textoBtnElementoQuatro.length > 0) {
    linkTextoBannerQuatro.classList.add("destaques-banners-btn");
    linkTextoBannerQuatro.innerText = textoBtnElementoQuatro;
    linkTextoBannerQuatro.href = linkBtnElementoQuatro;
    divBannerQuatro.append(linkTextoBannerQuatro);
  }

  // -> criar imagem
  const imagemQuatroBannerDestaques = document.createElement("img");
  imagemQuatroBannerDestaques.src = urlElementoQuatro;
  // -> append imagem no conteiner
  conteinerQuatroBannerDestaques.append(imagemQuatroBannerDestaques);
  conteinerQuatroBannerDestaques.append(divBannerQuatro);

  // Append geeral no conteiner
  bannerDestaqueDesktopConteiner.append(conteinerUmBannerDestaques);
  bannerDestaqueDesktopConteiner.append(conteinerDoisBannerDestaques);
  bannerDestaqueDesktopConteiner.append(conteinerTresBannerDestaques);
  bannerDestaqueDesktopConteiner.append(conteinerQuatroBannerDestaques);

  return bannerDestaqueDesktopConteiner;
};
