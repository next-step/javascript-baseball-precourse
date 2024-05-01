let answer = [];
let userInput = "";
let result = "";

// 컴퓨터가 1~9 중에서 3개의 숫자를 랜덤으로 선택하는 함수
const generateAnswer = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  answer.length = 0;
  for (let i = 0; i < 3; i += 1) {
    const index = Math.floor(Math.random() * numbers.length);
    answer.push(numbers[index]);
    numbers.splice(index, 1);
  }
};

// 사용자의 입력을 처리하는 함수
const handleInput = (event) => {
  event.preventDefault();
  const input = document.getElementById("userInput");
  userInput = input.value;
  const uniqueDigits = new Set(userInput.split(""));
  if (uniqueDigits.size !== 3) {
    alert("중복된 숫자를 입력하셨습니다. 다시 입력해주세요.");
    input.value = "";
    return;
  }
  checkAnswer();
};

// 사용자의 입력과 컴퓨터의 답을 비교하는 함수
const checkAnswer = () => {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i += 1) {
    if (answer[i] === Number(userInput[i])) {
      strike += 1;
    } else if (answer.includes(Number(userInput[i]))) {
      ball += 1;
    }
  }
  if (strike === 3) {
    result = "🎉정답을 맞추셨습니다🎉";
    displayResult();
    showRestartMessage();
    showRestartButton();
  } else if (strike > 0 || ball > 0) {
    result = `${strike} 스트라이크, ${ball} 볼`;
    displayResult();
  } else {
    result = "낫싱";
    displayResult();
  }
};

// 결과를 화면에 표시하는 함수
function displayResult() {
  const display = document.getElementById("resultDisplay");
  display.textContent = result;
}

// 재시작 버튼을 표시하는 함수
function showRestartMessage() {
  const restartDisplay = document.getElementById("restartDisplay");
  restartDisplay.style.display = "block";
}

// 재시작 버튼을 표시하는 함수
function showRestartButton() {
  const button = document.getElementById("restartButton");
  button.style.display = "block";
}

// 재시작 버튼을 눌렀을 때의 처리
function restartGame() {
  generateAnswer();
  document.getElementById("userInput").value = "";
  document.getElementById("resultDisplay").textContent = "";
  document.getElementById("restartButton").style.display = "none";
  document.getElementById("restartDisplay").style.display = "none";
}

// 초기 설정
generateAnswer();
document.querySelector("form").addEventListener("submit", handleInput);
document.getElementById("restartButton").addEventListener("click", restartGame);
