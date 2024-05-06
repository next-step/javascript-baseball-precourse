import { gameResult } from "./gameResult";
import { checkError } from "./checkError";
import { randomNum } from "./\brandomNum";


document.addEventListener('DOMContentLoaded', () => {
    const userInput = document.querySelector('#userInput');
    const confirmButton = document.querySelector('#confirmButton');
    const restartButton = document.querySelector('#restartButton');

    restartButton.addEventListener('click', () => window.location.reload());
  
    let answer = randomNum(); 
    
    confirmButton.addEventListener('click', () => {
      // 입력값에 대한 에러 체크
      const error = checkError(userInput.value);
      if (error) {
        alert(error); 
        return;
      }
  
      // 게임 결과 확인
      const result = gameResult(userInput.value.split(''), answer);
      alert(result.message); 
  
      // 정답을 맞췄을 경우, 게임 재시작 버튼을 화면에 추가
      if (result.isCorrect) {
        restartButton.style.display = 'block';
      }
    });
  });

