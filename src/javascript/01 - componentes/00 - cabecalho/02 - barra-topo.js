// REMOVEA STICKY BAR DO TOPO QUANDO SCROLL DOWN
window.addEventListener('load', () => {
    'strict'
    try {
        // Limpa barra topo
        removerTudo("#barraTopo");
    } catch (error) {
        console.log(`Erro encontrado -> ${error}`);
    }
});