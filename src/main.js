import { generateNumbers } from "./generateNumber.js"; 
import { checkInput } from "./checkInput.js";
import { calculateScore } from "./calculateScore.js";
import { displayScore } from "./displayScore.js";
import { displayLogText } from "./displayLogText.js";

//DOM 요소
export const $input = document.querySelector('#input');
export const $logs = document.querySelector('#logs');
const $form = document.querySelector('#form');
const $restartButton = document.querySelector('#restartButton');
const $restart = document.querySelector('#restart');
const $confirmButton = document.querySelector('#confirmButton');

//정답 생성 및 시도값 저장변수 선언
export let answer = generateNumbers(); 
export let tries = []; 

// 정답 입력 처리 함수
function handleSubmit(event) {
  event.preventDefault();
  const value = $input.value;
  const valid = checkInput(value);
  
  if (!valid) return; //잘못된 값 입력 시 

  if (answer.join('')===value){ //정답 입력 시
    displayLogText('🎉정답을 맞추셨습니다!🎉');
    document.getElementById('restart').style.display='block';
    $input.disabled=true;
    $confirmButton.disabled=true;
    return;
  }
  const score = calculateScore(value); //유효한 시도시
  displayScore(value, score);
  tries.push(value); 
}