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