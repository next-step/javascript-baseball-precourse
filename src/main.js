import { ANSWER_MAX_LENGTH } from "./constants/constant";
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

const handleSubmitInput = (event, answer) => {
  event.preventDefault();

  const userInput = getUserInput(userFormInput);
  const isValidateInput = checkIsValidateInput(userInput);
  if (!isValidateInput) {
    alert("중복 없이 " + ANSWER_MAX_LENGTH + "자리 숫자를 입력해주세요.");
    return;
  }
  const result = checkIsCorrect(answer, userInput);
  resetUserInput(userFormInput);

  const isCorrect = result.strike === ANSWER_MAX_LENGTH;
  if (isCorrect) showCorrectAnswer(resultBox);
  else showResult(resultBox, result, userInput);
};

function init() {
  const answer = makeAnswer();
  userForm.addEventListener("submit", (e) => handleSubmitInput(e, answer));
}
init();
