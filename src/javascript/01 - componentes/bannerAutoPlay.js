if (paginaInicial) {
  setInterval(() => {
    const fullBanner = document.querySelector("#full-banner");
    fullBanner.querySelector(".swiper-button-next").click();
  }, 5000);
}
