import { computerNumber } from "./computerNumber.js";
import { userNumber } from './userNumber.js';
import { compareNumber } from './compareNumber.js';
import { result } from './result.js';

const userNumberInput = document.querySelector('.userNumberInput');
const userNumberBtn = document.querySelector('.userNumberBtn');
const footer = document.querySelector('footer');
const resultFirstBtn = document.querySelector('.result__first button');

const computerNum = computerNumber();

userNumberBtn.addEventListener('click', () => {
  let userNum = userNumber(userNumberInput.value);
  if (userNum === null) {
    footer.querySelector('.result__second p').textContent= ''
    userNumberInput.value = ''
    return;
  }
  let { strike, ball } = compareNumber(userNum, computerNum);
  result(strike[0],ball[0],footer);
  userNumberInput.value = ''
});

resultFirstBtn.addEventListener('click', () => {
  window.location.reload();
});