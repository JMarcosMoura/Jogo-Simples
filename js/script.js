const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameMenu = document.querySelector('.game-menu');
const continuarButton = document.querySelector('.continuar');
const scoreElement = document.getElementById('score'); // Seleciona o elemento de pontuação em tempo real
const finalScoreElement = document.getElementById('final-score'); // Seleciona o elemento de pontuação na tela de game over

let score = 0; // Inicializa o contador de pontuação
let hasPassedPipe = false; // Flag para verificar se o Mario já passou pelo cano

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Lógica de game over
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);

        // Mostra o menu de game over e atualiza a pontuação final
        gameMenu.style.display = 'block';
        finalScoreElement.textContent = score;
    }

    // Verifica se o Mario passou com sucesso o cano e não incrementou a pontuação ainda
    if (pipePosition < 0 && !hasPassedPipe) {
        // Incrementa a pontuação
        score++;
        scoreElement.textContent = score;
        hasPassedPipe = true;
    }

    // Reseta o flag quando o pipe sai da tela (para o próximo cano)
    if (pipePosition >= 120) {
        hasPassedPipe = false;
    }

}, 10);

document.addEventListener('keydown', jump);

// Adiciona o evento de clique para recarregar a página
continuarButton.addEventListener('click', () => {
    location.reload();
});
