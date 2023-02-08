// const auxVar = '';

// const megaMenuHoverOut = ({ target }) => {
//     const megaMenuConteiner = document.querySelector("#mega-menu");
//     megaMenuConteiner.classList.remove("displayBlock");

//     const megaMenuUm = document.querySelector(".ul-um");
//     const megaMenuDois = document.querySelector(".ul-dois");
//     const megaMenuTres = document.querySelector(".ul-tres");

//     megaMenuUm.innerHTML = '';
//     megaMenuDois.innerHTML = '';
//     megaMenuTres.innerHTML = '';
// }

// const megaMenuHover = ({ target }) => {
//     const megaMenuUm = document.querySelector(".ul-um");
//     const megaMenuDois = document.querySelector(".ul-dois");
//     const megaMenuTres = document.querySelector(".ul-tres");

//     let el = '';
//     if (target.tagName === "LI") {
//         el = target.querySelectorAll(".nivel-dois > li");
//     } else if (target.tagName === "STRONG") {
//         el = target.parentNode.parentNode.querySelectorAll(".nivel-dois > li");
//     } else if (target.tagName === "A") {
//         el = target.parentNode.querySelectorAll(".nivel-dois > li");
//     } else {
//         return;
//     }

//     if (!el) return;

//     if (!megaMenuUm.childElementCount) {
//         for (let i = 0; i < 13; i++) {
//             if (el[i] !== undefined) {
//                 megaMenuUm.append(el[i].cloneNode(true));
//                 megaMenuDois.style.left = `${el[0].offsetLeft}px`;
//             }
//         }
//     }

//     if (!megaMenuDois.childElementCount) {
//         for (let i = 13; i < 26; i++) {
//             if (el[i] !== undefined) {
//                 megaMenuDois.append(el[i].cloneNode(true));
//                 megaMenuDois.style.left = `${el[0].offsetLeft + (200 * 1)}px`;
//             }
//         }
//     }
//     if (!megaMenuTres.childElementCount) {
//         for (let i = 26; i < (el.length % 13) + 26; i++) {
//             if (el[i] !== undefined) {
//                 console.log(el[i]);
//                 megaMenuTres.append(el[i].cloneNode(true));
//                 megaMenuTres.style.left = `${el[0].offsetLeft + (200 * 2)}px`;
//                 console.log(el[0].offsetLeft);
//             }
//         }
//     }

//     const megaMenuConteiner = document.querySelector("#mega-menu");
//     megaMenuConteiner.classList.add("displayBlock");
// }

// const criarMegaMenuConteiners = () => {
//     const conteiner = document.createElement("div");
//     conteiner.style.position = 'absolute';
//     conteiner.id = "mega-menu";

//     const ulUm = document.createElement("ul");
//     ulUm.classList.add("ul-um", 'ul-mega-menu');
//     ulUm.style.position = 'absolute';
//     ulUm.style.top = '50px';
//     conteiner.append(ulUm);

//     const ulDois = document.createElement("ul");
//     ulDois.classList.add("ul-dois", 'ul-mega-menu');
//     ulDois.style.position = 'absolute';
//     ulDois.style.top = '50px';
//     conteiner.append(ulDois);

//     const ulTres = document.createElement("ul");
//     ulTres.classList.add("ul-tres", 'ul-mega-menu');
//     ulTres.style.position = 'absolute';
//     ulTres.style.top = '50px';
//     conteiner.append(ulTres);

//     return conteiner;

// }

// TIRA A CLASSE CONTEINER DO CABECALHO
window.addEventListener("load", () => {
  "strict";
  try {
    if (paginaCheckout()) return;
    // Remover classe conteiner do cabecalho
    let cabecalhoConteiner = document.querySelectorAll(
      "#cabecalho .conteiner"
    )[0];
    cabecalhoConteiner.classList.add("cabecalho-conteiner");

    const cabecalho = document.querySelector("#cabecalho");
    const menuSuperior = document.querySelector(".menu.superior");
    cabecalho.append(menuSuperior);

    const ulNivelDoisFem = document.querySelector(
      "li.categoria-id-17467695 .nivel-dois"
    );
    // const image1 = document.createElement("img");
    // image1.src = "https://cdn.awsli.com.br/2289/2289041/arquivos/Tenis drop 01.png";
    // ulNivelDoisFem.append(image1);
    const link = document.createElement("a");
    link.innerHTML = "Ver todos";
    link.href = "/perfumes";
    link.id = "link-ver-todos";
    ulNivelDoisFem.append(link);

    const ulNivelDoisMasc = document.querySelector(
      "li.categoria-id-17467698 .nivel-dois"
    );
    // const image2 = document.createElement("img");
    // image2.src = "https://cdn.awsli.com.br/2289/2289041/arquivos/sarna.png";
    // ulNivelDoisMasc.append(image2);
    const link2 = document.createElement("a");
    link2.innerHTML = "Ver todos";
    link2.href = "/cabelos";
    link2.id = "link-ver-todos";
    ulNivelDoisMasc.append(link2);
  } catch (error) {
    console.log(`Erro encontrado -> ${error}`);
  }
});

window.addEventListener("load", () => {
  "strict";
  try {
    if (window.screen.width <= 1366) {
      const menu = document.querySelectorAll(".menu.superior > ul > li");

      const metadeMenuLi = Math.ceil(menu.length / 2);

      const menuNivelUm = document.createElement("ul");
      menuNivelUm.setAttribute("class", "nivel-um");

      for (let i = 0; i < metadeMenuLi; i++) {
        menuNivelUm.appendChild(menu[i]);
      }

      document.querySelector(".menu.superior > ul").before(menuNivelUm);
    }
  } catch (error) {
    console.log(`Erro encontrado -> ${error}`);
  }
});
