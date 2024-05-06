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
