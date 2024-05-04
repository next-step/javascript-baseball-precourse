import { ANSWER_MAX_LENGTH } from "../constants/constant";
import { checkIsDuplicate } from "./util";

export function checkIsValidateInput(input) {
  const isValidLength = input.length === ANSWER_MAX_LENGTH;
  const isNotDuplicate = !checkIsDuplicate(input);
  const isAllNumbers = input.every((num) => !isNaN(num));

  const isValidate = isValidLength && isNotDuplicate && isAllNumbers;
  return isValidate;
}

export function resetUserInput(userFormInput) {
  userFormInput.value = "";
}

export function getUserInput(userFormInput) {
  const inputArr = userFormInput.value.split("");
  return inputArr.map((num) => parseInt(num));
}
