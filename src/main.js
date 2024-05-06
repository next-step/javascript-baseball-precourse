import generateRandomNumber from './randNumber.js';
import checkNumber from './checkNumber.js';
import result from './result.js';
import restartGame from './restart.js';

// 정답 랜덤 수 생성
let resultNum = generateRandomNumber(false);

document.getElementById("check-button").addEventListener("click", function () {
      // 사용자의 입력을 가져옴
      const userInput = document.getElementById("user-input").value;
      if (checkNumber(userInput)) {
            // 입력된 수가 조건에 맞으면 결과 출력
            result(userInput, resultNum);
      } else {
            // 입력된 수가 조건에 맞지 않으면 결과 초기화
            document.getElementById("result-message").textContent = "";
      }
});

document.getElementById("restart-button").addEventListener("click", function () {
      // 게임 재시작
      resultNum = restartGame();
});