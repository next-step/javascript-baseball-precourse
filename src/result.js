// 결과 계산 및 출력 함수
export default function result(userInput, targetNumber, restartCallback) {
  const { strike, ball } = calculateStrikesAndBalls(userInput, targetNumber);

  const resultEl = document.getElementById("result");
  if (strike === 3) {
    displaySuccessMessage(resultEl, restartCallback);
  } else {
    displayResultMessage(resultEl, strike, ball);
  }
}

// 스트라이크와 볼 수를 계산하는 보조 함수
function calculateStrikesAndBalls(userInput, targetNumber) {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (userInput[i] === targetNumber[i]) {
      strike++;
    } else if (targetNumber.includes(userInput[i])) {
      ball++;
    }
  }

  return { strike, ball };
}

// 성공 메시지를 출력하고 재시작 이벤트를 설정하는 함수
function displaySuccessMessage(resultEl, restartCallback) {
  resultEl.innerHTML = `
      <span class="material-symbols-outlined celebration">celebration</span> 정답을 맞추셨습니다!
      <span class="material-symbols-outlined celebration">celebration</span>
      <p>게임을 새로 시작하시겠습니까?</p>
      <button class="btn-re" id="restart">게임 재시작</button>`;

  document.getElementById("restart").addEventListener("click", restartCallback);
}

// 결과 메시지를 출력하는 함수
function displayResultMessage(resultEl, strike, ball) {
  resultEl.innerHTML = `<span class="material-symbols-outlined description">description</span> 결과: ${strike} 스트라이크, ${ball} 볼`;
}
