window.addEventListener("load", () => {
  "strict";
  try {
    // function insereTextoFullBanners() {
      var textBanner1 = document.querySelector(".banner-text-01");
      var textBanner2 = document.querySelector(".banner-text-02");
      var textBanner3 = document.querySelector(".banner-text-03");

      var cloneTextBannerDesktop1 = textBanner1.cloneNode(true);
      var cloneTextBannerDesktop2 = textBanner2.cloneNode(true);
      var cloneTextBannerDesktop3 = textBanner3.cloneNode(true);

      // var cloneTextBannerMobile1 = textBanner1.cloneNode(true);
      // var cloneTextBannerMobile2 = textBanner2.cloneNode(true);
      // var cloneTextBannerMobile3 = textBanner3.cloneNode(true);

      document.querySelector('#full-banner .swiper-slide img[alt="Full_Banner_1_Desktop"]').after(cloneTextBannerDesktop1);
      document.querySelector("#full-banner .swiper-slide img[alt='Full_Banner_2_Desktop']").after(cloneTextBannerDesktop2);
      document.querySelector("#full-banner .swiper-slide img[alt='Full_Banner_3_Desktop']").after(cloneTextBannerDesktop3);

      // document.querySelector("#full-banner-mobile .swiper-slide img[alt='Full_Banner_2_Mobile']").after(cloneTextBannerMobile1);
      // document.querySelector("#full-banner-mobile .swiper-slide img[alt='Full_Banner_1_Mobile']").after(cloneTextBannerMobile2);
      // document.querySelector("#full-banner-mobile .swiper-slide img[alt='Full_Banner_2_Mobile']").after(cloneTextBannerMobile3);

      textBanner1.remove();
      textBanner2.remove();
      textBanner3.remove();
    // }
    // insereTextoFullBanners();

    // const nomeFull = document.querySelector('#full-banner .swiper-slide a img');
    // const atrib = nomeFull.getAttribute('alt');

    // const newsp = document.createElement('p');
    // newsp.classList.add('nome-banner');
    // newsp.style.position = 'absolute';
    // newsp.prepend(atrib);

    // nomeFull.before(newsp);

    // const nomeFull = document.querySelectorAll('#full-banner .swiper-slide a img');
    // for (let i = 0; i < nomeFull.length; i++) {

    //     let atrib = nomeFull.getAttribute('alt');

    //     const newsp = document.createElement('p');
    //     newsp.classList.add('nome-banner');
    //     newsp.style.position = 'absolute';
    //     newsp.prepend(atrib);

    //     nomeFull.before(newsp);
    //   }
    

  } catch (erro) {
    console.log(`Erro encontrado na página texto banner -> ${erro}`);
  }
});
