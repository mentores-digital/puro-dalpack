window.addEventListener("load", () => {
  "strict";

  try {
    if (paginaProduto()) {
      const painelProduto = document.querySelector(
        ".produto>.row-fluid:first-child"
      );

      // const textoAlterarMercadoPago = document.querySelector(".comprar span");

      // textoAlterarMercadoPago.innerHTML =
      //   "Compra 100% segura. Pagamentos auditados pelo <strong>Mercado Pago</strong>";

      // textoAlterarMercadoPago.classList.remove("disponibilidade-produto");
      // textoAlterarMercadoPago.classList.add("descricao-mp");

      const doisSpans6 = painelProduto.querySelectorAll(".span6");
      doisSpans6.forEach((span, i) => {
        span.classList.remove("span6");
        span.classList.add(`item-painel-${i}`);
      });
      const infoProduto = document.querySelectorAll(
        ".info-principal-produto > *"
      );

      const botaoComprar = document.querySelector(".principal .comprar");
      // const parcelasProduto = document.querySelector(".parcelas-produto.borda-alpha.padrao");
      const precoProduto = document.querySelector(
        ".acoes-produto .preco-produto"
      );
      const atributos = document.querySelector(".atributos");
      const itemPainelUm = document.querySelector(".item-painel-0");
      const detalhesProduto = document.createElement("div");
      detalhesProduto.id = "item-painel-00";

      try {
        infoProduto.forEach((info) => {
          detalhesProduto.append(info);
        });
      } catch (e) {
        console.log(`erro aqui infoProduto-> ${e.message}`)
      }


      itemPainelUm.after(detalhesProduto);

      const painel0 = document.querySelector(".item-painel-0");
      const painel00 = document.querySelector("#item-painel-00");
      const painelProdutoConteiner = document.createElement("div");
      painelProdutoConteiner.id = "painel-produto-conteiner";
      painelProdutoConteiner.append(painel0);
      painelProdutoConteiner.append(painel00);
      painelProduto.prepend(painelProdutoConteiner);
      const precos = document.querySelectorAll(".acoes-produto");

      // try {
      //   for (let i = 0; i < precos.length; i++) {
      //     precos[i].after(atributos.cloneNode(true));
      //   }
      //   // precos[2].after(atributos);
      // } catch (e) {
      //   console.log(`erro no painel 00, não existe atributos -> ${e.message}`)
      // }

      const accordions = document.querySelectorAll(".accordion");
      const cep = document.querySelectorAll(".cep");
      accordions.forEach((accordion, i) => {
        accordion.append(cep[i]);
      });

      // const cartaoCredito = document.createElement("strong");
      // cartaoCredito.textContent = "Cartão de crédito";
      // const boletoBancario = document.createElement("strong");
      // boletoBancario.textContent = "Boleto Bancário";
      // const pix = document.createElement("strong");
      // pix.textContent = "Pix";
      // const textParcelas = document.querySelectorAll(".text-parcelas");
      // textParcelas[6].before(cartaoCredito);
      // textParcelas[7].before(boletoBancario);
      // textParcelas[8].before(pix);

      // BREVE DESCRICAO
      const descricao = document.querySelector("#descricao");
      const divDescricao = document.createElement("div");
      divDescricao.id = "breve-descricao";

      const descricaoh2 = document.createElement("h2");
      descricaoh2.textContent = "Descrição";
      descricaoh2.id = "descricao-titulo";


      try {
        if (descricao) {
          const breveDescricao = descricao.innerHTML.slice(0, 500);

          if (!breveDescricao) {
            breveDescricao = descricao.slice(0, 200);
          }
          divDescricao.innerHTML = breveDescricao + " ...";
          painel00.append(divDescricao);
          descricao.prepend(descricaoh2);
        }

        vejaLink =
          "<a href='#descricao' id='veja-info'>Veja mais informações</a>";
        painel00.innerHTML += vejaLink;

        linhaFormaDeEnvio = `
                <div id="envio">
                    <img src="https://cdn.awsli.com.br/2384/2384993/arquivos/icone-box-produto.png" alt="box">
                    <div>
                        <strong>Envio em 48 horas úteis após aprovação do pagamento</strong>
                        <small>*Não válido para itens digitais e pré-vendas.</small>
                    </div>
                </div>`;

        painel00.innerHTML += linhaFormaDeEnvio;
      } catch (e) {
        console.log(`Prod, -> ${e}`);
      }

      const itemPainel0 = document.querySelector(".item-painel-0");
      const div = document.createElement("div");
      div.innerHTML = `
            
                `;
      itemPainel0.append(div);

      const botaoVideo = document.querySelector("a.botao-video");
      const imagemVideo = document.createElement("img");
      imagemVideo.src = iconePlayVideo;
      imagemVideo.id = "icone-video";
      botaoVideo.append(imagemVideo);

      const produtoVideo = document.querySelector(".produto-video p");
      produtoVideo.textContent = "Clique ao lado para assistir ao vídeo";
    }
  } catch (erro) {
    console.log(`Página do produto -> ${erro}`);
  }
});
