const inputEl = document.getElementById('user-input')
const submitBtn = document.getElementById('submit')
const resultEl = document.getElementById('result')
const gameOverSection = document.getElementById('game-over-section')
const restartBtn = document.getElementById('restart');
const quitBtn = document.getElementById('quit');

let answer = generateNumber()

submitBtn.addEventListener('click', getUserInput)
restartBtn.addEventListener('click', restartGame)
quitBtn.addEventListener('click', quitGame)

function generateNumber() {
    let answer = ''
    while (answer.length < 3) {
        const randomNumber = Math.floor(Math.random() * 9) + 1
        if (!answer.includes(randomNumber)) {
            answer += randomNumber
        }
    }
    return answer
}

function getUserInput() {
    let inputValue = inputEl.value
    if (!isValidInput(inputValue)) {
        return;
    }
    checkStrikeAndBall(inputValue)
}

function isValidInput(inputValue) {
    if (inputValue.length !== 3) {
        alert("세 자리 수를 입력해야 합니다.");
        return false;
    }
    if (!/^[1-9]{3}$/.test(inputValue)) {
        alert("1부터 9까지의 숫자 세 개를 입력해야 합니다.");
        return false;
    }
    if (new Set(inputValue).size !== 3) {  
        alert("각 숫자는 중복되지 않아야 합니다.");
        return false;
    }
    return true;
}

function checkStrikeAndBall(inputValue) {
    let userNumber = inputValue
    let computerNumber = answer
    let strike = 0
    let ball = 0

    for (let i = 0; i < 3; i++) {
        if (userNumber[i] === computerNumber[i]) {
            strike += 1
        }
        else if (computerNumber.indexOf(userNumber[i]) !== -1) {
            ball += 1
        }
    }

    printResult(strike, ball)
    // console.log(userNumber)
    // console.log(computerNumber)
    // console.log("ball", ball)
    // console.log("strike", strike)
}

function printResult(strike, ball) {
    if (strike  === 3) {
        resultEl.innerText = "🎉정답을 맞추셨습니다🎉"
        gameOverSection.style.display = "block"
    }
    else if (strike === 0 && ball !== 0) {
        resultEl.innerText = `${ball}볼`
    }
    else if (strike !== 0 && ball === 0) {
        resultEl.innerText = `${strike}스트라이크`
    }
    else if (strike === 0 && ball === 0) {
        resultEl.innerText = "낫싱"
    }
    else {
        resultEl.innerText = `${ball}볼 ${strike}스트라이크`
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

