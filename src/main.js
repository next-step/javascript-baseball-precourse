import { createRandomNumbers } from "./createRandomNumbers";
import { validateUserNumbers } from "./validateUserNumbers";

let randomNumbers = createRandomNumbers();
let userNumbers;

const inputEl = document.querySelector("#number-input");
const submitEl = document.querySelector("#number-submit");

inputEl.addEventListener("input", (event) => {
  userNumbers = event.target.value;
});

submitEl.addEventListener("click", () => {
  console.log("randomNumbers =", randomNumbers);
  console.log("userNumbers =", userNumbers);
  console.log(validateUserNumbers(userNumbers));
  if (!validateUserNumbers(userNumbers)) {
    alert(
      "잘못된 입력값입니다. 1에서 9까지의 중복되지 않는 세 자리 수를 입력하세요."
    );
    inputEl.focus();
  }
});
