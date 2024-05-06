import generateRandomNumber from './randNumber.js';

export default function restartGame() {
      // 게임 재시작을 위해 resultNum 제거
      clearLocalStorage();
      // 입력 및 메시지 초기화
      resetInputs();
      // 새로운 정답 생성
      return generateRandomNumber(true);
}

function clearLocalStorage() {
      localStorage.removeItem("resultNum");
}

function resetInputs() {
      document.getElementById("user-input").value = "";
      document.getElementById("error-message").textContent = "";
      document.getElementById("result-message").textContent = "";
      document.getElementById("restart-button").style.display = "none";
}