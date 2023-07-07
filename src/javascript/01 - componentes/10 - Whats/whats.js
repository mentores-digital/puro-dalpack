window.addEventListener("load", () => {
  const footerZ = document.querySelector("#footer");
  const whats = document.createElement("a");
  whats.innerHTML = `<img src='https://cdn.awsli.com.br/2289/2289041/arquivos/Icon.svg' alt ="whats" />`;

  // const boxWhats = document.createElement("div");
  // boxWhats.classList.add("box-whats");

  // boxWhats.innerHTML = `<div class="content-whats">
  //     <ul>
  //         <li>
  //             <a href="https://api.whatsapp.com/send?phone=551147570111" target="_blank">
  //               SAC
  //             </a>
  //         </li>
  //         <li>
  //             <a href="https://api.whatsapp.com/send?phone=5511917899204" target="_blank">
  //               Comercial
  //             </a>
  //         </li>
  //         </ul>
  //     </div>`;

  // boxWhats.style.display = "none";

  // whats.addEventListener("click", function () {
  //   if (boxWhats.style.display === "none") {
  //     boxWhats.style.display = "block";
  //   } else {
  //     boxWhats.style.display = "none";
  //   }
  // });

  whats.href = "https://api.whatsapp.com/send?phone=5511917899204";
  whats.id = "whats";
  whats.target = "_blank";
  footerZ.append(whats);
  whats.after(boxWhats);
});
