import { generateAnswer } from './generateAnswer.js';

// 재시작 메시지를 표시하는 함수
export const showRestartMessage = () => {
  const restartDisplay = document.getElementById("restartDisplay");
  restartDisplay.style.display = "block";
};

// 재시작 버튼을 표시하는 함수
export const showRestartButton = () => {
  const button = document.getElementById("restartButton");
  button.style.display = "block";
};

// 재시작 버튼을 눌렀을 때의 처리
export const restartGame = () => {
  generateAnswer();
  document.getElementById("userInput").value = "";
  document.getElementById("resultDisplay").textContent = "";
  document.getElementById("restartButton").style.display = "none";
  document.getElementById("restartDisplay").style.display = "none";
  document.getElementById("endButton").style.display = "none";
};