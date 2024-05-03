import { answer } from "./randomGenerator.js";
import { userInput } from "./handleUserInput.js";
import { displayResult } from "./displayResult.js";
import { showRestartGameButton, showRestartMessage } from "./restartGame.js";
import { showQuitGameButton } from "./quitGame.js";

export let result = '';

// 사용자의 입력이 유효한지 판단
export const checkUserInput = () => {
  let strikeCount = 0;
  let ballCount = 0;

  for (let i = 0; i < 3; i += 1){
    if (answer[i] === Number(userInput[i])){
      strikeCount += 1;
    }else if (answer.includes(Number(userInput[i]))){
      ballCount += 1;
    }
  }

  if (strikeCount === 3){
    result = "🎉정답을 맞추셨습니다!🎉"
    displayResult();
    showRestartMessage();
    showRestartGameButton();
    showQuitGameButton();
  }

  else if (strikeCount > 0 || ballCount > 0){
    result = `${strikeCount} 스트라이크, ${ballCount} 볼`;
    displayResult();
  }
  
  else{
    result = "낫싱";
    displayResult();
  }
};