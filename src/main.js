import { checkIsValidate, compareNumbers } from './game.js';
import { printHint, printResult } from './print.js';

const input = document.querySelector('.input input');
const inputButton = document.querySelector('.input button');
const result = document.querySelector('.result');
const restart = document.querySelector('.restart');

let gameOver = false;
let randNumbers = getRandomNumbers();

inputButton.addEventListener('click', () => {
  // 게임 종료 시, 버튼 무효화
  if (gameOver) return;

  // 사용자 입력 받아오고, 유효성 검사
  const userInput = input.value;
  const userNumbers = userInput.split('').map(Number);
  const isValidate = checkIsValidate(userNumbers);

  if (!isValidate) {
    alert('올바른 형식으로 입력해주세요.');
    return;
  }

  // 입력과 난수 비교
  const { strikes, balls } = compareNumbers(userNumbers, randNumbers);

  // 결과 출력
  if (strikes === 3) {
    printResult(restart);
    gameOver = true;
  } else {
    result.innerHTML = printHint(strikes, balls);
  }
});