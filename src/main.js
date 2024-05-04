let answer = generateRandomNumber(); // 컴퓨터가 생성한 정답

// 1~9까지 서로 다른 임의의 3자리 수 생성
function generateRandomNumber() {
  let numbers = [];
  while (numbers.length < 3) {
    let randomNum = Math.floor(Math.random() * 9) + 1;
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers.join('');
}


// 사용자 입력 유효성 검사
function isValidInput(input) {
    if (input.length !== 3) return false;
    if (!/^[1-9]{3}$/.test(input)) return false;
    if (new Set(input).size !== 3) return false;
    return true;
}


function submitGuess() {
    let userInput = document.querySelector('.userInput').value;
    if (!isValidInput(userInput)) {
      alert('1부터 9까지 서로 다른 숫자 3개를 중복 없이 입력해주세요.');
      return;
    }
  
    let result = calculateResult(userInput);
    displayResult(userInput, result);
}


// 결과 계산
function calculateResult(input) {
  let strikes = 0;
  let balls = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === answer[i]) {
      strikes++;
    } else if (answer.includes(input[i])) {
      balls++;
    }
  }

  if (strikes === 3) return '🎉 정답을 맞추셨습니다! 🎉'; // 정답을 맞춘 경우
  return { strikes: strikes, balls: balls };
}


// 결과 화면에 표시
function displayResult(userInput, result) {
    let resultElement = document.querySelector('.result');
    // 이전 결과를 지우지 않고 새로운 결과를 추가함
    let newResultElement = document.createElement('p');
    
    if (typeof result === 'string') {
        // 정답을 맞춘 경우
        newResultElement.textContent = result;
    } else {
        // 정답을 맞추지 못한 경우
        newResultElement.textContent = `${userInput} - ${result.strikes}스트라이크 ${result.balls}볼`;
    }

    resultElement.appendChild(newResultElement);

    // 정답을 맞춘 경우 다시 시작 옵션 표시
    if (typeof result === 'string') {
        let restartElement = document.querySelector('.restart');
        restartElement.style.display = 'block';
    }
}
  

// 버튼 클릭 이벤트 연결
document.getElementById('submitBtn').addEventListener('click', submitGuess);

// 게임 종료 시에만 재시작 영역 표시
function showRestartOption() {
    let restartElement = document.querySelector('.restart');
    restartElement.style.display = 'block';
  }
  
  // 게임 다시 시작 버튼 클릭 시 이벤트 핸들러
  document.getElementById('restartBtn').addEventListener('click', restartGame);
  
  // 게임 다시 시작 함수
  function restartGame() {
    // 결과 영역 초기화
    let resultElement = document.querySelector('.result');
    resultElement.innerHTML = '';
  
    // 사용자 입력란 초기화
    let userInputElement = document.querySelector('.userInput');
    userInputElement.value = '';
  
    // 컴퓨터가 새로운 정답 생성
    answer = generateRandomNumber();
  
    // 다시 시작 영역 숨김 처리
    let restartElement = document.querySelector('.restart');
    restartElement.style.display = 'none';
  }
  