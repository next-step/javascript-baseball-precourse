// 인풋 값과 랜덤 값 비교
import { user_input } from "./getUserInput.js";
import { answer } from "./randNumGen.js";
import { showRestartButton } from "./showHidden.js";
import { showStatus } from "./showGameStatus.js";

export let gameStatus = "";
export let input_num = "";

export const status = () => {
  input_num = `입력된 수는 ${user_input}입니다.`;
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i++) {
    if (answer[i] == user_input[i]) {
      strike += 1;
    }
    if (user_input.includes(answer[i]) && user_input[i] != answer[i]) {
      ball += 1;
    }
  }
  if (strike == 0 && ball == 0) {
    gameStatus = "낫싱";
    showStatus();
  } else if (strike == 3) {
    gameStatus = "Strike OUT!";
    showRestartButton();
  } else {
    gameStatus = `${strike} 스트라이크, ${ball} 볼 입니다.`;
    showStatus();
  }
};
