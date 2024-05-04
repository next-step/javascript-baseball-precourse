import { ANSWER_MAX_LENGTH } from "../constants/constant.js";
import { checkIsDuplicate, getRandomNumber } from "./util.js";

export function makeAnswer() {
  const answer = [];
  while (answer.length < ANSWER_MAX_LENGTH) {
    const newNumber = getRandomNumber();
    const isDuplicate = checkIsDuplicate([...answer, newNumber]);
    if (!isDuplicate) answer.push(newNumber);
  }
  return answer;
}
