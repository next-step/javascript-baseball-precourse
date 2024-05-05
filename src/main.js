import generateRandomNumber from "./generateRandomNumber";
import {calculateBalls as calBalls,calculateStrikes as calStrikes,} from "./calculateResult";
import isValidInput from "./invalidCheck";

document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("userInput");
  const checkBtn = document.getElementById("checkBtn");
  const resultMessage = document.getElementById("resultMessage");
  const restartSection = document.getElementById("restartSection");
  const restartBtn = document.getElementById("restartBtn");
  let targetNumber = generateRandomNumber();

  checkBtn.addEventListener("click", function () {
    const input = userInput.value.trim();
    if (!isValidInput(input)) {
      alert(
        "잘못된 입력입니다. 1부터 9까지 서로 다른 3자리 숫자를 입력하세요."
      );
      return;
    }

    const strikes = calStrikes(input, targetNumber);
    const balls = calBalls(input, targetNumber);

    if (strikes === 3) {
      resultMessage.innerText = "🎉 정답을 맞추셨습니다! 🎉";
      restartSection.style.display = "block";
    } else if (strikes === 0 && balls === 0) {
      // 낫싱
      resultMessage.innerText = "낫싱";
      restartSection.style.display = "none";
    } else {
      resultMessage.innerText = `${balls}볼 ${strikes}스트라이크`;
      restartSection.style.display = "none";
    }
  });

  restartBtn.addEventListener("click", function () {
    targetNumber = generateRandomNumber();
    userInput.value = "";
    resultMessage.innerText = "";
    restartSection.style.display = "none";
  });
});
