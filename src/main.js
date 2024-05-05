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
});
