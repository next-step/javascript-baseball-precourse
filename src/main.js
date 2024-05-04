import { generateNumber, isValidInput, computeStrikeAndBall } from './utils.js';

const inputEl = document.getElementById('user-input');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const gameOverSection = document.getElementById('game-over-section');
const restartBtn = document.getElementById('restart');
const quitBtn = document.getElementById('quit');

let answer = generateNumber();

submitBtn.addEventListener('click', getUserInput);
restartBtn.addEventListener('click', restartGame);
quitBtn.addEventListener('click', quitGame);

function getUserInput() {
    const inputValue = inputEl.value;
    if (isValidInput(inputValue)) {
        const { strike, ball } = computeStrikeAndBall(inputValue, answer);
        printResult(strike, ball);
    }
}

function printResult(strike, ball) {
    if (strike  === 3) {
        resultEl.innerText = "🎉정답을 맞추셨습니다🎉";
        gameOverSection.style.display = "block";
    }
    else if (strike === 0 && ball !== 0) {
        resultEl.innerText = `${ball}볼`;
    }
    else if (strike !== 0 && ball === 0) {
        resultEl.innerText = `${strike}스트라이크`;
    }
    else if (strike === 0 && ball === 0) {
        resultEl.innerText = "낫싱";
    }
    else {
        resultEl.innerText = `${ball}볼 ${strike}스트라이크`;
    }
}

function restartGame() {
    answer = generateNumber(); 
    gameOverSection.style.display = "none"; 
    resultEl.innerText = ""; 
    inputEl.value = "";
}

function quitGame() {
    gameOverSection.style.display = "none";
    resultEl.innerText = "게임이 종료되었습니다."; 
    inputEl.style.display = "none"; 
    submitBtn.style.display = "none"; 
}

