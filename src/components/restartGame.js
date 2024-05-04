/* 다시 시작하는 기능 */
export const restartGame = (restartButton) => {
  restartButton.addEventListener("click", () => {
    restartButton.style.display = "none";
    return true;
  });
};
