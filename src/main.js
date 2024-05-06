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

function restartGame() {
  computerNumbers = generateRandomNumbers(); // 게임 재시작 시 숫자 재생성
  console.log(
    "게임이 재시작되었습니다. 컴퓨터가 선택한 숫자: ",
    computerNumbers
  );
}

// 게임 시작
startGame();

// 필요한 경우 게임 재시작
// restartGame();

// 사용자 숫자 입력 ----------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".checkInput"); // 클래스 선택자
  button.addEventListener("click", checkInput);
});

function checkInput() {
  const inputField = document.getElementById("inputNumber");
  const inputValue = inputField.value;

  // 입력 값 검증
  if (isValidInput(inputValue)) {
    console.log("입력한 숫자: ", inputValue);
  } else {
    alert("1 ~ 9까지의 수를 중복없이 3개 입력해주세요.");
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
