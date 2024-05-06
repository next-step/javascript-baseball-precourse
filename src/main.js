// 사용자가 잘못된 값을 입력할 경우 에러메세지를 출력하는 함수
function validateInput(input) {
  if (input.length !== 3) return false;
  const numbers = input.split("").map(Number);
  return numbers.every((num, index) => {
    return !isNaN(num) && num >= 1 && num <= 9 && numbers.indexOf(num) === index;
  });
}

let secretNumber;  // 비밀숫자

//비밀 숫자 생성함수
function generateSecretNumber() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let secret = [];
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * numbers.length);
    secret.push(numbers[index]);
    numbers.splice(index, 1);
  }
  return secret;
}

// 사용자의 추측 함수
function checkGuess() {
    const guessInput = document.getElementById("guessInput").value;
    if (!validateInput(guessInput)) {
      alert("1부터 9까지 서로 다른 수로 이루어진 3자리의 수를 입력하세요.");
      return;
    }
  
    const guess = guessInput.split("").map(Number);
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 3; i++) {
      if (guess[i] === secretNumber[i]) {
        strike++;
      } else if (secretNumber.includes(guess[i])) {
        ball++;
      }
    }
  
    const output = document.getElementById("output");
    if (strike === 3) {
      output.textContent = "\u{1F389}정답을 맞추셨습니다!\u{1F389}";
      document.getElementById("restartButton").style.display = "block";
    } else if (strike === 0 && ball === 0) {
      output.textContent = "낫싱";
    } else {
      output.textContent = `${ball}볼 ${strike}스트라이크`;
    }
  }
  
  
// 게임 재시작 함수
function restartGame() {
    secretNumber = generateSecretNumber();
    document.getElementById("output").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("restartButton").style.display = "none";
  }
  
  document.getElementById("guessButton").addEventListener("click", checkGuess);
  document.getElementById("restartButton").addEventListener("click", restartGame);
  
  secretNumber = generateSecretNumber(); // 게임 시작 시 비밀 숫자 생성