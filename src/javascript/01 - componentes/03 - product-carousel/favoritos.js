window.addEventListener("load", () => {
  "strict";

  function favoritesFunctionality() {
    let nodeProdutos = document.querySelectorAll(
      "[data-trustvox-product-code]"
    );
    // let nodeProdutos = document.querySelectorAll(".");

    // Icon creation
    let icon = document.createElement("img");
    let iconLink = document.createElement("a");

    // Verificar favoritos existentes
    async function getFavoritesId() {
      let favoritesId = [];
      // Request
      const response = await fetch(
        "https://www.filipjoias.com.br/conta/favorito/listar"
      );
      // Transforma pra texto
      const responseText = await response.text();
      // Transforma pra HTML
      const parser = new DOMParser();
      const html = parser.parseFromString(responseText, "text/html");
      // Pega os links com o ID
      let linksArray = html.querySelectorAll(`a[href$='remover']`);
      // Pega os ids dos links e adiciona no array
      for (let i = 0; i < linksArray.length; i++) {
        let href = linksArray[i].getAttribute("href");
        let favoriteId = href.match("[0-9]{9}");
        favoritesId.push(favoriteId[0]);
      }
      return favoritesId;
    }

    // Adicionar icones
    async function insertIcons() {
      let arrayIdFavoritos = await getFavoritesId();
      // Insere icones favoritos nos produtos
      for (let i = 0; i < nodeProdutos.length; i++) {
        let boxProdutoId = nodeProdutos[i].getAttribute(
          "data-trustvox-product-code"
        );
        let divPai = nodeProdutos[i].closest("article");
        let elementoIcon = iconLink.cloneNode(true);
        let elementoImage = icon.cloneNode(true);

        for (let j = 0; j < arrayIdFavoritos.length; j++) {
          if (parseInt(boxProdutoId) === parseInt(arrayIdFavoritos[j])) {
            elementoImage.src =
              "https://cdn.awsli.com.br/1595/1595002/arquivos/icon-favoritos-2.png";
            elementoImage.className = "icone-favorito-2";
            elementoIcon.href = `https://www.filipjoias.com.br/conta/favorito/${boxProdutoId}/remover`;
            break;
          } else {
            elementoImage.src =
              "https://cdn.awsli.com.br/1595/1595002/arquivos/Icon-heart.svg";
            elementoImage.className = "icone-favorito";
            elementoIcon.href = `https://www.filipjoias.com.br/conta/favorito/${boxProdutoId}/adicionar`;
          }
        }
        // Check if user was logged on request
        if (!arrayIdFavoritos.length) {
          elementoImage.src =
            "https://cdn.awsli.com.br/1595/1595002/arquivos/Icon-heart.svg";
          elementoImage.className = "icone-favorito";
          elementoIcon.href = `https://www.filipjoias.com.br/conta/favorito/${boxProdutoId}/adicionar`;
        }
        elementoIcon.className = "favorite-conteiner";
        elementoIcon.append(elementoImage);
        divPai.append(elementoIcon);
      }
      iconLink.remove();
      icon.remove();
    }
    // Execução
    insertIcons();
  }
  favoritesFunctionality();
});
