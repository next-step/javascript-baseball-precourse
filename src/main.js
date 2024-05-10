import { generateNumber } from './modules/generateNumber.js';
import { validateInput } from './modules/validateInput.js';

const playerInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const gameOverSection = document.getElementById('game-over-section');
const restartBtn = document.getElementById('restart-btn');
const quitBtn = document.getElementById('quit-btn');

submitBtn.addEventListener('click', displayResult);
restartBtn.addEventListener('click', restartGame);
quitBtn.addEventListener('click', quitGame);

let answer = generateNumber();

function displayResult() {
    const inputValue = playerInput.value;
    if (!validateInput(inputValue)) {
        return;
    }

    let strikes = 0;
    let balls = 0;
    for (let i = 0; i < 3; i++) {
        const input = parseInt(inputValue[i]);
        if (input === parseInt(answer[i])) {
            strikes++;
        } else if (answer.includes(input.toString())) {
            balls++;
        }
    }

    if (strikes === 3) {
        resultEl.innerText = '🎉정답을 맞추셨습니다🎉';
        gameOverSection.style.display = 'block';
        restartBtn.style.display = 'inline';
        quitBtn.style.display = 'inline';
        submitBtn.disabled = true;
        playerInput.disabled = false;
    } else if (strikes === 0 && balls === 0) {
        resultEl.innerText = '낫싱';
    } else {
        resultEl.innerText = `${balls}볼 ${strikes}스트라이크`;
    }
}

function restartGame() {
    answer = generateNumber();
    gameOverSection.style.display = 'none';
    resultEl.innerText = '';
    playerInput.value = '';
    playerInput.disabled = false;
    submitBtn.disabled = false;
}

function quitGame() {
    gameOverSection.style.display = 'none';
    resultEl.innerText = '게임이 종료되었습니다.';
    playerInput.disabled = true;
    submitBtn.disabled = true;
    restartBtn.style.display = 'none';
    quitBtn.style.display = 'none';
}