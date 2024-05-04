import { ANSWER_MAX_LENGTH } from "./constants/constant";
import { makeAnswer } from "./modules/game/answer";
import getdomElements from "./modules/document/domElements";
import {
  showCorrectAnswerUi,
  showResultUi,
  clearInput,
  getInputValue,
} from "./modules/document/element";
import { calculateScore, checkIsValidateInput } from "./modules/game/score";

const { userForm, userFormInput, resultBox } = getdomElements();

const handleSubmitInput = (event, answer) => {
  event.preventDefault();

  const userInput = getInputValue(userFormInput);
  const isValidateInput = checkIsValidateInput(userInput);
  if (!isValidateInput) {
    alert("중복 없이 " + ANSWER_MAX_LENGTH + "자리 숫자를 입력해주세요.");
    return;
  }

  const score = calculateScore(answer, userInput);
  const isCorrect = score.strike === ANSWER_MAX_LENGTH;
  if (isCorrect) showCorrectAnswerUi({ target: resultBox });
  else
    showResultUi({
      target: resultBox,
      score,
      input: userInput,
    });

  clearInput(userFormInput);
};

function main() {
  const answer = makeAnswer();
  userForm.addEventListener("submit", (e) => handleSubmitInput(e, answer));
}
main();
