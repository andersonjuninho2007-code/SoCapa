alert("vose foe haqueador. Sobrou nada ne but");
const video = document.getElementById('playerElGato');

if (video) {
    // Tira o mudo automaticamente assim que o usuário clica no play
    video.addEventListener('play', () => {
        video.muted = false;
        video.volume = 1.0;
        console.log("O vídeo do El Gato começou a tocar com som!");
    });
}