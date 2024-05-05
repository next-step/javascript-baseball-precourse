import { setAnswer } from "./initialGame.js";
import { checkNumbers } from "./validCheck.js";
import { calculateStrikeBall } from "./calculateScore.js";

let answer = []
playGame()

function playGame() {
    answer = setAnswer()
    console.log(answer)
}

const sendBtn = document.querySelector('.send-btn')
sendBtn.addEventListener('click', () => {
    let guessNum = document.querySelector('.input-box').value.split('').map(Number)

    let valid = checkNumbers(guessNum)
    if (valid === true) {
        let score = calculateStrikeBall(guessNum, answer)
        printResult(score)
    } else {
        alert("잘못된 값이 입력되었어요. 다시 입력해주세요.");
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
            restart()
        } else {
            result += `${strike}스트라이크`
        }
    }
    console.log(result)
    document.querySelector('.score').innerText = result; // 결과 표시
}