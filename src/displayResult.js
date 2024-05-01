import { result } from './checkAnswer.js';

// 결과를 화면에 표시하는 함수
export const displayResult = () => {
  const display = document.getElementById("resultDisplay");
  display.textContent = result;
};