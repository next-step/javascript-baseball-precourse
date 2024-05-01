export const displayResult = (message) => {
  const result = document.getElementById("result");
  const resultMessage = document.getElementById("result__message");
  result.style.display = "block";
  resultMessage.textContent = message;
};
