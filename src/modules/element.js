function resetElement(element) {
  element.innerHTML = "";
}

export function showResult(target, result, input) {
  resetElement(target);

  const userInputDiv = document.createElement("div");
  const strikeDiv = document.createElement("div");
  const balleDiv = document.createElement("div");

  strikeDiv.textContent = "Strike : " + result.strike;
  balleDiv.textContent = "Ball : " + result.ball;
  userInputDiv.textContent = "입력값 : " + input.join("");

  target.appendChild(userInputDiv);
  target.appendChild(strikeDiv);
  target.appendChild(balleDiv);
}

export function showCorrectAnswer(target) {
  resetElement(target);

  const answerH3 = document.createElement("h3");
  const answerP = document.createElement("p");
  const startNewGameBtn = document.createElement("button");
  answerH3.textContent = "🎉정답을 맞추셨습니다🎉";
  answerP.textContent = "게임을 새로 시작하겠습니까?";
  startNewGameBtn.textContent = "게임 재시작";
  startNewGameBtn.addEventListener("click", () => {
    location.reload();
  });
  target.appendChild(answerH3);
  target.appendChild(answerP);
  target.appendChild(startNewGameBtn);
}
