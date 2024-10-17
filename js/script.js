const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameMenu = document.querySelector('.game-menu'); // Seleciona a div game-menu
const continuarButton = document.querySelector('.continuar'); // Seleciona o botão continuar

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

        // Mostra o menu de game over
        gameMenu.style.display = 'block';
    }
}, 10);

document.addEventListener('keydown', jump);

// Adiciona o evento de clique para recarregar a página
continuarButton.addEventListener('click', () => {
    location.reload();
});
