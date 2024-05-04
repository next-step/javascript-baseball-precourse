/* 결과를 출력하는 기능 */
export const printResult = (data) => {
  const resultDiv = document.getElementById("result");

  let resultMessage = "";
  if (data.ball !== 0 || data.strike !== 0) {
    if (data.strike === 3) {
      resultMessage = "3스트라이크";
    } else if (data.ball === 0) {
      resultMessage = `${data.strike}스트라이크`;
    } else if (data.strike === 0) {
      resultMessage = `${data.ball}볼`;
    } else {
      resultMessage = `${data.ball}볼 ${data.strike}스트라이크`;
    }
  } else {
    resultMessage = "낫싱";
  }

  resultDiv.textContent = resultMessage;

  if (data.strike === 3) {
    const correctMessageDiv = document.getElementById("correct-message");
    correctMessageDiv.style.display = "block";
    const restartButton = document.getElementById("game-restart-button");
    restartButton.style.display = "block";
    return true;
  }
  correctMessageDiv.style.display = "none";
  return false;
};
