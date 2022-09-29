window.addEventListener("load", () => {
  "strict";
  try {
    // function insereTextoFullBanners() {
      var textBanner1 = document.querySelector(".banner-text-01");
      // var textBanner2 = document.querySelector(".banner-text-02");
      var textBanner3 = document.querySelector(".banner-text-03");

      var cloneTextBannerDesktop1 = textBanner1.cloneNode(true);
      // var cloneTextBannerDesktop2 = textBanner2.cloneNode(true);
      var cloneTextBannerDesktop3 = textBanner3.cloneNode(true);

      // var cloneTextBannerMobile1 = textBanner1.cloneNode(true);
      // var cloneTextBannerMobile2 = textBanner2.cloneNode(true);
      // var cloneTextBannerMobile3 = textBanner3.cloneNode(true);

      document.querySelector('#full-banner .swiper-slide img[alt="Full Banner - Supermercado e Padaria"]').after(cloneTextBannerDesktop1);
      // document.querySelector("#full-banner .swiper-slide img[alt='Full_Banner_1_Desktop']").after(cloneTextBannerDesktop2);
      document.querySelector("#full-banner .swiper-slide img[alt='Full Banner - Fast Food e Restaurante']").after(cloneTextBannerDesktop3);

      // document.querySelector("#full-banner-mobile .swiper-slide img[alt='Full_Banner_2_Mobile']").after(cloneTextBannerMobile1);
      // document.querySelector("#full-banner-mobile .swiper-slide img[alt='Full_Banner_1_Mobile']").after(cloneTextBannerMobile2);
      // document.querySelector("#full-banner-mobile .swiper-slide img[alt='Full_Banner_2_Mobile']").after(cloneTextBannerMobile3);

      textBanner1.remove();
      // textBanner2.remove();
      textBanner3.remove();
    // }
    // insereTextoFullBanners();

  } catch (erro) {
    console.log(`Erro encontrado na página de segurança e privacidade -> ${erro}`);
  }
});
