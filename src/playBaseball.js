import { displayRestart } from "./displayRestart";
import { displayResult } from "./displayResult";

export const playBaseball = (computer, user) => {
  let strike = 0,
    ball = 0;
  user.forEach((curNum, index) => {
    if (curNum === computer[index]) {
      strike += 1;
    } else if (computer.includes(curNum)) {
      ball += 1;
    }
  });

  let message = `${user.join("")}: `;
  if (strike === 3) {
    message = `🎉정답을 맞추셨습니다.🎉`;
    displayResult(message);
    displayRestart();
    return;
  }

  if (ball) {
    message += `${ball}볼 `;
  }
  if (strike && strike !== 3) {
    message += `${strike}스트라이크`;
  }
  if (!ball && !strike) {
    message += `낫싱`;
  }
  displayResult(message);
};
