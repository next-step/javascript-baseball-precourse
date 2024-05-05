import { computerNumber } from "./computerNumber.js";
import { userNumber } from './userNumber.js';
import { compareNumber } from './compareNumber.js';

const userNumberInput = document.querySelector('.userNumberInput');
const userNumberBtn = document.querySelector('.userNumberBtn');

const computerNum = computerNumber();
console.log(computerNum);

userNumberBtn.addEventListener('click', () => {
  let userNum = userNumber(userNumberInput.value);
  if (userNum === null) {
    return;
  }
  let {strike,ball} = compareNumber(userNum, computerNum);
  console.log(strike[0],ball[0]);
})

