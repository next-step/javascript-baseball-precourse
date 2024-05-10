import setNumber from "./setNumber.js"
import checkInput from "./checkInput.js"
import {makeHint, markAnswer} from "./gameProgress.js"

let number = setNumber();

const checkBtn = document.getElementById("check-btn")
const restart = document.querySelector(".restart")
const restartBtn = document.getElementById("restart-btn")
const resultPrint = document.querySelector(".result-print")
const exitBtn = document.getElementById("exit-btn")
const answerInput = document.getElementById("answer")
let answer = ""

answerInput.addEventListener("input", function () {
    if(!checkInput(answerInput.value)) {
        alert("1~9까지의 수를 중복없이 3개 입력해주세요.")
        answerInput.value = answer
    }
    else {
        answer = answerInput.value
    }
})

checkBtn.addEventListener("click", function () {
    resultPrint.style.display = "block"
    const result = document.getElementById("result")

    if(markAnswer(answer, number)) {
        result.textContent = "🎉정답을 맞추셨습니다🎉"
        restart.style.display = "block"
    }
    else {
        result.textContent = makeHint()
    }
});

restartBtn.addEventListener("click", function () {
    restart.style.display = "none"
    resultPrint.style.display = "none"
    document.getElementById("answer").value = ""
    number = setNumber()
});

exitBtn.addEventListener("click", function () {
    console.log("exit")
    window.close()
});