/* 다시 시작하는 기능 */
export const restartGame = () => {
  document.getElementById("correct-message").style.display = "none";
  document.getElementById("game-restart-button").style.display = "none";
  document.getElementById("game-finish-button").style.display = "none";
  document.getElementById("result").textContent = "";
};
