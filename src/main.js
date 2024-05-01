import { pickNum, numCheck } from "./pick_answer.js";
import { checkInput } from "./check_input.js";

let answer;
let isTrue;

window.onload = function () {
  let num = document.getElementById("input");

  answer = pickNum();
  isTrue = numCheck(answer);
  while (isTrue == false) {
    answer = pickNum();
    isTrue = numCheck(answer);
  }
  console.log(answer);
  num.oninput = (e) => {
    let lastNum = num.value.charAt(num.value.length - 1);
    console.log(num.value.length);
    console.log(num.value);
    if ((4 > num.value.length) & (num.value.length > 1)) {
      num.value = checkInput(num.value, lastNum);
    } else if (num.value.length > 3) {
      alert("3자리 숫자만 입력해주세요.");
      num.value = num.value.slice(0, -1);
    }
  };
};
