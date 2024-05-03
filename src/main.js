import Computer from './computer.js';

let com = new Computer();

let submitEl = document.querySelector('#user-submit');
let inputEl = document.querySelector('#user-input');

let resultEl = document.querySelector('#result');

submitEl.addEventListener('click', onSubmitClick);

/**
 *
 * @param {string} userInput
 * @return {int[]}
 */
function getStrikeBallCount(userInput) {
  const inputArray = [...userInput];
  let strikes = 0;
  let balls = 0;
  inputArray.forEach((value, index, _) => {
    value = parseInt(value)
    if(! com.existsInAnswer(value)) return;

    strikes += com.isStrike(value, index) ? 1 : 0;
    balls += com.isStrike(value, index) ? 0 : 1;
  });

  return [strikes, balls];
}
function onSubmitClick() {
  const userInput = inputEl.value;
  const strikeBall = getStrikeBallCount(userInput);

  const [strikes, balls] = strikeBall;
  if(strikes === 0 && balls === 0) {
    // strike, ball이 모두 0개
    resultEl.textContent = '낫싱';
    return;
  }
  if(strikes === 3) {
    resultEl.textContent = '🎉정답을 맞추셨습니다🎉';
    // 게임 종료 후 동적 element 추가
  }
  if(strikes === 0) {
    resultEl.textContent = `${balls}볼`;
    return;
  }
  if(balls === 0){
    resultEl.textContent = `${strikes}스트라이크`;
    return;
  }
  resultEl.textContent = `${balls}볼 ${strikes}스트라이크`
}

/**
 *
 * @param {Event<HTMLInputElement>} e
 */
function onInputChange(e) {
  const target = e.target;
  const value = target.value;
  const lastInput = value.charAt(-1);
  const exceptLast = value.slice(0, -1);
  if(! isNumericString(lastInput)) {
    alert('숫자만 입력 가능합니다.')
    e.preventDefault();
    return;
  }
  if(exceptLast.indexOf(lastInput) !== -1) {
    alert('중복된 숫자는 입력이 불가능합니다.');
    e.preventDefault();
  }
}
function isNumericString(str) {
  return /^\d+$/.test(str);
}
