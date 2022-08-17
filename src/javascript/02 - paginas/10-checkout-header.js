function limitarTextCheckout() {
  const nomesFretes = document.querySelectorAll(".nome");
  for (let i = 0; i < nomesFretes.length; i++) {
      let newNome = nomesFretes[i].innerHTML.slice(0, 25);
      newNome.length >= 25 ? nomesFretes[i].innerHTML = `${newNome}...` : nomesFretes[i].innerHTML = newNome;
  }   
  
}

window.addEventListener('load', ()=>{
  if (paginaCarrinho()) {
      limitarTextCheckout()
  }

  const btnFrete = document.querySelector("#btn-frete");
  btnFrete.addEventListener("click", () => {
      document.location.reload(true);
  });
})

try {
  if (paginaCheckout()) {
    carrinhoNav("#cabecalho > .conteiner");

    function carrinhoNav(divPai) {
      let infoDiv = document.createElement("div");
      infoDiv.style.justifyContent = "space-between";
      infoDiv.style.alignItems = "center";

      infoDiv.className = "row-fluid";
      infoDiv.style.display = "flex";

      let selosDiv = document.createElement("div");
      selosDiv.className = "selo-div";
      let selos = document.createElement("img");
      selos.style.justifyContent = "space-between";
      selos.src = seloCompraSeguraCheckout;
      selos.alt = "selo-compra";
      selosDiv.appendChild(selos);

      let googleDiv = document.createElement("div");
      googleDiv.className = "google-div";
      let google = document.createElement("img");
      google.src = seloGoogleCheckout;
      google.alt = "selo google";
      googleDiv.appendChild(google);

      // let atendimentoDiv = document.createElement("div");
      // atendimentoDiv.className = "atendimento-tel";
      // atendimentoDiv.innerHTML = `
      // Atendimento<br>
      // <strong>(11) 95158-9745</strong>`;

      let conteinerNav = document.querySelector(divPai);
      conteinerNav.classList.add("mobilenav");
      conteinerNav.style.display = "flex";
      // conteinerNav.style.margin = "0px 100px 0px 100px";
      // conteinerNav.appendChild(logoDiv);
      conteinerNav.appendChild(infoDiv);
      infoDiv.appendChild(selosDiv);
      infoDiv.appendChild(googleDiv);
      infoDiv.appendChild(atendimentoDiv);
    }
  }
} catch (error) {
  console.log(`Erro encontrado checkout header -> ${error}`);
}
