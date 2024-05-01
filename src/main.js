import { makeAnswer } from "./utils/answer";
import { showCorrectAnswer, showResult } from "./utils/element";
import { checkIsCorrect } from "./utils/score";
import {
  checkIsValidateInput,
  getUserInput,
  resetUserInput,
} from "./utils/userInput";

const userForm = document.querySelector("#user-form");
const userFormInput = userForm.querySelector("input");
const resultBox = document.querySelector("#result-Box");

function init() {
  const answer = makeAnswer();
  console.log(answer);

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = getUserInput(userFormInput);
    const isValidateInput = checkIsValidateInput(userInput);
    if (!isValidateInput) {
      alert("중복 없이 3자리 숫자를 입력해주세요.");
      return;
    }
    const result = checkIsCorrect(answer, userInput);
    resetUserInput(userFormInput);
    if (result.strike === 3) showCorrectAnswer(resultBox);
    else showResult(resultBox, result, userInput);
  });
}
init();
