// Verifica se tem a classe
function temClasse(selector, className) {
  return document.querySelector(selector).classList.contains(className);
}

// Imprime um item
function print(item) {
  console.log(item);
}

// Converte texto em HTML
const stringToHTML = (str) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, "text/html");
  return doc.body;
};

// Verifica páginas
function paginaProduto() {
  return temClasse("body", "pagina-produto");
}

function paginaConteudo() {
  return temClasse("body", "pagina-pagina");
}

function paginaInicial() {
  return temClasse("body", "pagina-inicial");
}

function paginaCadastro() {
  return temClasse("body", "pagina-cadastro");
}

function paginaInstitucional() {
  return temClasse("body", "pagina-pagina");
}

function paginaCategoria() {
  return temClasse("body", "pagina-categoria");
}

function paginaBusca() {
  return temClasse("body", "pagina-busca");
}

function paginaLogin() {
  return temClasse("body", "pagina-login");
}

function paginaCarrinho() {
  return (
    temClasse("body", "pagina-carrinho") &&
    !temClasse("body", "carrinho-checkout")
  );
}

function paginaCheckout() {
  return temClasse("body", "carrinho-checkout");
}

function isPaginasDaConta() {
  var temp = document.querySelector(
    ".pagina-conta, .pagina-pedido-listar, .pagina-favorito-listar, .pagina-pedido, .pagina-conta-endereco"
  );
  return !!temp;
}

function paginaConta() {
  return temClasse("body", "pagina-conta");
}

function paginaPedidoAberto() {
  return temClasse("body", "pagina-pedido");
}

function paginaMinhaConta() {
  return (
    temClasse("body", "pagina-conta") &&
    window.location.pathname == "/conta/index"
  );
}

function paginaEditarEndereco() {
  return (
    temClasse("body", "pagina-conta-endereco") &&
    window.location.pathname == "/conta/endereco/criar"
  );
}

function paginaEditarMinhaConta() {
  return (
    temClasse("body", "pagina-conta") &&
    window.location.pathname == "/conta/editar"
  );
}

function paginaAlterarSenha() {
  return (
    temClasse("body", "pagina-conta") &&
    window.location.pathname == "/conta/alterar_senha"
  );
}

function paginaPedidoListar() {
  return (
    temClasse("body", "pagina-pedido-listar") &&
    window.location.pathname == "/conta/pedido/listar"
  );
}

function paginaListaDesejos() {
  return (
    temClasse("body", "pagina-favorito-listar") &&
    window.location.pathname == "/conta/favorito/listar"
  );
}

function paginaAlterarSenha() {
  var alterarSenhaRegex = /alterar_senha/;

  return alterarSenhaRegex.test(window.location.href);
}

function paginaEditarMinhaConta() {
  var editarMinhaContaRegex = /conta\/editar/;
  return editarMinhaContaRegex.test(window.location.href);
}

// Termina funções de páginas

function removerTudo(selector) {
  document.querySelectorAll(selector).forEach((e) => e.remove());
}

function removaSeExistir(selector) {
  var item = document.querySelector(selector);

  if (!!item) {
    item.remove();
  }
}

function adicionaLinkOverlayMenu(titulo, link, classe) {
  var li = document.createElement("li");
  var a = document.createElement("a");

  if (classe !== undefined) {
    li.classList.add(classe);
  }

  a.href = link;
  a.innerHTML = titulo;

  li.append(a);

  document.querySelector("#overlay-menu >ul.nivel-um").append(li);
}

function contentLoaded(func) {
  if (document.readyState !== "loading") {
    func();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      "strict";
      func();
    });
  }
}

// Criar Swiper
function createSwiper(appendSelector, extraClass) {
  var swiper = document.createElement("div");
  swiper.classList.add("swiper");

  if (extraClass !== undefined) {
    swiper.classList.add(extraClass);
  }

  var wrapper = document.createElement("div");
  wrapper.classList.add("swiper-wrapper");
  swiper.append(wrapper);

  document.querySelector(appendSelector).append(swiper);

  return swiper;
}

// Adiciona SwiperSlide
function addSwiperSlideLPS(swiperSelector, imgSrc, title, link) {
  var swiper = document.querySelector(swiperSelector);
  var wrapper = swiper.querySelector(".swiper-wrapper");
  var slide = document.createElement("div");
  var a = document.createElement("a");

  var productImage = document.createElement("img");
  var arrow = document.createElement("img");
  var productTitle = document.createElement("h4");

  slide.classList.add("swiper-slide");
  productImage.classList.add("lps-product-img");
  arrow.classList.add("lps-arrow");
  productTitle.classList.add("lps-product-title");

  productImage.src = imgSrc;
  arrow.src = urlSeta;
  productTitle.innerHTML = title;
  a.href = link;

  a.append(productImage);
  a.append(arrow);
  a.append(productTitle);

  slide.append(a);

  wrapper.append(slide);
}

function addFullBannersLPS(linkDesktop, linkMobile) {
  var bannerDesktopLPS = document.createElement("img");
  var bannerMobileLPS = document.createElement("img");

  bannerDesktopLPS.classList.add("full-banner-desktop-lps");
  bannerMobileLPS.classList.add("full-banner-mobile-lps");

  bannerDesktopLPS.src = linkDesktop;
  bannerMobileLPS.src = linkMobile;

  document.querySelector("#corpo").prepend(bannerDesktopLPS);
  document.querySelector("#corpo").prepend(bannerMobileLPS);
}

// Adiciona botões de SWIPER
function setSwiperButtons(carousel) {
  var buttonNext = document.createElement("div");
  buttonNext.classList.add("swiper-button-next");

  var buttonPrev = document.createElement("div");
  buttonPrev.classList.add("swiper-button-prev");

  document
    .querySelector(carousel + "+.produtos-carrossel .swiper")
    .after(buttonNext);
  document
    .querySelector(
      carousel + "+.produtos-carrossel .swiper + .swiper-button-next"
    )
    .after(buttonPrev);
}

// Adiciona paginação no carrossel
function setPagination(carousel) {
  var pagination = document.createElement("div");
  pagination.classList.add("swiper-pagination");
  document
    .querySelector(carousel + "+.produtos-carrossel .swiper")
    .append(pagination);
}

function setCarouselLPS(title, appendSelector, extraClass) {
  var destination = document.querySelector(appendSelector);
  var h2 = document.createElement("h2");
  h2.classList.add("carousel-title");
  h2.innerHTML = title;

  destination.append(h2);

  var swiper = document.createElement("div");
  swiper.classList.add("swiper");

  if (extraClass !== undefined) {
    swiper.classList.add(extraClass);
  }

  var pagination = document.createElement("div");
  pagination.classList.add("swiper-pagination");
  swiper.append(pagination);

  swiper.classList.add("carousel-lps");

  var wrapper = document.createElement("div");
  wrapper.classList.add("swiper-wrapper");
  swiper.append(wrapper);

  destination.append(swiper);

  var buttonNext = document.createElement("div");
  buttonNext.classList.add("swiper-button-next");

  var buttonPrev = document.createElement("div");
  buttonPrev.classList.add("swiper-button-prev");

  swiper.append(buttonNext);
  swiper.append(buttonPrev);
}

function startSwiper(swiperSelector, slidesPerViewDesktop) {
  var swiper = document.querySelector(swiperSelector);

  new Swiper(swiper, {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      400: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      992: {
        slidesPerView: slidesPerViewDesktop,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function setCarousel(carousel) {
  var productCards = document.querySelectorAll(
    carousel + "+.produtos-carrossel li > div > ul > li"
  );

  var sw = createSwiper(carousel + "+.produtos-carrossel");

  for (var i = 0; i < productCards.length; i++) {
    var item = productCards[i];
    item.classList.add("swiper-slide");
    document
      .querySelector(carousel + "+.produtos-carrossel .swiper .swiper-wrapper")
      .append(item);
  }

  setSwiperButtons(carousel);

  setPagination(carousel);

  document.querySelector(carousel + "+.produtos-carrossel > li").remove();

  new Swiper(sw, {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      400: {
        slidesPerView: 1,
        spaceBetween: 5,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: sw.nextElementSibling,
      prevEl: sw.nextElementSibling.nextElementSibling,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function miniBannersLPS(appendSelector, srcImg1, srcImg2, href1, href2) {
  var destination = document.querySelector(appendSelector);

  var title = "Escolha por ambiente";
  var h2 = document.createElement("h2");
  h2.classList.add("carousel-title");
  h2.innerHTML = title;

  destination.append(h2);

  var conteiner = document.createElement("div");

  conteiner.classList.add("minibanners-conteiner-lps");

  var a1 = document.createElement("a");
  var a2 = document.createElement("a");

  var image1 = document.createElement("img");
  var image2 = document.createElement("img");

  image1.src = srcImg1;
  image2.src = srcImg2;

  a1.append(image1);
  a2.append(image2);

  a1.href = href1;
  a2.href = href2;

  conteiner.append(a1);
  conteiner.append(a2);

  destination.append(conteiner);
}

function mudarTituloBotaoCompraCarrinho(titulo) {
  var botao = document.querySelector(
    ".pagina-carrinho .finalizar-compra .acao-editar .botao.principal.grande"
  );

  if (!!botao) {
    botao.innerHTML = "";
    botao.innerHTML = "<i class='icon-ok'></i>" + titulo;
  }
}

function insereCarrinhoBotaoCompraProduto() {
  var botao = document.querySelector(
    ".pagina-produto .principal .comprar .botao-comprar"
  );

  var tagIcone = document.createElement("i");
  tagIcone.id = "tagIconeComprar";
  tagIcone.classList.add("icone-carrinho-comprar");

  if (!!botao) {
    botao.prepend(tagIcone);
  } else {
    tagIcone.remove();
  }
}

function substituirSkuPorCodigo() {
  var skus = document.querySelectorAll(
    ".tabela-carrinho .produto-info ul li:first-child span strong"
  );

  for (var i = 0; i < skus.length; i++) {
    var skuHTML = skus[i].outerHTML;

    var parentSku = skus[i].parentElement;

    parentSku.innerHTML = "Código :" + skuHTML;
  }
}

function produtoIndisponivel() {
  return !!document.querySelector(".acoes-produto.indisponivel");
}

function adicionarClasseAoBody(classToAdd) {
  document.querySelector("body").classList.add(classToAdd);
}

function paginaQuemSomos() {
  if (paginaConteudo()) {
    var temp = document.querySelector("#quem-somos");
    return !!temp;
  } else {
    return false;
  }
}

function paginaSegurancaPrivacidade() {
  if (paginaConteudo()) {
    var temp = document.querySelector("#seguranca-e-privacidade");
    return !!temp;
  } else {
    return false;
  }
}

function paginaTermosDeUso() {
  if (paginaConteudo()) {
    var temp = document.querySelector("#termos-de-uso");
    return !!temp;
  } else {
    return false;
  }
}

function paginaFAQ() {
  if (paginaConteudo()) {
    var temp = document.querySelector("#faq");
    return !!temp;
  } else {
    return false;
  }
}

function paginaTrocasDevolucoes() {
  if (paginaConteudo()) {
    var temp = document.querySelector("#trocas-e-devolucoes");
    return !!temp;
  } else {
    return false;
  }
}

function createBanner(fullBanner, images, sectionBanner) {
  if (!!fullBanner) {
    const wrapper = fullBanner.querySelector(".swiper-wrapper");

    // Mount Slide Wrapper
    images.map((image) => {
      const slide = document.createElement("div");
      const img = document.createElement("img");

      sectionBanner.append(fullBanner);

      img.src = image.src;
      img.alt = image.alt;

      slide.classList.add("swiper-slide");
      slide.appendChild(img);

      // Create Title

      const divTitle = document.createElement("div");
      divTitle.classList.add("swiper-slide-text");
      const verMais = document.createElement("a");

      if (image.title) {
        const title = document.createElement("h2");
        title.classList.add("title");
        title.innerText = image.title.toString().split("||")[0].trim();

        divTitle.append(title);

        if (image.title.toString().split("||")[1]) {
          verMais.classList.add("swiper-slide-btn");
          verMais.href = image.link;
          verMais.innerText = image.title.toString().split("||")[1].trim();
          divTitle.appendChild(verMais);
        }

        slide.appendChild(divTitle);
      } else {
        const title = document.createElement("h2");
        title.classList.add("title");
        divTitle.append(title);
        slide.appendChild(divTitle);
      }

      if (image.link) {
        // Create Button
        const a = document.createElement("a");
        a.classList.add("btn-black");
        a.href = image.link;
        a.append(img);
        slide.append(a);
      }

      // Append
      wrapper.appendChild(slide);
    });

    // Swiper
    new Swiper(fullBanner, {
      loop: true,
      spaceBetween: 0,
      pagination: { el: fullBanner.querySelector(".swiper-pagination") },
      navigation: {
        nextEl: fullBanner.querySelector(".swiper-button-next"),
        prevEl: fullBanner.querySelector(".swiper-button-prev"),
      },
    });
  }
}

function posicionaFiltro() {
  var filtrosAplicados = document.querySelector(".m-filtros-aplicados");
  var tituloPaginaCategoria = document.querySelector("h1.titulo");
  var ordenarListagem = document.querySelector(".ordenar-listagem.topo");
  if (!!filtrosAplicados && !!tituloPaginaCategoria && !!ordenarListagem) {
    tituloPaginaCategoria.after(filtrosAplicados);
    filtrosAplicados.after(ordenarListagem);
  } else {
    removaSeExistir(".m-filtros-aplicados");
  }
}

function createFilterItem(filtro) {
  var nomeFiltro = filtro.innerHTML;

  var mFiltro = document.createElement("div");
  mFiltro.classList.add("m-filtro");

  var mFiltroDescricao = document.createElement("span");
  mFiltroDescricao.classList.add("m-filtro-descricao");

  var mFiltroRemove = document.createElement("a");
  mFiltroRemove.classList.add("m-filtro-remove");

  var paiFiltro = filtro.closest(".filtro");
  mFiltroRemove.href = paiFiltro.querySelector("a.limpar").href;

  var mIconRemove = document.createElement("i");
  mIconRemove.classList.add("icon-remove");

  mFiltroDescricao.innerHTML = nomeFiltro;
  mFiltro.append(mFiltroDescricao);

  mFiltroRemove.append(mIconRemove);
  mFiltro.append(mFiltroRemove);

  var filtrosAplicadosBoxItens = document.querySelector(
    ".m-filtros-aplicados .m-filtros-aplicados-box-itens"
  );

  if (!!filtrosAplicadosBoxItens) {
    filtrosAplicadosBoxItens.append(mFiltro);
  }
}

function removeTodosOsFilhos(seletor) {
  var itens = document.querySelectorAll(seletor + " > *");

  for (var i = 0; i < itens.length; i++) {
    itens[i].remove();
  }
}

function setHeaderCarrinhoCheckout() {
  removeTodosOsFilhos("#cabecalho");
  var headerCarrinhoCheckout = document.querySelector(
    ".header-carrinho-checkout"
  );

  if (!!headerCarrinhoCheckout) {
    document.querySelector("#cabecalho").append(headerCarrinhoCheckout);
  }
}

function getQuantidadePaginaCarrinho() {
  var quantidades = document.querySelectorAll("input[name='quantidade']");
  var total = 0;

  for (let i = 0; i < quantidades.length; i++) {
    total += parseInt(quantidades[i].value);
  }

  return total;
}

function getQuantidadePaginaCheckout() {
  // .conteiner-qtd > div

  var quantidades = document.querySelectorAll(".conteiner-qtd > div");
  var total = 0;

  for (let i = 0; i < quantidades.length; i++) {
    total += parseInt(quantidades[i].innerHTML);
  }

  return total;
}

function setTituloPaginaCheckout() {
  let novoTitulo = "Checkout";

  let titulo = document.querySelector("h1.titulo");
  let tituloSmall = titulo.querySelector("small").cloneNode(true);

  let qtde = getQuantidadePaginaCheckout();

  titulo.innerHTML =
    novoTitulo + " <span class='titulo-qtde-carrinho'>(" + qtde + ")</span>";

  titulo.append(tituloSmall);
}

function setTituloPaginaCarrinho() {
  let titulo = document.querySelector("h1.titulo");

  if (!!titulo) {
    let smallTitulo = titulo.querySelector("small").cloneNode(true);

    var qtde = getQuantidadePaginaCarrinho();

    titulo.innerHTML =
      "Carrinho <span class='titulo-qtde-carrinho'>(" + qtde + ")</span>";

    titulo.append(smallTitulo);
  }
}

function removeSubtotalPaginaCarrinho() {
  var subtotal = document.querySelector(".subtotal");

  if (!!subtotal) {
    var rowSubtotal = subtotal.closest("tr");

    if (!!rowSubtotal) {
      rowSubtotal.remove();
    }
  }
}

function addQtde(elem) {
  var value = parseInt(elem.previousElementSibling.value);

  value += 1;

  elem.previousElementSibling.value = value;

  var acoesProduto = elem.closest(".acoes-produto");

  var produtoId = acoesProduto.getAttribute("data-produto-id");

  acoesProduto.querySelector(".botao-comprar").href =
    window.location.origin +
    "/carrinho/produto/" +
    produtoId +
    "/adicionar/" +
    value;
}

function subQtde(elem) {
  var value = parseInt(elem.nextElementSibling.value);

  if (value != 1) {
    value -= 1;
    elem.nextElementSibling.value = value;

    var acoesProduto = elem.closest(".acoes-produto");

    var produtoId = acoesProduto.getAttribute("data-produto-id");

    acoesProduto.querySelector(".botao-comprar").href =
      window.location.origin +
      "/carrinho/produto/" +
      produtoId +
      "/adicionar/" +
      value;
  }
}

function removeTodasAsClasses(seletor) {
  let elemento = document.querySelector(seletor);

  if (!!elemento) {
    elemento.className = "";
  }
}

const addLinkLogout = () => {
  let htmlInsert = `<li>
    <a href="/conta/logout">
<i class="icon-logout cor-secundaria">

</i> 
Sair
    </a>
<li class="divisor borda-alpha"></li>
   
</li>`;

  document
    .querySelector(".menu-simples")
    .insertAdjacentHTML("beforeend", htmlInsert);
};

// adiciona textos e btn nos miniBanners
window.addEventListener("load", () => {
  const images = document.querySelectorAll(
    ".mini-banner > div.span4 > div.flexslider > ul.slides > li > a > img"
  );
  const links = document.querySelectorAll(
    ".mini-banner > div.span4 > div.flexslider > ul.slides > li > a"
  );
  const onlyimage = document.querySelectorAll(
    ".mini-banner > div.span4 > div.flexslider > ul.slides > li > img"
  );
  images.forEach((elem, index) => {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const a = document.createElement("a");

    div.classList.add("midBanner-text");
    h4.classList.add("midBanner-text-title");
    a.classList.add("midBanner-text-a");

    if (links[index].href) {
      h4.innerText = elem.alt.split("||")[0];
      div.appendChild(h4);

      a.href = links[index].href;
      a.innerText = elem.alt.split("||")[1] && elem.alt.split("||")[1];
      div.appendChild(a);
    }

    elem.parentNode.parentNode.appendChild(div);
  });

  onlyimage.forEach((elem, index) => {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");

    div.classList.add("midBanner-text");
    h4.classList.add("midBanner-text-title");

    if (onlyimage[index]) {
      h4.innerText = elem.alt.split("||")[0];
      div.appendChild(h4);
    }

    elem.parentNode.appendChild(div);
  });

  // links.forEach((elem) => {
  //   elem.href = "";
  // });
});
