// Criar Full Banner Desktop
const criarFullBannerDesktop = () => {
    // Criar full banner conteiner 
    const fullBannerDesktopConteiner = document.createElement("div");
    fullBannerDesktopConteiner.id = "full-banner";
    fullBannerDesktopConteiner.classList.add("swiper");

    // Criar swiper desktop wrapper
    const fullBannerDesktopWrapper = document.createElement("div");
    fullBannerDesktopWrapper.classList.add("swiper-wrapper");

    // Criar swiper desktop pagination
    const fullBannerDesktopPagination = document.createElement("div");
    fullBannerDesktopPagination.classList.add("swiper-pagination");

    // Criar swiper button prev
    const fullBannerDesktopButtonPrev = document.createElement("div");
    fullBannerDesktopButtonPrev.classList.add("swiper-button-prev");

    // Criar swiper button next
    const fullBannerDesktopButtonNext = document.createElement("div");
    fullBannerDesktopButtonNext.classList.add("swiper-button-next");

    // Fazer os appends no conteiner
    fullBannerDesktopConteiner.append(fullBannerDesktopWrapper);
    fullBannerDesktopConteiner.append(fullBannerDesktopPagination);
    fullBannerDesktopConteiner.append(fullBannerDesktopButtonPrev);
    fullBannerDesktopConteiner.append(fullBannerDesktopButtonNext);

    return fullBannerDesktopConteiner;
}

// Criar Full Banner Mobile
const criarFullBannerMobile = () => {
    // Criar full banner conteiner 
    const fullBannerMobileConteiner = document.createElement("div");
    fullBannerMobileConteiner.id = "full-banner-mobile";
    fullBannerMobileConteiner.classList.add("swiper");

    // Criar swiper Mobile wrapper
    const fullBannerMobileWrapper = document.createElement("div");
    fullBannerMobileWrapper.classList.add("swiper-wrapper");

    // Criar swiper Mobile pagination
    const fullBannerMobilePagination = document.createElement("div");
    fullBannerMobilePagination.classList.add("swiper-pagination");

    // Criar swiper button prev
    const fullBannerMobileButtonPrev = document.createElement("div");
    fullBannerMobileButtonPrev.classList.add("swiper-button-prev");

    // Criar swiper button next
    const fullBannerMobileButtonNext = document.createElement("div");
    fullBannerMobileButtonNext.classList.add("swiper-button-next");

    // Fazer os appends no conteiner
    fullBannerMobileConteiner.append(fullBannerMobileWrapper);
    fullBannerMobileConteiner.append(fullBannerMobilePagination);
    fullBannerMobileConteiner.append(fullBannerMobileButtonPrev);
    fullBannerMobileConteiner.append(fullBannerMobileButtonNext);

    return fullBannerMobileConteiner;
}
