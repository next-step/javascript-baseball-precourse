// 게임 종료 버튼 활성화
export const showQuitGameButton = () => {
  const quitButtonDisplay = document.getElementById("quitButton");
  quitButtonDisplay.style.display = "block";
};

// 게임 종료 문구 표시
export const showQuitMessage = () => {
  const quitMessage = document.getElementById("app");
  quitMessage.innerHTML = "게임을 종료합니다!";
};