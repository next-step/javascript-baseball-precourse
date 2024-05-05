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
        console.log("score", score)
    } else {
        alert("잘못된 값이 입력되었어요. 다시 입력해주세요.");
    }
});

// console.log(checkNumbers(guessNum))