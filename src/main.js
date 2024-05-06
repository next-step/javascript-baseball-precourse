// 컴퓨터 랜덤 숫자 선택 ----------------------------------------------------------------------------------
// 전역 변수로 선택된 숫자를 저장
let computerNumbers = [];

function generateRandomNumbers() {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chosenDigits = [];

  while (chosenDigits.length < 3) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    const digit = digits.splice(randomIndex, 1)[0];
    chosenDigits.push(digit);
  }

  return chosenDigits;
}

function startGame() {
  computerNumbers = generateRandomNumbers(); // 게임 시작 시 숫자 생성
  console.log("게임이 시작되었습니다. 컴퓨터가 선택한 숫자: ", computerNumbers);
}

// 게임 시작
startGame();

// 사용자 숫자 입력 ----------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".checkInput"); // 클래스 선택자로 버튼 선택
  button.addEventListener("click", checkInput);
});

function displayResult(message) {
  const resultElement = document.querySelector(".displayResult");
  resultElement.textContent = message;
}

function checkInput() {
  const inputField = document.getElementById("inputNumber");
  const inputValue = inputField.value;

  if (isValidInput(inputValue)) {
    const result = compareNumbers(computerNumbers, inputValue);

    if (result.strikes == 0 && result.balls == 0) {
      displayResult("닛싱");
    } else {
      displayResult(`${result.strikes} 스트라이크, ${result.balls} 볼`);
    }
    if (result.strikes === 3) {
      displayResult("축하합니다! 모든 숫자를 맞췄습니다.");
    }
  } else {
    alert(
      "잘못된 입력입니다. 1부터 9까지 서로 다른 숫자 세 개를 입력해주세요."
    );
  }
}

function isValidInput(input) {
  const uniqueDigits = new Set(input);
  // 입력이 세 자리 숫자이고, 모든 자릿수가 1-9 사이이며, 중복된 숫자가 없어야 함
  return (
    input.length === 3 &&
    [...uniqueDigits].every((digit) => digit >= "1" && digit <= "9") &&
    uniqueDigits.size === 3
  );
}

// 숫자 비교 ----------------------------------------------------------------------------------
function compareNumbers(computerNumbers, userInput) {
  let strikes = 0;
  let balls = 0;
  for (let i = 0; i < 3; i++) {
    if (computerNumbers[i] === Number(userInput[i])) {
      strikes++;
    } else if (computerNumbers.includes(Number(userInput[i]))) {
      balls++;
    }
  }
  return { strikes, balls };
}
