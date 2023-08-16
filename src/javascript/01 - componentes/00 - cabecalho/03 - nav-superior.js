const hoverMenuSuperiorAtendimento = () => {
  const el = document.querySelector(".box-atendimento-superior");
  el.classList.remove("displayNone");
};

const hoverOutMenuSuperiorAtendimento = () => {
  const el = document.querySelector(".box-atendimento-superior");
  el.classList.add("displayNone");
};

const hoverMenuSuperiorConta = () => {
  const el = document.querySelector(".box-minha-conta");
  el.classList.remove("displayNone");
};

const hoverOutMenuSuperiorConta = () => {
  const el = document.querySelector(".box-minha-conta");
  el.classList.add("displayNone");
};

const categ = document.querySelector("li.categoria-id-18037012 a");
const categTag = categ.getAttribute("title");
categTag.innerText = "Em breve";
/*
BARRA DE BUSCA NAV SUPERIOR
*/
const criarBarraBuscaNavSuperior = (placeholder, urlIconeBarraBusca) => {
  // Criar form
  const formBarraBusca = document.createElement("form");
  formBarraBusca.id = "form-buscar";
  formBarraBusca.action = "/buscar";
  formBarraBusca.method = "GET";

  // Criar input muitos são valores default da Loja Integrada *Cuidado
  const inputBarraBusca = document.createElement("input");
  inputBarraBusca.id = "auto-complete";
  inputBarraBusca.class = "ui-autocomplete-input";
  inputBarraBusca.type = "text";
  inputBarraBusca.name = "q";
  inputBarraBusca.placeholder = placeholder;
  inputBarraBusca.autocomplete = "off";

  // criar iframe
  // const cab = document.querySelector("#cabecalho");
  // const diviframe = document.createElement("div");
  // diviframe.classList.add("div-iframe");

  // const iframe = document.createElement("iframe");
  // iframe.classList.add("aqui-link");
  // diviframe.append(iframe);

  // cab.append(diviframe);

  // diviframe.style.position = "absolute";
  // diviframe.style.top = "50px";
  // diviframe.style.zIndex = "999999999999";
  // diviframe.style.display = "none";

  // Criar botão
  const botaoBarraBusca = document.createElement("button");
  botaoBarraBusca.classList.add("botao-nav-superior-puro");

  // Inserir imagem do ícone no botão
  const iconeBotaoBarraBusca = document.createElement("img");
  iconeBotaoBarraBusca.classList.add("icone-nav-superior-barra-busca");
  iconeBotaoBarraBusca.src = urlIconeBarraBusca;
  iconeBotaoBarraBusca.alt = "icone-pesquisar";
  botaoBarraBusca.append(iconeBotaoBarraBusca);

  // Appends
  formBarraBusca.append(botaoBarraBusca);
  formBarraBusca.append(inputBarraBusca);

  return formBarraBusca;
};

/*
NAV SUPERIOR
*/
const criarNavSuperior = (
  urlIconeAtendimento,
  urlIconeFavoritos,
  urlIconeConta,
  urlIconeCarrinho,
  infoTelefones,
  faleConosco,
  horariosAtendimento,
  envios,
  divBemVindoHTML,
  divMinhasInfosHTML
) => {
  /* 
    Criar barra de navegação superior 
    */
  const navSuperiorConteiner = document.createElement("div");
  navSuperiorConteiner.classList.add("nav-superior-conteiner");

  /* 
    Criar div atendimento 
    */
  const itemAtendimentoNavSuperior = document.createElement("div");
  itemAtendimentoNavSuperior.classList.add("item-nav", "atendimento-item");
  const iconeAtendimentoNavSuperior = document.createElement("img");
  iconeAtendimentoNavSuperior.src = urlIconeAtendimento;
  iconeAtendimentoNavSuperior.classList.add("icone-atendimento-nav");
  iconeAtendimentoNavSuperior.alt = "icone-atendimento";
  const spanAtendimentoNavSuperior = document.createElement("span");
  spanAtendimentoNavSuperior.classList.add("item-atendimento-superior");
  spanAtendimentoNavSuperior.innerHTML = "Atendimento";
  itemAtendimentoNavSuperior.onmouseover = hoverMenuSuperiorAtendimento;
  itemAtendimentoNavSuperior.onmouseleave = hoverOutMenuSuperiorAtendimento;

  // (1) Box hover atendimento
  const boxHoverAtendimento = document.createElement("div");
  boxHoverAtendimento.classList.add("displayNone", "box-atendimento-superior");
  // 2 criar div telefones
  const divTelefones = document.createElement("div");
  divTelefones.innerHTML = infoTelefones;
  // 2 criar div faleConosco
  const divFaleConosco = document.createElement("div");
  divFaleConosco.innerHTML = faleConosco;
  // 2 criar div Horários de atendimento
  const divHorariosAtendimento = document.createElement("div");
  divHorariosAtendimento.innerHTML = horariosAtendimento;
  // 2 criar div envios
  const divEnvios = document.createElement("div");
  divEnvios.innerHTML = envios;
  boxHoverAtendimento.append(divTelefones);
  boxHoverAtendimento.append(divFaleConosco);
  boxHoverAtendimento.append(divHorariosAtendimento);
  boxHoverAtendimento.append(divEnvios);
  spanAtendimentoNavSuperior.append(boxHoverAtendimento);
  // Adicionar icone e texto na div nível um atendimento
  itemAtendimentoNavSuperior.append(iconeAtendimentoNavSuperior);
  itemAtendimentoNavSuperior.append(spanAtendimentoNavSuperior);

  // Adicionar item atendimento na Nav Superior
  navSuperiorConteiner.append(itemAtendimentoNavSuperior);

  /*
    Criar div Favoritos
    */
  const itemFavoritosNavSuperior = document.createElement("div");
  itemFavoritosNavSuperior.classList.add("item-nav", "favoritos-item");
  const iconeFavoritosNavSuperior = document.createElement("img");
  iconeFavoritosNavSuperior.src = urlIconeFavoritos;
  iconeFavoritosNavSuperior.classList.add("icone-Favoritos-nav");
  iconeFavoritosNavSuperior.alt = "icone-Favoritos";
  const spanFavoritosNavSuperior = document.createElement("span");
  spanFavoritosNavSuperior.classList.add("item-Favoritos-superior");
  spanFavoritosNavSuperior.innerHTML =
    "<a href='/conta/favorito/listar'>Favoritos</a>";
  // Adicionar icone e texto na div nível um Favoritos
  itemFavoritosNavSuperior.append(iconeFavoritosNavSuperior);
  itemFavoritosNavSuperior.append(spanFavoritosNavSuperior);
  // Adicionar item Favoritos na Nav Superior
  navSuperiorConteiner.append(itemFavoritosNavSuperior);

  /*
    Criar div Minha Conta
    */
  const itemContaNavSuperior = document.createElement("div");
  itemContaNavSuperior.classList.add("item-nav", "conta-item");
  const iconeContaNavSuperior = document.createElement("img");
  iconeContaNavSuperior.src = urlIconeConta;
  iconeContaNavSuperior.classList.add("icone-Conta-nav");
  iconeContaNavSuperior.alt = "icone-Conta";
  const spanContaNavSuperior = document.createElement("span");
  spanContaNavSuperior.classList.add("item-Conta-superior");
  spanContaNavSuperior.innerHTML = "<a href='/conta/index'>Conta</a>";
  itemContaNavSuperior.onmouseover = hoverMenuSuperiorConta;
  itemContaNavSuperior.onmouseleave = hoverOutMenuSuperiorConta;
  // (1) Minha conta
  const minhaContaConteiner = document.createElement("div");
  minhaContaConteiner.classList.add("box-minha-conta", "displayNone");
  // 2 divBemVindo
  const divBemVindo = document.createElement("div");
  divBemVindo.classList.add("div-bem-vindo");
  divBemVindo.innerHTML = divBemVindoHTML;
  // 2 divMinhasInfos
  const divMinhasInfos = document.createElement("div");
  divMinhasInfos.classList.add("div-minhas-infos");
  divMinhasInfos.innerHTML = divMinhasInfosHTML;
  // 2->1
  minhaContaConteiner.append(divBemVindo);
  minhaContaConteiner.append(divMinhasInfos);
  spanContaNavSuperior.append(minhaContaConteiner);
  // Adicionar icone e texto na div nível um Conta
  itemContaNavSuperior.append(iconeContaNavSuperior);
  itemContaNavSuperior.append(spanContaNavSuperior);
  // Adicionar item Conta na Nav Superior
  navSuperiorConteiner.append(itemContaNavSuperior);

  /*
    Carrinho
    */

  const newcart = document.querySelector(".carrinho");
  newcart.src = urlIconeCarrinho;
  navSuperiorConteiner.append(newcart);

  return navSuperiorConteiner;
};

window.addEventListener("load", () => {
  "strict";
  try {
    if (paginaCheckout()) return;

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // CABEÇALHO
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // NAV SUPERIOR
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Limpar nav superior
    // Selecionar a div conteudo-topo
    const conteudoTopo = document.getElementsByClassName("conteudo-topo")[0];
    // Limpar Bootstrap antigo
    conteudoTopo.classList.remove("span9");
    // Adicionar barra de busca
    conteudoTopo.append(
      criarBarraBuscaNavSuperior(
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Inserir dados aqui
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        textoSearchBar,
        iconeBuscar
      )
    );
    conteudoTopo.append(
      criarNavSuperior(
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Inserir dados aqui
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        iconeAtendimento,
        iconeFavoritos,
        iconeMinhaConta,
        iconeCarrinho,
        // Atendimentos
        `<p class="small-menu-superior">Atendimentos e televendas</p>
            <strong class="strong-menu-superior">(11) 91789-9515</strong><br>
            <p class="small-menu-superior">Ligações para fixos e celulares</p>`,
        // Fale consco
        `<p class="small-menu-superior">Fale conosco através do e-mail</p>
            <strong class="strong-menu-superior">dalpack@dalpack.com.br</strong>`,
        // Horários
        `<p class="small-menu-superior">Horários de atendimento</p>
            <strong class="strong-menu-superior">Seg a Sex 7h às 17h<br> Sábados 7h as 16h
            </strong>`,
        // Envios
        `<p class="small-menu-superior">Envio</p>
            <strong class="strong-menu-superior">Para todo Brasil</strong>`,
        `<img alt="avatar" src="${imagemAvatar}"></img >
            <h3 class="bem-vindo">Olá,<br>bem-vindo(a)!</h3>
            <a href="/conta/index" class="btn-minha-conta">Minha conta</a>`,
        `<div>
                <strong class="strong-minha-conta cadastroheader"><a href='/conta/index'>Cadastrar</a></strong><br><br>
                <strong class="strong-minha-conta pedidosheader"><a href='/conta/index'>Meus Pedidos</a></strong><br>
            </div>
            <div>
                <strong class="strong-minha-conta rastreioheader">Rastrear pedido</strong><br>
                <form action = "#" class="track-form">
                    <input type="text" id="code" placeholder="Código">

                    <button class="rastreiobutton">
                    </button>
                </form>
                
            </div>`
      )
    );

    // $(".rastreiobutton").click(
    //   function(){
    //     var numerorastreio = document.getElementById("code").value;
    //     // window.open("https://cnweb4.websiteseguro.com/logocn-integrada/correios.php?obj=" + numerorastreio);
    //     var link = 'https://cnweb4.websiteseguro.com/logocn-integrada/correios.php?obj=';

    //     const newfram = document.querySelector(".aqui-link")
    //     newfram.setAttribute("src", link + numerorastreio);

    //     $(".signature").remove;
    //     diviframe.style.display = "block";
    //   }
    // )
  } catch (error) {
    console.log(`Erro encontrado no nav superior -> ${error}`);
  }
});
