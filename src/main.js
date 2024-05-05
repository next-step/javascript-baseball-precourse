import { setAnswer } from "./initialGame.js";
import { checkNumbers } from "./validCheck.js";

let answer = []
playGame()

function playGame() {
    answer = setAnswer()
    console.log(answer)
}

// 확인 버튼
const sendBtn = document.querySelector('.send-btn')
sendBtn.addEventListener('click', () => {
    let guessNum = document.querySelector('.input-box').value.split('').map(Number)
    console.log("inputValue", guessNum)
    console.log("answer", answer)

    let valid = checkNumbers(guessNum)
    console.log("valid", valid)
    if (valid === true) {
    } else {
        alert("잘못된 값이 입력되었어요. 다시 입력해주세요.");
    }
});

// console.log(checkNumbers(guessNum))