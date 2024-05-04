import { appendChildren, createElementWithText } from "../utils/ui";

// export modules

export function resetElement(element) {
  element.innerHTML = "";
}

export function clearInput(input) {
  input.value = "";
}

export function getInputValue(userFormInput) {
  const inputArr = userFormInput.value.split("");
  return inputArr.map((num) => parseInt(num));
}

// UI

export function showResultUi({ target, result, input }) {
  resetElement(target);

  const userInputDiv = createElementWithText(
    "div",
    "입력값 : " + input.join("")
  );
  const strikeDiv = createElementWithText("div", "Strike : " + result.strike);
  const balleDiv = createElementWithText("div", "Ball : " + result.ball);

  appendChildren({
    parent: target,
    childrens: [userInputDiv, strikeDiv, balleDiv],
  });
}

export function showCorrectAnswerUi({ target }) {
  resetElement(target);

  const answerH3 = createElementWithText("h3", "🎉정답을 맞추셨습니다🎉");
  const answerP = createElementWithText("p", "게임을 새로 시작하겠습니까?");
  const startNewGameBtn = createElementWithText("button", "게임 재시작");

  startNewGameBtn.addEventListener("click", () => {
    location.reload();
  });

  appendChildren({
    parent: target,
    childrens: [answerH3, answerP, startNewGameBtn],
  });
}
