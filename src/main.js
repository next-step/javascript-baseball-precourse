import { pickNum, numCheck } from "./pick_answer.js";

let answer;
let isTrue;

window.onload = function () {
  answer = pickNum();
  isTrue = numCheck(answer);
  while (isTrue == false) {
    answer = pickNum();
    isTrue = numCheck(answer);
  }
  console.log(answer);
};
