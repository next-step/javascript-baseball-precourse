import { generateRandomNumber, validateInput, calculateMatchingNumbersAndPositions } from '../domain-baseball.js';

const TARGET_LENGTH = 3;
let targetNumber = generateRandomNumber();

// DOM 요소 가져오기
const numberInputForm = document.querySelector('#numberInputForm');
const numberInput = document.querySelector('#numberInput');
const resultDiv = document.querySelector('#result');
const restartForm = document.querySelector('#restartForm');

// 결과 표시 함수
function displayResult(resultMessage) {
  resultDiv.innerHTML = `<p class="result-message">${resultMessage}</p>`;
}

// 정답 맞추기 체크
function checkAnswer(event) {
  event.preventDefault();
  const userInput = numberInput.value.trim();

  try {
    validateInput(userInput);
    const [matchingNumbers, matchingPositions] = calculateMatchingNumbersAndPositions(targetNumber, userInput);

    if (matchingPositions === TARGET_LENGTH) {
      displayResult('🎉정답을 맞추셨습니다🎉');
      restartForm.style.display = 'block';
    } else {
      displayResult(`${matchingPositions} 스트라이크, ${matchingNumbers} 볼`);
    }
  } catch (error) {
    displayResult(`<span class="error">❌ ${error.message}</span>`);
  }

  numberInput.value = '';
}

// 게임 재시작
function restartGame(event) {
  event.preventDefault();
  targetNumber = generateRandomNumber();
  resultDiv.innerHTML = '';
  restartForm.style.display = 'none';
  numberInput.focus();
}

// 이벤트 리스너 추가
numberInputForm.addEventListener('submit', checkAnswer);
restartForm.addEventListener('submit', restartGame);
