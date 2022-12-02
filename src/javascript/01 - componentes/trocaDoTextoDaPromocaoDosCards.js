const bandeirasProdutoCards = document.querySelectorAll(
  ".bandeiras-produto span"
);

bandeirasProdutoCards.forEach((elem) => {
  elem.innerText = elem.innerText.split(" ")[0] + " OFF";
});

window.addEventListener("load", () => {
  setTimeout(() => {
    const addBandeirasConteudo =
      document.querySelectorAll(".bandeiras-produto");
    addBandeirasConteudo.forEach((elem) => {
      if (elem.innerText !== "" && elem.innerText !== "PRODUTO OFF") {
        elem.classList.add("conteudo");
      }
    });
  }, 1);
});
