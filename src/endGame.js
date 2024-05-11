// 게임 종료 버튼을 표시하는 함수
export function showEndGameButton() {
    const endDisplay = document.getElementById("endButton");
    endDisplay.style.display = "block";
  }
  
// 게임 종료 메시지를 표시하는 함수
export function endGame() {
    const app = document.getElementById("app");
    const endMessage = document.createElement("h1");
    endMessage.textContent = "게임이 종료되었습니다. 감사합니다!";
    app.innerHTML = ""; // 기존 내용 초기화
    app.appendChild(endMessage);
    document.getElementById("replayButton").style.display = "block"; // 재시작 버튼 표시
  }