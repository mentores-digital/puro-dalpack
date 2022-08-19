window.addEventListener("load", () => {
  "strict";

  // SCRIPT PÁGINA INICIAL
  try {
    if (paginaInicial()) {
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // CABEÇALHO
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // BARRA INICIAL
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Inserir texto e url
      const barraInicial = document.getElementsByClassName("barra-inicial")[0];
      barraInicial.appendChild(
        criarConteudoBarraInicial(mensagemSlogan, iconeSlogan)
      );
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // SEÇÃO FULL BANNERS
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const sectionBanner = document.querySelector(".secao-banners");
      // Append seções Banners
      sectionBanner.append(criarFullBannerDesktop());
      sectionBanner.append(criarFullBannerMobile());
      if (sectionBanner) {
        const imagesDesktop = [];
        const imagesMobile = [];
        const slides = sectionBanner.querySelectorAll(".slides li");
        slides.forEach((_slide) => {
          const title = _slide.querySelector(".titulo");
          const link = _slide.querySelector("a");
          const img = _slide.querySelector("img");
          var splitAlt = img.alt.trim().toLowerCase().split("_"); // Separa pelo "_"
          var deviceType = splitAlt[splitAlt.length - 1];
          if (deviceType == "desktop") {
            imagesDesktop.push({
              src: img.src,
              alt: img.alt,
              link: link ? link.href : null,
              title: title ? title.innerHTML : null,
            });
          } else if (deviceType == "mobile") {
            imagesMobile.push({
              src: img.src,
              alt: img.alt,
              link: link ? link.href : null,
              title: title ? title.innerHTML : null,
            });
          } else {
            imagesDesktop.push({
              src: img.src,
              alt: img.alt,
              link: link ? link.href : null,
              title: title ? title.innerHTML : null,
            });
            imagesMobile.push({
              src: img.src,
              alt: img.alt,
              link: link ? link.href : null,
              title: title ? title.innerHTML : null,
            });
          }
        });
        const fullBannerDesktop = document.querySelector("#full-banner");
        const fullBannerMobile = document.querySelector("#full-banner-mobile");
        sectionBanner.innerHTML = "";
        createBanner(fullBannerDesktop, imagesDesktop, sectionBanner);
        createBanner(fullBannerMobile, imagesMobile, sectionBanner);
      }
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // SEÇÃO BANNER DESTAQUES DESKTOP
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const secaoListagemProdutos = document.querySelector(
        ".secao-principal #listagemProdutos ul"
      );
      secaoListagemProdutos.after(
        criarBannerDestaquesDesktop(
          bannerDestaqueUm,
          bannerDestaqueDois,
          bannerDestaqueTres,
          bannerDestaqueQuatro
        )
      );
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // SEÇÃO SAIBA MAIS
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const secaoSaibaMais = document.querySelector(
        ".secao-principal #listagemProdutos ul"
      ).nextElementSibling.nextElementSibling.nextElementSibling;
      secaoSaibaMais.after(
        criarSecaoSaibaMais(
          h2SecaoSaibaMais,
          paragrafoSecaoSaibaMais,
          textoBotaoSaibaMais,
          imagemSecaoSaibaMais
        )
      );
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // SECAO STRIPE BANNERS
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const sectionStripe = document.querySelector(".secao-banners");
      if (sectionStripe) {
        sectionStripe.after(
          criarStripeBanner(
            [
              // INSERIR URL ICONE
              urlIconeUmStripe,
              // INSERIR PARAGRAFO
              paragrafoUmStripe,
              // INSERIR STRONG
              strongUmStripe,
            ],
            [
              // INSERIR URL ICONE
              urlIconeDoisStripe,
              // INSERIR PARAGRAFO
              paragrafoDoisStripe,
              // INSERIR STRONG
              strongDoisStripe,
            ],
            [
              // INSERIR URL ICONE
              urlIconeTresStripe,
              // INSERIR PARAGRAFO
              paragrafoTresStripe,
              // INSERIR STRONG
              strongTresStripe,
            ],
            [
              // INSERIR URL ICONE
              urlIconeQuatroStripe,
              // INSERIR PARAGRAFO
              paragrafoQuatroStripe,
              // INSERIR STRONG
              strongQuatroStripe,
            ]
          )
        );
      }
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // CARROSSEL DE PRODUTOS NOVIDADES
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const tituloPrimeiroCarrossel = document.querySelector(
        ".vitrine-lancamento > strong"
      );
      tituloPrimeiroCarrossel.textContent = "Novidades"; // ALTERAR TITULO
      const subtituloPrimeiroCarrossel = document.createElement("p");
      subtituloPrimeiroCarrossel.classList.add("subtitulo-carrossel");
      subtituloPrimeiroCarrossel.textContent =
        "todos os dias chegam novos produtos"; // ALTERAR SUBTITULO
      tituloPrimeiroCarrossel.after(subtituloPrimeiroCarrossel);
      // SWIPER
      document.body.append(
        criarCarrossel(
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Inserir dados aqui
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          urlSeta
        )
      );
      document.body.append(
        criarModelProductBox(
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Inserir dados aqui
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          "",
          ""
        )
      );
      // SELECIONA TODOS OS UL
      let productCarouselLI = document.querySelectorAll(".produtos-carrossel");
      // SE EXISTIR PRODUTOS NO CARROSSEL
      if (productCarouselLI.length) {
        const section = document.querySelector("#product-carousel"); // Model container of carousel from HTML file
        const slide = document.querySelector("#model-product-box"); // Box in model container inside HTML file
        // LISTA DE PRODUTOS CARROSSEL
        productCarouselLI.forEach((productCarousel) => {
          const container = productCarousel.previousElementSibling;
          const classList = container && container.classList;
          // Products inside carousel list
          const _section = section.cloneNode(true);
          const _slider = _section.querySelector(".swiper");
          const items = productCarousel.querySelectorAll(
            ".listagem-linha .flex-viewport li"
          );
          items.forEach((product, index) => {
            /** Catch all infos **/
            const image = product.querySelector(".imagem-produto img");
            const name = product.querySelector(".nome-produto");
            const priceFrom = product.querySelector(".preco-venda");
            const price = product.querySelector(".preco-promocional");
            const precoAVista = product.querySelector(
              ".desconto-a-vista strong"
            );
            const stallments = product.querySelector(".preco-parcela");
            const stars = product.querySelector(".trustvox-stars");
            const link = product.querySelector(".produto-sobrepor");
            const box = slide.cloneNode(true);
            if (image) {
              const urlHover = image.getAttribute("data-imagem-caminho");
              box.id = `product_box_${index}`;
              box.classList.add("swiper-slide");
              box.querySelector("figure .cover").src = image.src;
              box.querySelector("figure img").alt = image.alt;
              if (urlHover) {
                box.querySelector("figure .hover").src = urlHover;
              } else {
                const _cover = box.querySelector("figure .cover");
                _cover && _cover.classList.remove("cover");
                box.querySelector("figure .hover").remove();
              }
            }
            if (name) {
              box.querySelector(".product-title h2").innerHTML = name.innerHTML;
            }
            if (priceFrom) {
              box.querySelector(
                ".product-original"
              ).innerHTML = `de ${priceFrom.innerHTML} por`;
            }
            if (price) {
              box.querySelector(".product-price h2").innerHTML =
                price.innerHTML;
            }
            if (precoAVista) {
              box.querySelector(
                ".preco-a-vista"
              ).innerHTML = `${precoAVista.innerHTML} via Pix`;
            }
            if (stars) {
              box.querySelector(".stars").append(stars.cloneNode(true));
            }
            if (stallments) {
              box.querySelector(".product-price small").innerHTML =
                stallments.innerHTML
                  .replaceAll('<strong class="cor-secundaria">', "")
                  .replaceAll('<strong class="cor-secundaria ">', "")
                  .replaceAll("</strong>", "");
              // .replace('de', 'de<br/>');
            }
            link &&
              box.querySelectorAll("a").forEach((item) => (item.href = link));
            box && _slider.querySelector(".swiper-wrapper").append(box);
          });
          // Montar Slider
          new Swiper(_slider, {
            loop: false,
            slidesPerView: 1.5,
            spaceBetween: 30,
            navigation: {
              nextEl: _section.querySelector(".swiper-button-next"),
              prevEl: _section.querySelector(".swiper-button-prev"),
            },
            breakpoints: {
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
          // Adicionar atributos e colocar itens
          _section.id = classList.length
            ? `${classList[classList.length - 1]}`
            : "listagem-carrossel";
          productCarousel.remove();
          container.append(_section);
        });
        slide.remove();
        section.remove();
        productCarouselLI = null;
      }
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // CARROSSEL DE PRODUTOS MAIS VENDIDOS
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const tituloSegundoCarrossel = document.querySelector(
        ".vitrine-mas-vendido > strong"
      );
      tituloSegundoCarrossel.textContent = "Ofertas Relâmpago"; // ALTERAR TITULO
      const subtituloSegundoCarrossel = document.createElement("p");
      subtituloSegundoCarrossel.classList.add("subtitulo-carrossel");
      subtituloSegundoCarrossel.textContent =
        "todos os dias chegam novos produtos"; // ALTERAR SUBTITULO
      tituloSegundoCarrossel.after(subtituloSegundoCarrossel);
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      // Banner destaque inferior
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      const conteinerSecaoSaibaMais = document.querySelector("#secao-saiba-mais");
      if (window.matchMedia("(min-width: 640px)").matches) {
        conteinerSecaoSaibaMais.after(
          criarBannerDestaqueInferior(
            bannerDestaqueInferior
          )
        );
      } else {
        conteinerSecaoSaibaMais.after(
          criarBannerDestaqueInferior(
            bannerDestaqueInferiorMobile
          )
        );
      }
      const miniBanners = document.querySelector(".banner");
      miniBanners.classList.remove("hidden-phone");

      const footerZ = document.querySelector("#footer");
      const whats = document.createElement("a");
      whats.innerHTML = `<img src='https://cdn.awsli.com.br/2289/2289041/arquivos/Icon.svg' alt ="whats" />`;

      const boxWhats = document.createElement("div");
      boxWhats.classList.add("box-whats");

      boxWhats.innerHTML = `<div class="content-whats">
      <ul>
          <li>
              <a href="#" target="_blank">
                Atendimento
              </a>
          </li>
          <li>
              <a href="#" target="_blank">
                Financeiro
              </a>
          </li>
          </ul>
      </div>`;

      boxWhats.style.display = "none";

      whats.addEventListener('click', function() {
        if (boxWhats.style.display === 'none'){
            boxWhats.style.display = 'block';
        }else{
            boxWhats.style.display = 'none';
        }
      })

      // whats.href = "https://api.whatsapp.com/send?phone=5511951589745";
      whats.id = "whats";
      whats.target = "_blank";
      footerZ.append(whats);
      whats.after(boxWhats);


    }

  } catch (error) {
    console.log(`Erro encontrado -> ${error}`);
  }

  // pegando o banner principal da home e add o newsletter abaixo
  // const banner = document.querySelector("#banner-destaques");
  // const newsLetter = document.querySelector(".footer-newsletter");
  // banner.after(newsLetter)
});
