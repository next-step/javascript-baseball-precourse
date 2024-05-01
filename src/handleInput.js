import { checkAnswer } from './checkAnswer.js';

export let userInput = "";

// 사용자의 입력을 처리하는 함수
export const handleInput = (event) => {
  event.preventDefault();
  const input = document.getElementById("userInput");
  userInput = input.value;
  const uniqueDigits = new Set(userInput.split(""));
  if (uniqueDigits.size !== 3) {
    alert("중복된 숫자를 입력하셨습니다. 다시 입력해주세요.");
    input.value = "";
    return;
  }
  checkAnswer();
};