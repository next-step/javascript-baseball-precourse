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

// 게임 초기화 함수
function newGame() {
  const answerNumber = generateNumber();
  const checkBtn = document.getElementById('checkBtn');
  const retryBtn = document.getElementById('retryBtn');

  function checkTheClick() {
    const userInput = document.getElementById('userInput').value;
    const processedInput = processInput(userInput);
    if (!checkInput(processedInput)) {
      alert('올바른 숫자를 입력하세요.');
      return;
    }
    const score = strikeBall(answerNumber, processedInput);
    if (score.strikes === 3) {
      displayResult('🎉정답을 맞추셨습니다!🎉');
      displayRetry('게임을 새로 시작하시겠습니까?');
      retryBtn.style.display = 'block';
      checkBtn.disabled = true;
    } else if (score.strikes === 0 && score.balls ===0) {
      displayResult(`낫싱`);
    }
    else {
      displayResult(`${score.balls}볼 ${score.strikes}스트라이크`);
    }
  }

  function checkRetryClick() {
    restartGame();
    newGame();
  }

  checkBtn.addEventListener('click', checkTheClick);
  retryBtn.addEventListener('click', checkRetryClick);
}

// 게임 초기화
newGame();
