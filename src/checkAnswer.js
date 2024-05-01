import { answer } from './generateAnswer.js';
import { userInput } from './handleInput.js';
import { displayResult } from './displayResult.js';
import { showRestartMessage, showRestartButton } from './restart.js';

export let result = '';

// 사용자의 입력과 컴퓨터의 답을 비교하는 함수
export const checkAnswer = () => {
  let strike = 0;
  let ball = 0;
  for (let i = 0; i < 3; i += 1) {
    if (answer[i] === Number(userInput[i])) {
      strike += 1;
    } else if (answer.includes(Number(userInput[i]))) {
      ball += 1;
    }
  }
  if (strike === 3) {
    result = "🎉정답을 맞추셨습니다🎉";
    displayResult();
    showRestartMessage();
    showRestartButton();
  } else if (strike > 0 || ball > 0) {
    result = `${strike} 스트라이크, ${ball} 볼`;
    displayResult();
  } else {
    result = "낫싱";
    displayResult();
  }
};