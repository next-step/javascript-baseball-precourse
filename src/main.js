import { computerNumber } from "./computerNumber.js";
import { userNumber } from './userNumber.js';

const userNumberInput = document.querySelector('.userNumberInput');
const userNumberBtn = document.querySelector('.userNumberBtn');

const computerNum = computerNumber();

userNumberBtn.addEventListener('click', () => {
  let userNum = userNumber(userNumberInput.value);
  if (userNum === null) {
    return;
  }
  console.log(userNum);
})
