import { disableInput } from "./disableInput";
import { displayRestart } from "./displayRestart";
import { displayResultMessage } from "./displayResultMessage";

export const setResult = (user, strike, ball) => {
  let message = `${user.join("")}: `;

  if (strike === 3) {
    message = `🎉정답을 맞추셨습니다.🎉`;
    disableInput(true);
    displayResultMessage(message);
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
  displayResultMessage(message);
  return;
};
