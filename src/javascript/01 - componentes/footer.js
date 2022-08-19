const criarFooter = (
  urlLogoFooter,
  urlFacebook,
  urlYoutube,
  urlInstagram,
  numContato,
  horarioAtendimento,
  nomeEmpresarial,
  enderecoEmpresarial,
  sobreEmpresa,
  urlSeloAmex,
  urlSeloDiners,
  urlSeloElo,
  urlSeloHipercard,
  urlSeloMastercard,
  urlSeloVisa,
  urlSeloBoleto,
  urlSeloDinheiro,
  urlSeloPix,
  urlSetaVoltarTopo,
  urlSeloCompraSegura,
  urlSeloGoogleSafe,
  urlSeloMercadoLivre,
  urlSeloCorreios,
  urlSeloOpinioesReais,
  infoLojaPlus,
  urlImagemLogoLoja,
  urlLogoMentores
) => {
  // 1 CRIAR FOOTER
  const footer = document.createElement("div");
  footer.id = "footer";
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 2 CRIAR CONTEINER
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const footerConteiner = document.createElement("div");
  footerConteiner.classList.add("conteiner");
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 3 CRIAR DIV LOGO E MEDIA
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const divLogoMidia = document.createElement("div");
  divLogoMidia.id = "logo-e-midia";
  // 4 div logo e midia box
  const boxLogoMidia = document.createElement("div");
  boxLogoMidia.classList.add("logo-e-midia-box");
  // 5 link logo footer
  const linkLogoFooter = document.createElement("a");
  linkLogoFooter.classList.add("logo-footer");
  linkLogoFooter.href = "/";
  // 6 imagem logo
  const imagemLogoFooter = document.createElement("img");
  imagemLogoFooter.id = "logo-footer-img";
  imagemLogoFooter.src = urlLogoFooter;
  // APPENDS  6->5
  linkLogoFooter.append(imagemLogoFooter);
  // 5 div midias
  const divMidias = document.createElement("div");
  divMidias.classList.add("midias");
  // 6 linkMidias
  const midiaFacebook = document.createElement("a");
  midiaFacebook.href = urlFacebook;
  midiaFacebook.target = "_blank";
  midiaFacebook.classList.add("midias-item");
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
  midiaYoutube.target = "_blank";
  midiaYoutube.classList.add("midias-item");
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
  midiaInstagram.target = "_blank";
  midiaInstagram.classList.add("midias-item");
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
  // Appends 5->4
  boxLogoMidia.append(linkLogoFooter);
  boxLogoMidia.append(divMidias);
  // Append 4->3
  divLogoMidia.append(boxLogoMidia);
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // FIM SECAO LOGO E MIDIA
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 3 CRIAR DIV MENUS
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const menusConteiner = document.createElement("div");
  menusConteiner.id = "menus";
  // 4 CRIAR DIV MENUS ANTEDIMENTO E NEWSLETTER
  const menusAtendimentoNewsletter = document.createElement("div");
  menusAtendimentoNewsletter.classList.add("menus-atendimento-e-newsletter");
  // 5 CRIAR DIV ATENDIMENTO
  const divAtendimento = document.createElement("div");
  divAtendimento.classList.add("atendimento");
  // 6 CRIAR H4 NUM CONTATO E HORARIO ATENDIMENTO
  const h4Atendimento = document.createElement("h4");
  h4Atendimento.textContent = "Atendimento";
  // 6 CRIAR DIV NUM CONTATO
  const divNumContato = document.createElement("div");
  divNumContato.classList.add("num-contato");
  divNumContato.innerHTML = numContato;
  // 6 CRIAR PARAGRAFO HORARIO ATENDIMENTO
  const pHorarioAtendimento = document.createElement("p");
  pHorarioAtendimento.innerHTML = horarioAtendimento;

  // APPEND 6->5
  divAtendimento.append(h4Atendimento);
  divAtendimento.append(divNumContato);
  divAtendimento.append(pHorarioAtendimento);

  // 5 CRIAR FOOTER NEWSLETTER
  const footerNewsletter = document.createElement("div");
  footerNewsletter.classList.add("footer-newsletter");
  // 6 CRIAR h4 Newsletter
  const h4Newsletter = document.createElement("h4");
  h4Newsletter.textContent = "Newsletter";
  // 6 CRIAR P NEWSLETTER
  const pNewsletter = document.createElement("p");
  pNewsletter.innerHTML = "Coloque seu e-mail para <br>descontos EXCLUSIVOS!";
  // 6 CRIAR BOTAO NREWSLETTER
  const botaoNewsletter = document.createElement("button");
  botaoNewsletter.classList.add("footer-newsletter-button");
  botaoNewsletter.innerHTML = "Cadastrar";
  
  // APPENDS 6->5
  footerNewsletter.append(h4Newsletter);
  footerNewsletter.append(pNewsletter);
  footerNewsletter.append(botaoNewsletter);

  // APPEND 5->4
  menusAtendimentoNewsletter.append(divAtendimento);
  menusAtendimentoNewsletter.append(footerNewsletter);
  // banner.after(footerNewsletter);

  // 4 MENUS INFO LOJA
  const divMenusInfoLoja = document.createElement("div");
  divMenusInfoLoja.classList.add("menus-info-loja");
  // 5 CRIAR h4
  const h4MenusInfoLoja = document.createElement("h4");
  h4MenusInfoLoja.textContent = nomeEmpresarial;
  // 5 CRIAR p
  const pMenusInfoLoja = document.createElement("p");
  pMenusInfoLoja.innerHTML = enderecoEmpresarial;
  // APPENDS 5->4
  divMenusInfoLoja.append(h4MenusInfoLoja);
  divMenusInfoLoja.append(pMenusInfoLoja);

  // 4 MENUS-SOBRE
  const divMenusSobre = document.createElement("div");
  divMenusSobre.classList.add("menus-sobre");
  // 5 CRIAR h4
  const h4MenusSobre = document.createElement("h4");
  h4MenusSobre.textContent = "Sobre";
  // 5 CRIAR p
  const pMenusSobre = document.createElement("p");
  pMenusSobre.innerHTML = sobreEmpresa;
  // APPENDS 5->4
  divMenusSobre.append(h4MenusSobre);
  divMenusSobre.append(pMenusSobre);

  // 4 CRIAR MENUS-INSTITUCIONAL
  const menusInstitucional = document.createElement("div");
  menusInstitucional.classList.add("menus-institucional");
  // 5 h4
  const h4MenusInstitucional = document.createElement("h4");
  h4MenusInstitucional.textContent = "Institucional";
  // APPEND 5->4
  menusInstitucional.append(h4MenusInstitucional);

  // APPEND 4-> 3
  menusConteiner.append(menusAtendimentoNewsletter);
  menusConteiner.append(divMenusInfoLoja);
  menusConteiner.append(divMenusSobre);
  menusConteiner.append(menusInstitucional);

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 3 CRIAR DIV SELOS E MAIS
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const selosEMaisConteiner = document.createElement("div");
  selosEMaisConteiner.id = "selos-e-mais";
  // 4 CRIARI PAGUE COM E SETA
  const divPagueComESeta = document.createElement("div");
  divPagueComESeta.classList.add("pague-com-e-seta");
  // 5 CRIAR DIV PAGUE COM
  const divPagueCom = document.createElement("div");
  divPagueCom.classList.add("pague-com");
  // 6 criar h4
  const h4PagueCom = document.createElement("h4");
  h4PagueCom.textContent = "Pague com";
  // 6 criar div pague com selos
  const divPagueComSelos = document.createElement("div");
  divPagueComSelos.classList.add("pague-com-selos-box");
  // 7 CRIAR IMG pague com selo Amex
  const imagemPagueComAmex = document.createElement("img");
  imagemPagueComAmex.classList.add("pague-com-selo-img");
  imagemPagueComAmex.src = urlSeloAmex;
  imagemPagueComAmex.alt = `Pague com Amex`;
  // 7 CRIAR IMG pague com selo Diners
  const imagemPagueComDiners = document.createElement("img");
  imagemPagueComDiners.classList.add("pague-com-selo-img");
  imagemPagueComDiners.src = urlSeloDiners;
  imagemPagueComDiners.alt = `Pague com Diners`;
  // 7 CRIAR IMG pague com selo Elo
  const imagemPagueComElo = document.createElement("img");
  imagemPagueComElo.classList.add("pague-com-selo-img");
  imagemPagueComElo.src = urlSeloElo;
  imagemPagueComElo.alt = `Pague com Elo`;
  // 7 CRIAR IMG pague com selo Hipercard
  const imagemPagueComHipercard = document.createElement("img");
  imagemPagueComHipercard.classList.add("pague-com-selo-img");
  imagemPagueComHipercard.src = urlSeloHipercard;
  imagemPagueComHipercard.alt = `Pague com Hipercard`;
  // 7 CRIAR IMG pague com selo Mastercard
  const imagemPagueComMastercard = document.createElement("img");
  imagemPagueComMastercard.classList.add("pague-com-selo-img");
  imagemPagueComMastercard.src = urlSeloMastercard;
  imagemPagueComMastercard.alt = `Pague com Mastercard`;
  // 7 CRIAR IMG pague com selo Visa
  const imagemPagueComVisa = document.createElement("img");
  imagemPagueComVisa.classList.add("pague-com-selo-img");
  imagemPagueComVisa.src = urlSeloVisa;
  imagemPagueComVisa.alt = `Pague com Visa`;
  // 7 CRIAR IMG pague com selo Boleto
  const imagemPagueComBoleto = document.createElement("img");
  imagemPagueComBoleto.classList.add("pague-com-selo-img");
  imagemPagueComBoleto.src = urlSeloBoleto;
  imagemPagueComBoleto.alt = `Pague com Boleto`;
  // 7 CRIAR IMG pague com selo Dinheiro
  const imagemPagueComDinheiro = document.createElement("img");
  imagemPagueComDinheiro.classList.add("pague-com-selo-img");
  imagemPagueComDinheiro.src = urlSeloDinheiro;
  imagemPagueComDinheiro.alt = `Pague com Dinheiro`;

  // 8 CRIAR IMG pague com selo Pix
  const imagemPagueComPix = document.createElement("img");
  imagemPagueComPix.classList.add("pague-com-selo-img");
  imagemPagueComPix.src = urlSeloPix;
  imagemPagueComPix.alt = `Pague com Pix`;

  // APPENDS 7->6
  divPagueComSelos.append(imagemPagueComAmex);
  divPagueComSelos.append(imagemPagueComDiners);
  divPagueComSelos.append(imagemPagueComElo);
  divPagueComSelos.append(imagemPagueComHipercard);
  divPagueComSelos.append(imagemPagueComMastercard);
  divPagueComSelos.append(imagemPagueComVisa);
  divPagueComSelos.append(imagemPagueComBoleto);
  divPagueComSelos.append(imagemPagueComDinheiro);
  divPagueComSelos.append(imagemPagueComPix);

  // APPENDS 6->5
  divPagueCom.append(h4PagueCom);
  divPagueCom.append(divPagueComSelos);

  // 5 CRIAR SETA QUE VOLTA AO TOPO
  const linkSetaVoltarTopo = document.createElement("a");
  linkSetaVoltarTopo.classList.add("seta-voltar-topo");
  linkSetaVoltarTopo.href = "#top";
  // 6 IMAGEM SETA VOLTAR TOPO
  const imagemSetaVoltarTopo = document.createElement("img");
  imagemSetaVoltarTopo.classList.add("seta-voltar-topo-img");
  imagemSetaVoltarTopo.src = urlSetaVoltarTopo;
  // APPEND 6->5
  linkSetaVoltarTopo.append(imagemSetaVoltarTopo);

  // APPENDS 5->4
  divPagueComESeta.append(divPagueCom);
  divPagueComESeta.append(linkSetaVoltarTopo);

  // 4 CRIAR SELOS E INFO
  const divSelosEInfo = document.createElement("div");
  divSelosEInfo.classList.add("selos-e-info");
  // 5 DIV SELOS
  const divSelos = document.createElement("div");
  divSelos.classList.add("selos");
  // 6 h4 Selos
  const h4Selos = document.createElement("h4");
  h4Selos.textContent = "Selos";
  // 6 CRIAR SELOS BOX
  const selosBox = document.createElement("div");
  selosBox.classList.add("selos-box");
  // 7 CRIAR IMAGEM CompraSegura
  const imagemSeloCompraSegura = document.createElement("img");
  imagemSeloCompraSegura.classList.add("selo-img");
  imagemSeloCompraSegura.src = urlSeloCompraSegura;
  imagemSeloCompraSegura.alt = "CompraSegura";
  // 7 CRIAR IMAGEM GoogleSafe
  const imagemSeloGoogleSafe = document.createElement("img");
  imagemSeloGoogleSafe.classList.add("selo-img");
  imagemSeloGoogleSafe.src = urlSeloGoogleSafe;
  imagemSeloGoogleSafe.alt = "GoogleSafe";
  // 7 CRIAR IMAGEM MercadoLivre
  const imagemSeloMercadoLivre = document.createElement("img");
  imagemSeloMercadoLivre.classList.add("selo-img");
  imagemSeloMercadoLivre.src = urlSeloMercadoLivre;
  imagemSeloMercadoLivre.alt = "MercadoLivre";
  // 7 CRIAR IMAGEM Correios
  const imagemSeloCorreios = document.createElement("img");
  imagemSeloCorreios.classList.add("selo-img");
  imagemSeloCorreios.src = urlSeloCorreios;
  imagemSeloCorreios.alt = "Correios";
  // 7 CRIAR IMAGEM OpinioesReais
  const imagemSeloOpinioesReais = document.createElement("img");
  imagemSeloOpinioesReais.classList.add("selo-img");
  imagemSeloOpinioesReais.src = urlSeloOpinioesReais;
  imagemSeloOpinioesReais.alt = "OpinioesReais";

  // APPENDS 7->6
  selosBox.append(imagemSeloCompraSegura);
  selosBox.append(imagemSeloGoogleSafe);
  selosBox.append(imagemSeloMercadoLivre);
  selosBox.append(imagemSeloCorreios);
  selosBox.append(imagemSeloOpinioesReais);

  // APPENDS 6->5
  divSelos.append(h4Selos);
  divSelos.append(selosBox);

  // 5 DIV INFO LOJA PLUSS
  const infoLojaPlusConteiner = document.createElement("div");
  infoLojaPlusConteiner.classList.add("inf-loja-plus");
  // 6 PARAGRAFO nfo loja
  const pInfoLoja = document.createElement("p");
  pInfoLoja.innerHTML = infoLojaPlus;
  // APPENDS 6->5
  infoLojaPlusConteiner.append(pInfoLoja);
  // APPENDS 5->4
  divSelosEInfo.append(divSelos);
  divSelosEInfo.append(infoLojaPlusConteiner);

  // APPENDS 4->3
  selosEMaisConteiner.append(divPagueComESeta);
  selosEMaisConteiner.append(divSelosEInfo);
  selosEMaisConteiner.append(divSelosEInfo);

  // APPENDS 3->2
  footerConteiner.append(divLogoMidia);
  footerConteiner.append(menusConteiner);
  footerConteiner.append(selosEMaisConteiner);

  // 2 COPYRIGHTS CONTEINER
  const copyrightsConteiner = document.createElement("div");
  copyrightsConteiner.id = "copyrights";
  // 3 CRIAR ITENS COPY
  const copyrightsItems = document.createElement("div");
  copyrightsItems.classList.add("itens-copyrights");
  // 4 CRIAR TERMOS E PRIVACIDADE
  const termosEPrivacidade = document.createElement("div");
  termosEPrivacidade.classList.add("termos-e-privacidade");
  // 5 PARAGRAFO
  const paragrafoTermos = document.createElement("p");
  // 6 LINKS TERMOS
  // const linkTermosDeUso = document.createElement("a");
  // linkTermosDeUso.href = "/pagina/termos-de-uso.html";
  // linkTermosDeUso.innerHTML = "Termos de uso e ";
  // 6 LINKS TERMOS
  const linkSegurancaEPrivacidade = document.createElement("a");
  linkSegurancaEPrivacidade.href = "/pagina/seguranca-e-privacidade.html";
  linkSegurancaEPrivacidade.innerHTML = "Política de privacidade";

  // APPENDS 6->5
  // paragrafoTermos.append(linkTermosDeUso);
  paragrafoTermos.append(linkSegurancaEPrivacidade);
  // APPENDS 5->4
  termosEPrivacidade.append(paragrafoTermos);

  // 4 logo loja integrada
  const logoLoja = document.createElement("div");
  logoLoja.classList.add("logo-loja-integrada");
  // 5 imagem logo
  const imagemLogoLoja = document.createElement("img");
  imagemLogoLoja.classList.add("logo-loja-integrada-img");
  imagemLogoLoja.src = urlImagemLogoLoja;
  imagemLogoLoja.alt = "Imagem logo loja";
  // APPEND 5->4
  logoLoja.append(imagemLogoLoja);
  // 4 DIV MENTORES
  const divMentores = document.createElement("div");
  divMentores.classList.add("mentores");
  // 5 PARAGRAFO MENTORES
  const pMentores = document.createElement("p");
  pMentores.textContent = "Desenvolvido no Brasil pela ";
  // 5 LINK MENTORES
  const linkMentores = document.createElement("a");
  linkMentores.classList.add("logo-mentores");
  linkMentores.target = "_blank";
  linkMentores.href = "https://mentores.com.br/loja-integrada/";
  // 6 IMAGEM LOGO MENTORES
  const imagemLogoMentores = document.createElement("img");
  imagemLogoMentores.classList.add("logo-mentores-img");
  imagemLogoMentores.src = urlLogoMentores;
  // APPENDS 6->5
  linkMentores.append(imagemLogoMentores);
  // APPENDS 5->4
  divMentores.append(pMentores);
  divMentores.append(linkMentores);

  // APPENDS 4->3
  copyrightsItems.append(termosEPrivacidade);
  copyrightsItems.append(logoLoja);
  copyrightsItems.append(divMentores);

  // APPENDS 3->2
  copyrightsConteiner.append(copyrightsItems);

  // APPENDS 2->1
  footer.append(footerConteiner);
  footer.append(copyrightsConteiner);
  return footer;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FOOTER
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const footerLi = document.querySelector("#rodape");
footerLi.append(
  criarFooter(
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Inserir dados aqui
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    logoClienteNegativa,
    linkClienteFacebook,
    linkClienteYoutube,
    linkClienteInstagram,
    telefoneCliente,
    horarioFuncionamento,
    razaoSocial,
    cnpjEndereco,
    descritivoNegocio,
    bandeiraAmex,
    bandeiraDiners,
    bandeiraElo,
    andeiraHipercard,
    bandeiraMastercard,
    bandeiraVisa,
    bandeiraBoleto,
    bandeiraDinheiro,
    bandeiraPix,
    urlSeta,
    seloCompraSegura,
    seloGoogle,
    seloMercadolivre,
    seloCorreios,
    seloOpinioes,
    descritivoInferior,
    logoLojaIntegrada,
    logoMentores
  )
);
const footer = document.querySelector("#footer");
if (footerLi) {
  if (footer) {
    // newsletter
    var news = document.querySelector(".newsletter .interno .interno-conteudo");
    var newsFooter = document.querySelector(".footer-newsletter");
    newsFooter.append(news);
    //var sourceAbout = footerLi.querySelector('.sobre-loja-rodape p');
    var sourceMenu = footerLi.querySelector(".links-rodape-paginas ul");
    if (!sourceMenu) {
      var url = urlSiteCliente;
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "document";
      xhr.send();
      xhr.onload = function (e) {
        var doc = e.target.responseXML;
        sourceMenu = doc.querySelector(".links-rodape-paginas ul");
        footer.querySelector("#menus .menus-institucional").append(sourceMenu);
      };
    } else {
      const menuInstitucional = footer.querySelector(
        "#menus .menus-institucional"
      );
      sourceMenu && menuInstitucional && menuInstitucional.append(sourceMenu);
    }
    footerLi.innerHTML = "";
    footerLi.append(footer);
  }
}
