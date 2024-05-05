import {
  createRandomNumbers,
  getPlayerNumbers,
  compareNumbers,
} from "./modules/handleNumbers";

import { restartGame, endGame } from "./modules/handleGame";

const computerNumbers = createRandomNumbers();
//결과 출력
function showGameResult(gameResult) {
  document.querySelector(".result-container").style.display = "block";
  const inner = document.querySelector(".result-inner");

  if (gameResult === "낫싱") {
    inner.innerHTML = "<p>💦낫싱o(TヘTo)💦</p>";
  } else if (gameResult.strike === 3) {
    inner.innerHTML = "<h3>🎉정답을 맞추셨습니다(❁´◡`❁)🎉</h3>";
  } else {
    inner.innerHTML = `<h3>💥스트라이크: ${gameResult.strike}, 볼: ${gameResult.ball}💥</h3>`;
  }

  const restartButton = document.getElementById("restartGameBtn");
  const endButton = document.getElementById("endGameBtn");
  if (gameResult.strike === 3) {
    restartButton.style.display = "block";
    endButton.style.display = "block";
  } else {
    restartButton.style.display = "none";
    endButton.style.display = "none";
  }
}

//게임 실행
function goGame(event) {
  //컴퓨터 수(랜덤 넘버) 저장
  event.preventDefault(); //컴퓨터 숫자 재생성 막기 위한 새로고침 방지
  const playerNumbers = getPlayerNumbers();
  if (playerNumbers === null) return;
  console.log(playerNumbers);
  console.log(computerNumbers);
  const gameResult = compareNumbers(playerNumbers, computerNumbers);
  showGameResult(gameResult);
}

//게임 시작하기 버튼 누르면 게임 시작 이벤트 발생
document.getElementById("startGameBtn").addEventListener("click", function () {
  document.getElementById("startGameBtn").style.display = "none";
  document.getElementById("gameForm").style.display = "block";
  document.getElementById("goToMain").style.display = "block";
});
//확인 버튼을 누르면 goGame! 게임이 시작됨.
document.getElementById("gameForm").addEventListener("submit", goGame);

//처음 화면으로 돌아가는 이벤트 추가
document.getElementById("goToMain").addEventListener("click", restartGame);
document
  .getElementById("restartGameBtn")
  .addEventListener("click", restartGame);
document.getElementById("endGameBtn").addEventListener("click", endGame);
