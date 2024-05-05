import { random } from "./createRandomNum.js";

// 볼 or 스트라이크 판별
const correct = document.querySelector('.result-correct');

export const ballOrStrike = (inputNum) => {
  var res ='';
  var strike = 0;
  var ball = 0;
  inputNum.split('').forEach((num, index) => {
  if (random.indexOf(num) === index)
    strike++;
  else if (random.includes(num))
    ball++;
  })
  res = createResult(ball, strike)
  console.log(document.querySelector('.result-hint').textContent = res);
  if (strike === 3) {
    correct.classList.add('block');
  } else {
    correct.classList.remove('block');
  }
}

// 숫자 입력 결과 확인
function createResult(ball, strike) {
  var resultText = '';
  if (strike === 0 && ball >0)
    resultText = `${ball}볼`
  else if (strike > 0 && ball === 0)
    resultText = `${strike}스트라이크`
  else if (ball > 0 || strike > 0)
    resultText = `${ball}볼 ${strike}스트라이크`
  else 
    resultText = '낫싱';
  return resultText
}
  