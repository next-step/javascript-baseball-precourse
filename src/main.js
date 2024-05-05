// 입력값 배열 처리
function processInput(input) {
  return input.split('').map(Number);
}

// 입력값 유효성 체크
function checkInput(input) {
  if (input.length !== 3) {
    return false;
  }
  const unums = new Set(input);
  return unums.size === 3;
}

// 랜덤 숫자 생성
function generateNumber() {
  const numbers = [];
  while (numbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}

// 스트라이크와 볼을 계산
function strikeBall(answerNumber, userInput) {
  let strikes = 0;
  let balls = 0;
  for (let i = 0; i < 3; i++) {
    if (answerNumber[i] === userInput[i]) {
      strikes++;
    } else if (answerNumber.includes(userInput[i])) {
      balls++;
    }
  }
  return { strikes, balls };
}

// 결과 출력
function displayResult(result) {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = result;
}

// 재시작을 묻는 함수
function displayRetry(comment) {
  const retryDiv = document.getElementById('retry');
  retryDiv.textContent = comment;
}

// 게임 재시작 함수
function restartGame() {
  document.getElementById('userInput').value = '';
  document.getElementById('result').textContent = '';
  document.getElementById('retry').textContent = '';
  document.getElementById('retryBtn').style.display = 'none';
  document.getElementById('checkBtn').disabled = false; // 확인 버튼 활성화 추가
}

