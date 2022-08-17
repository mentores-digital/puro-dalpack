const fecharMenuDois = () => {
  const menuOverlayDois = document.querySelector("#overlay-menu-dois");
  menuOverlayDois.classList.remove("displayBlock");
};
const fecharMenuTres = () => {
  const menuOverlayTres = document.querySelector("#overlay-menu-tres");
  menuOverlayTres.classList.remove("displayBlock");
};

// const criarBotaoVoltar = () => {
//   const liVoltar = document.createElement("li");
//   const a = document.createElement("a");
//   a.innerHTML = "&larr; Voltar";
//   liVoltar.append(a);
//   liVoltar.onclick = fecharMenuTres;
//   return liVoltar;
// }

const criarMidiasMobile = (urlFacebook, urlYoutube, urlInstagram) => {
  const divMidias = document.createElement("div");
  divMidias.classList.add("midias-mobile");
  // 6 linkMidias
  const midiaFacebook = document.createElement("a");
  midiaFacebook.href = urlFacebook;
  midiaFacebook.classList.add("midias-item-mobile");
  // 7 icone facebook
  const iconeFacebook = document.createElement("i");
  iconeFacebook.classList.add("icon-facebook");
  // 7 criar span Facebook
  const spanFacebook = document.createElement("span");
  spanFacebook.textContent = "Facebook";
  // Appends 7->6
  midiaFacebook.append(iconeFacebook);
  midiaFacebook.append(spanFacebook);
  // 6 linkMidias
  const midiaYoutube = document.createElement("a");
  midiaYoutube.href = urlYoutube;
  midiaYoutube.classList.add("midias-item-mobile");
  // 7 icone facebook
  const iconeYoutube = document.createElement("i");
  iconeYoutube.classList.add("icon-youtube-play");
  // 7 criar span Youtube
  const spanYoutube = document.createElement("span");
  spanYoutube.textContent = "Youtube";
  // Appends 7->6
  midiaYoutube.append(iconeYoutube);
  midiaYoutube.append(spanYoutube);
  // 6 linkMidias
  const midiaInstagram = document.createElement("a");
  midiaInstagram.href = urlInstagram;
  midiaInstagram.classList.add("midias-item-mobile");
  // 7 icone facebook
  const iconeInstagram = document.createElement("i");
  iconeInstagram.classList.add("icon-instagram");
  // 7 criar span Instagram
  const spanInstagram = document.createElement("span");
  spanInstagram.textContent = "Instagram";
  // Appends 7->6
  midiaInstagram.append(iconeInstagram);
  midiaInstagram.append(spanInstagram);
  // Appends 6->5
  divMidias.append(midiaFacebook);
  divMidias.append(midiaYoutube);
  divMidias.append(midiaInstagram);

  return divMidias;
};

const criarOverlayMenu = () => {
  // 1 conteiner
  const conteiner = document.createElement("div");
  conteiner.id = "overlay-menu";
  // 2 bg menu
  const bgMenu = document.createElement("div");
  bgMenu.classList.add("bg-menu");
  bgMenu.onclick = abrirMenuMobile;
  // 2 ul nivel um
  const ulNivelUm = document.createElement("ul");
  ulNivelUm.classList.add("nivel-um");
  // 3 li minha conta
  const liMinhaConta = document.createElement("li");
  liMinhaConta.classList.add("minha-conta");
  // 4 link linha conta
  const linkMinhaConta = document.createElement("a");
  linkMinhaConta.href = "/conta/index";
  linkMinhaConta.textContent = "Minha conta";
  // 4->3
  liMinhaConta.append(linkMinhaConta);
  // 3->2
  ulNivelUm.append(liMinhaConta);
  // 2 -> 1
  conteiner.append(bgMenu);
  conteiner.append(ulNivelUm);

  return conteiner;
};

const criarOverlayMenuDois = () => {
  // 1 conteiner
  const conteiner = document.createElement("div");
  conteiner.id = "overlay-menu-dois";
  // 2 bg menu
  const bgMenu = document.createElement("div");
  bgMenu.classList.add("bg-menu-dois");
  bgMenu.onclick = fecharMenuDois;
  // 2 ul nivel um
  const ulNivelDois = document.createElement("ul");
  ulNivelDois.classList.add("nivel-dois");
  // 3 li minha conta
  const liVoltarDois = document.createElement("li");
  liVoltarDois.classList.add("voltar");
  // 4 p linha conta
  const linkVoltar = document.createElement("a");
  linkVoltar.innerHTML = "&larr; Voltar";
  linkVoltar.id = "botaoVoltar";
  // 4->3
  liVoltarDois.append(linkVoltar);
  // 3->2
  ulNivelDois.append(liVoltarDois);
  // 2 -> 1
  conteiner.append(bgMenu);
  conteiner.append(ulNivelDois);

  return conteiner;
};

const criarOverlayMenuTres = () => {
  // 1 conteiner
  const conteiner = document.createElement("div");
  conteiner.id = "overlay-menu-tres";
  // 2 bg menu
  const bgMenu = document.createElement("div");
  bgMenu.classList.add("bg-menu-tres");
  bgMenu.onclick = fecharMenuTres;
  // 2 ul nivel um
  const ulNivelTres = document.createElement("ul");
  ulNivelTres.classList.add("nivel-tres");
  // // 3 li minha conta
  const liVoltarTres = document.createElement("li");
  liVoltarTres.classList.add("voltar");
  // // 4 p linha conta
  const linkVoltar = document.createElement("a");
  linkVoltar.innerHTML = "&larr; Voltar";
  // // 4->3
  liVoltarTres.append(linkVoltar);
  // // 3->2
  ulNivelTres.append(liVoltarTres);
  // 2 -> 1
  conteiner.append(bgMenu);
  conteiner.append(ulNivelTres);
  return conteiner;
};

const abrirMenuMobile = () => {
  const menuOverlay = document.querySelector("#overlay-menu");
  menuOverlay.classList.toggle("displayBlock");

  const body = document.querySelector("body");
  body.classList.toggle("positionFixed");

  const menuOverlayDois = document.querySelector("#overlay-menu-dois");
  if (menuOverlayDois.classList.contains("displayBlock")) {
    menuOverlayDois.classList.remove("displayBlock");
  }
  const menuOverlayTres = document.querySelector("#overlay-menu-tres");
  if (menuOverlayTres.classList.contains("displayBlock")) {
    menuOverlayTres.classList.remove("displayBlock");
  }

  document
    .querySelectorAll("#menu-mobile .top #toggle-mobile span")
    .forEach((e) => e.classList.toggle("d-none"));
};

const capturarMenuNivelTres = (event) => {
  event.preventDefault();
  console.log(event.target.tagName);
  let menuOverlayTres = document.querySelector("#overlay-menu-tres");
  const cabecalho = document.querySelector("#cabecalho");
  if (menuOverlayTres) {
    menuOverlayTres.remove();
    cabecalho.append(criarOverlayMenuTres());
  }
  menuOverlayTres = document.querySelector("#overlay-menu-tres");
  menuOverlayTres.classList.toggle("displayBlock");
  const ulOverlayTres = document.querySelector("#overlay-menu-tres ul");
  if (event.target.tagName === "LI") {
    console.log(event.target);
    const todasLi = event.target.querySelector(".nivel-tres");
    ulOverlayTres.innerHTML += todasLi.innerHTML;
    console.log(event.target.tagName);
  } else if (event.target.tagName === "STRONG") {
    console.log(event.target.tagName);
    const todasLi =
      event.target.parentNode.parentNode.querySelector(".nivel-tres");
    ulOverlayTres.innerHTML += todasLi.innerHTML;
  } else if (event.target.tagName === "A") {
    console.log(event.target.tagName);
    const todasLi = event.target.parentNode.querySelector(".nivel-tres");
    ulOverlayTres.innerHTML += todasLi.innerHTML;
  }

  ulOverlayDois = document.querySelectorAll("#overlay-menu-tres ul > li");
  console.log(ulOverlayDois);
  for (let i = 0; i < ulOverlayDois.length; i++) {
    if (ulOverlayDois[i].classList.contains("voltar")) {
      ulOverlayDois[i].onclick = fecharMenuTres;
    }
  }
}  

const capturarMenuNivelDois = (event) => {
  event.preventDefault();
  let menuOverlayDois = document.querySelector("#overlay-menu-dois");
  const cabecalho = document.querySelector("#cabecalho");
  if (menuOverlayDois) {
    menuOverlayDois.remove();
    cabecalho.append(criarOverlayMenuDois());
  }
  menuOverlayDois = document.querySelector("#overlay-menu-dois");
  menuOverlayDois.classList.toggle("displayBlock");
  let ulOverlayDois = document.querySelector("#overlay-menu-dois ul");
  if (event.target.tagName === "LI") {
    console.log(event.target);
    const todasLi = event.target.querySelector(".nivel-dois");
    ulOverlayDois.innerHTML += todasLi.innerHTML;
  } else if (event.target.tagName === "STRONG") {
    const todasLi =
      event.target.parentNode.parentNode.querySelector(".nivel-dois");
    ulOverlayDois.innerHTML += todasLi.innerHTML;
  } else if (event.target.tagName === "A") {
    const todasLi = event.target.parentNode.querySelector(".nivel-dois");
    ulOverlayDois.innerHTML += todasLi.innerHTML;
  }
  ulOverlayDois = document.querySelectorAll("#overlay-menu-dois ul > li");
  for (let i = 0; i < ulOverlayDois.length; i++) {
    if (ulOverlayDois[i].classList.contains("voltar")) {
      ulOverlayDois[i].onclick = fecharMenuDois;
    } else if (ulOverlayDois[i].classList.contains("com-filho")) {
      ulOverlayDois[i].onclick = capturarMenuNivelTres;
    }
  }
};

const criarHeaderMobile = (
  urlSanduiche,
  urlLogo,
  urlCarrinho,
  urlLupa,
  textoSearchBar
) => {
  // 1 conteiner
  const conteiner = document.createElement("div");
  conteiner.id = "header-mobile";
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 2 elementos div
  const elementosDiv = document.createElement("div");
  elementosDiv.className = "elementos-header-mobile";
  // 3 imagem urlSanduiche
  const imagemSanduiche = document.createElement("img");
  imagemSanduiche.src = urlSanduiche;
  imagemSanduiche.alt = "Menu mobile";
  imagemSanduiche.classList.add("sanduiche-header-mobile");
  imagemSanduiche.onclick = abrirMenuMobile;
  // 3 imagem logo
  const linkLogo = document.createElement("a");
  linkLogo.href = "/";
  const imagemLogo = document.createElement("img");
  imagemLogo.src = urlLogo;
  imagemLogo.alt = "Logo Filip Jóias";
  imagemLogo.classList.add("logo-header-mobile");
  linkLogo.append(imagemLogo);
  // 3 imagem logo
  const linkCarrinho = document.createElement("a");
  linkCarrinho.href = "/carrinho/index";
  const imagemCarrinho = document.createElement("img");
  imagemCarrinho.src = urlCarrinho;
  imagemCarrinho.alt = "Carrinho Mosaico Acabamentos";
  imagemCarrinho.classList.add("carrinho-header-mobile");
  linkCarrinho.append(imagemCarrinho);
  // APPENDS 3->2
  elementosDiv.append(imagemSanduiche);
  elementosDiv.append(linkLogo);
  elementosDiv.append(linkCarrinho);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //2 SearchForm
  const searchForm = document.createElement("form");
  searchForm.id = "form-buscar";
  searchForm.action = "/buscar";
  searchForm.method = "GET";
  // 3 const botaoSearchMobile
  const botaoSearchMobile = document.createElement("button");
  botaoSearchMobile.id = "botao-search-mobile";
  // 4 imagemBuscar
  const iconeBuscar = document.createElement("img");
  iconeBuscar.classList.add("icone-buscar-mobile");
  iconeBuscar.alt = "buscar";
  iconeBuscar.src = urlLupa;
  // 4->3
  botaoSearchMobile.append(iconeBuscar);
  // 3 inputSearchForm
  const inputSearchMobile = document.createElement("input");
  inputSearchMobile.id = "auto-complete";
  inputSearchMobile.type = "text";
  inputSearchMobile.name = "q";
  inputSearchMobile.placeholder = textoSearchBar;
  inputSearchMobile.autocomplete = "off";
  // 3->2
  searchForm.append(botaoSearchMobile);
  searchForm.append(inputSearchMobile);
  // 2->1
  conteiner.append(elementosDiv);
  conteiner.append(searchForm);

  return conteiner;
};

window.addEventListener("load", () => {
  "strict";
  try {
    const cabecalho = document.querySelector("#cabecalho");
    const menuMobile = document.querySelector(".menu.superior ul.nivel-um").innerHTML;
    cabecalho.prepend(
      criarHeaderMobile(
        iconeSanduiche,
        logoCliente,
        iconeCarrinho,
        iconeBuscar,
        textoSearchBar
      )
    );
    cabecalho.append(criarOverlayMenu());
    cabecalho.append(criarOverlayMenuDois());
    cabecalho.append(criarOverlayMenuTres());


    // ADICIONAR MENUS NA OVERLAY PARA O MOBILE
    const ulOverlay = document.querySelector("#overlay-menu ul");
    ulOverlay.innerHTML += menuMobile;
    ulOverlay.append(criarMidiasMobile(facebook, youtube, instagram));
    // Pegar LIs nivel um
    const liNivelUm = document.querySelectorAll(
      "#overlay-menu ul > li.com-filho"
    );
    for (let i = 0; i < liNivelUm.length; i++) {
      liNivelUm[i].onclick = capturarMenuNivelDois;
    }
    const fetchLogin = async () => {
      const botaoLogout = document.querySelector("#botaoLogout");
      const response = await fetch(`${urlSiteCliente}/conta/index`);
      // Transforma pra texto
      const responseText = await response.text();
      // Transforma pra HTML
      const parser = new DOMParser();
      const html = parser.parseFromString(responseText, "text/html");
      // Pega os links com o ID
      let minhaConta = html.querySelector(`.minha-conta`);
      minhaConta
        ? (botaoLogout.style.display = "block")
        : (botaoLogout.style.display = "none");
    };

    const iconesRight = document.querySelectorAll(".icon-chevron-right");

    iconesRight.forEach(icone => icone.classList.remove("fundo-secundario"));

    fetchLogin();
  } catch (erro) {
    console.log(`Erro mobile header encontrado -> ${erro}`);
  }
});
