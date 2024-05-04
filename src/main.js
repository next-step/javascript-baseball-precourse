let answer = generateRandomNumber(); // 컴퓨터가 생성한 정답
console.log('컴퓨터가 생각한 숫자:', answer);

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
    
    // 정답을 맞춘 경우 처리
    if (typeof result === 'string') {
      let newResultElement = document.createElement('p');
      newResultElement.textContent = result;
      resultElement.appendChild(newResultElement);
    } else {
      // 이전 결과를 지우지 않고 새로운 결과를 추가함
      let newResultElement = document.createElement('p');
      newResultElement.textContent = `${userInput} - ${result.strikes}스트라이크 ${result.balls}볼`;
      resultElement.appendChild(newResultElement);
    }
}
  

// 버튼 클릭 이벤트 연결
document.getElementById('submitBtn').addEventListener('click', submitGuess);
