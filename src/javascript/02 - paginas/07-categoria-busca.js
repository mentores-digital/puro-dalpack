const criarFiltros = () => {
  // 1 CRIAR FILTROS DIV
  const divFiltros = document.createElement("div");
  divFiltros.classList.add("m-filtros-aplicados");
  // 2 CRIAR SPAN FILTORS
  const spanFiltros = document.createElement("span");
  // 2 criar filtros BOX
  const boxFiltrosAplicados = document.createElement("div");
  boxFiltrosAplicados.classList.add("m-filtros-aplicados-box");
  // 3 CRIAR bOX itemS
  const boxItensFiltros = document.createElement("div");
  boxItensFiltros.classList.add("m-filtros-aplicados-box-itens");
  // APPEND 3->2
  boxFiltrosAplicados.append(boxItensFiltros);
  // 2 CRIAR LINK EXCLUIR TODOS
  const linkFiltros = document.createElement("a");
  linkFiltros.classList.add("m-filtros-aplicados-excluir-todos");
  linkFiltros.href = "?";
  linkFiltros.textContent = "Excluir todos";
  // APPENDS 2->1
  divFiltros.append(spanFiltros);
  divFiltros.append(boxFiltrosAplicados);
  divFiltros.append(linkFiltros);

  return divFiltros;
};

// banner inferior

// if (paginaCategoria()) {
//   // 1 CRIAR CONTEINER
//   const bannerDestaqueInferiorContainer = document.createElement("div");
//   bannerDestaqueInferiorContainer.classList.add("banner-destaque-inferior");
//   // 2 CRIAR IMAGEM
//   const imagemBannerDestaqueInferior = document.createElement("img");
//   imagemBannerDestaqueInferior.classList.add("banner-destaque-categorias");
//   imagemBannerDestaqueInferior.src = url(
//     "https://cdn.awsli.com.br/1595/1595002/arquivos/banner-bottom-desktop.png"
//   );
//   imagemBannerDestaqueInferior.alt = "banner destaque inferior categorias";

//   // const pag = document.querySelector(".pagination");

//   bannerDestaqueInferiorContainer.append(imagemBannerDestaqueInferior);

//   pagination.after(bannerDestaqueInferiorContainer);
// }

// //////////////

window.addEventListener("load", () => {
  "strict";

  if (paginaCategoria() | paginaBusca()) {
    var pagination = document.querySelector(".pagination");
    var listage = document.querySelector("#listagemProdutos");

    pagination ? listage.after(pagination) : null;
  }

  try {
    if (paginaCategoria() || paginaBusca()) {
      removerTudo(".componente .interno");
      const body = document.querySelector(".pagina-categoria");
      body.append(criarFiltros());
      posicionaFiltro();
      var filtros = document.querySelectorAll(".filtro ul li.active label");
      for (var i = 0; i < filtros.length; i++) {
        createFilterItem(filtros[i]);
      }

      // Mobile
      if (screen.width < 992) {
        const listagemProdutosCategorias = document.querySelector("#listagemProdutos");
        listagemProdutosCategorias.after(criarBannerDestaqueInferior(
          bannerDestaqueInferiorMobile,
          textoBannerDestaqueInferior,
          porcentBannerDestaqueInferior,
          ctaBannerDestaqueInferior
        ))
        // Desktop
      } else {
        const listagemProdutosCategorias = document.querySelector("#listagemProdutos");
        listagemProdutosCategorias.after(criarBannerDestaqueInferior(
          bannerDestaqueInferior,
          textoBannerDestaqueInferior,
          porcentBannerDestaqueInferior,
          ctaBannerDestaqueInferior
        ))
      }



    } else {
      removaSeExistir(".m-filtros-aplicados");
    }
  } catch (erro) {
    console.log(`Erro encontrado -> ${erro}`);
  }
});
