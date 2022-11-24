const bandeirasProdutoCards = document.querySelectorAll(
  ".bandeiras-produto span"
);

bandeirasProdutoCards.forEach((elem) => {
  elem.innerText = elem.innerText.split(" ")[0] + " OFF";
});
