/** 게임 결과를 화면에 출력한다. */
export const displayResultMessage = (message) => {
  const result = document.getElementById("result");
  const resultMessage = document.getElementById("result__message");
  result.style.display = "block";
  resultMessage.textContent = message;
};
