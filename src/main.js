import { createRandomNumbers } from "./createRandomNumbers";
import { validateUserNumbers } from "./validateUserNumbers";
import { getResult } from "./getResult";

let randomNumbers;
let userNumbers = "";

let userInputEl,
  submitBtnEl,
  resultContainerEl,
  resultTextEl,
  restartContainerEl,
  restartBtnEl;

function initializeGame() {
  randomNumbers = createRandomNumbers();

  userInputEl = document.querySelector("#number-input");
  submitBtnEl = document.querySelector("#number-submit");
  resultContainerEl = document.querySelector("#result-container");
  resultTextEl = document.querySelector("#result-text");
  restartContainerEl = document.querySelector("#restart-container");
  restartBtnEl = document.querySelector("#btn-restart");

  userInputEl.addEventListener("input", (event) => {
    userNumbers = event.target.value;
  });

  submitBtnEl.addEventListener("click", () => {
    if (!validateUserNumbers(userNumbers)) {
      alert(
        "잘못된 입력값입니다. 1에서 9까지의 중복되지 않는 세 자리 수를 입력하세요."
      );
      userInputEl.focus();
    } else {
      const { resultText, isCorrect } = getResult(randomNumbers, userNumbers);
      displayResult(resultText, isCorrect);
    }
  });

  restartBtnEl.addEventListener("click", restartGame);
}

function displayResult(resultText, isCorrect) {
  resultContainerEl.style.display = "block";
  resultTextEl.textContent = resultText;

  if (isCorrect) {
    restartContainerEl.style.display = "block";
  }
}

function restartGame() {
  location.reload();
}

initializeGame();
