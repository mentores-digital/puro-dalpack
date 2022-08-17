window.addEventListener('load', () => {
    'strict'

    try {
        if (paginaCarrinho()) {

            setTituloPaginaCarrinho();
            removeSubtotalPaginaCarrinho();
            substituirSkuPorCodigo();

            // Modifica Link não sei meu CEP
            var naoSeiMeuCEP = document.querySelector(".pagina-carrinho:not(.carrinho-checkout) .finalizar-compra #formCalcularFrete .controls .input-append + .help-inline > a");
            var iconeNaoSeiMeuCEP = naoSeiMeuCEP.querySelector("i").cloneNode(true);
            naoSeiMeuCEP.innerHTML = "";
            naoSeiMeuCEP.append(iconeNaoSeiMeuCEP);

            // frete mobile
            var fretemodal = document.querySelector('.tabela-carrinho tr.bg-dark.hidden-phone');
            fretemodal.classList.remove("hidden-phone");

        } else {

        }
    } catch (erro) {
        console.log(`Erro encontrado -> ${erro}`);
    }

});