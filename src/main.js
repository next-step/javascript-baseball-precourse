import { getRandomNumbers } from './random';
import { checkIsValidate } from './game.js';

const input = document.querySelector('.input input');
const inputButton = document.querySelector('.input button');

let gameOver = false;
let randNumbers = getRandomNumbers();

inputButton.addEventListener('click', () => {
  // 게임 종료 시, 버튼 무효화
  if (gameOver) return;

  // 사용자 입력 받아오기
  const userInput = input.value;
  const userNumbers = userInput.split('').map(Number);
  const isValidate = checkIsValidate(userNumbers);

  if (!isValidate) {
    alert('올바른 형식으로 입력해주세요.');
    return;
  }
});