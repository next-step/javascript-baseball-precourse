// 게임 종료 버튼을 표시하는 함수
export const showEndGameButton = () => {
  const endDisplay = document.getElementById("endButton");
  endDisplay.style.display = "block";
};

// 게임 종료 메시지를 표시하는 함수
export const endGame = () => {
  const app = document.getElementById("app");
  app.innerHTML = "<h1>게임이 종료되었습니다. 감사합니다!</h1>";
};