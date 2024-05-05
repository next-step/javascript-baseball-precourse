import { setAnswer } from "./initialGame.js";
import { checkNumbers } from "./validCheck.js";
import { calculateStrikeBall } from "./calculateScore.js";

let answer = []
playGame()

function playGame() {
    answer = setAnswer()
}

const sendBtn = document.querySelector('.send-btn')
sendBtn.addEventListener('click', () => {
    let guessNum = document.querySelector('.input-box').value.split('').map(Number)

    let valid = checkNumbers(guessNum)
    if (valid === true) {
        let score = calculateStrikeBall(guessNum, answer)
        printResult(score)
    } else {
        alert("잘못된 값이 입력되었어요. 다시 입력해주세요.")
    }
});

// console.log(checkNumbers(guessNum))

function printResult(score) {
    let result = ''
    let strike = score.strike
    let ball = score.ball
    if (strike + ball === 0) {
        result = '낫싱';
    } else if (ball > 0) {
        result += `${ball}볼 `
    }
    if (strike > 0){
        if (strike === 3) {
            result = "🎉정답을 맞추셨습니다🎉"
            endOfGame()
        } else {
            result += `${strike}스트라이크`
        }
    }
    document.querySelector('.score').innerText = result // 결과 표시
}

function endOfGame() {
    const restartMsg = document.createElement('p')
    restartMsg.innerText = "게임을 새로 시작하시겠습니까?"
    const restartBtn = document.createElement('button')
    restartBtn.textContent = '게임 재시작'
    const endBtn = document.createElement('button')
    endBtn.textContent = '게임 종료'

    document.querySelector('.result-field').appendChild(restartMsg);
    document.querySelector('.result-field').appendChild(restartBtn);
    document.querySelector('.result-field').appendChild(endBtn);

    restartBtn.addEventListener('click', function() {
        document.querySelector('.score').innerText = ''
        document.querySelector('.result-field').removeChild(restartMsg);
        document.querySelector('.result-field').removeChild(restartBtn);
        document.querySelector('.result-field').removeChild(endBtn);
        document.querySelector('.input-box').value = ''
        playGame();
    })
    endBtn.addEventListener('click', function() {
        document.querySelector('.result-field').remove()
        document.querySelector('.input-field').remove()
        document.querySelector('.manual').innerText = '게임이 종료되었습니다.'
    })
};