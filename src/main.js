import generateRandomNumber from "./functions/generateRandomNumber.js";
import handleInput from "./functions/handleInput.js";

// 시작
window.onload = function () {
  let randomNumber = generateRandomNumber();
  console.log("random number: ", randomNumber);
  let strikes = 0;
  let balls = 0;

  const inputButton = document.getElementById("inputbutton");
  const userInput = document.getElementById("userinput");
  const hintElement = document.getElementById("hint");
  const correctResultEl = document.getElementById("correct");
  const incorrectResultEl = document.getElementById("incorrect");
  correctResultEl.style.display = "none";
  incorrectResultEl.style.display = "none";

  const handleInputEvent = function () {
    ({ strikes, balls } = handleInput(randomNumber, userInput));
    // console.log(strikes, ", ", balls);

    if (strikes === 3) {
      correctResultEl.style.display = "block";
      incorrectResultEl.style.display = "none";
    } else if (strikes === 0 && balls === 0) {
      correctResultEl.style.display = "none";
      incorrectResultEl.style.display = "block";
      hintElement.textContent = "낫싱";
    } else {
      correctResultEl.style.display = "none";
      incorrectResultEl.style.display = "block";
      hintElement.textContent = `${balls}볼 ${strikes}스트라이크`;
    }
  };

  // 사용자 인풋 입력 시
  inputButton.addEventListener("click", handleInputEvent);
  userInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleInputEvent();
    }
  });

  // 게임 재시작
  document.getElementById("restartbutton").addEventListener("click", function () {
    correctResultEl.style.display = "none";
    incorrectResultEl.style.display = "none";
    userInput.value = "";
    randomNumber = generateRandomNumber();
    console.log(randomNumber);
    userInput.focus(); // 입력 필드에 포커스 설정
  });
};
