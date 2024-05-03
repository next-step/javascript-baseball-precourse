import Computer from './computer.js';

let com = new Computer();

const submitEl = document.querySelector('#user-submit');
const inputEl = document.querySelector('#user-input');

const resultEl = document.querySelector('#result');
const restartArea = document.querySelector('#restart-area');
const restartButton = document.querySelector('#restart');

submitEl.addEventListener('click', onSubmitClick);
inputEl.addEventListener('input', onInputChange);

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
    return
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

let lastInput = '';
/**
 *
 * @param {InputEvent<HTMLInputElement>} e
 */
function onInputChange(e) {
  const target = e.target;
  const value = target.value;

  // 현재 입력된 값에서 이전의 값을 ''로 대체. 사용자가 이제 막 입력한 값이 저장될 것.
  const exceptLast = value.replace(lastInput, '');
  if(! isNumericString(exceptLast) && exceptLast.length !== 0) {
    alert('숫자만 입력 가능합니다.');
    target.value = lastInput;
    return;
  }
  if(lastInput.indexOf(exceptLast) !== -1
    && lastInput.length < value.length) {
    alert('중복된 값은 입력할 수 없습니다.');
    target.value = lastInput;
    return;
  }
  if(value.length > 3) {
    target.value = lastInput;
    return;
  }
  lastInput = value;
}
function isNumericString(str) {
  return /^\d+$/.test(str);
}
