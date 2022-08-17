// Esconde o site até que carrege totalmente

window.addEventListener('load', () => {
    'strict'
    const corpo = document.querySelector("body");
    corpo.classList.add("mostrar-pagina");
});
