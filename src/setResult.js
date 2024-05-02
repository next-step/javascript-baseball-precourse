import { disableInput } from "./controlUserInput";
import { displayRestartButton, displayResultMessage } from "./controlDisplay";

/** 숫자 야구 게임 메세지 출력을 설정하고 정답을 처리한다. 
 * @param {number[]} user
 * @param {number} strike
 * @param {number} ball
*/
export const setResult = (user, strike, ball) => {
  let message = `${user.join("")}: `;

  // 정답
  if (strike === 3) {
    message = `🎉정답을 맞추셨습니다.🎉`;
    disableInput(true);
    displayResultMessage(message, "block");
    displayRestartButton("block");
    return;
  }

  // 오답
  if (ball) {
    message += `${ball}볼 `;
  }
  if (strike && strike !== 3) {
    message += `${strike}스트라이크`;
  }
  if (!ball && !strike) {
    message += `낫싱`;
  }
  displayResultMessage(message, "block");
  return;
};
