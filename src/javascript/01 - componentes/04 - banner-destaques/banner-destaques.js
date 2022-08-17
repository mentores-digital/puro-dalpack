// CRIAR BANNER DESTAQUES DESKTOP
const criarBannerDestaquesDesktop = (
  urlElementoUm,
  urlElementoDois,
  urlElementoTres,
  urlElementoQuatro
) => {
  // CRIAR CONTEINER
  const bannerDestaqueDesktopConteiner = document.createElement("div");
  bannerDestaqueDesktopConteiner.id = "banner-destaques";

  // CRIAR PRIMEIRO ELEMENTO
  // -> criar conteiner
  const conteinerUmBannerDestaques = document.createElement("a");
  conteinerUmBannerDestaques.classList.add("destaques-banners");
  conteinerUmBannerDestaques.href = "categoria/brincos--.html";
  // -> criar imagem um
  const imagemUmBannerDestaques = document.createElement("img");
  imagemUmBannerDestaques.src = urlElementoUm;
  // -> append imagem no conteiner
  conteinerUmBannerDestaques.append(imagemUmBannerDestaques);

  // CRIAR SEGUNDO ELEMENTO
  // -> criar conteiner
  const conteinerDoisBannerDestaques = document.createElement("a");
  conteinerDoisBannerDestaques.classList.add("destaques-banners");
  conteinerDoisBannerDestaques.href = "categoria/escapularios.html";
  // -> criar imagem
  const imagemDoisBannerDestaques = document.createElement("img");
  imagemDoisBannerDestaques.src = urlElementoDois;
  // -> append imagem no conteiner
  conteinerDoisBannerDestaques.append(imagemDoisBannerDestaques);

  // CRIAR TERCEIRO ELEMENTO
  // -> criar conteiner
  const conteinerTresBannerDestaques = document.createElement("a");
  conteinerTresBannerDestaques.classList.add("destaques-banners");
  conteinerTresBannerDestaques.href = "/buscar?q=kit&sort=mais_vendidos";
  // -> criar imagem
  const imagemTresBannerDestaques = document.createElement("img");
  imagemTresBannerDestaques.src = urlElementoTres;
  // -> append imagem no conteiner
  conteinerTresBannerDestaques.append(imagemTresBannerDestaques);

  // CRIAR QUARTO ELEMENTO
  // -> criar conteiner
  const conteinerQuatroBannerDestaques = document.createElement("a");
  conteinerQuatroBannerDestaques.classList.add("destaques-banners");
  conteinerQuatroBannerDestaques.href =
    "categoria/conjunto-corrente-pingente-.html";
  // -> criar imagem
  const imagemQuatroBannerDestaques = document.createElement("img");
  imagemQuatroBannerDestaques.src = urlElementoQuatro;
  // -> append imagem no conteiner
  conteinerQuatroBannerDestaques.append(imagemQuatroBannerDestaques);

  // Append geeral no conteiner
  bannerDestaqueDesktopConteiner.append(conteinerUmBannerDestaques);
  bannerDestaqueDesktopConteiner.append(conteinerDoisBannerDestaques);
  bannerDestaqueDesktopConteiner.append(conteinerTresBannerDestaques);
  bannerDestaqueDesktopConteiner.append(conteinerQuatroBannerDestaques);

  return bannerDestaqueDesktopConteiner;
};
