import { randomNumberGenerate } from "./randomGenerator.js";

// 게임 재시작 버튼 활성화 함수
export const showRestartGameButton = () => {
  const restartButtonDisplay = document.getElementById("restartButton");
  restartButtonDisplay.style.display = "block";
};

// 게임 재시작 문구 표시 함수
export const showRestartMessage = () => {
  const message = document.getElementById("restartMessage");
  message.style.display = "block";
};

// 게임 재시작 함수
export const restartGame = () => {
  randomNumberGenerate();
  document.getElementById("inputBox") = "";
  document.getElementById("resultMessage").textContent = "";
  document.getElementById("restartMessage").style.display = "none";
  document.getElementById("restartButton").style.display = "none";
  document.getElementById("quitButton").style.display = "none";
};