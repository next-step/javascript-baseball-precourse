export function showResult(target, result, input) {
  target.innerHTML = "";

  const userInputDiv = document.createElement("div");
  const strikeDiv = document.createElement("div");
  const balleDiv = document.createElement("div");

  strikeDiv.textContent = "Strike : " + result.strike;
  balleDiv.textContent = "Ball : " + result.strike;
  userInputDiv.textContent = "입력값 : " + input.join("");

  target.appendChild(userInputDiv);
  target.appendChild(strikeDiv);
  target.appendChild(balleDiv);
}
