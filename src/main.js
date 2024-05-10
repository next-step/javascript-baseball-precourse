const playerInput = document.getElementById('userInput');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const gameOverSection = document.getElementById('game-over-section');
const restartBtn = document.getElementById('restart-btn');

submitBtn.addEventListener('click', displayResult);
restartBtn.addEventListener('click', restartGame);

let answer = generateNumber();

function generateNumber() {
    let numbers = '';
    while (numbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers += randomNumber;
        }
    }
    return numbers;
}

function validateInput(inputValue) {
    if (inputValue.length !== 3 || !/^[1-9]{3}$/.test(inputValue) || new Set(inputValue).size !== 3) {
        alert('중복되지 않은 1~9까지의 숫자 3개를 입력하세요.');
        return false;
    }
    return true;
}

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
        submitBtn.disabled = true;
        playerInput.disabled = true;
    } else if (strikes === 0 && balls === 0) {
        resultEl.innerText = '낫싱';
    } else {
        resultEl.innerText = `${balls}볼 ${strikes}스트라이크`;
    }
}

function restartGame() {
    answer = generateNumber();
    gameOverSection.style.display = 'none';
    restartBtn.style.display = 'none';
    resultEl.innerText = '';
    playerInput.value = '';
    playerInput.disabled = false;
    submitBtn.disabled = false;
}