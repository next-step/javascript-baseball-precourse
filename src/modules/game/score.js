import { ANSWER_MAX_LENGTH } from "../../constants/constant";
import { checkIsDuplicate } from "../utils/util";

export function calculateScore(answer, input) {
  const result = {
    strike: 0,
    ball: 0,
  };
  answer.forEach((num, index) => {
    if (!input.includes(num)) return;
    if (num === input[index]) result.strike++;
    else result.ball++;
  });
  return result;
}

export function checkIsValidateInput(userFormInput) {
  const isValidLength = userFormInput.length === ANSWER_MAX_LENGTH;
  const isNotDuplicate = !checkIsDuplicate(userFormInput);
  const isAllNumbers = userFormInput.every((num) => !isNaN(num));

  const isValidate = isValidLength && isNotDuplicate && isAllNumbers;
  return isValidate;
}
