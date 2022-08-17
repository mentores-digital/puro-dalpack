const criarCarrossel = (urlImagemSeta) => {
    // 1 Criar div exterior
    const carrosselConteiner = document.createElement("div");
    carrosselConteiner.id = "product-carousel";

    // 2 Criar div de dentro
    const swiperConteiner = document.createElement("div");
    swiperConteiner.classList.add("conteiner");

    // 3 Criar div Swiper
    const swiperDiv = document.createElement("div");
    swiperDiv.classList.add("swiper", "product-slider");
    // 4 Criar div swiper wrapper
    const swiperWrapper = document.createElement("div");
    swiperWrapper.classList.add("swiper-wrapper");
    // Append 4 -> 3
    swiperDiv.append(swiperWrapper);
    // 3 Criar swiper-button-prev
    const swiperPrev = document.createElement("div");
    swiperPrev.classList.add("swiper-button-prev");
    // 4 Criar imagem arrow-left
    const imagemPrev = document.createElement("img");
    imagemPrev.alt = "Slide Anterior";
    imagemPrev.src = urlImagemSeta;
    // Append 4 -> 3
    swiperPrev.append(imagemPrev);
    // 3 Criar swiper-button-next
    const swiperNext = document.createElement("div");
    swiperNext.classList.add("swiper-button-next");
    // 4 Criar imagem arrow-left
    const imagemNext = document.createElement("img");
    imagemNext.alt = "Próximo Slide";
    imagemNext.src = urlImagemSeta;
    imagemNext.style.transform = "rotate(180deg)";
    // Append 4 -> 3
    swiperNext.append(imagemNext);

    // Appends 3 -> 2
    swiperConteiner.append(swiperDiv);
    swiperConteiner.append(swiperPrev);
    swiperConteiner.append(swiperNext);

    // Appends 2 -> 1
    carrosselConteiner.append(swiperConteiner);

    return carrosselConteiner;
}