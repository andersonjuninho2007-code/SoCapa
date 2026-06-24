alert("vose foe haqueador. Sobrou nada ne but");
// 1. Seleciona o elemento de vídeo e o botão
const video = document.getElementById('playerElGato');
const botton = document.getElementById('btnMostrarVideo');
if (botton && video) {
    botton.addEventListener('click', () => {
        // 2. Esconde o botão para não ficar poluindo a tela
        botton.style.display = 'none';
        
        // 3. Mostra o player de vídeo na tela
        video.style.display = 'block';
        
        // 4. Garante que o som está ativo e inicia o vídeo
        video.muted = false;
        video.volume = 1.0;
        video.play();
        
        console.log("O botão foi clicado, o vídeo apareceu e o som foi liberado!");
    });
}