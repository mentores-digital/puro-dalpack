const criarModalFaleConosco = () => {
    // 1 conteiner
    const conteiner = document.createElement("div");
    conteiner.id = "fale-conosco-div";
    // 2 form conteiner
    const formConteiner = document.createElement("div");
    formConteiner.id = "form-conteiner";
    // 3 h2 fale conosco
    const h2FaleConosco = document.createElement("h2");
    h2FaleConosco.innerHTML = "Fale Conosco";
    const subtituloFaleConosco = document.createElement("p");
    subtituloFaleConosco.textContent = "Por favor, preencha os dados abaixo."
    // 3 label nome
    const labelNome = document.createElement("p");
    labelNome.textContent = "Nome";
    // 3 input nome
    const inputNome = document.createElement("input");
}