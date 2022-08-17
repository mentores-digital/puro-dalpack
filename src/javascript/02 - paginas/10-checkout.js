function preenchimentoListaEnderecos() {
  var listaEndereco = document.querySelectorAll("#listaEndereco input");
  for (let i = 0; i < listaEndereco.length; i++) {
    listaEndereco[i].parentElement.classList.remove("m-checked");
    if (listaEndereco[i].checked) {
      listaEndereco[i].parentElement.classList.add("m-checked");
    }
  }
}

window.addEventListener("load", () => {
  "strict";
  try {
    if (paginaCheckout()) {
      setTituloPaginaCheckout();
      document.querySelector(".cabecalho-interno").classList.remove("hide");
      // comportamento radio input - Lista Endereços
      var inputsListaEnderecos = document.querySelectorAll(
        "#listaEndereco input"
      );
      for (let i = 0; i < inputsListaEnderecos.length; i++) {
        inputsListaEnderecos[i].setAttribute(
          "onclick",
          "preenchimentoListaEnderecos()"
        );
      }
      preenchimentoListaEnderecos();
      const formasPagamento = document.querySelector("#exibirFormasPagamento a");
      for (let i = 0; i < 3; i++) {
        window.setTimeout(() => formasPagamento.click(), 1000);
      }

    }
  } catch (e) {
    console.log(`Erro encontrado pagina checkout -> ${e.message}`);
  }
});


// const input = document.querySelector(".tabela-carrinho .formas-envio ul li label.radio input");
